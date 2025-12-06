// 应用逻辑

// 收藏列表
let favorites = JSON.parse(localStorage.getItem('tcm_favorites') || '[]');

// 食物图标映射
const foodIcons = {
    // 茶饮
    '菊花茶': '🌼', '薄荷茶': '🌿', '绿豆汤': '🥣', '红糖姜茶': '🍵',
    '红糖姜水': '🍵', '生姜红糖水': '🍵', '浓茶': '🍵', '绿茶': '🍵',
    '薄荷': '🌿', '玉米须茶': '🌽', '决明子茶': '🍵', '普洱茶': '🍵',
    '玉瑰花茶': '🌹', '茉莉花茶': '🌼', '柸杞': '🔴',
    // 水果
    '梨': '🍐', '芹菜': '🥬', '苦瓜': '🥒', '香蕉': '🍌', '蓝莓': '🫐',
    '火龙果': '🥝', '西瓜': '🍉', '桃子': '🍑', '苹果': '🍎',
    // 谷物粗粮
    '小米粥': '🍚', '小米': '🌾', '燕麦': '🌾', '红薯': '🍠', '山药': '🥔',
    '黑豆': '⚫', '红豆': '🔴', '红枣': '🍒', '核桃': '🥜', '花生': '🥜',
    // 肉类
    '羊肉': '🥩', '羊肉汤': '🍲', '鸡肉': '🍗', '牛肉': '🥩', '猪肝': '🥩',
    '当归炖鸡': '🍗', '骨头汤': '🍖', '深海鱼': '🐟',
    // 其他食物
    '葱白': '🧅', '紫苏叶茶': '🌿', '梨汤': '🍐', '萝卜汤': '🥕', '萝卜': '🥕',
    '南瓜': '🎃', '生姜': '🧁', '桂圆': '🔴', '当归': '🌿', '韭菜': '🥬',
    '莲子': '🥜', '百合': '🌸', '牛奶': '🥛', '酸奶': '🥛', '胡萝卜': '🥕',
    '蜂蜜': '🍯', '蜂蜜水': '🍯', '柠檬水': '🍋', '坑果': '🥜', '黑巧克力': '🍫',
    '香菇': '🍄', '大蒜': '🧄', '银耳': '🍄', '燕窝': '🥚', '山楂': '🍒',
    '陈皮': '🍊', '麦芽': '🌾', '芝麻': '⚪', '人参茶': '🌿', '黄芪': '🌿',
    // 禁忌食物
    '辛辣食物': '🌶️', '辛辣刺激': '🌶️', '辛辣': '🌶️', '酒精': '🍺', '咖啡': '☕',
    '油炸食品': '🍟', '油腓食物': '🍟', '油腓': '🍟', '生冷食物': '🧊',
    '冰镇饮料': '🧊', '寒凉水果': '🧊', '海鲜发物': '🦐', '蟃蟹': '🦀',
    '暴饮暴食': '⛔', '过咸食物': '🧂', '过酸食物': '🍋', '精细加工食品': '🍞',
    '可乐': '🥤', '高糖食物': '🍬', '过量咖啡': '☕', '过度饮茶': '🍵',
    '熟夜': '🌙', '久坐不动': '🧘', '过度劳累': '😫', '过度日晒': '☀️',
    '长时间看屏幕': '📱', '睡前大量饮水': '💧', '边吃边说话': '🗣️',
    '多喝水': '💧', '多喝温水': '💧', '温热食物': '🍲'
};

// 获取食物图标
function getFoodIcon(food) {
    // 精确匹配
    if (foodIcons[food]) return foodIcons[food];
    // 模糊匹配
    for (let key in foodIcons) {
        if (food.includes(key) || key.includes(food)) {
            return foodIcons[key];
        }
    }
    return '🌿'; // 默认图标
}

// 穴位图片配置 - 使用 Wikimedia Commons 公共领域图片
const acupointImages = {
    // 头面部穴位
    '太阳穴': {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Acupuncture_point_Taiyang.jpg/220px-Acupuncture_point_Taiyang.jpg',
        fallback: '头部侧面',
        desc: '眉梢与外眉角中间，向后约1寸凹陷处'
    },
    '风池穴': {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Acupuncture_point_Fengchi_GB20.jpg/220px-Acupuncture_point_Fengchi_GB20.jpg',
        fallback: '后颈部',
        desc: '后颈部，枢骨之下，胸锁乳突肌与斜方肌上端之间的凹陷中'
    },
    '百会穴': {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Acupuncture_point_Baihui_GV20.jpg/220px-Acupuncture_point_Baihui_GV20.jpg',
        fallback: '头顶',
        desc: '头顶正中线，两耳尖连线的中点'
    },
    '印堂穴': {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Acupuncture_point_Yintang.jpg/220px-Acupuncture_point_Yintang.jpg',
        fallback: '面部',
        desc: '两眉头连线的中点'
    },
    // 手部穴位
    '合谷穴': {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Acupuncture_point_Hegu_LI4.jpg/220px-Acupuncture_point_Hegu_LI4.jpg',
        fallback: '手背',
        desc: '手背第1、2掌骨之间，第2掌骨桦侧中点（虎口处）'
    },
    '内关穴': {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Acupuncture_point_Neiguan_PC6.jpg/220px-Acupuncture_point_Neiguan_PC6.jpg',
        fallback: '前臂内侧',
        desc: '腕横纹上2寸，掌长肌腱与桡侧腕屈肌腱之间'
    },
    '神门穴': {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Acupuncture_point_Shenmen_HT7.jpg/220px-Acupuncture_point_Shenmen_HT7.jpg',
        fallback: '手腕',
        desc: '腕横纹尺侧，尺侧腕屈肌腱桡侧凹陷处'
    },
    '外关穴': {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Acupuncture_point_Waiguan_TE5.jpg/220px-Acupuncture_point_Waiguan_TE5.jpg',
        fallback: '前臂外侧',
        desc: '腕背横纹上2寸，桡骨与尺骨之间'
    },
    // 足部穴位
    '足三里': {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Acupuncture_point_Zusanli_ST36.jpg/220px-Acupuncture_point_Zusanli_ST36.jpg',
        fallback: '小腿外侧',
        desc: '犢鼻下3寸，胫骨前缘一横指处'
    },
    '三阴交': {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Acupuncture_point_Sanyinjiao_SP6.jpg/220px-Acupuncture_point_Sanyinjiao_SP6.jpg',
        fallback: '小腿内侧',
        desc: '内踝尖上3寸，胫骨内侧缘后方'
    },
    '涌泉穴': {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Acupuncture_point_Yongquan_KI1.jpg/220px-Acupuncture_point_Yongquan_KI1.jpg',
        fallback: '足底',
        desc: '足底前1/3与后2/3交点凹陷处'
    },
    '太冲穴': {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Acupuncture_point_Taichong_LR3.jpg/220px-Acupuncture_point_Taichong_LR3.jpg',
        fallback: '足背',
        desc: '足背第1、2趾骨结合部前方凹陷处'
    },
    // 腹部穴位
    '中脘穴': {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Acupuncture_point_Zhongwan_CV12.jpg/220px-Acupuncture_point_Zhongwan_CV12.jpg',
        fallback: '上腹部',
        desc: '前正中线上，脐上4寸'
    },
    '关元穴': {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Acupuncture_point_Guanyuan_CV4.jpg/220px-Acupuncture_point_Guanyuan_CV4.jpg',
        fallback: '下腹部',
        desc: '前正中线上，脐下3寸'
    },
    '气海穴': {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Acupuncture_point_Qihai_CV6.jpg/220px-Acupuncture_point_Qihai_CV6.jpg',
        fallback: '下腹部',
        desc: '前正中线上，脐下1.5寸'
    },
    // 背部穴位
    '肾俞穴': {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Acupuncture_point_Shenshu_BL23.jpg/220px-Acupuncture_point_Shenshu_BL23.jpg',
        fallback: '腰部',
        desc: '第2腰椎棘突下，旁开1.5寸'
    },
    '大椎穴': {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Acupuncture_point_Dazhui_GV14.jpg/220px-Acupuncture_point_Dazhui_GV14.jpg',
        fallback: '颈背部',
        desc: '第7颈椎棘突下凹陷中'
    },
    // 颈肩部穴位
    '肩井穴': {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Acupuncture_point_Jianjing_GB21.jpg/220px-Acupuncture_point_Jianjing_GB21.jpg',
        fallback: '肩部',
        desc: '肩上，大椎与肩峰连线中点'
    },
    '天柱穴': {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/t/t1/Acupuncture_point_Tianzhu_BL10.jpg/220px-Acupuncture_point_Tianzhu_BL10.jpg',
        fallback: '后颈部',
        desc: '后发际正中直上0.5寸，旁开1.3寸'
    }
};

// 获取穴位图片 HTML
function getAcupointImage(name) {
    const config = acupointImages[name];
    if (config && config.img) {
        return `
            <div class="acupoint-img-container">
                <img src="${config.img}" 
                     alt="${name}示意图" 
                     onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
                     loading="lazy">
                <div class="acupoint-img-fallback" style="display:none;">
                    <span class="fallback-icon">📍</span>
                    <span>${config.fallback || '穴位图'}</span>
                </div>
                <div class="acupoint-img-desc">${config.desc}</div>
            </div>
        `;
    }
    // 默认图片
    return `
        <div class="acupoint-img-container">
            <div class="acupoint-img-fallback">
                <span class="fallback-icon">📍</span>
                <span>穴位示意</span>
            </div>
            <div class="acupoint-img-desc">请参考上方文字描述定位</div>
        </div>
    `;
}

// 保留旧的 SVG 作为备用
const acupointSVGs = {
    '太阳穴': `
        <svg viewBox="0 0 200 200" width="180" height="180">
            <defs>
                <linearGradient id="skinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#FFE4C4"/>
                    <stop offset="100%" style="stop-color:#FFDAB9"/>
                </linearGradient>
            </defs>
            <ellipse cx="100" cy="100" rx="70" ry="85" fill="url(#skinGrad)" stroke="#DEB887" stroke-width="2"/>
            <path d="M45 75 Q65 65 85 75" stroke="#4A3728" stroke-width="3" fill="none"/>
            <ellipse cx="70" cy="90" rx="12" ry="8" fill="white" stroke="#4A3728" stroke-width="1"/>
            <circle cx="70" cy="90" r="5" fill="#4A3728"/>
            <ellipse cx="165" cy="100" rx="15" ry="25" fill="url(#skinGrad)" stroke="#DEB887" stroke-width="2"/>
            <circle cx="130" cy="85" r="12" fill="#E74C3C" opacity="0.7">
                <animate attributeName="r" values="10;14;10" dur="1.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="130" cy="85" r="5" fill="#C0392B"/>
            <text x="130" y="38" text-anchor="middle" font-size="12" fill="#8B4513">太阳穴</text>
        </svg>
    `,
    '风池穴': `
        <svg viewBox="0 0 200 200" width="180" height="180">
            <defs>
                <linearGradient id="skinGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#FFE4C4"/>
                    <stop offset="100%" style="stop-color:#FFDAB9"/>
                </linearGradient>
            </defs>
            <ellipse cx="100" cy="70" rx="60" ry="55" fill="url(#skinGrad2)" stroke="#DEB887" stroke-width="2"/>
            <path d="M40 70 Q50 30 100 25 Q150 30 160 70" stroke="#4A3728" stroke-width="2" fill="#5D4037" opacity="0.7"/>
            <rect x="70" y="120" width="60" height="60" rx="10" fill="url(#skinGrad2)" stroke="#DEB887" stroke-width="2"/>
            <circle cx="65" cy="130" r="10" fill="#E74C3C" opacity="0.7">
                <animate attributeName="r" values="8;12;8" dur="1.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="65" cy="130" r="4" fill="#C0392B"/>
            <circle cx="135" cy="130" r="10" fill="#E74C3C" opacity="0.7">
                <animate attributeName="r" values="8;12;8" dur="1.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="135" cy="130" r="4" fill="#C0392B"/>
            <!-- 标注 -->
            <text x="100" y="165" text-anchor="middle" font-size="11" fill="#8B4513">风池穴(左右各一)</text>
        </svg>
    `,
    '合谷穴': `
        <svg viewBox="0 0 200 200" width="180" height="180">
            <defs>
                <linearGradient id="skinGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#FFE4C4"/>
                    <stop offset="100%" style="stop-color:#FFDAB9"/>
                </linearGradient>
            </defs>
            <!-- 手背 -->
            <path d="M50 180 L50 100 Q50 80 70 70 L90 50 L100 70 L85 85 L85 100 L100 80 L110 100 L95 110 L95 120 L115 95 L125 115 L105 130 L105 140 L130 110 L140 130 L110 155 L110 180 Z" 
                  fill="url(#skinGrad3)" stroke="#DEB887" stroke-width="2"/>
            <!-- 合谷穴位置 -->
            <circle cx="85" cy="120" r="12" fill="#E74C3C" opacity="0.7">
                <animate attributeName="r" values="10;14;10" dur="1.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="85" cy="120" r="5" fill="#C0392B"/>
            <!-- 标注 -->
            <line x1="85" y1="120" x2="150" y2="80" stroke="#8B4513" stroke-width="1" stroke-dasharray="3,3"/>
            <text x="155" y="75" font-size="11" fill="#8B4513">合谷穴</text>
            <text x="155" y="88" font-size="9" fill="#8B7355">(虎口处)</text>
        </svg>
    `,
    '足三里': `
        <svg viewBox="0 0 200 220" width="180" height="200">
            <defs>
                <linearGradient id="skinGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#FFE4C4"/>
                    <stop offset="100%" style="stop-color:#FFDAB9"/>
                </linearGradient>
            </defs>
            <!-- 小腿 -->
            <path d="M60 10 L60 200 Q60 210 70 210 L130 210 Q140 210 140 200 L140 10" 
                  fill="url(#skinGrad4)" stroke="#DEB887" stroke-width="2"/>
            <!-- 膝盖 -->
            <ellipse cx="100" cy="25" rx="45" ry="20" fill="#FFDAB9" stroke="#DEB887" stroke-width="2"/>
            <!-- 胫骨 -->
            <line x1="85" y1="45" x2="85" y2="180" stroke="#DEB887" stroke-width="3"/>
            <!-- 足三里位置 -->
            <circle cx="115" cy="95" r="12" fill="#E74C3C" opacity="0.7">
                <animate attributeName="r" values="10;14;10" dur="1.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="115" cy="95" r="5" fill="#C0392B"/>
            <!-- 标注 -->
            <line x1="115" y1="95" x2="165" y2="70" stroke="#8B4513" stroke-width="1" stroke-dasharray="3,3"/>
            <text x="145" y="60" font-size="11" fill="#8B4513">足三里</text>
            <text x="60" y="40" font-size="9" fill="#8B7355">膝盖</text>
            <text x="145" y="75" font-size="9" fill="#8B7355">(独鼻下3寸)</text>
        </svg>
    `,
    '三阴交': `
        <svg viewBox="0 0 200 220" width="180" height="200">
            <defs>
                <linearGradient id="skinGrad5" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#FFE4C4"/>
                    <stop offset="100%" style="stop-color:#FFDAB9"/>
                </linearGradient>
            </defs>
            <!-- 小腿内侧 -->
            <path d="M60 10 L60 180 Q60 200 80 200 L120 200 Q140 200 140 180 L140 10" 
                  fill="url(#skinGrad5)" stroke="#DEB887" stroke-width="2"/>
            <!-- 内踝 -->
            <ellipse cx="80" cy="185" rx="20" ry="12" fill="#FFDAB9" stroke="#DEB887" stroke-width="2"/>
            <!-- 三阴交位置 -->
            <circle cx="75" cy="140" r="12" fill="#E74C3C" opacity="0.7">
                <animate attributeName="r" values="10;14;10" dur="1.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="75" cy="140" r="5" fill="#C0392B"/>
            <!-- 标注 -->
            <line x1="75" y1="140" x2="30" y2="110" stroke="#8B4513" stroke-width="1" stroke-dasharray="3,3"/>
            <text x="10" y="100" font-size="11" fill="#8B4513">三阴交</text>
            <text x="65" y="205" font-size="9" fill="#8B7355">内踝</text>
            <text x="10" y="115" font-size="9" fill="#8B7355">(内踝上3寸)</text>
        </svg>
    `,
    '涌泉穴': `
        <svg viewBox="0 0 200 200" width="180" height="180">
            <defs>
                <linearGradient id="skinGrad6" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#FFE4C4"/>
                    <stop offset="100%" style="stop-color:#FFDAB9"/>
                </linearGradient>
            </defs>
            <!-- 足底 -->
            <ellipse cx="100" cy="100" rx="55" ry="80" fill="url(#skinGrad6)" stroke="#DEB887" stroke-width="2"/>
            <!-- 足趾 -->
            <ellipse cx="65" cy="30" rx="10" ry="12" fill="url(#skinGrad6)" stroke="#DEB887" stroke-width="1"/>
            <ellipse cx="85" cy="25" rx="8" ry="10" fill="url(#skinGrad6)" stroke="#DEB887" stroke-width="1"/>
            <ellipse cx="100" cy="23" rx="7" ry="9" fill="url(#skinGrad6)" stroke="#DEB887" stroke-width="1"/>
            <ellipse cx="115" cy="25" rx="7" ry="9" fill="url(#skinGrad6)" stroke="#DEB887" stroke-width="1"/>
            <ellipse cx="128" cy="30" rx="6" ry="8" fill="url(#skinGrad6)" stroke="#DEB887" stroke-width="1"/>
            <!-- 涌泉穴位置 -->
            <circle cx="100" cy="70" r="12" fill="#E74C3C" opacity="0.7">
                <animate attributeName="r" values="10;14;10" dur="1.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="100" cy="70" r="5" fill="#C0392B"/>
            <!-- 标注 -->
            <text x="100" y="110" text-anchor="middle" font-size="11" fill="#8B4513">涌泉穴</text>
            <text x="100" y="125" text-anchor="middle" font-size="9" fill="#8B7355">(足底前1/3凹陷处)</text>
        </svg>
    `,
    '中脘穴': `
        <svg viewBox="0 0 200 200" width="180" height="180">
            <defs>
                <linearGradient id="skinGrad7" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#FFE4C4"/>
                    <stop offset="100%" style="stop-color:#FFDAB9"/>
                </linearGradient>
            </defs>
            <!-- 腹部 -->
            <ellipse cx="100" cy="110" rx="70" ry="80" fill="url(#skinGrad7)" stroke="#DEB887" stroke-width="2"/>
            <!-- 肚脐 -->
            <ellipse cx="100" cy="130" rx="8" ry="6" fill="#DEB887" stroke="#C4A484" stroke-width="1"/>
            <!-- 中脘穴位置 -->
            <circle cx="100" cy="80" r="12" fill="#E74C3C" opacity="0.7">
                <animate attributeName="r" values="10;14;10" dur="1.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="100" cy="80" r="5" fill="#C0392B"/>
            <!-- 标注 -->
            <line x1="100" y1="80" x2="155" y2="55" stroke="#8B4513" stroke-width="1" stroke-dasharray="3,3"/>
            <text x="145" y="45" font-size="11" fill="#8B4513">中脘穴</text>
            <text x="145" y="60" font-size="9" fill="#8B7355">(脐上4寸)</text>
            <text x="115" y="133" font-size="9" fill="#8B7355">肚脐</text>
        </svg>
    `,
    '关元穴': `
        <svg viewBox="0 0 200 200" width="180" height="180">
            <defs>
                <linearGradient id="skinGrad8" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#FFE4C4"/>
                    <stop offset="100%" style="stop-color:#FFDAB9"/>
                </linearGradient>
            </defs>
            <!-- 下腹部 -->
            <ellipse cx="100" cy="100" rx="70" ry="80" fill="url(#skinGrad8)" stroke="#DEB887" stroke-width="2"/>
            <!-- 肚脐 -->
            <ellipse cx="100" cy="60" rx="8" ry="6" fill="#DEB887" stroke="#C4A484" stroke-width="1"/>
            <!-- 关元穴位置 -->
            <circle cx="100" cy="105" r="12" fill="#E74C3C" opacity="0.7">
                <animate attributeName="r" values="10;14;10" dur="1.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="100" cy="105" r="5" fill="#C0392B"/>
            <!-- 标注 -->
            <line x1="100" y1="105" x2="155" y2="120" stroke="#8B4513" stroke-width="1" stroke-dasharray="3,3"/>
            <text x="145" y="135" font-size="11" fill="#8B4513">关元穴</text>
            <text x="145" y="150" font-size="9" fill="#8B7355">(脐下3寸)</text>
            <text x="115" y="63" font-size="9" fill="#8B7355">肚脐</text>
        </svg>
    `,
    '内关穴': `
        <svg viewBox="0 0 200 200" width="180" height="180">
            <defs>
                <linearGradient id="skinGrad9" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#FFE4C4"/>
                    <stop offset="100%" style="stop-color:#FFDAB9"/>
                </linearGradient>
            </defs>
            <!-- 前臂 -->
            <rect x="50" y="30" width="100" height="150" rx="20" fill="url(#skinGrad9)" stroke="#DEB887" stroke-width="2"/>
            <!-- 手腕横纹 -->
            <line x1="55" y1="160" x2="145" y2="160" stroke="#DEB887" stroke-width="2"/>
            <line x1="55" y1="165" x2="145" y2="165" stroke="#DEB887" stroke-width="1"/>
            <!-- 内关穴位置 -->
            <circle cx="100" cy="130" r="12" fill="#E74C3C" opacity="0.7">
                <animate attributeName="r" values="10;14;10" dur="1.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="100" cy="130" r="5" fill="#C0392B"/>
            <!-- 标注 -->
            <line x1="100" y1="130" x2="160" y2="100" stroke="#8B4513" stroke-width="1" stroke-dasharray="3,3"/>
            <text x="145" y="90" font-size="11" fill="#8B4513">内关穴</text>
            <text x="145" y="105" font-size="9" fill="#8B7355">(腕横纹上2寸)</text>
            <text x="100" y="185" text-anchor="middle" font-size="9" fill="#8B7355">手掌侧</text>
        </svg>
    `,
    '神门穴': `
        <svg viewBox="0 0 200 200" width="180" height="180">
            <defs>
                <linearGradient id="skinGrad10" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#FFE4C4"/>
                    <stop offset="100%" style="stop-color:#FFDAB9"/>
                </linearGradient>
            </defs>
            <!-- 手腕 -->
            <rect x="40" y="80" width="120" height="80" rx="15" fill="url(#skinGrad10)" stroke="#DEB887" stroke-width="2"/>
            <!-- 手掌 -->
            <ellipse cx="100" cy="45" rx="50" ry="35" fill="url(#skinGrad10)" stroke="#DEB887" stroke-width="2"/>
            <!-- 腕横纹 -->
            <line x1="45" y1="85" x2="155" y2="85" stroke="#DEB887" stroke-width="2"/>
            <!-- 神门穴位置 -->
            <circle cx="60" cy="85" r="10" fill="#E74C3C" opacity="0.7">
                <animate attributeName="r" values="8;12;8" dur="1.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="60" cy="85" r="4" fill="#C0392B"/>
            <!-- 标注 -->
            <line x1="60" y1="85" x2="30" y2="130" stroke="#8B4513" stroke-width="1" stroke-dasharray="3,3"/>
            <text x="15" y="145" font-size="11" fill="#8B4513">神门穴</text>
            <text x="15" y="160" font-size="9" fill="#8B7355">(腕横纹尺侧)</text>
        </svg>
    `,
    '百会穴': `
        <svg viewBox="0 0 200 200" width="180" height="180">
            <defs>
                <linearGradient id="skinGrad11" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#FFE4C4"/>
                    <stop offset="100%" style="stop-color:#FFDAB9"/>
                </linearGradient>
            </defs>
            <!-- 头顶 -->
            <ellipse cx="100" cy="110" rx="70" ry="75" fill="url(#skinGrad11)" stroke="#DEB887" stroke-width="2"/>
            <!-- 头发 -->
            <path d="M30 100 Q40 40 100 30 Q160 40 170 100" stroke="#4A3728" stroke-width="2" fill="#5D4037" opacity="0.6"/>
            <!-- 耳朵 -->
            <ellipse cx="30" cy="120" rx="12" ry="20" fill="url(#skinGrad11)" stroke="#DEB887" stroke-width="1"/>
            <ellipse cx="170" cy="120" rx="12" ry="20" fill="url(#skinGrad11)" stroke="#DEB887" stroke-width="1"/>
            <!-- 百会穴位置 -->
            <circle cx="100" cy="55" r="12" fill="#E74C3C" opacity="0.7">
                <animate attributeName="r" values="10;14;10" dur="1.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="100" cy="55" r="5" fill="#C0392B"/>
            <!-- 标注 -->
            <text x="100" y="20" text-anchor="middle" font-size="11" fill="#8B4513">百会穴</text>
            <text x="100" y="190" text-anchor="middle" font-size="9" fill="#8B7355">(头顶正中)</text>
        </svg>
    `,
    '肾俞穴': `
        <svg viewBox="0 0 200 200" width="180" height="180">
            <defs>
                <linearGradient id="skinGrad12" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#FFE4C4"/>
                    <stop offset="100%" style="stop-color:#FFDAB9"/>
                </linearGradient>
            </defs>
            <!-- 背部/腰部 -->
            <rect x="40" y="30" width="120" height="150" rx="20" fill="url(#skinGrad12)" stroke="#DEB887" stroke-width="2"/>
            <!-- 脊柱 -->
            <line x1="100" y1="35" x2="100" y2="175" stroke="#DEB887" stroke-width="4"/>
            <!-- 肾俞穴位置 (左右各一) -->
            <circle cx="70" cy="100" r="10" fill="#E74C3C" opacity="0.7">
                <animate attributeName="r" values="8;12;8" dur="1.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="70" cy="100" r="4" fill="#C0392B"/>
            <circle cx="130" cy="100" r="10" fill="#E74C3C" opacity="0.7">
                <animate attributeName="r" values="8;12;8" dur="1.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="130" cy="100" r="4" fill="#C0392B"/>
            <!-- 标注 -->
            <text x="100" y="20" text-anchor="middle" font-size="11" fill="#8B4513">肾俞穴</text>
            <text x="100" y="190" text-anchor="middle" font-size="9" fill="#8B7355">(第2腰椎旁开1.5寸)</text>
        </svg>
    `,
    'default': `
        <svg viewBox="0 0 200 200" width="180" height="180">
            <defs>
                <linearGradient id="defaultGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#FFE4C4"/>
                    <stop offset="100%" style="stop-color:#FFDAB9"/>
                </linearGradient>
            </defs>
            <!-- 通用人体轮廓 -->
            <ellipse cx="100" cy="100" rx="60" ry="70" fill="url(#defaultGrad)" stroke="#DEB887" stroke-width="2"/>
            <!-- 穴位标记 -->
            <circle cx="100" cy="100" r="15" fill="#E74C3C" opacity="0.7">
                <animate attributeName="r" values="12;18;12" dur="1.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="100" cy="100" r="6" fill="#C0392B"/>
            <!-- 文字 -->
            <text x="100" y="160" text-anchor="middle" font-size="12" fill="#8B4513">穴位示意图</text>
        </svg>
    `
};

// 获取穴位图
function getAcupointSVG(name) {
    return acupointSVGs[name] || acupointSVGs['default'];
}

// 页面切换
function switchPage(pageName) {
    // 隐藏所有页面
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // 显示目标页面
    document.getElementById(`page-${pageName}`).classList.add('active');
    
    // 更新导航状态
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
    
    // 如果是收藏页面，刷新收藏列表
    if (pageName === 'favorites') {
        renderFavorites();
    }
    
    // 隐藏搜索结果
    if (pageName === 'home') {
        document.getElementById('results').classList.remove('show');
    }
}

// 搜索症状
function searchSymptom() {
    const input = document.getElementById('search-input');
    const query = input.value.trim();
    if (query) {
        selectSymptom(query);
    }
}

// 选择症状
function selectSymptom(symptom) {
    document.getElementById('search-input').value = symptom;
    
    // 查找匹配的数据
    let data = acupointData[symptom];
    
    // 如果没有精确匹配，尝试模糊匹配
    if (!data) {
        for (let key in acupointData) {
            if (key.includes(symptom) || symptom.includes(key)) {
                data = acupointData[key];
                symptom = key;
                break;
            }
        }
    }
    
    if (data) {
        renderResults(symptom, data);
    } else {
        document.getElementById('results').innerHTML = `
            <div class="empty-state">
                <i class="fas fa-search"></i>
                <p>未找到"${symptom}"相关的穴位信息</p>
                <p style="font-size: 13px; margin-top: 8px;">请尝试其他症状关键词</p>
            </div>
        `;
        document.getElementById('results').classList.add('show');
    }
}

// 渲染搜索结果
function renderResults(symptom, data) {
    const resultsDiv = document.getElementById('results');
    
    let html = `
        <div class="result-header">
            <h2>🩺 ${symptom} - 推荐穴位</h2>
            <button class="back-btn" onclick="hideResults()">
                <i class="fas fa-times"></i> 关闭
            </button>
        </div>
    `;
    
    // 渲染穴位卡片
    data.acupoints.forEach((acupoint, index) => {
        html += renderAcupointCard(acupoint, symptom);
    });
    
    // 渲染饮食建议
    if (data.diet) {
        html += `
            <div class="diet-card">
                <div class="section-title">
                    <i class="fas fa-utensils"></i> 饮食建议
                </div>
                <div class="acupoint-section">
                    <div class="section-title" style="color: #228B22;">
                        <i class="fas fa-check-circle"></i> 推荐食物
                    </div>
                    <div class="food-grid">
                        ${data.diet.recommended.map(food => `
                            <span class="food-item good">
                                <span class="food-icon">${getFoodIcon(food)}</span>
                                ${food}
                            </span>
                        `).join('')}
                    </div>
                </div>
                <div class="acupoint-section">
                    <div class="section-title" style="color: #CD5C5C;">
                        <i class="fas fa-times-circle"></i> 忌口食物
                    </div>
                    <div class="food-grid">
                        ${data.diet.avoid.map(food => `
                            <span class="food-item avoid">
                                <span class="food-icon">${getFoodIcon(food)}</span>
                                ${food}
                            </span>
                        `).join('')}
                    </div>
                </div>
                <div class="notice">
                    <i class="fas fa-lightbulb"></i> ${data.diet.tips}
                </div>
            </div>
        `;
    }
    
    // 免责声明
    html += `
        <div class="notice" style="margin-top: 20px;">
            <i class="fas fa-exclamation-triangle"></i>
            <strong>温馨提示：</strong>以上内容仅供参考，不能替代专业医疗建议。如症状严重或持续，请及时就医。
        </div>
    `;
    
    resultsDiv.innerHTML = html;
    resultsDiv.classList.add('show');
    
    // 滚动到结果区域
    resultsDiv.scrollIntoView({ behavior: 'smooth' });
}

// 渲染穴位卡片
function renderAcupointCard(acupoint, category = '') {
    const isFavorited = favorites.some(f => f.name === acupoint.name);
    const favoriteId = `${acupoint.name}_${category}`;
    
    return `
        <div class="acupoint-card">
            <div class="acupoint-header">
                <div class="acupoint-icon">
                    <i class="fas fa-dot-circle"></i>
                </div>
                <div class="acupoint-title">
                    <h3>${acupoint.name}</h3>
                    <span>${acupoint.pinyin} · ${acupoint.meridian}</span>
                </div>
                <button onclick="toggleFavorite('${acupoint.name}', '${category}')" 
                        style="background: none; border: none; font-size: 20px; cursor: pointer; color: ${isFavorited ? '#FFD700' : '#ccc'};">
                    <i class="fas fa-star"></i>
                </button>
            </div>
            
            <!-- 穴位示意图 -->
            <div class="acupoint-image">
                ${getAcupointImage(acupoint.name)}
            </div>
            
            <div class="acupoint-section">
                <div class="section-title">
                    <i class="fas fa-map-marker-alt"></i> 穴位位置
                </div>
                <div class="section-content">${acupoint.location}</div>
            </div>
            
            <div class="acupoint-section">
                <div class="section-title">
                    <i class="fas fa-hand-holding-medical"></i> 按摩方法
                </div>
                <div class="section-content">${acupoint.massage.method}</div>
                <div class="massage-params">
                    <div class="param-item">
                        <div class="param-value">${acupoint.massage.duration}</div>
                        <div class="param-label">时长</div>
                    </div>
                    <div class="param-item">
                        <div class="param-value">${acupoint.massage.frequency}</div>
                        <div class="param-label">频率</div>
                    </div>
                    <div class="param-item">
                        <div class="param-value">${acupoint.massage.strength.split('，')[0]}</div>
                        <div class="param-label">力度</div>
                    </div>
                </div>
            </div>
            
            <div class="acupoint-section">
                <div class="section-title">
                    <i class="fas fa-magic"></i> 主要功效
                </div>
                <div class="section-content">
                    <ul>
                        ${acupoint.effects.map(effect => `<li>${effect}</li>`).join('')}
                    </ul>
                </div>
            </div>
            
            ${acupoint.tips ? `
            <div class="notice">
                <i class="fas fa-info-circle"></i> ${acupoint.tips}
            </div>
            ` : ''}
        </div>
    `;
}

// 隐藏结果
function hideResults() {
    document.getElementById('results').classList.remove('show');
    document.getElementById('search-input').value = '';
}

// 选择身体部位
function selectBodyPart(part) {
    const acupoints = bodyPartData[part];
    if (!acupoints) return;
    
    const resultsDiv = document.getElementById('body-results');
    
    let html = `
        <div class="result-header">
            <h2>📍 ${part}穴位</h2>
        </div>
    `;
    
    acupoints.forEach(name => {
        // 先从详细数据中查找
        let acupoint = acupointDetails[name];
        
        // 如果没有，从症状数据中查找
        if (!acupoint) {
            for (let symptom in acupointData) {
                const found = acupointData[symptom].acupoints.find(a => a.name === name);
                if (found) {
                    acupoint = found;
                    break;
                }
            }
        }
        
        if (acupoint) {
            html += renderAcupointCard(acupoint, part);
        }
    });
    
    resultsDiv.innerHTML = html;
    resultsDiv.classList.add('show');
    resultsDiv.scrollIntoView({ behavior: 'smooth' });
}

// 收藏/取消收藏
function toggleFavorite(name, category) {
    const index = favorites.findIndex(f => f.name === name);
    
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        // 查找穴位详情
        let acupoint = acupointDetails[name];
        if (!acupoint) {
            for (let symptom in acupointData) {
                const found = acupointData[symptom].acupoints.find(a => a.name === name);
                if (found) {
                    acupoint = found;
                    break;
                }
            }
        }
        if (acupoint) {
            favorites.push({
                name: acupoint.name,
                pinyin: acupoint.pinyin,
                category: category
            });
        }
    }
    
    localStorage.setItem('tcm_favorites', JSON.stringify(favorites));
    
    // 刷新当前显示
    const resultsDiv = document.getElementById('results');
    if (resultsDiv.classList.contains('show')) {
        const symptom = document.getElementById('search-input').value;
        if (acupointData[symptom]) {
            renderResults(symptom, acupointData[symptom]);
        }
    }
    
    const bodyResultsDiv = document.getElementById('body-results');
    if (bodyResultsDiv.classList.contains('show')) {
        // 重新渲染身体部位结果
        const activePart = document.querySelector('.body-part-btn.active');
        if (activePart) {
            selectBodyPart(activePart.querySelector('span').textContent);
        }
    }
}

// 渲染收藏列表
function renderFavorites() {
    const listDiv = document.getElementById('favorites-list');
    
    if (favorites.length === 0) {
        listDiv.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-bookmark"></i>
                <p>暂无收藏</p>
                <p style="font-size: 13px; margin-top: 8px;">点击穴位卡片上的星标添加收藏</p>
            </div>
        `;
        return;
    }
    
    let html = '<div class="symptom-tags"><h3>⭐ 我的收藏</h3></div>';
    
    favorites.forEach(fav => {
        let acupoint = acupointDetails[fav.name];
        if (!acupoint) {
            for (let symptom in acupointData) {
                const found = acupointData[symptom].acupoints.find(a => a.name === fav.name);
                if (found) {
                    acupoint = found;
                    break;
                }
            }
        }
        
        if (acupoint) {
            html += renderAcupointCard(acupoint, fav.category);
        }
    });
    
    listDiv.innerHTML = html;
}

// 搜索框回车事件
document.getElementById('search-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchSymptom();
    }
});

// PWA 支持
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // 可以添加 service worker 支持离线使用
    });
}
