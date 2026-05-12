# 中医养生 H5 应用 — 架构文档

## 1. 项目概述

**中医养生 (TCM Wellness)** 是一款纯前端、移动端优先的 H5 单页应用集合，面向大众用户提供中医穴位查询、节气饮食、运动健康、茶酒品鉴、花语潮汐等养生生活知识。项目采用零依赖的纯静态架构，可直接部署于任意 HTTP 服务器或 CDN。

| 属性 | 说明 |
|---|---|
| 项目类型 | 纯前端静态 H5 应用 |
| 目标平台 | 移动端浏览器（微信内置浏览器、Safari、Chrome） |
| 技术栈 | HTML5 + CSS3 + Vanilla JS (ES6) |
| 外部依赖 | Font Awesome 6.4 CDN（图标库） |
| 构建工具 | 无（零构建，直接部署源文件） |
| 部署方式 | Nginx 静态托管 / Docker + Nginx Basic Auth / GitHub Pages |
| 许可证 | MIT |

---

## 2. 目录结构

```
tcm-acupoint-public/
├── index.html                  # 应用首页（导航入口）
├── index-old.html              # 旧版首页（已废弃，保留参考）
├── app.js                      # 核心应用逻辑（穴位搜索、收藏、每日穴位）
├── data.js                     # 穴位数据库（症状-穴位-饮食映射）
├── Dockerfile                  # Docker 构建文件
├── nginx.conf                  # Nginx 配置（含 Basic Auth）
├── README.md                   # 项目说明
│
├── css/
│   └── common.css              # 全局公共样式（CSS 变量、布局、组件）
│
├── js/
│   ├── common.js               # 公共工具函数库
│   ├── acupoint-data.js        # 穴位列表 + 症状映射数据（精简版）
│   ├── diet-data.js            # 二十四节气饮食数据
│   ├── fitness-data.js         # 运动康复训练数据
│   ├── tea-data.js             # 茶道品鉴数据
│   ├── wine-data.js            # 酒道品鉴数据
│   ├── tide-data.js            # 沿海潮汐与水产数据
│   ├── flower-data.js          # 花语与节日送花数据
│   └── image-cache.js          # IndexedDB 图片缓存管理模块
│
├── pages/
│   ├── acupoint.html           # 穴位查询页
│   ├── daily-acupoint.html     # 每日穴位学习页
│   ├── diet.html               # 节气饮食页
│   ├── fitness.html            # 运动健康页
│   ├── tea.html                # 每日茶道页
│   ├── wine.html               # 每日酒道页
│   ├── tide.html               # 潮汐水产页
│   └── flower.html             # 每日花语页
│
├── images/
│   ├── flower-images/          # 花卉本地图片库
│   ├── plant-images/           # 传统植物本地图片库
│   └── IMAGE_LIBRARY_GUIDE.md  # 图片库管理指南
│
├── scripts/
│   ├── download-images.js      # 从 Wikimedia/iNaturalist 下载图片
│   ├── find-wikimedia-images.js# Wikimedia Commons 图片搜索工具
│   ├── image-url-mapper.js     # 图片 URL 映射生成器
│   ├── update-image-urls.js    # 自动更新 flower-data.js 中的图片 URL
│   ├── README.md               # 脚本使用说明
│   └── SEARCH_GUIDE.md         # 图片搜索详细指南
│
└── auth/
    └── .htpasswd               # Nginx Basic Auth 密码文件（示例占位）
```

---

## 3. 架构分层

```
┌─────────────────────────────────────────────────────────┐
│                    表现层 (Presentation)                  │
│  index.html  +  8 个 pages/*.html                        │
│  每页内嵌 <style> + 引用 css/common.css                   │
│  使用 Font Awesome 图标                                   │
├─────────────────────────────────────────────────────────┤
│                    逻辑层 (Logic)                         │
│  app.js          — 穴位搜索、收藏、每日穴位核心逻辑        │
│  js/common.js    — 日期计算、localStorage、定位等工具函数   │
│  js/image-cache.js — IndexedDB 图片缓存管理               │
├─────────────────────────────────────────────────────────┤
│                    数据层 (Data)                          │
│  data.js              — 穴位数据库（症状→穴位+饮食）        │
│  js/acupoint-data.js  — 穴位列表 + 症状映射（精简版）       │
│  js/diet-data.js      — 二十四节气饮食数据                  │
│  js/fitness-data.js   — 运动康复训练数据                    │
│  js/tea-data.js       — 茶道品鉴数据                       │
│  js/wine-data.js      — 酒道品鉴数据                       │
│  js/tide-data.js      — 潮汐水产数据                       │
│  js/flower-data.js    — 花语与节日送花数据                  │
├─────────────────────────────────────────────────────────┤
│                    存储层 (Storage)                       │
│  localStorage   — 收藏列表、学习记录持久化                  │
│  IndexedDB      — 花卉图片本地缓存（7天过期）               │
├─────────────────────────────────────────────────────────┤
│                    部署层 (Deployment)                    │
│  Nginx          — 静态文件托管 + Basic Auth 鉴权           │
│  Docker         — 容器化部署                              │
│  GitHub Pages   — 免费静态托管                            │
└─────────────────────────────────────────────────────────┘
```

---

## 4. 核心模块详解

### 4.1 首页导航 (`index.html`)

应用入口，以卡片网格形式提供 8 个功能入口：

| 模块 | 页面 | 说明 |
|---|---|---|
| 穴位查询 | `pages/acupoint.html` | 按症状搜索对应穴位 |
| 每日穴位 | `pages/daily-acupoint.html` | 根据日期轮换展示一个穴位 |
| 节气饮食 | `pages/diet.html` | 二十四节气应季饮食建议 |
| 运动健康 | `pages/fitness.html` | 针对症状的康复训练与肌肉解析 |
| 每日茶道 | `pages/tea.html` | 茶叶品鉴、冲泡技巧 |
| 每日酒道 | `pages/wine.html` | 酒水品鉴、口感评价 |
| 潮汐水产 | `pages/tide.html` | 沿海城市潮汐信息与当地水产 |
| 每日花语 | `pages/flower.html` | 花语寓意、节日送花指南 |

### 4.2 穴位查询系统 (`app.js` + `data.js`)

**数据模型：**

```
症状 (Symptom)
  ├── acupoints[]          — 推荐穴位列表
  │     ├── name           — 穴位名称
  │     ├── pinyin         — 拼音
  │     ├── location       — 位置描述
  │     ├── meridian       — 所属经络
  │     ├── massage        — 按摩指导（方法/时长/频率/力度）
  │     ├── effects[]      — 功效列表
  │     └── tips           — 注意事项
  └── diet                 — 饮食建议
        ├── recommended[]  — 推荐食物
        ├── avoid[]        — 忌口食物
        └── tips           — 饮食提示
```

**搜索流程：**

```
用户输入症状关键词
  → 精确匹配 acupointData 的 key
  → 未命中则查 symptomSynonyms 同义词表
  → 未命中则模糊匹配（遍历所有症状 key）
  → 渲染穴位卡片 + 饮食建议
```

**同义词映射** (`symptomSynonyms`)：支持口语化输入，如 "脑袋疼"→"头痛"、"睡不着"→"失眠"、"大姨妈"→"月经不调"。

### 4.3 每日轮换机制 (`js/common.js`)

核心算法：`getDayOfYear() % array.length`，基于一年中的第几天对数据数组取模，保证每天固定展示不同内容，所有用户同一天看到相同内容。

```js
function getDailyItem(array) {
    const dayOfYear = getDayOfYear();
    return array[dayOfYear % array.length];
}
```

应用于：每日穴位、每日茶道、每日酒道、每日花语。

### 4.4 节气饮食系统 (`js/diet-data.js`)

- 包含完整的二十四节气数据（名称、日期范围、养生原则、推荐/忌口食物、推荐汤品）
- `getCurrentSolarTerm()` 根据当前日期自动匹配对应节气
- 支持手动切换节气查看

### 4.5 运动健康系统 (`js/fitness-data.js`)

每个训练方案包含：
- 目标症状（如颈椎痛、腰痛、肩周炎）
- 相关肌肉解剖（名称、位置、功能）
- 具体训练动作（名称、细节、次数、技巧）
- 注意事项与收益

### 4.6 潮汐水产系统 (`js/tide-data.js`)

- 覆盖青岛、舟山、湛江、厦门等沿海城市
- 包含 GPS 坐标，支持 `getUserLocation()` 自动匹配最近城市
- 每个城市含潮汐时间表 + 当地特色水产（名称、季节、价格、烹饪方式）

### 4.7 图片缓存系统 (`js/image-cache.js`)

基于 IndexedDB 的图片本地缓存方案：

```
ImageCache 类
  ├── init()              — 初始化 IndexedDB 数据库
  ├── getImage(url)       — 获取图片（优先缓存，未命中则下载）
  ├── getCachedImage()    — 查询缓存（含过期检查）
  ├── downloadAndCache()  — 下载并存入缓存
  ├── saveImageToCache()  — 保存 Blob 到 IndexedDB
  ├── cleanExpiredCache() — 清理过期缓存（7天过期）
  ├── clearAllCache()     — 清空所有缓存
  └── getCacheSize()      — 估算缓存大小
```

- 缓存有效期：7 天
- 自动清理：每 24 小时执行一次过期清理
- 降级策略：缓存/下载失败时回退到原始 URL

### 4.8 持久化存储

| 存储键 | 类型 | 用途 |
|---|---|---|
| `tcm_favorites` | localStorage | 用户收藏的穴位列表 |
| `tcm_learned` | localStorage | 用户已学习的穴位记录 |
| `FlowerImageCache` | IndexedDB | 花卉图片 Blob 缓存 |

---

## 5. 页面加载与依赖关系

```
index.html
  ├── css/common.css           (全局样式)
  └── Font Awesome CDN         (图标)

pages/acupoint.html
  ├── css/common.css
  ├── Font Awesome CDN
  ├── ../data.js               (穴位数据库)
  └── ../app.js                (搜索逻辑)

pages/daily-acupoint.html
  ├── css/common.css
  ├── Font Awesome CDN
  ├── ../js/common.js          (日期工具)
  └── ../app.js                (每日穴位逻辑 + dailyAcupointList)

pages/diet.html
  ├── css/common.css
  ├── Font Awesome CDN
  ├── ../js/common.js
  └── ../js/diet-data.js

pages/fitness.html
  ├── css/common.css
  ├── Font Awesome CDN
  └── ../js/fitness-data.js

pages/tea.html
  ├── css/common.css
  ├── Font Awesome CDN
  ├── ../js/common.js
  └── ../js/tea-data.js

pages/wine.html
  ├── css/common.css
  ├── Font Awesome CDN
  ├── ../js/common.js
  └── ../js/wine-data.js

pages/tide.html
  ├── css/common.css
  ├── Font Awesome CDN
  ├── ../js/common.js
  └── ../js/tide-data.js

pages/flower.html
  ├── css/common.css
  ├── Font Awesome CDN
  ├── ../js/common.js
  ├── ../js/flower-data.js
  └── ../js/image-cache.js    (图片缓存)
```

> 注意：所有 `pages/*.html` 使用 `<base href="../">` 将相对路径基准指向项目根目录。

---

## 6. 样式架构 (`css/common.css`)

采用 CSS 自定义属性（变量）实现主题化：

```css
:root {
    --primary: #2c5530;        /* 主色（深绿） */
    --primary-light: #4a7c59;  /* 浅主色 */
    --secondary: #8b4513;      /* 辅色（棕色） */
    --accent: #d4a574;         /* 强调色 */
    --bg: #f5f5f0;             /* 页面背景 */
    --card-bg: #ffffff;        /* 卡片背景 */
    --text: #333333;           /* 正文颜色 */
    --text-light: #666666;     /* 次要文字 */
    --border: #e0e0e0;         /* 边框颜色 */
}
```

各功能模块通过渐变色卡片区分视觉风格：

| 模块 | 渐变色 |
|---|---|
| 穴位查询 | `#2c5530 → #4a7c59`（深绿） |
| 每日穴位 | `#667eea → #764ba2`（紫蓝） |
| 节气饮食 | `#11998e → #38ef7d`（青绿） |
| 运动健康 | `#f093fb → #f5576c`（粉红） |
| 每日茶道 | `#a8e063 → #56ab2f`（草绿） |
| 每日酒道 | `#c31432 → #240b36`（酒红） |
| 潮汐水产 | `#0077b6 → #023e8a`（海蓝） |
| 每日花语 | `#ff6b9d → #c44569`（玫红） |

---

## 7. 部署架构

### 7.1 直接静态部署

将全部文件放置于任意 HTTP 服务器根目录即可。无构建步骤。

### 7.2 Docker 部署

```dockerfile
FROM nginx:latest
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY auth/.htpasswd /etc/nginx/auth/.htpasswd
COPY index.html app.js data.js /usr/share/nginx/html/
COPY css /usr/share/nginx/html/css
COPY js /usr/share/nginx/html/js
COPY pages /usr/share/nginx/html/pages
COPY images /usr/share/nginx/html/images
EXPOSE 80
```

### 7.3 Nginx 鉴权配置

```nginx
location / {
    auth_basic           "TCM access";
    auth_basic_user_file /etc/nginx/auth/.htpasswd;
    try_files $uri $uri/ /index.html;
}
```

使用 `htpasswd` 工具管理用户凭证，实现轻量级访问控制。

### 7.4 GitHub Pages

支持直接推送到 GitHub 仓库的 `main` 分支根目录，通过 GitHub Pages 自动托管。

---

## 8. 数据流图

```
┌──────────┐   用户输入症状    ┌──────────────┐
│  用户     │ ───────────────→ │  app.js      │
│ (浏览器)  │                  │  搜索逻辑     │
└──────────┘                  └──────┬───────┘
       ↑                             │
       │                             ↓
       │                      ┌──────────────┐
       │                      │  data.js     │
       │                      │  穴位数据库   │
       │                      └──────┬───────┘
       │                             │
       │   渲染结果                  ↓
       │ ←───────────────── ┌──────────────┐
       │                     │  DOM 渲染    │
       │                     │  穴位卡片     │
       │                     └──────────────┘
       │
       │   收藏/学习操作
       │ ←───────────────── ┌──────────────┐
       │                     │ localStorage │
       │                     │  持久化存储   │
       │                     └──────────────┘
       │
       │   图片加载
       │ ←───────────────── ┌──────────────┐
                             │ IndexedDB    │
                             │  图片缓存     │
                             └──────────────┘
```

---

## 9. 技术特点与约束

### 优点
- **零依赖**：除 Font Awesome CDN 外无任何第三方 JS 库，加载极快
- **零构建**：无需 webpack/vite 等构建工具，直接编辑即生效
- **移动优先**：`max-width: 500px` 容器 + `user-scalable=no` 适配手机屏幕
- **离线友好**：IndexedDB 图片缓存减少重复下载
- **SEO 友好**：每个页面独立 HTML，内容直接可索引
- **渐进增强**：localStorage/IndexedDB/Geolocation 均有降级处理

### 约束与改进空间
- **数据与逻辑耦合**：`app.js` 同时包含 `dailyAcupointList` 数据和搜索逻辑，且与 `js/acupoint-data.js` 存在数据重复
- **无模块化**：所有脚本通过全局变量通信，无 ES Module/CommonJS 机制
- **样式分散**：页面内嵌 `<style>` 与 `common.css` 并存，存在样式冗余
- **无自动化测试**：缺少单元测试与端到端测试
- **图片依赖外部**：花卉图片主要依赖 Unsplash CDN，存在外链失效风险（已有本地图片库脚本辅助迁移）
- **`index-old.html`**：旧版单页应用残留，已不再使用

---

## 10. 演进历史

1. **v1** (`index-old.html`)：单页应用，所有功能集中在一个 HTML 文件中，通过 JS 动态切换视图
2. **v2** (当前)：拆分为首页 + 8 个独立子页面，每个子页面按需加载对应 JS 数据文件，提升首屏加载速度与可维护性
3. **未来方向**：本地图片库完善、Service Worker 离线缓存、PWA 化

---

> 文档生成日期：2026-05-11
