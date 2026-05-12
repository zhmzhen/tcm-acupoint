// 花语数据
export const flowerData = [
    {
        name: '玫瑰',
        nameEn: 'Rose',
        icon: '🌹',
        imageUrl: 'https://source.unsplash.com/featured/400x400/?rose,red-rose,flower&sig=rose',
        language: '爱情、热情、美丽、浪漫',
        meaning: '玫瑰是爱情的象征，被誉为"花中皇后"。不同颜色的玫瑰有着不同的花语：红玫瑰代表热烈的爱情，粉玫瑰代表初恋和温馨，白玫瑰代表纯洁和尊敬，黄玫瑰代表友谊和祝福，蓝玫瑰代表奇迹和不可能实现的事。',
        suitableHolidays: [
            {
                holiday: '情人节',
                recommendation: '红玫瑰11朵或99朵',
                meaning: '一心一意或长长久久的爱',
                color: '红色',
                tips: '可选择搭配满天星或勿忘我，包装精美更能表达心意'
            },
            {
                holiday: '生日',
                recommendation: '粉玫瑰或香槟玫瑰',
                meaning: '温馨祝福，表达关怀',
                color: '粉色、香槟色',
                tips: '可根据对方喜好选择颜色，搭配生日卡片'
            },
            {
                holiday: '结婚纪念日',
                recommendation: '红玫瑰或粉玫瑰',
                meaning: '重温浪漫，表达永恒的爱',
                color: '红色、粉色',
                tips: '可选择99朵或108朵，象征长长久久'
            },
            {
                holiday: '母亲节',
                recommendation: '粉玫瑰或康乃馨',
                meaning: '表达对母亲的感激和爱',
                color: '粉色',
                tips: '可搭配康乃馨，表达双重祝福'
            }
        ],
        care: {
            light: '充足阳光，避免强烈直射，每天至少6小时光照',
            water: '保持土壤湿润，避免积水，浇水时避免淋到花朵',
            temperature: '15-25°C，冬季不低于5°C',
            fertilizer: '生长期每2周施一次复合肥',
            tips: '定期修剪残花和枯枝，促进新枝生长；注意防治蚜虫和黑斑病'
        },
        season: '全年，5-6月最盛',
        price: '5-50元/枝（根据品种和季节）',
        color: ['红色', '粉色', '白色', '黄色', '香槟色', '蓝色'],
        origin: '中国、欧洲、中东',
        tips: '送花时注意花语含义，不同颜色有不同寓意；红玫瑰适合恋人，粉玫瑰适合朋友和长辈'
    },
    {
        name: '康乃馨',
        nameEn: 'Carnation',
        icon: '💐',
        imageUrl: 'https://source.unsplash.com/featured/400x400/?carnation,flower&sig=carnation',
        language: '母爱、尊敬、温馨、祝福',
        meaning: '康乃馨是母亲节的象征花卉，代表着母爱、尊敬和温馨。粉色康乃馨代表母爱，红色代表热情和爱，白色代表纯洁和尊敬，黄色代表友谊。',
        suitableHolidays: [
            {
                holiday: '母亲节',
                recommendation: '粉色康乃馨11朵或19朵',
                meaning: '表达对母亲的感激和爱',
                color: '粉色',
                tips: '可搭配百合或玫瑰，制作精美花束'
            },
            {
                holiday: '教师节',
                recommendation: '红色或粉色康乃馨',
                meaning: '表达对老师的尊敬和感谢',
                color: '红色、粉色',
                tips: '可搭配向日葵，象征阳光和希望'
            },
            {
                holiday: '护士节',
                recommendation: '白色或粉色康乃馨',
                meaning: '表达对医护人员的敬意',
                color: '白色、粉色',
                tips: '可搭配满天星，简洁优雅'
            },
            {
                holiday: '生日',
                recommendation: '彩色康乃馨',
                meaning: '温馨祝福',
                color: '多色',
                tips: '可根据对方喜好选择颜色搭配'
            }
        ],
        care: {
            light: '充足散射光，避免强烈直射',
            water: '保持土壤湿润，避免积水，可向叶片喷水',
            temperature: '15-20°C，夏季注意遮阴',
            fertilizer: '生长期每2周施一次液肥',
            tips: '及时摘除残花，促进侧枝生长；注意通风，防止病害'
        },
        season: '全年，5-6月最盛',
        price: '3-15元/枝',
        color: ['粉色', '红色', '白色', '黄色', '紫色', '复色'],
        origin: '地中海沿岸',
        tips: '康乃馨花期长，适合长期观赏；送母亲时首选粉色'
    },
    {
        name: '百合',
        nameEn: 'Lily',
        icon: '🌺',
        imageUrl: 'https://source.unsplash.com/featured/400x400/?white-lily,oriental-lily,flower&sig=lily',
        language: '纯洁、高贵、百年好合、祝福',
        meaning: '百合花象征着纯洁、高贵和百年好合。白百合代表纯洁和庄严，粉百合代表高雅和祝福，黄百合代表财富和快乐。在中国文化中，百合有"百年好合"的美好寓意。',
        suitableHolidays: [
            {
                holiday: '结婚纪念日',
                recommendation: '白百合或粉百合',
                meaning: '百年好合，永结同心',
                color: '白色、粉色',
                tips: '可搭配玫瑰，象征爱情和美满'
            },
            {
                holiday: '生日',
                recommendation: '粉百合或黄百合',
                meaning: '祝福和快乐',
                color: '粉色、黄色',
                tips: '注意花粉过敏，可提前去除花蕊'
            },
            {
                holiday: '乔迁',
                recommendation: '白百合或粉百合',
                meaning: '祝福新居，生活美满',
                color: '白色、粉色',
                tips: '可搭配富贵竹，寓意吉祥'
            },
            {
                holiday: '开业',
                recommendation: '黄百合',
                meaning: '财源广进，事业顺利',
                color: '黄色',
                tips: '可搭配向日葵，象征蒸蒸日上'
            }
        ],
        care: {
            light: '充足散射光，避免强烈直射',
            water: '保持土壤湿润，避免积水',
            temperature: '15-25°C，冬季不低于10°C',
            fertilizer: '生长期每月施一次复合肥',
            tips: '及时摘除花蕊，避免花粉污染；注意通风，防止病害'
        },
        season: '全年，6-8月最盛',
        price: '8-30元/枝（根据品种）',
        color: ['白色', '粉色', '黄色', '橙色', '红色'],
        origin: '中国、日本、欧洲',
        tips: '百合花香浓郁，注意花粉过敏；送新婚夫妇首选白百合'
    },
    {
        name: '向日葵',
        nameEn: 'Sunflower',
        icon: '🌻',
        imageUrl: 'https://source.unsplash.com/featured/400x400/?sunflower,yellow-flower&sig=sunflower',
        language: '阳光、希望、忠诚、积极向上',
        meaning: '向日葵象征着阳光、希望和积极向上的精神。它总是面向太阳，代表着忠诚和追求光明的品质。适合送给朋友、同事，表达鼓励和祝福。',
        suitableHolidays: [
            {
                holiday: '毕业',
                recommendation: '向日葵花束',
                meaning: '祝福前程似锦，积极向上',
                color: '黄色',
                tips: '可搭配绿色配叶，象征希望和成长'
            },
            {
                holiday: '开业',
                recommendation: '向日葵花篮',
                meaning: '事业蒸蒸日上，财源广进',
                color: '黄色',
                tips: '可搭配黄百合，寓意金玉满堂'
            },
            {
                holiday: '生日',
                recommendation: '向日葵花束',
                meaning: '阳光快乐，积极向上',
                color: '黄色',
                tips: '适合送给性格开朗的朋友'
            },
            {
                holiday: '教师节',
                recommendation: '向日葵搭配康乃馨',
                meaning: '阳光和希望，表达敬意',
                color: '黄色',
                tips: '象征老师如阳光般温暖学生'
            }
        ],
        care: {
            light: '需要充足阳光，每天至少8小时直射光',
            water: '保持土壤湿润，但避免积水',
            temperature: '18-30°C，耐高温',
            fertilizer: '生长期每2周施一次复合肥',
            tips: '及时支撑高大植株，防止倒伏；注意防治蚜虫'
        },
        season: '7-9月',
        price: '5-20元/枝',
        color: ['黄色', '橙色', '红色', '棕色'],
        origin: '北美洲',
        tips: '向日葵代表积极向上，适合鼓励和祝福的场合'
    },
    {
        name: '郁金香',
        nameEn: 'Tulip',
        icon: '🌷',
        imageUrl: 'https://source.unsplash.com/featured/400x400/?tulip,flower&sig=tulip',
        language: '爱的表白、永恒、优雅、富贵',
        meaning: '郁金香是荷兰的国花，象征着爱的表白和永恒。不同颜色的郁金香有不同的含义：红郁金香代表热烈的爱，粉郁金香代表永恒的爱，黄郁金香代表财富和友谊，紫郁金香代表高贵的爱。',
        suitableHolidays: [
            {
                holiday: '情人节',
                recommendation: '红郁金香或粉郁金香',
                meaning: '爱的表白，永恒的爱',
                color: '红色、粉色',
                tips: '可搭配满天星，制作精美花束'
            },
            {
                holiday: '生日',
                recommendation: '彩色郁金香',
                meaning: '祝福和优雅',
                color: '多色',
                tips: '可根据对方喜好选择颜色'
            },
            {
                holiday: '开业',
                recommendation: '黄郁金香',
                meaning: '财源广进，事业顺利',
                color: '黄色',
                tips: '可搭配其他黄色花卉'
            },
            {
                holiday: '结婚纪念日',
                recommendation: '粉郁金香或紫郁金香',
                meaning: '永恒的爱，高贵的爱',
                color: '粉色、紫色',
                tips: '象征爱情永恒'
            }
        ],
        care: {
            light: '充足阳光，避免强烈直射',
            water: '保持土壤湿润，避免积水',
            temperature: '15-20°C，夏季休眠',
            fertilizer: '生长期每2周施一次液肥',
            tips: '花后及时剪除残花，保留叶片；夏季休眠期保持干燥'
        },
        season: '3-5月',
        price: '10-40元/枝（根据品种和季节）',
        color: ['红色', '粉色', '黄色', '紫色', '白色', '复色'],
        origin: '土耳其、荷兰',
        tips: '郁金香是春季花卉，花期较短但非常美丽'
    },
    {
        name: '茉莉',
        nameEn: 'Jasmine',
        icon: '🌼',
        imageUrl: 'https://source.unsplash.com/featured/400x400/?jasmine,white-flower&sig=jasmine',
        language: '纯洁、友谊、忠贞、清雅',
        meaning: '茉莉花象征着纯洁、友谊和忠贞。其清香淡雅，代表着清雅脱俗的品质。在中国文化中，茉莉花还代表着"莫离"，寓意不离不弃。',
        suitableHolidays: [
            {
                holiday: '生日',
                recommendation: '茉莉花束或盆栽',
                meaning: '纯洁友谊，不离不弃',
                color: '白色',
                tips: '可送盆栽，寓意友谊长久'
            },
            {
                holiday: '毕业',
                recommendation: '茉莉花束',
                meaning: '纯洁友谊，祝福前程',
                color: '白色',
                tips: '适合送给同窗好友'
            },
            {
                holiday: '探病',
                recommendation: '茉莉花束',
                meaning: '清雅祝福，早日康复',
                color: '白色',
                tips: '清香淡雅，适合病房环境'
            }
        ],
        care: {
            light: '充足阳光，夏季适当遮阴',
            water: '保持土壤湿润，避免积水',
            temperature: '20-30°C，冬季不低于10°C',
            fertilizer: '生长期每2周施一次液肥',
            tips: '定期修剪，促进分枝；注意防治红蜘蛛'
        },
        season: '5-10月',
        price: '15-50元/盆（盆栽）',
        color: ['白色', '淡黄色'],
        origin: '中国、印度',
        tips: '茉莉花香浓郁，适合室内观赏；可制作花茶'
    },
    {
        name: '牡丹',
        nameEn: 'Peony',
        icon: '🌸',
        imageUrl: 'https://source.unsplash.com/featured/400x400/?peony,flower&sig=peony',
        language: '富贵、吉祥、繁荣、国色天香',
        meaning: '牡丹被誉为"花中之王"，象征着富贵、吉祥和繁荣。在中国文化中，牡丹代表着国色天香、雍容华贵，是繁荣昌盛的象征。',
        suitableHolidays: [
            {
                holiday: '开业',
                recommendation: '牡丹花篮',
                meaning: '富贵吉祥，财源广进',
                color: '红色、粉色',
                tips: '可搭配其他富贵花卉'
            },
            {
                holiday: '乔迁',
                recommendation: '牡丹花束',
                meaning: '富贵吉祥，生活美满',
                color: '红色、粉色',
                tips: '象征新居富贵吉祥'
            },
            {
                holiday: '春节',
                recommendation: '牡丹盆栽或花束',
                meaning: '富贵吉祥，新年大吉',
                color: '红色、粉色',
                tips: '适合春节装饰，寓意新年富贵'
            },
            {
                holiday: '生日',
                recommendation: '牡丹花束',
                meaning: '富贵吉祥，祝福长寿',
                color: '多色',
                tips: '适合送给长辈'
            }
        ],
        care: {
            light: '充足阳光，避免强烈直射',
            water: '保持土壤湿润，避免积水',
            temperature: '15-25°C，冬季需要休眠',
            fertilizer: '生长期每月施一次复合肥',
            tips: '花后及时修剪，促进来年开花；注意防治病害'
        },
        season: '4-5月',
        price: '20-100元/枝（根据品种）',
        color: ['红色', '粉色', '白色', '黄色', '紫色', '复色'],
        origin: '中国',
        tips: '牡丹是中国的国花候选，象征富贵吉祥'
    },
    {
        name: '菊花',
        nameEn: 'Chrysanthemum',
        icon: '🌼',
        imageUrl: 'https://source.unsplash.com/featured/400x400/?chrysanthemum,flower&sig=chrysanthemum',
        language: '高洁、隐逸、长寿、思念',
        meaning: '菊花象征着高洁、隐逸和长寿。在中国文化中，菊花是"四君子"之一，代表着高洁的品格。白菊代表哀思，黄菊代表长寿，红菊代表热情。',
        suitableHolidays: [
            {
                holiday: '清明节',
                recommendation: '白菊或黄菊',
                meaning: '表达哀思和怀念',
                color: '白色、黄色',
                tips: '适合祭奠和怀念'
            },
            {
                holiday: '重阳节',
                recommendation: '黄菊或彩菊',
                meaning: '长寿和健康',
                color: '黄色、多色',
                tips: '可搭配茱萸，传统重阳习俗'
            },
            {
                holiday: '生日',
                recommendation: '彩菊',
                meaning: '祝福长寿',
                color: '多色',
                tips: '适合送给长辈'
            },
            {
                holiday: '探病',
                recommendation: '黄菊或白菊',
                meaning: '祝福健康，早日康复',
                color: '黄色、白色',
                tips: '注意避免送白菊给某些地区的人'
            }
        ],
        care: {
            light: '充足阳光，避免强烈直射',
            water: '保持土壤湿润，避免积水',
            temperature: '15-25°C，耐寒',
            fertilizer: '生长期每2周施一次复合肥',
            tips: '及时摘心，促进分枝；注意防治蚜虫和白粉病'
        },
        season: '9-11月',
        price: '5-30元/枝（根据品种）',
        color: ['黄色', '白色', '红色', '粉色', '紫色', '绿色'],
        origin: '中国',
        tips: '菊花品种繁多，注意不同颜色的花语含义'
    },
    {
        name: '梅花',
        nameEn: 'Plum Blossom',
        icon: '🌺',
        imageUrl: 'https://source.unsplash.com/featured/400x400/?plum-blossom,flower&sig=plum',
        language: '坚强、高洁、傲骨、报春',
        meaning: '梅花象征着坚强、高洁和傲骨。在中国文化中，梅花是"四君子"之一，代表着不畏严寒、坚韧不拔的品质。梅花还代表着报春，预示着春天的到来。',
        suitableHolidays: [
            {
                holiday: '春节',
                recommendation: '梅花盆栽或花束',
                meaning: '坚强高洁，新年大吉',
                color: '红色、粉色、白色',
                tips: '适合春节装饰，寓意坚强和希望'
            },
            {
                holiday: '生日',
                recommendation: '梅花花束',
                meaning: '坚强品格，祝福长寿',
                color: '红色、粉色',
                tips: '适合送给有品格的长辈'
            },
            {
                holiday: '毕业',
                recommendation: '梅花花束',
                meaning: '坚强品格，前程似锦',
                color: '红色、粉色',
                tips: '鼓励毕业生坚强面对未来'
            }
        ],
        care: {
            light: '充足阳光',
            water: '保持土壤湿润，避免积水',
            temperature: '0-15°C，耐寒',
            fertilizer: '花后施一次复合肥',
            tips: '花后及时修剪，促进来年开花；注意防治病害'
        },
        season: '12月-3月',
        price: '30-100元/枝（根据品种）',
        color: ['红色', '粉色', '白色', '黄色'],
        origin: '中国',
        tips: '梅花是中国的传统名花，象征坚强和高洁'
    },
    {
        name: '兰花',
        nameEn: 'Orchid',
        icon: '🌿',
        imageUrl: 'https://source.unsplash.com/featured/400x400/?orchid,flower&sig=orchid',
        language: '高雅、淡泊、君子、友谊',
        meaning: '兰花象征着高雅、淡泊和君子品格。在中国文化中，兰花是"四君子"之一，代表着淡泊名利、高雅脱俗的品质。兰花还代表着友谊和美好。',
        suitableHolidays: [
            {
                holiday: '生日',
                recommendation: '兰花盆栽',
                meaning: '高雅品格，祝福长寿',
                color: '多色',
                tips: '适合送给有品位的朋友或长辈'
            },
            {
                holiday: '乔迁',
                recommendation: '兰花盆栽',
                meaning: '高雅品格，生活美好',
                color: '多色',
                tips: '适合装饰新居，提升品味'
            },
            {
                holiday: '教师节',
                recommendation: '兰花盆栽',
                meaning: '高雅品格，表达敬意',
                color: '多色',
                tips: '适合送给有品位的老师'
            }
        ],
        care: {
            light: '散射光，避免强烈直射',
            water: '保持土壤微湿，避免积水',
            temperature: '15-25°C，避免高温',
            fertilizer: '生长期每月施一次专用肥',
            tips: '注意通风，保持空气湿度；避免强光直射'
        },
        season: '全年，不同品种花期不同',
        price: '50-500元/盆（根据品种）',
        color: ['白色', '粉色', '黄色', '紫色', '绿色', '复色'],
        origin: '中国、东南亚',
        tips: '兰花是高档观赏花卉，需要精心养护'
    },
    {
        name: '薰衣草',
        nameEn: 'Lavender',
        icon: '💜',
        imageUrl: 'https://source.unsplash.com/featured/400x400/?lavender,purple-flower&sig=lavender',
        language: '等待爱情、宁静、浪漫、祝福',
        meaning: '薰衣草象征着等待爱情、宁静和浪漫。其淡雅的紫色和独特的香气，代表着宁静致远、浪漫温馨的品质。薰衣草还代表着祝福和好运。',
        suitableHolidays: [
            {
                holiday: '情人节',
                recommendation: '薰衣草花束或干花',
                meaning: '等待爱情，浪漫温馨',
                color: '紫色',
                tips: '可制作干花，保存时间长'
            },
            {
                holiday: '生日',
                recommendation: '薰衣草花束',
                meaning: '祝福和好运',
                color: '紫色',
                tips: '可搭配其他紫色花卉'
            },
            {
                holiday: '结婚纪念日',
                recommendation: '薰衣草花束',
                meaning: '浪漫温馨，祝福长久',
                color: '紫色',
                tips: '可制作香包，寓意长久'
            }
        ],
        care: {
            light: '充足阳光',
            water: '保持土壤微干，避免积水',
            temperature: '15-25°C，耐寒',
            fertilizer: '生长期每2周施一次液肥',
            tips: '注意排水，避免根部积水；可制作干花保存'
        },
        season: '6-8月',
        price: '20-80元/束（干花）',
        color: ['紫色', '蓝色', '白色'],
        origin: '地中海沿岸',
        tips: '薰衣草可制作干花和香包，保存时间长'
    },
    {
        name: '满天星',
        nameEn: 'Baby\'s Breath',
        icon: '✨',
        imageUrl: 'https://source.unsplash.com/featured/400x400/?gypsophila,baby-breath,flower&sig=babysbreath',
        language: '纯洁、思念、配角、真心',
        meaning: '满天星象征着纯洁、思念和真心。虽然常作为配花使用，但单独成束也很有美感。满天星代表着甘愿做配角的真心，也代表着纯洁的思念。',
        suitableHolidays: [
            {
                holiday: '生日',
                recommendation: '满天星花束',
                meaning: '纯洁祝福，真心祝愿',
                color: '白色、粉色',
                tips: '可单独成束，也可搭配其他花卉'
            },
            {
                holiday: '毕业',
                recommendation: '满天星花束',
                meaning: '纯洁友谊，思念',
                color: '白色',
                tips: '适合送给同窗好友'
            },
            {
                holiday: '情人节',
                recommendation: '满天星搭配玫瑰',
                meaning: '真心和爱情',
                color: '白色、粉色',
                tips: '常作为配花，增加花束层次'
            }
        ],
        care: {
            light: '充足阳光',
            water: '保持土壤湿润，避免积水',
            temperature: '15-25°C',
            fertilizer: '生长期每2周施一次液肥',
            tips: '及时摘心，促进分枝；可制作干花'
        },
        season: '6-8月',
        price: '10-30元/束',
        color: ['白色', '粉色', '蓝色'],
        origin: '地中海沿岸',
        tips: '满天星常作为配花，也可单独成束'
    },
    {
        name: '勿忘我',
        nameEn: 'Forget-me-not',
        icon: '💙',
        imageUrl: 'https://source.unsplash.com/featured/400x400/?forget-me-not,blue-flower,myosotis&sig=forgetmenot',
        language: '永恒的爱、记忆、不要忘记我',
        meaning: '勿忘我象征着永恒的爱、记忆和"不要忘记我"。其小巧的花朵和独特的蓝色，代表着永恒的记忆和真挚的情感。',
        suitableHolidays: [
            {
                holiday: '毕业',
                recommendation: '勿忘我花束',
                meaning: '不要忘记我，永恒友谊',
                color: '蓝色、粉色',
                tips: '适合送给同窗好友，寓意友谊长存'
            },
            {
                holiday: '情人节',
                recommendation: '勿忘我搭配玫瑰',
                meaning: '永恒的爱，不要忘记我',
                color: '蓝色、粉色',
                tips: '可制作干花，保存时间长'
            },
            {
                holiday: '生日',
                recommendation: '勿忘我花束',
                meaning: '永恒记忆，祝福',
                color: '蓝色、粉色',
                tips: '可制作干花保存'
            }
        ],
        care: {
            light: '充足阳光',
            water: '保持土壤湿润，避免积水',
            temperature: '15-25°C',
            fertilizer: '生长期每2周施一次液肥',
            tips: '可制作干花，保存时间长；注意防治病害'
        },
        season: '4-6月',
        price: '15-40元/束',
        color: ['蓝色', '粉色', '白色', '黄色'],
        origin: '欧洲、亚洲',
        tips: '勿忘我可制作干花，保存时间长，寓意永恒'
    },
    {
        name: '风信子',
        nameEn: 'Hyacinth',
        icon: '🌷',
        imageUrl: 'https://source.unsplash.com/featured/400x400/?hyacinth,flower&sig=hyacinth',
        language: '喜悦、幸福、浓情、胜利',
        meaning: '风信子象征着喜悦、幸福和浓情。其浓郁的花香和多彩的花朵，代表着生活的喜悦和幸福。不同颜色的风信子有不同的含义。',
        suitableHolidays: [
            {
                holiday: '生日',
                recommendation: '风信子盆栽或花束',
                meaning: '喜悦和幸福',
                color: '多色',
                tips: '可送盆栽，花期较长'
            },
            {
                holiday: '春节',
                recommendation: '风信子盆栽',
                meaning: '喜悦和幸福，新年大吉',
                color: '红色、粉色',
                tips: '适合春节装饰，寓意新年喜悦'
            },
            {
                holiday: '开业',
                recommendation: '风信子花篮',
                meaning: '喜悦和胜利',
                color: '红色、紫色',
                tips: '可搭配其他花卉'
            }
        ],
        care: {
            light: '充足散射光',
            water: '保持土壤湿润，避免积水',
            temperature: '15-20°C，避免高温',
            fertilizer: '生长期每2周施一次液肥',
            tips: '花后及时剪除残花，保留叶片；注意通风'
        },
        season: '3-5月',
        price: '20-50元/盆（盆栽）',
        color: ['红色', '粉色', '蓝色', '紫色', '白色', '黄色'],
        origin: '地中海沿岸',
        tips: '风信子花香浓郁，适合室内观赏'
    },
    {
        name: '水仙',
        nameEn: 'Narcissus',
        icon: '🌼',
        imageUrl: 'https://source.unsplash.com/featured/400x400/?narcissus,daffodil,flower&sig=narcissus',
        language: '纯洁、吉祥、思念、自恋',
        meaning: '水仙象征着纯洁、吉祥和思念。在中国文化中，水仙是春节的传统花卉，代表着吉祥和美好。水仙还代表着纯洁和自恋。',
        suitableHolidays: [
            {
                holiday: '春节',
                recommendation: '水仙盆栽',
                meaning: '吉祥和美好，新年大吉',
                color: '白色、黄色',
                tips: '适合春节装饰，传统年花'
            },
            {
                holiday: '生日',
                recommendation: '水仙盆栽',
                meaning: '纯洁祝福',
                color: '白色、黄色',
                tips: '可送盆栽，花期较长'
            },
            {
                holiday: '乔迁',
                recommendation: '水仙盆栽',
                meaning: '吉祥和美好',
                color: '白色、黄色',
                tips: '适合装饰新居'
            }
        ],
        care: {
            light: '充足散射光',
            water: '保持水培容器有水，或土壤湿润',
            temperature: '10-20°C，避免高温',
            fertilizer: '生长期每2周施一次液肥',
            tips: '水培时注意换水，保持清洁；注意通风'
        },
        season: '12月-3月',
        price: '15-50元/盆（盆栽）',
        color: ['白色', '黄色'],
        origin: '中国、地中海',
        tips: '水仙是春节传统花卉，寓意吉祥'
    },
    {
        name: '海棠',
        nameEn: 'Begonia',
        icon: '🌺',
        imageUrl: 'https://source.unsplash.com/featured/400x400/?begonia,flower&sig=begonia',
        language: '美丽、温和、思念、离愁',
        meaning: '海棠象征着美丽、温和和思念。在中国文化中，海棠代表着美丽和温和的品质，也代表着离愁和思念。',
        suitableHolidays: [
            {
                holiday: '生日',
                recommendation: '海棠花束或盆栽',
                meaning: '美丽祝福',
                color: '红色、粉色',
                tips: '可送盆栽，花期较长'
            },
            {
                holiday: '春节',
                recommendation: '海棠盆栽',
                meaning: '美丽和吉祥',
                color: '红色、粉色',
                tips: '适合春节装饰'
            }
        ],
        care: {
            light: '充足散射光，避免强烈直射',
            water: '保持土壤湿润，避免积水',
            temperature: '15-25°C',
            fertilizer: '生长期每2周施一次液肥',
            tips: '注意通风，防止病害；及时摘除残花'
        },
        season: '4-5月',
        price: '20-60元/盆（盆栽）',
        color: ['红色', '粉色', '白色'],
        origin: '中国',
        tips: '海棠是中国的传统名花，象征美丽和温和'
    },
    {
        name: '桃花',
        nameEn: 'Peach Blossom',
        icon: '🌸',
        imageUrl: 'https://source.unsplash.com/featured/400x400/?peach-blossom,peach-flower&sig=peach',
        language: '爱情、好运、美丽、春天',
        meaning: '桃花象征着爱情、好运和美丽。在中国文化中，桃花代表着爱情和好运，也代表着春天的到来。桃花还代表着美丽和青春。',
        suitableHolidays: [
            {
                holiday: '春节',
                recommendation: '桃花花束或盆栽',
                meaning: '好运和美丽，新年大吉',
                color: '红色、粉色',
                tips: '适合春节装饰，寓意新年好运'
            },
            {
                holiday: '生日',
                recommendation: '桃花花束',
                meaning: '好运和美丽',
                color: '红色、粉色',
                tips: '适合送给年轻女性'
            },
            {
                holiday: '情人节',
                recommendation: '桃花花束',
                meaning: '爱情和好运',
                color: '红色、粉色',
                tips: '可搭配其他花卉'
            }
        ],
        care: {
            light: '充足阳光',
            water: '保持土壤湿润，避免积水',
            temperature: '10-20°C',
            fertilizer: '花后施一次复合肥',
            tips: '花后及时修剪，促进来年开花'
        },
        season: '3-4月',
        price: '30-100元/枝（根据品种）',
        color: ['红色', '粉色', '白色'],
        origin: '中国',
        tips: '桃花是春天的象征，寓意爱情和好运'
    },
    {
        name: '樱花',
        nameEn: 'Cherry Blossom',
        icon: '🌸',
        imageUrl: 'https://source.unsplash.com/featured/400x400/?cherry-blossom,sakura,flower&sig=cherry',
        language: '美丽、短暂、希望、爱情',
        meaning: '樱花象征着美丽、短暂和希望。其短暂而绚烂的花期，代表着生命的美丽和短暂。樱花还代表着希望和爱情。',
        suitableHolidays: [
            {
                holiday: '生日',
                recommendation: '樱花花束',
                meaning: '美丽和希望',
                color: '粉色、白色',
                tips: '适合送给年轻女性'
            },
            {
                holiday: '毕业',
                recommendation: '樱花花束',
                meaning: '希望和美好',
                color: '粉色、白色',
                tips: '适合送给毕业生，寓意美好未来'
            },
            {
                holiday: '情人节',
                recommendation: '樱花花束',
                meaning: '美丽和爱情',
                color: '粉色',
                tips: '可搭配其他花卉'
            }
        ],
        care: {
            light: '充足阳光',
            water: '保持土壤湿润，避免积水',
            temperature: '10-20°C',
            fertilizer: '花后施一次复合肥',
            tips: '花后及时修剪，促进来年开花'
        },
        season: '3-4月',
        price: '40-150元/枝（根据品种）',
        color: ['粉色', '白色', '红色'],
        origin: '中国、日本',
        tips: '樱花花期短暂，但非常美丽，寓意希望和美好'
    },
    {
        name: '荷花',
        nameEn: 'Lotus',
        icon: '🪷',
        imageUrl: 'https://source.unsplash.com/featured/400x400/?lotus,water-lily,flower&sig=lotus',
        language: '纯洁、高雅、出淤泥而不染、佛性',
        meaning: '荷花象征着纯洁、高雅和"出淤泥而不染"的品质。在中国文化中，荷花代表着高洁的品格和佛性，也代表着纯洁和美好。',
        suitableHolidays: [
            {
                holiday: '生日',
                recommendation: '荷花花束或盆栽',
                meaning: '纯洁和高雅',
                color: '粉色、白色',
                tips: '可送盆栽，需要水培'
            },
            {
                holiday: '乔迁',
                recommendation: '荷花盆栽',
                meaning: '纯洁和高雅',
                color: '粉色、白色',
                tips: '适合装饰庭院或阳台'
            },
            {
                holiday: '开业',
                recommendation: '荷花花篮',
                meaning: '纯洁和高雅，事业顺利',
                color: '粉色、白色',
                tips: '可搭配其他花卉'
            }
        ],
        care: {
            light: '充足阳光',
            water: '需要水培，保持水深30-50cm',
            temperature: '20-30°C',
            fertilizer: '生长期每月施一次专用肥',
            tips: '需要充足阳光和空间；注意防治病虫害'
        },
        season: '6-9月',
        price: '30-100元/盆（盆栽）',
        color: ['粉色', '白色', '红色', '黄色'],
        origin: '中国、印度',
        tips: '荷花需要水培，适合庭院或大型容器'
    },
    {
        name: '紫罗兰',
        nameEn: 'Violet',
        icon: '💜',
        imageUrl: 'https://source.unsplash.com/featured/400x400/?violet,flower,purple&sig=violet',
        language: '永恒的美、忠诚、谦虚、思念',
        meaning: '紫罗兰象征着永恒的美、忠诚和谦虚。其淡雅的紫色和独特的香气，代表着永恒的美和忠诚的品质。紫罗兰还代表着思念和谦虚。',
        suitableHolidays: [
            {
                holiday: '生日',
                recommendation: '紫罗兰花束',
                meaning: '永恒的美和忠诚',
                color: '紫色、白色',
                tips: '可搭配其他花卉'
            },
            {
                holiday: '情人节',
                recommendation: '紫罗兰花束',
                meaning: '永恒的爱和忠诚',
                color: '紫色',
                tips: '可搭配玫瑰'
            },
            {
                holiday: '毕业',
                recommendation: '紫罗兰花束',
                meaning: '永恒友谊和思念',
                color: '紫色、白色',
                tips: '适合送给同窗好友'
            }
        ],
        care: {
            light: '充足散射光，避免强烈直射',
            water: '保持土壤湿润，避免积水',
            temperature: '15-20°C',
            fertilizer: '生长期每2周施一次液肥',
            tips: '注意通风，防止病害；及时摘除残花'
        },
        season: '4-6月',
        price: '15-50元/束',
        color: ['紫色', '白色', '粉色', '黄色'],
        origin: '欧洲',
        tips: '紫罗兰花香淡雅，适合室内观赏'
    },
    {
        name: '蝴蝶兰',
        nameEn: 'Phalaenopsis',
        icon: '🦋',
        imageUrl: 'https://source.unsplash.com/featured/400x400/?phalaenopsis,orchid,flower&sig=phalaenopsis',
        language: '幸福、优雅、高贵、祝福',
        meaning: '蝴蝶兰象征着幸福、优雅和高贵。其优雅的花朵和独特的花形，代表着幸福和优雅的品质。蝴蝶兰还代表着祝福和高贵。',
        suitableHolidays: [
            {
                holiday: '开业',
                recommendation: '蝴蝶兰盆栽',
                meaning: '幸福和祝福，事业顺利',
                color: '多色',
                tips: '适合装饰办公室或店铺'
            },
            {
                holiday: '乔迁',
                recommendation: '蝴蝶兰盆栽',
                meaning: '幸福和优雅',
                color: '多色',
                tips: '适合装饰新居，提升品味'
            },
            {
                holiday: '生日',
                recommendation: '蝴蝶兰花束或盆栽',
                meaning: '幸福和祝福',
                color: '多色',
                tips: '适合送给有品位的朋友'
            },
            {
                holiday: '春节',
                recommendation: '蝴蝶兰盆栽',
                meaning: '幸福和祝福，新年大吉',
                color: '红色、粉色',
                tips: '适合春节装饰，寓意新年幸福'
            }
        ],
        care: {
            light: '充足散射光，避免强烈直射',
            water: '保持介质微湿，避免积水',
            temperature: '18-25°C，避免高温',
            fertilizer: '生长期每月施一次专用肥',
            tips: '注意通风，保持空气湿度；避免强光直射'
        },
        season: '全年，不同品种花期不同',
        price: '80-500元/盆（根据品种）',
        color: ['白色', '粉色', '黄色', '紫色', '复色'],
        origin: '东南亚',
        tips: '蝴蝶兰是高档观赏花卉，需要精心养护'
    }
];

// 节日送花指南（独立数据）
const holidayFlowerGuide = {
    '情人节': {
        date: '2月14日',
        recommended: [
            { flower: '红玫瑰', count: '11朵或99朵', meaning: '一心一意或长长久久的爱' },
            { flower: '粉玫瑰', count: '19朵', meaning: '爱的宣言' },
            { flower: '郁金香', count: '9朵', meaning: '爱的表白' },
            { flower: '薰衣草', count: '一束', meaning: '等待爱情' }
        ],
        tips: '情人节送花要注意花语含义，红玫瑰最经典，也可根据对方喜好选择其他花卉。搭配精美包装和卡片更能表达心意。',
        color: '红色、粉色为主'
    },
    '母亲节': {
        date: '5月第二个星期日',
        recommended: [
            { flower: '康乃馨', count: '11朵或19朵', meaning: '表达对母亲的感激和爱' },
            { flower: '粉玫瑰', count: '11朵', meaning: '温馨的爱' },
            { flower: '百合', count: '3-5朵', meaning: '祝福母亲健康' },
            { flower: '向日葵', count: '一束', meaning: '阳光和希望' }
        ],
        tips: '母亲节首选粉色康乃馨，也可搭配其他花卉。可送花束或盆栽，盆栽花期更长。',
        color: '粉色为主'
    },
    '父亲节': {
        date: '6月第三个星期日',
        recommended: [
            { flower: '向日葵', count: '一束', meaning: '阳光和力量' },
            { flower: '黄玫瑰', count: '11朵', meaning: '友谊和祝福' },
            { flower: '兰花', count: '一盆', meaning: '高雅品格' },
            { flower: '君子兰', count: '一盆', meaning: '君子品格' }
        ],
        tips: '父亲节适合送盆栽，花期长，寓意长久。也可送花束，选择颜色较为稳重的花卉。',
        color: '黄色、橙色为主'
    },
    '生日': {
        date: '个人生日',
        recommended: [
            { flower: '玫瑰', count: '根据年龄或喜好', meaning: '祝福和爱' },
            { flower: '百合', count: '3-5朵', meaning: '祝福和快乐' },
            { flower: '向日葵', count: '一束', meaning: '阳光和希望' },
            { flower: '康乃馨', count: '一束', meaning: '温馨祝福' }
        ],
        tips: '生日送花可根据对方喜好和年龄选择。年轻女性适合粉色系，长辈适合稳重的颜色。可搭配生日卡片。',
        color: '根据喜好选择'
    },
    '结婚纪念日': {
        date: '个人纪念日',
        recommended: [
            { flower: '红玫瑰', count: '99朵或108朵', meaning: '长长久久' },
            { flower: '粉玫瑰', count: '99朵', meaning: '永恒的爱' },
            { flower: '百合', count: '11朵', meaning: '百年好合' },
            { flower: '郁金香', count: '一束', meaning: '永恒的爱' }
        ],
        tips: '结婚纪念日送花要选择寓意长久的数量，如99朵、108朵等。可搭配其他花卉，制作精美花束。',
        color: '红色、粉色为主'
    },
    '春节': {
        date: '农历正月初一',
        recommended: [
            { flower: '牡丹', count: '一束或盆栽', meaning: '富贵吉祥' },
            { flower: '水仙', count: '一盆', meaning: '吉祥美好' },
            { flower: '桃花', count: '一束或盆栽', meaning: '好运和美丽' },
            { flower: '梅花', count: '一束或盆栽', meaning: '坚强和希望' },
            { flower: '蝴蝶兰', count: '一盆', meaning: '幸福和祝福' }
        ],
        tips: '春节适合送盆栽，花期长，寓意长久。传统年花有水仙、桃花、梅花等，也可选择现代花卉。',
        color: '红色、粉色为主'
    },
    '元宵节': {
        date: '农历正月十五',
        recommended: [
            { flower: '玫瑰', count: '一束', meaning: '团圆和爱' },
            { flower: '百合', count: '一束', meaning: '团圆和祝福' }
        ],
        tips: '元宵节是团圆节，可送花表达祝福。选择寓意团圆和美好的花卉。',
        color: '红色、粉色为主'
    },
    '清明节': {
        date: '4月4日或5日',
        recommended: [
            { flower: '白菊', count: '一束', meaning: '表达哀思' },
            { flower: '黄菊', count: '一束', meaning: '怀念和尊敬' },
            { flower: '白百合', count: '一束', meaning: '纯洁和怀念' }
        ],
        tips: '清明节送花要注意场合，选择素雅的颜色，表达哀思和怀念。',
        color: '白色、黄色为主'
    },
    '端午节': {
        date: '农历五月初五',
        recommended: [
            { flower: '艾草', count: '一束', meaning: '驱邪避疫' },
            { flower: '菖蒲', count: '一束', meaning: '驱邪避疫' }
        ],
        tips: '端午节传统习俗是挂艾草和菖蒲，也可送其他花卉表达祝福。',
        color: '绿色为主'
    },
    '中秋节': {
        date: '农历八月十五',
        recommended: [
            { flower: '桂花', count: '一束', meaning: '团圆和美好' },
            { flower: '百合', count: '一束', meaning: '团圆和祝福' },
            { flower: '玫瑰', count: '一束', meaning: '团圆和爱' }
        ],
        tips: '中秋节是团圆节，可送花表达祝福。桂花是传统中秋花卉，也可选择其他寓意团圆的花卉。',
        color: '黄色、白色为主'
    },
    '重阳节': {
        date: '农历九月初九',
        recommended: [
            { flower: '黄菊', count: '一束', meaning: '长寿和健康' },
            { flower: '茱萸', count: '一束', meaning: '驱邪避疫' },
            { flower: '兰花', count: '一盆', meaning: '高雅品格' }
        ],
        tips: '重阳节是敬老节，适合送长辈。黄菊和茱萸是传统重阳花卉，也可选择其他寓意长寿的花卉。',
        color: '黄色为主'
    },
    '教师节': {
        date: '9月10日',
        recommended: [
            { flower: '康乃馨', count: '一束', meaning: '表达敬意' },
            { flower: '向日葵', count: '一束', meaning: '阳光和希望' },
            { flower: '百合', count: '一束', meaning: '祝福和尊敬' },
            { flower: '兰花', count: '一盆', meaning: '高雅品格' }
        ],
        tips: '教师节适合送花表达对老师的敬意。康乃馨和向日葵是常见选择，也可选择其他寓意尊敬的花卉。',
        color: '粉色、黄色为主'
    },
    '圣诞节': {
        date: '12月25日',
        recommended: [
            { flower: '红玫瑰', count: '一束', meaning: '祝福和爱' },
            { flower: '一品红', count: '一盆', meaning: '圣诞祝福' },
            { flower: '松枝', count: '一束', meaning: '圣诞装饰' }
        ],
        tips: '圣诞节可送花表达祝福。一品红是传统圣诞花卉，也可选择其他花卉。',
        color: '红色、绿色为主'
    },
    '开业': {
        date: '开业当天',
        recommended: [
            { flower: '向日葵', count: '花篮', meaning: '事业蒸蒸日上' },
            { flower: '黄百合', count: '花篮', meaning: '财源广进' },
            { flower: '牡丹', count: '花篮', meaning: '富贵吉祥' },
            { flower: '蝴蝶兰', count: '盆栽', meaning: '幸福和祝福' }
        ],
        tips: '开业送花要选择寓意吉祥和富贵的花卉，通常送花篮或大型盆栽。颜色以红色、黄色为主。',
        color: '红色、黄色为主'
    },
    '乔迁': {
        date: '搬家当天',
        recommended: [
            { flower: '百合', count: '一束', meaning: '生活美满' },
            { flower: '兰花', count: '一盆', meaning: '高雅品格' },
            { flower: '蝴蝶兰', count: '一盆', meaning: '幸福和祝福' },
            { flower: '富贵竹', count: '一盆', meaning: '富贵吉祥' }
        ],
        tips: '乔迁适合送盆栽，花期长，寓意长久。选择寓意吉祥和美好的花卉，可装饰新居。',
        color: '根据喜好选择'
    },
    '探病': {
        date: '探望时',
        recommended: [
            { flower: '康乃馨', count: '一束', meaning: '祝福康复' },
            { flower: '百合', count: '一束', meaning: '祝福健康' },
            { flower: '向日葵', count: '一束', meaning: '积极向上' },
            { flower: '黄菊', count: '一束', meaning: '祝福健康' }
        ],
        tips: '探病送花要选择颜色较为温和的花卉，避免过于鲜艳。注意避免送白菊给某些地区的人。选择香味较淡的花卉。',
        color: '粉色、黄色为主'
    },
    '道歉': {
        date: '道歉时',
        recommended: [
            { flower: '黄玫瑰', count: '一束', meaning: '道歉和友谊' },
            { flower: '白玫瑰', count: '一束', meaning: '纯洁和道歉' },
            { flower: '满天星', count: '一束', meaning: '真心道歉' }
        ],
        tips: '道歉送花要选择颜色较为温和的花卉，表达真诚的歉意。可搭配道歉卡片。',
        color: '黄色、白色为主'
    },
    '祝贺': {
        date: '祝贺时',
        recommended: [
            { flower: '玫瑰', count: '一束', meaning: '祝福和祝贺' },
            { flower: '百合', count: '一束', meaning: '祝福和快乐' },
            { flower: '向日葵', count: '一束', meaning: '祝福和希望' }
        ],
        tips: '祝贺送花要根据具体场合选择。升学、升职等可选择向日葵，结婚等可选择玫瑰和百合。',
        color: '根据场合选择'
    },
    '毕业': {
        date: '毕业时',
        recommended: [
            { flower: '向日葵', count: '一束', meaning: '前程似锦' },
            { flower: '勿忘我', count: '一束', meaning: '不要忘记我' },
            { flower: '满天星', count: '一束', meaning: '纯洁友谊' },
            { flower: '紫罗兰', count: '一束', meaning: '永恒友谊' }
        ],
        tips: '毕业送花要选择寓意前程和友谊的花卉。向日葵代表前程似锦，勿忘我代表友谊长存。',
        color: '黄色、蓝色、白色为主'
    }
};

// 传统植物数据（不在花卉数据库中，但用于节日推荐）
const plantData = {
    '艾草': {
        name: '艾草',
        nameEn: 'Mugwort',
        icon: '🌿',
        imageUrl: 'https://source.unsplash.com/featured/400x400/?mugwort,artemisia,herb&sig=1',
        description: '艾草是端午节的传统植物，具有驱邪避疫的寓意。艾草有独特的香气，常用于制作艾草香包和艾灸。',
        meaning: '驱邪避疫、健康平安',
        usage: '端午节挂艾草是传统习俗，也可制作艾草香包。艾草还可用于艾灸，具有温经散寒、活血通络的功效。'
    },
    '菖蒲': {
        name: '菖蒲',
        nameEn: 'Calamus',
        icon: '🌿',
        imageUrl: 'https://source.unsplash.com/featured/400x400/?calamus,acorus,plant&sig=2',
        description: '菖蒲是端午节的传统植物，与艾草一起使用，具有驱邪避疫的寓意。菖蒲叶片形似剑，有"斩妖除魔"的象征意义。',
        meaning: '驱邪避疫、健康平安',
        usage: '端午节挂菖蒲是传统习俗，常与艾草一起使用。菖蒲还可用于制作菖蒲酒，具有驱邪避疫的寓意。'
    },
    '茱萸': {
        name: '茱萸',
        nameEn: 'Cornel',
        icon: '🌿',
        imageUrl: 'https://source.unsplash.com/featured/400x400/?cornel,berry,plant&sig=3',
        description: '茱萸是重阳节的传统植物，具有驱邪避疫、祝福长寿的寓意。茱萸果实红色，象征着吉祥和长寿。',
        meaning: '驱邪避疫、祝福长寿',
        usage: '重阳节佩戴茱萸是传统习俗，寓意健康长寿。茱萸还可用于制作茱萸酒，具有驱邪避疫的寓意。'
    },
    '桂花': {
        name: '桂花',
        nameEn: 'Osmanthus',
        icon: '🌼',
        imageUrl: 'https://source.unsplash.com/featured/400x400/?osmanthus,flower&sig=4',
        description: '桂花是中秋节的传统花卉，花香浓郁，寓意团圆和美好。桂花有"十里桂花香"的美誉，是中秋节的象征花卉。',
        meaning: '团圆和美好、吉祥如意',
        usage: '中秋节赏桂花是传统习俗，也可制作桂花茶和桂花糕。桂花还可用于制作桂花酒，具有团圆和美好的寓意。'
    }
};
