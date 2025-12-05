# 中医穴位养生 H5

一款移动端友好的中医穴位查询应用，帮助你在身体不适时快速找到对应穴位和调理方法。

## 功能特性

- 🔍 **症状搜索** - 输入症状快速查找相关穴位
- 📍 **穴位定位** - 详细的穴位位置描述
- 💆 **按摩指导** - 按摩方法、时长、频率、力度
- 🍲 **饮食建议** - 推荐食物和忌口食物
- 👤 **人体部位** - 按身体部位浏览穴位
- ⭐ **收藏功能** - 收藏常用穴位

## 支持的症状

### 常见症状
- 头痛、失眠、颈椎痛、肩周炎
- 腰痛、胃痛、感冒、眼疲劳
- 便秘、痛经、焦虑、疲劳

### 日常保健
- 提神醒脑、增强免疫
- 美容养颜、助消化

## 部署到 GitHub Pages

### 方法一：直接上传

1. 在 GitHub 创建新仓库，如 `tcm-acupoint`
2. 上传所有文件到仓库根目录：
   - `index.html`
   - `data.js`
   - `app.js`
   - `README.md`
3. 进入 **Settings** → **Pages**
4. Source 选择 `main` 分支，目录选 `/ (root)`
5. 保存后访问 `https://你的用户名.github.io/tcm-acupoint/`

### 方法二：命令行

```bash
cd tcm_acupoint
git init
git add .
git commit -m "中医穴位养生 H5"

# 在 GitHub 创建空仓库后
git remote add origin https://github.com/你的用户名/tcm-acupoint.git
git push -u origin main
```

## 手机访问

1. **浏览器访问**: 直接输入 URL
2. **添加到主屏幕**: 
   - iOS: Safari → 分享 → 添加到主屏幕
   - Android: Chrome → 菜单 → 添加到主屏幕
3. **微信分享**: 生成二维码或直接分享链接

## 项目结构

```
tcm_acupoint/
├── index.html    # 主页面
├── data.js       # 穴位数据库
├── app.js        # 应用逻辑
└── README.md     # 说明文档
```

## 数据来源

穴位数据整理自公开的中医文献资料，仅供参考学习。

## 免责声明

⚠️ 本应用内容仅供参考，不能替代专业医疗建议。如症状严重或持续，请及时就医。

## 许可证

MIT
