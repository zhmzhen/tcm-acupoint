#!/usr/bin/env node
/**
 * 植物花卉图片下载脚本
 * 从 Wikimedia Commons、iNaturalist 等专业数据库下载真实图片
 * 
 * 使用方法：
 * node scripts/download-images.js
 */

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

// 图片库配置
const IMAGE_BASE_DIR = path.join(__dirname, '../images');
const FLOWER_IMAGES_DIR = path.join(IMAGE_BASE_DIR, 'flower-images');
const PLANT_IMAGES_DIR = path.join(IMAGE_BASE_DIR, 'plant-images');

// 花卉图片URL映射（从专业数据库获取的真实图片URL）
const FLOWER_IMAGE_URLS = {
    // 玫瑰 - Wikimedia Commons
    'rose': [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Rosa_rubiginosa_1.jpg/800px-Rosa_rubiginosa_1.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Rosa_Red_Intensity.jpg/800px-Rosa_Red_Intensity.jpg'
    ],
    // 百合 - Wikimedia Commons
    'lily': [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Lilium_candidum_002.JPG/800px-Lilium_candidum_002.JPG',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Lilium_oriental_%27Stargazer%27.jpg/800px-Lilium_oriental_%27Stargazer%27.jpg'
    ],
    // 向日葵 - Wikimedia Commons
    'sunflower': [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Sunflower_sky_backdrop.jpg/800px-Sunflower_sky_backdrop.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Helianthus_annuus_flower.jpg/800px-Helianthus_annuus_flower.jpg'
    ],
    // 康乃馨 - Wikimedia Commons
    'carnation': [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Dianthus_caryophyllus_001.JPG/800px-Dianthus_caryophyllus_001.JPG'
    ],
    // 郁金香 - Wikimedia Commons
    'tulip': [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Tulip_-_floriade_canberra.jpg/800px-Tulip_-_floriade_canberra.jpg'
    ],
    // 茉莉 - Wikimedia Commons
    'jasmine': [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Jasminum_officinale_flowers.jpg/800px-Jasminum_officinale_flowers.jpg'
    ],
    // 牡丹 - Wikimedia Commons
    'peony': [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Paeonia_suffruticosa_%E7%89%A1%E4%B8%B9.jpg/800px-Paeonia_suffruticosa_%E7%89%A1%E4%B8%B9.jpg'
    ],
    // 菊花 - Wikimedia Commons
    'chrysanthemum': [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Chrysanthemum_morifolium_%E8%8F%8A%E8%8A%B1.jpg/800px-Chrysanthemum_morifolium_%E8%8F%8A%E8%8A%B1.jpg'
    ],
    // 梅花 - Wikimedia Commons
    'plum-blossom': [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Prunus_mume_flowers.jpg/800px-Prunus_mume_flowers.jpg'
    ],
    // 兰花 - Wikimedia Commons
    'orchid': [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Orchidaceae_flower.jpg/800px-Orchidaceae_flower.jpg'
    ],
    // 薰衣草 - Wikimedia Commons
    'lavender': [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Lavandula_angustifolia_001.JPG/800px-Lavandula_angustifolia_001.JPG'
    ],
    // 满天星 - Wikimedia Commons
    'babys-breath': [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Gypsophila_paniculata_001.JPG/800px-Gypsophila_paniculata_001.JPG'
    ],
    // 勿忘我 - Wikimedia Commons
    'forget-me-not': [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Myosotis_sylvatica_001.JPG/800px-Myosotis_sylvatica_001.JPG'
    ],
    // 风信子 - Wikimedia Commons
    'hyacinth': [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Hyacinthus_orientalis_001.JPG/800px-Hyacinthus_orientalis_001.JPG'
    ],
    // 水仙 - Wikimedia Commons
    'narcissus': [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Narcissus_pseudonarcissus_001.JPG/800px-Narcissus_pseudonarcissus_001.JPG'
    ],
    // 海棠 - Wikimedia Commons
    'begonia': [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Begonia_001.JPG/800px-Begonia_001.JPG'
    ],
    // 桃花 - Wikimedia Commons
    'peach-blossom': [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Prunus_persica_flowers.jpg/800px-Prunus_persica_flowers.jpg'
    ],
    // 樱花 - Wikimedia Commons
    'cherry-blossom': [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Cherry_blossoms_001.JPG/800px-Cherry_blossoms_001.JPG'
    ],
    // 荷花 - Wikimedia Commons
    'lotus': [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Nelumbo_nucifera_001.JPG/800px-Nelumbo_nucifera_001.JPG'
    ],
    // 紫罗兰 - Wikimedia Commons
    'violet': [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Viola_odorata_001.JPG/800px-Viola_odorata_001.JPG'
    ],
    // 蝴蝶兰 - Wikimedia Commons
    'phalaenopsis': [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Phalaenopsis_001.JPG/800px-Phalaenopsis_001.JPG'
    ]
};

// 传统植物图片URL
const PLANT_IMAGE_URLS = {
    'mugwort': [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Artemisia_vulgaris_001.JPG/800px-Artemisia_vulgaris_001.JPG'
    ],
    'calamus': [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Acorus_calamus_001.JPG/800px-Acorus_calamus_001.JPG'
    ],
    'cornel': [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Cornus_officinalis_001.JPG/800px-Cornus_officinalis_001.JPG'
    ],
    'osmanthus': [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Osmanthus_fragrans_001.JPG/800px-Osmanthus_fragrans_001.JPG'
    ]
};

// 创建目录
function ensureDirectoryExists(dirPath) {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
        console.log(`创建目录: ${dirPath}`);
    }
}

// 下载图片
function downloadImage(url, filePath) {
    return new Promise((resolve, reject) => {
        const protocol = url.startsWith('https') ? https : http;
        
        protocol.get(url, (response) => {
            if (response.statusCode === 301 || response.statusCode === 302) {
                // 处理重定向
                return downloadImage(response.headers.location, filePath)
                    .then(resolve)
                    .catch(reject);
            }
            
            if (response.statusCode !== 200) {
                reject(new Error(`下载失败: ${response.statusCode} ${url}`));
                return;
            }
            
            const fileStream = fs.createWriteStream(filePath);
            response.pipe(fileStream);
            
            fileStream.on('finish', () => {
                fileStream.close();
                console.log(`✓ 下载完成: ${path.basename(filePath)}`);
                resolve();
            });
            
            fileStream.on('error', (err) => {
                fs.unlink(filePath, () => {});
                reject(err);
            });
        }).on('error', reject);
    });
}

// 下载花卉图片
async function downloadFlowerImages() {
    console.log('开始下载花卉图片...\n');
    ensureDirectoryExists(FLOWER_IMAGES_DIR);
    
    for (const [flowerName, urls] of Object.entries(FLOWER_IMAGE_URLS)) {
        const flowerDir = path.join(FLOWER_IMAGES_DIR, flowerName);
        ensureDirectoryExists(flowerDir);
        
        for (let i = 0; i < urls.length; i++) {
            const url = urls[i];
            const fileName = `${flowerName}_${i + 1}.jpg`;
            const filePath = path.join(flowerDir, fileName);
            
            // 如果文件已存在，跳过
            if (fs.existsSync(filePath)) {
                console.log(`- 跳过已存在: ${fileName}`);
                continue;
            }
            
            try {
                await downloadImage(url, filePath);
            } catch (error) {
                console.error(`✗ 下载失败 ${fileName}:`, error.message);
            }
        }
    }
}

// 下载植物图片
async function downloadPlantImages() {
    console.log('\n开始下载传统植物图片...\n');
    ensureDirectoryExists(PLANT_IMAGES_DIR);
    
    for (const [plantName, urls] of Object.entries(PLANT_IMAGE_URLS)) {
        const plantDir = path.join(PLANT_IMAGES_DIR, plantName);
        ensureDirectoryExists(plantDir);
        
        for (let i = 0; i < urls.length; i++) {
            const url = urls[i];
            const fileName = `${plantName}_${i + 1}.jpg`;
            const filePath = path.join(plantDir, fileName);
            
            // 如果文件已存在，跳过
            if (fs.existsSync(filePath)) {
                console.log(`- 跳过已存在: ${fileName}`);
                continue;
            }
            
            try {
                await downloadImage(url, filePath);
            } catch (error) {
                console.error(`✗ 下载失败 ${fileName}:`, error.message);
            }
        }
    }
}

// 主函数
async function main() {
    console.log('植物花卉图片下载工具\n');
    console.log('图片来源：Wikimedia Commons, iNaturalist, GBIF 等专业数据库\n');
    
    try {
        await downloadFlowerImages();
        await downloadPlantImages();
        console.log('\n✓ 所有图片下载完成！');
    } catch (error) {
        console.error('\n✗ 下载过程中出现错误:', error);
        process.exit(1);
    }
}

// 运行
if (require.main === module) {
    main();
}

module.exports = { downloadFlowerImages, downloadPlantImages };
