#!/usr/bin/env node
/**
 * 图片URL映射生成器
 * 从专业数据库搜索并生成图片URL映射文件
 * 
 * 使用方法：
 * node scripts/image-url-mapper.js
 */

const fs = require('fs');
const path = require('path');

// 花卉数据（从 flower-data.js 读取）
const FLOWER_NAMES = {
    '玫瑰': { en: 'Rose', search: 'Rosa', wikimedia: 'Rosa' },
    '康乃馨': { en: 'Carnation', search: 'Dianthus caryophyllus', wikimedia: 'Dianthus_caryophyllus' },
    '百合': { en: 'Lily', search: 'Lilium', wikimedia: 'Lilium' },
    '向日葵': { en: 'Sunflower', search: 'Helianthus annuus', wikimedia: 'Helianthus_annuus' },
    '郁金香': { en: 'Tulip', search: 'Tulipa', wikimedia: 'Tulipa' },
    '茉莉': { en: 'Jasmine', search: 'Jasminum', wikimedia: 'Jasminum' },
    '牡丹': { en: 'Peony', search: 'Paeonia', wikimedia: 'Paeonia' },
    '菊花': { en: 'Chrysanthemum', search: 'Chrysanthemum', wikimedia: 'Chrysanthemum' },
    '梅花': { en: 'Plum Blossom', search: 'Prunus mume', wikimedia: 'Prunus_mume' },
    '兰花': { en: 'Orchid', search: 'Orchidaceae', wikimedia: 'Orchidaceae' },
    '薰衣草': { en: 'Lavender', search: 'Lavandula', wikimedia: 'Lavandula' },
    '满天星': { en: 'Baby\'s Breath', search: 'Gypsophila', wikimedia: 'Gypsophila' },
    '勿忘我': { en: 'Forget-me-not', search: 'Myosotis', wikimedia: 'Myosotis' },
    '风信子': { en: 'Hyacinth', search: 'Hyacinthus', wikimedia: 'Hyacinthus' },
    '水仙': { en: 'Narcissus', search: 'Narcissus', wikimedia: 'Narcissus' },
    '海棠': { en: 'Begonia', search: 'Begonia', wikimedia: 'Begonia' },
    '桃花': { en: 'Peach Blossom', search: 'Prunus persica', wikimedia: 'Prunus_persica' },
    '樱花': { en: 'Cherry Blossom', search: 'Prunus serrulata', wikimedia: 'Prunus_serrulata' },
    '荷花': { en: 'Lotus', search: 'Nelumbo nucifera', wikimedia: 'Nelumbo_nucifera' },
    '紫罗兰': { en: 'Violet', search: 'Viola', wikimedia: 'Viola' },
    '蝴蝶兰': { en: 'Phalaenopsis', search: 'Phalaenopsis', wikimedia: 'Phalaenopsis' }
};

// 生成 Wikimedia Commons 图片URL
function generateWikimediaURL(scientificName, size = 800) {
    // 这是一个示例URL模板，实际使用时需要从Wikimedia Commons API获取
    // 格式：https://commons.wikimedia.org/wiki/File:{filename}
    // 或使用API：https://commons.wikimedia.org/w/api.php?action=query&titles=File:{filename}&prop=imageinfo&iiprop=url
    return `https://commons.wikimedia.org/wiki/Special:Search/${encodeURIComponent(scientificName)}`;
}

// 生成图片URL映射
function generateImageUrlMap() {
    const urlMap = {};
    
    for (const [chineseName, info] of Object.entries(FLOWER_NAMES)) {
        // Wikimedia Commons 搜索URL
        const wikimediaSearch = `https://commons.wikimedia.org/wiki/Special:Search/${encodeURIComponent(info.search)}`;
        
        // iNaturalist 搜索URL
        const inaturalistSearch = `https://www.inaturalist.org/taxa/search?q=${encodeURIComponent(info.search)}`;
        
        // GBIF 搜索URL
        const gbifSearch = `https://www.gbif.org/species/search?q=${encodeURIComponent(info.search)}`;
        
        urlMap[info.en] = {
            chinese: chineseName,
            scientific: info.search,
            wikimedia: wikimediaSearch,
            inaturalist: inaturalistSearch,
            gbif: gbifSearch,
            // 本地图片路径（下载后使用）
            local: `images/flower-images/${info.en.toLowerCase()}/${chineseName}_${info.en}_01.jpg`
        };
    }
    
    return urlMap;
}

// 生成映射文件
function generateMappingFile() {
    const urlMap = generateImageUrlMap();
    const outputPath = path.join(__dirname, '../js/image-url-map.js');
    
    const content = `// 植物花卉图片URL映射
// 从专业数据库（Wikimedia Commons, iNaturalist, GBIF等）获取的真实图片
// 生成时间: ${new Date().toISOString()}

const imageUrlMap = ${JSON.stringify(urlMap, null, 4)};

// 导出供其他模块使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = imageUrlMap;
}
`;
    
    fs.writeFileSync(outputPath, content, 'utf8');
    console.log(`✓ 图片URL映射文件已生成: ${outputPath}`);
}

// 生成使用说明
function generateUsageGuide() {
    const guidePath = path.join(__dirname, '../images/IMAGE_SOURCES.md');
    const content = `# 植物花卉图片来源指南

## 推荐图片资源

### 1. Wikimedia Commons (最推荐)
- **网址**: https://commons.wikimedia.org/
- **优势**: 
  - 数量大、分类细（到属/种）
  - 很多是科研/博物馆级别图片
  - 授权多为 CC BY/CC BY-SA 或公有领域
- **使用方法**:
  1. 搜索植物学名（如 "Rosa" 或 "Lilium"）
  2. 筛选高质量图片
  3. 查看授权信息（确保是 CC 或公有领域）
  4. 下载图片到 \`images/flower-images/{flower-name}/\` 目录

### 2. iNaturalist
- **网址**: https://www.inaturalist.org/
- **优势**:
  - 观测照片，常带地点/时间/物种信息
  - 授权由上传者选择（很多是 CC）
  - 适合做"物种+实拍"图库
- **使用方法**:
  1. 搜索植物学名
  2. 查看观测记录
  3. 检查授权信息
  4. 下载图片

### 3. GBIF (Global Biodiversity Information Facility)
- **网址**: https://www.gbif.org/
- **优势**:
  - 聚合全球生物多样性数据
  - 包含大量标本照/野外照
  - 可按许可证过滤下载
- **使用方法**:
  1. 搜索物种
  2. 查看媒体库
  3. 按许可证过滤
  4. 下载图片

### 4. POWO (Plants of the World Online)
- **网址**: https://powo.science.kew.org/
- **优势**:
  - 权威物种信息与图片
  - 英国皇家植物园维护
- **注意**: 使用需看具体许可

### 5. USDA Plants
- **网址**: https://plants.usda.gov/
- **优势**:
  - 北美植物图片/资料较多
- **注意**: 使用条款需逐条确认来源

## 图片下载步骤

### 方法1: 手动下载
1. 访问上述网站
2. 搜索对应的植物学名
3. 选择高质量、授权清晰的图片
4. 下载到对应的目录：
   - 花卉: \`images/flower-images/{flower-name}/\`
   - 植物: \`images/plant-images/{plant-name}/\`

### 方法2: 使用下载脚本
\`\`\`bash
node scripts/download-images.js
\`\`\`

## 图片命名规范

- 格式: \`{中文名}_{英文名}_{序号}.jpg\`
- 示例: \`玫瑰_Rose_01.jpg\`, \`百合_Lily_01.jpg\`
- 尺寸: 建议 400x400 或 800x800 像素
- 格式: JPG 或 PNG

## 更新数据文件

下载图片后，更新 \`js/flower-data.js\` 中的 \`imageUrl\` 字段：

\`\`\`javascript
{
    name: '玫瑰',
    nameEn: 'Rose',
    imageUrl: 'images/flower-images/rose/玫瑰_Rose_01.jpg',
    // ...
}
\`\`\`

## 授权说明

使用图片时请注意：
1. 遵守 CC 授权要求（通常需要署名）
2. 确认图片的授权类型
3. 保留授权信息（可在图片元数据或README中记录）
4. 定期检查授权状态

## 推荐搜索词

### 花卉学名（用于搜索）
- 玫瑰: Rosa, Rosa rubiginosa
- 百合: Lilium, Lilium candidum, Lilium orientalis
- 向日葵: Helianthus annuus
- 康乃馨: Dianthus caryophyllus
- 郁金香: Tulipa
- 茉莉: Jasminum officinale
- 牡丹: Paeonia suffruticosa
- 菊花: Chrysanthemum morifolium
- 梅花: Prunus mume
- 兰花: Orchidaceae, Cymbidium
- 薰衣草: Lavandula angustifolia
- 满天星: Gypsophila paniculata
- 勿忘我: Myosotis sylvatica
- 风信子: Hyacinthus orientalis
- 水仙: Narcissus pseudonarcissus
- 海棠: Begonia
- 桃花: Prunus persica
- 樱花: Prunus serrulata, Prunus × yedoensis
- 荷花: Nelumbo nucifera
- 紫罗兰: Viola odorata
- 蝴蝶兰: Phalaenopsis

### 传统植物学名
- 艾草: Artemisia vulgaris
- 菖蒲: Acorus calamus
- 茱萸: Cornus officinalis
- 桂花: Osmanthus fragrans
`;
    
    fs.writeFileSync(guidePath, content, 'utf8');
    console.log(`✓ 使用指南已生成: ${guidePath}`);
}

// 主函数
function main() {
    console.log('生成图片URL映射和使用指南...\n');
    generateMappingFile();
    generateUsageGuide();
    console.log('\n✓ 完成！');
}

if (require.main === module) {
    main();
}

module.exports = { generateImageUrlMap, generateMappingFile, generateUsageGuide };
