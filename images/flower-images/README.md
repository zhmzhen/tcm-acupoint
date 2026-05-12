# 植物花卉图片库

本目录用于存储植物花卉的真实图片，图片来源于专业的生物多样性数据库。

## 目录结构

```
images/
├── flower-images/          # 花卉图片
│   ├── rose/              # 玫瑰
│   ├── lily/              # 百合
│   ├── sunflower/         # 向日葵
│   └── ...
├── plant-images/          # 传统植物图片
│   ├── mugwort/          # 艾草
│   ├── calamus/          # 菖蒲
│   └── ...
└── README.md
```

## 图片来源

### 推荐资源（按优先级）

1. **Wikimedia Commons** (https://commons.wikimedia.org/)
   - 数量大、分类细（到属/种）
   - 授权多为 CC BY/CC BY-SA 或公有领域
   - 适合：高质量科研/博物馆级别图片

2. **iNaturalist** (https://www.inaturalist.org/)
   - 观测照片，常带地点/时间/物种信息
   - 授权由上传者选择（很多是 CC）
   - 适合：实拍照片，真实场景

3. **GBIF** (https://www.gbif.org/)
   - 聚合全球生物多样性数据
   - 包含大量标本照/野外照
   - 可按许可证过滤下载

4. **POWO** (https://powo.science.kew.org/)
   - 权威物种信息与图片
   - 使用需看具体许可

5. **USDA Plants** (https://plants.usda.gov/)
   - 北美植物图片/资料较多
   - 使用条款需逐条确认来源

## 图片命名规范

- 格式：`{中文名}_{英文名}_{序号}.jpg`
- 示例：`玫瑰_Rose_01.jpg`, `百合_Lily_01.jpg`
- 尺寸：建议 400x400 或 800x800 像素
- 格式：JPG 或 PNG

## 使用方式

图片下载后，更新 `js/flower-data.js` 中的 `imageUrl` 字段，指向本地图片：

```javascript
{
    name: '玫瑰',
    nameEn: 'Rose',
    imageUrl: 'images/flower-images/rose/玫瑰_Rose_01.jpg',
    // ...
}
```

## 下载工具

使用 `scripts/download-images.js` 脚本可以批量下载图片。
