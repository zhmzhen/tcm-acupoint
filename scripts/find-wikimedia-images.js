#!/usr/bin/env node
/**
 * Wikimedia Commons 图片查找工具
 * 使用 Wikimedia Commons API 搜索并获取真实图片URL
 * 
 * 使用方法：
 * node scripts/find-wikimedia-images.js "Rosa" "玫瑰"
 */

const https = require('https');

// Wikimedia Commons API 基础URL
const WIKIMEDIA_API_BASE = 'https://commons.wikimedia.org/w/api.php';

// 搜索Wikimedia Commons图片
function searchWikimediaImages(searchTerm, limit = 5) {
    return new Promise((resolve, reject) => {
        const params = new URLSearchParams({
            action: 'query',
            format: 'json',
            list: 'search',
            srsearch: searchTerm,
            srnamespace: 6, // File namespace
            srlimit: limit,
            origin: '*'
        });
        
        const url = `${WIKIMEDIA_API_BASE}?${params.toString()}`;
        
        https.get(url, (res) => {
            let data = '';
            
            res.on('data', (chunk) => {
                data += chunk;
            });
            
            res.on('end', () => {
                try {
                    const json = JSON.parse(data);
                    const results = json.query?.search || [];
                    
                    // 获取每个文件的详细信息
                    const fileNames = results.map(r => r.title);
                    getFileUrls(fileNames).then(resolve).catch(reject);
                } catch (error) {
                    reject(error);
                }
            });
        }).on('error', reject);
    });
}

// 获取文件URL
function getFileUrls(fileNames) {
    return new Promise((resolve, reject) => {
        const params = new URLSearchParams({
            action: 'query',
            format: 'json',
            titles: fileNames.join('|'),
            prop: 'imageinfo',
            iiprop: 'url|extmetadata',
            iiurlwidth: 800,
            origin: '*'
        });
        
        const url = `${WIKIMEDIA_API_BASE}?${params.toString()}`;
        
        https.get(url, (res) => {
            let data = '';
            
            res.on('data', (chunk) => {
                data += chunk;
            });
            
            res.on('end', () => {
                try {
                    const json = JSON.parse(data);
                    const pages = json.query?.pages || {};
                    const urls = [];
                    
                    for (const pageId in pages) {
                        const page = pages[pageId];
                        if (page.imageinfo && page.imageinfo[0]) {
                            const info = page.imageinfo[0];
                            urls.push({
                                title: page.title,
                                url: info.thumburl || info.url,
                                description: info.extmetadata?.ImageDescription?.value || '',
                                license: info.extmetadata?.LicenseShortName?.value || 'Unknown'
                            });
                        }
                    }
                    
                    resolve(urls);
                } catch (error) {
                    reject(error);
                }
            });
        }).on('error', reject);
    });
}

// 主函数
async function main() {
    const args = process.argv.slice(2);
    
    if (args.length < 1) {
        console.log('使用方法: node find-wikimedia-images.js "搜索词" [中文名]');
        console.log('示例: node find-wikimedia-images.js "Rosa" "玫瑰"');
        process.exit(1);
    }
    
    const searchTerm = args[0];
    const chineseName = args[1] || searchTerm;
    
    console.log(`搜索 "${searchTerm}" (${chineseName}) 的图片...\n`);
    
    try {
        const images = await searchWikimediaImages(searchTerm, 5);
        
        if (images.length === 0) {
            console.log('未找到图片');
            return;
        }
        
        console.log(`找到 ${images.length} 张图片:\n`);
        images.forEach((img, index) => {
            console.log(`${index + 1}. ${img.title}`);
            console.log(`   URL: ${img.url}`);
            console.log(`   授权: ${img.license}`);
            if (img.description) {
                console.log(`   描述: ${img.description.substring(0, 100)}...`);
            }
            console.log('');
        });
        
        // 生成下载命令
        console.log('下载命令:');
        images.forEach((img, index) => {
            const fileName = `${chineseName}_${index + 1}.jpg`;
            console.log(`curl -o "images/flower-images/${searchTerm.toLowerCase()}/${fileName}" "${img.url}"`);
        });
        
    } catch (error) {
        console.error('搜索失败:', error.message);
        process.exit(1);
    }
}

if (require.main === module) {
    main();
}

module.exports = { searchWikimediaImages, getFileUrls };
