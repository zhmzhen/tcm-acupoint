# 植物花卉图片库管理脚本

本目录包含用于管理植物花卉图片库的脚本工具。

## 脚本说明

### 1. `download-images.js` - 图片下载脚本
从 Wikimedia Commons、iNaturalist 等专业数据库下载真实图片。

**使用方法：**
```bash
node scripts/download-images.js
```

**功能：**
- 自动创建图片目录结构
- 从专业数据库下载高质量图片
- 跳过已存在的图片
- 支持重定向和错误处理

### 2. `image-url-mapper.js` - URL映射生成器
生成图片URL映射文件和使用指南。

**使用方法：**
```bash
node scripts/image-url-mapper.js
```

**功能：**
- 生成图片URL映射文件
- 生成详细的使用指南
- 提供各数据库的搜索链接

### 3. `update-image-urls.js` - 自动更新图片URL
扫描本地图片目录，自动更新 `flower-data.js` 中的 `imageUrl` 字段。

**使用方法：**
```bash
node scripts/update-image-urls.js
```

**功能：**
- 扫描本地图片目录
- 自动匹配花卉名称
- 更新数据文件中的图片URL

## 工作流程

### 方案1: 手动下载（推荐用于精确控制）

1. **访问专业数据库**
   - Wikimedia Commons: https://commons.wikimedia.org/
   - iNaturalist: https://www.inaturalist.org/
   - GBIF: https://www.gbif.org/

2. **搜索并下载图片**
   - 使用植物学名搜索（如 "Rosa" 或 "Lilium"）
   - 选择高质量、授权清晰的图片
   - 下载到对应目录：
     - 花卉: `images/flower-images/{flower-name}/`
     - 植物: `images/plant-images/{plant-name}/`

3. **更新数据文件**
   ```bash
   node scripts/update-image-urls.js
   ```

### 方案2: 使用脚本下载（快速批量）

1. **编辑下载脚本**
   - 修改 `download-images.js` 中的图片URL列表
   - 添加从专业数据库获取的真实图片URL

2. **运行下载脚本**
   ```bash
   node scripts/download-images.js
   ```

3. **自动更新数据文件**
   ```bash
   node scripts/update-image-urls.js
   ```

## 图片来源推荐

### 优先级排序

1. **Wikimedia Commons** ⭐⭐⭐⭐⭐
   - 最推荐，图片质量高，授权清晰
   - 搜索示例：`Rosa`, `Lilium candidum`

2. **iNaturalist** ⭐⭐⭐⭐
   - 实拍照片，真实场景
   - 搜索示例：`Rosa rubiginosa`

3. **GBIF** ⭐⭐⭐⭐
   - 标本照/野外照，科学准确
   - 可按许可证过滤

4. **POWO** ⭐⭐⭐
   - 权威但图片量较少

5. **USDA Plants** ⭐⭐
   - 主要适合北美植物

## 图片命名规范

- 格式：`{中文名}_{英文名}_{序号}.jpg`
- 示例：`玫瑰_Rose_01.jpg`
- 尺寸：建议 400x400 或 800x800 像素
- 格式：JPG 或 PNG

## 授权注意事项

1. **CC BY** - 需要署名
2. **CC BY-SA** - 需要署名，且衍生作品需相同授权
3. **CC0** / **公有领域** - 可自由使用
4. **保留所有权利** - 需联系作者获取许可

建议在项目根目录创建 `LICENSE_ATTRIBUTIONS.md` 记录所有图片的授权信息。
