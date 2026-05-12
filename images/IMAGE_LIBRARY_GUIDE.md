# 植物花卉图片库使用指南

## 概述

本项目使用本地图片库存储植物花卉的真实图片，图片来源于专业的生物多样性数据库，确保图片的真实性和准确性。

## 目录结构

```
images/
├── flower-images/          # 花卉图片
│   ├── rose/              # 玫瑰
│   │   ├── 玫瑰_Rose_01.jpg
│   │   └── 玫瑰_Rose_02.jpg
│   ├── lily/              # 百合
│   └── ...
├── plant-images/          # 传统植物图片
│   ├── mugwort/          # 艾草
│   ├── calamus/          # 菖蒲
│   └── ...
└── IMAGE_LIBRARY_GUIDE.md
```

## 快速开始

### 方法1: 使用搜索工具（推荐）

1. **使用 Wikimedia Commons 搜索工具**
   ```bash
   node scripts/find-wikimedia-images.js "Rosa" "玫瑰"
   ```

2. **复制输出的下载命令并执行**
   ```bash
   curl -o "images/flower-images/rose/玫瑰_Rose_01.jpg" "https://..."
   ```

3. **自动更新数据文件**
   ```bash
   node scripts/update-image-urls.js
   ```

### 方法2: 手动下载

1. **访问专业数据库**
   - Wikimedia Commons: https://commons.wikimedia.org/
   - iNaturalist: https://www.inaturalist.org/
   - GBIF: https://www.gbif.org/

2. **搜索并下载**
   - 使用植物学名搜索（如 "Rosa" 或 "Lilium"）
   - 选择高质量、授权清晰的图片
   - 下载到对应目录

3. **更新数据文件**
   ```bash
   node scripts/update-image-urls.js
   ```

## 图片来源推荐

### 1. Wikimedia Commons ⭐⭐⭐⭐⭐（最推荐）

**优势：**
- 数量大、分类细（到属/种）
- 很多是科研/博物馆级别图片
- 授权多为 CC BY/CC BY-SA 或公有领域
- API 支持，易于批量获取

**使用方法：**
1. 访问 https://commons.wikimedia.org/
2. 搜索植物学名（如 "Rosa"）
3. 筛选高质量图片
4. 查看授权信息（确保是 CC 或公有领域）
5. 下载到对应目录

**API 搜索示例：**
```bash
node scripts/find-wikimedia-images.js "Lilium" "百合"
```

### 2. iNaturalist ⭐⭐⭐⭐

**优势：**
- 观测照片，常带地点/时间/物种信息
- 授权由上传者选择（很多是 CC）
- 适合做"物种+实拍"图库

**使用方法：**
1. 访问 https://www.inaturalist.org/
2. 搜索植物学名
3. 查看观测记录
4. 检查授权信息
5. 下载图片

### 3. GBIF ⭐⭐⭐⭐

**优势：**
- 聚合全球生物多样性数据
- 包含大量标本照/野外照
- 可按许可证过滤下载

**使用方法：**
1. 访问 https://www.gbif.org/
2. 搜索物种
3. 查看媒体库
4. 按许可证过滤
5. 下载图片

### 4. POWO ⭐⭐⭐

**优势：**
- 权威物种信息与图片
- 英国皇家植物园维护

**注意：** 使用需看具体许可

### 5. USDA Plants ⭐⭐

**优势：**
- 北美植物图片/资料较多

**注意：** 使用条款需逐条确认来源

## 图片命名规范

- **格式**: `{中文名}_{英文名}_{序号}.jpg`
- **示例**: `玫瑰_Rose_01.jpg`, `百合_Lily_01.jpg`
- **尺寸**: 建议 400x400 或 800x800 像素
- **格式**: JPG 或 PNG

## 授权注意事项

### 常见授权类型

1. **CC BY** - 需要署名
   - 可以自由使用，但需要注明作者
   - 示例：`图片由 [作者名] 提供，CC BY 4.0`

2. **CC BY-SA** - 需要署名，且衍生作品需相同授权
   - 可以自由使用，需要署名，且修改后的作品也需使用相同授权

3. **CC0** / **公有领域** - 可自由使用
   - 无需署名，可自由使用

4. **保留所有权利** - 需联系作者获取许可
   - 不建议使用，除非获得明确许可

### 授权信息记录

建议在项目根目录创建 `LICENSE_ATTRIBUTIONS.md` 记录所有图片的授权信息：

```markdown
# 图片授权信息

## 花卉图片

### 玫瑰 (Rosa)
- 文件: 玫瑰_Rose_01.jpg
- 来源: Wikimedia Commons
- 作者: [作者名]
- 授权: CC BY-SA 4.0
- 链接: [原始链接]

### 百合 (Lilium)
- 文件: 百合_Lily_01.jpg
- 来源: Wikimedia Commons
- 作者: [作者名]
- 授权: CC BY 4.0
- 链接: [原始链接]
```

## 工作流程

### 完整流程

1. **搜索图片**
   ```bash
   node scripts/find-wikimedia-images.js "Rosa" "玫瑰"
   ```

2. **下载图片**
   ```bash
   # 创建目录
   mkdir -p images/flower-images/rose
   
   # 下载图片（使用工具输出的命令）
   curl -o "images/flower-images/rose/玫瑰_Rose_01.jpg" "https://..."
   ```

3. **更新数据文件**
   ```bash
   node scripts/update-image-urls.js
   ```

4. **验证图片**
   - 刷新页面查看图片是否正确显示
   - 检查图片质量

### 批量处理

如果需要批量下载多个花卉的图片：

```bash
# 创建下载列表
cat > download-list.txt << EOF
Rosa 玫瑰
Lilium 百合
Helianthus_annuus 向日葵
EOF

# 批量搜索和下载
while read scientific chinese; do
    echo "处理: $chinese ($scientific)"
    node scripts/find-wikimedia-images.js "$scientific" "$chinese"
    # 手动执行输出的下载命令
done < download-list.txt
```

## 图片质量检查清单

下载图片后，请检查：

- [ ] 图片清晰，分辨率足够（至少 400x400）
- [ ] 图片角度合适，能清晰展示花朵特征
- [ ] 背景干净，不会干扰主体
- [ ] 授权信息清晰，符合使用要求
- [ ] 图片文件名符合规范
- [ ] 图片已保存到正确目录

## 常见问题

### Q: 找不到合适的图片怎么办？

A: 尝试以下方法：
1. 使用不同的搜索词（学名、俗名、英文名）
2. 在多个数据库中搜索
3. 使用更宽泛的分类（如 "Rosa" 而不是 "Rosa rubiginosa"）

### Q: 图片授权不明确怎么办？

A: 
1. 优先选择授权明确的图片
2. 如果不确定，联系图片作者确认
3. 或者选择其他授权清晰的图片

### Q: 图片太大怎么办？

A: 
1. 使用图片压缩工具（如 ImageMagick, TinyPNG）
2. 调整到合适尺寸（400x400 或 800x800）
3. 使用 WebP 格式可以进一步减小文件大小

### Q: 如何批量处理图片？

A: 
1. 使用 ImageMagick 批量调整尺寸：
   ```bash
   for img in images/flower-images/*/*.jpg; do
       convert "$img" -resize 800x800 "$img"
   done
   ```

2. 使用脚本批量重命名：
   ```bash
   # 根据目录名和文件名自动重命名
   ```

## 维护建议

1. **定期检查授权状态** - 确保所有图片的授权仍然有效
2. **备份图片库** - 定期备份图片文件
3. **更新图片** - 如果发现更好的图片，可以替换
4. **记录变更** - 在 LICENSE_ATTRIBUTIONS.md 中记录所有变更

## 相关资源

- [Wikimedia Commons API 文档](https://www.mediawiki.org/wiki/API:Main_page)
- [iNaturalist API 文档](https://api.inaturalist.org/v1/docs/)
- [GBIF API 文档](https://www.gbif.org/developer/summary)
- [Creative Commons 授权说明](https://creativecommons.org/licenses/)
