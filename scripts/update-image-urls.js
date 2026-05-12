#!/usr/bin/env node
/**
 * 更新图片URL脚本
 * 扫描本地图片目录，自动更新 flower-data.js 中的 imageUrl
 * 
 * 使用方法：
 * node scripts/update-image-urls.js
 */

const fs = require('fs');
const path = require('path');

const FLOWER_DATA_PATH = path.join(__dirname, '../js/flower-data.js');
const FLOWER_IMAGES_DIR = path.join(__dirname, '../images/flower-images');
const PLANT_IMAGES_DIR = path.join(__dirname, '../images/plant-images');

// 花卉名称映射（中文 -> 英文目录名）
const FLOWER_NAME_MAP = {
    '玫瑰': 'rose',
    '康乃馨': 'carnation',
    '百合': 'lily',
    '向日葵': 'sunflower',
    '郁金香': 'tulip',
    '茉莉': 'jasmine',
    '牡丹': 'peony',
    '菊花': 'chrysanthemum',
    '梅花': 'plum-blossom',
    '兰花': 'orchid',
    '薰衣草': 'lavender',
    '满天星': 'babys-breath',
    '勿忘我': 'forget-me-not',
    '风信子': 'hyacinth',
    '水仙': 'narcissus',
    '海棠': 'begonia',
    '桃花': 'peach-blossom',
    '樱花': 'cherry-blossom',
    '荷花': 'lotus',
    '紫罗兰': 'violet',
    '蝴蝶兰': 'phalaenopsis'
};

// 植物名称映射
const PLANT_NAME_MAP = {
    '艾草': 'mugwort',
    '菖蒲': 'calamus',
    '茱萸': 'cornel',
    '桂花': 'osmanthus'
};

// 查找本地图片
function findLocalImage(flowerName, isPlant = false) {
    const nameMap = isPlant ? PLANT_NAME_MAP : FLOWER_NAME_MAP;
    const baseDir = isPlant ? PLANT_IMAGES_DIR : FLOWER_IMAGES_DIR;
    const dirName = nameMap[flowerName];
    
    if (!dirName) {
        return null;
    }
    
    const imageDir = path.join(baseDir, dirName);
    if (!fs.existsSync(imageDir)) {
        return null;
    }
    
    // 查找第一个图片文件
    const files = fs.readdirSync(imageDir)
        .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
        .sort();
    
    if (files.length === 0) {
        return null;
    }
    
    const relativePath = isPlant 
        ? `images/plant-images/${dirName}/${files[0]}`
        : `images/flower-images/${dirName}/${files[0]}`;
    
    return relativePath;
}

// 更新 flower-data.js
function updateFlowerDataFile() {
    let content = fs.readFileSync(FLOWER_DATA_PATH, 'utf8');
    let updated = false;
    
    // 更新花卉图片URL
    for (const [chineseName, dirName] of Object.entries(FLOWER_NAME_MAP)) {
        const localImage = findLocalImage(chineseName, false);
        if (localImage) {
            // 查找并替换 imageUrl
            const pattern = new RegExp(
                `(name: '${chineseName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}',[\\s\\S]*?imageUrl: ')[^']+(')`,
                'g'
            );
            const newContent = content.replace(pattern, `$1${localImage}$2`);
            if (newContent !== content) {
                content = newContent;
                updated = true;
                console.log(`✓ 更新 ${chineseName}: ${localImage}`);
            }
        }
    }
    
    // 更新植物图片URL
    for (const [chineseName, dirName] of Object.entries(PLANT_NAME_MAP)) {
        const localImage = findLocalImage(chineseName, true);
        if (localImage) {
            // 在 plantData 中查找并替换
            const pattern = new RegExp(
                `('${chineseName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}':\\s*\\{[\\s\\S]*?imageUrl:\\s*')[^']+(')`,
                'g'
            );
            const newContent = content.replace(pattern, `$1${localImage}$2`);
            if (newContent !== content) {
                content = newContent;
                updated = true;
                console.log(`✓ 更新 ${chineseName}: ${localImage}`);
            }
        }
    }
    
    if (updated) {
        fs.writeFileSync(FLOWER_DATA_PATH, content, 'utf8');
        console.log('\n✓ flower-data.js 已更新！');
    } else {
        console.log('\n- 没有找到本地图片，无需更新');
    }
}

// 主函数
function main() {
    console.log('扫描本地图片并更新 flower-data.js...\n');
    
    if (!fs.existsSync(FLOWER_IMAGES_DIR) && !fs.existsSync(PLANT_IMAGES_DIR)) {
        console.log('⚠ 图片目录不存在，请先下载图片');
        console.log('运行: node scripts/download-images.js');
        return;
    }
    
    updateFlowerDataFile();
}

if (require.main === module) {
    main();
}

module.exports = { findLocalImage, updateFlowerDataFile };
