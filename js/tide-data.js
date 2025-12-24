// 潮汐与水产数据
const tideData = [
    {
        location: '山东青岛',
        coords: '北纬36°04′ 东经120°23′',
        lat: 36.067, lng: 120.383,
        region: '黄海',
        tideType: '正规半日潮',
        highTide1: '06:30', lowTide1: '12:45',
        highTide2: '18:50', lowTide2: '01:05',
        seafood: [
            { name: '大虾', alias: '中国对虾、明虾', icon: '🦐', habitat: '黄海、渤海近海', season: '4-6月、9-11月', price: '80-150元/斤', nutrition: '高蛋白、低脂肪，富含锌、硒', cooking: ['白灼', '油焖', '椒盐', '蒜蓉蒸'], desc: '青岛大虾肉质紧实鲜甜，是当地最具代表性的海鲜之一。' },
            { name: '蛤蜊', alias: '花蛤、杂色蛤', icon: '🐚', habitat: '青岛胶州湾', season: '全年，春秋最肥', price: '8-15元/斤', nutrition: '高蛋白、富含铁、维生素B12', cooking: ['辣炒', '蒜蓉蒸', '蛤蜊汤', '烤蛤蜊'], desc: '胶州湾蛤蜊被誉为"天下第一鲜"，肉质饱满，鲜味浓郁。' },
            { name: '海参', alias: '刺参、辽参', icon: '🥒', habitat: '黄海北部深水区', season: '11月-次年4月', price: '200-800元/斤（鲜）', nutrition: '高蛋白、低脂低糖，富含胶原蛋白', cooking: ['葱烧', '小米粥', '凉拌', '红烧'], desc: '北方刺参品质上乘，营养价值高，是滋补佳品。' }
        ],
        tips: ['退潮时是赶海最佳时机', '注意查看潮汐表避免危险', '带好工具和防晒装备']
    },
    {
        location: '浙江舟山',
        coords: '北纬29°59′ 东经122°12′',
        lat: 29.983, lng: 122.200,
        region: '东海',
        tideType: '正规半日潮',
        highTide1: '07:15', lowTide1: '13:30',
        highTide2: '19:35', lowTide2: '01:50',
        seafood: [
            { name: '带鱼', alias: '刀鱼、白带鱼', icon: '🐟', habitat: '东海中下层', season: '11月-次年2月', price: '25-60元/斤', nutrition: '富含DHA、EPA，高蛋白', cooking: ['红烧', '清蒸', '干煎', '糖醋'], desc: '舟山带鱼银光闪闪，肉质细嫩，刺少味鲜，是东海四大经济鱼类之首。' },
            { name: '梭子蟹', alias: '枪蟹、海蟹', icon: '🦀', habitat: '东海近海沙泥底', season: '8-11月', price: '40-120元/斤', nutrition: '高蛋白、富含钙、磷', cooking: ['清蒸', '葱姜炒', '蟹粉豆腐', '醉蟹'], desc: '舟山梭子蟹膏满黄肥，肉质鲜美，是秋季最受欢迎的海鲜。' },
            { name: '大黄鱼', alias: '黄花鱼、黄瓜鱼', icon: '🐠', habitat: '东海近海', season: '4-6月', price: '野生500-2000元/斤', nutrition: '富含蛋白质、微量元素', cooking: ['清蒸', '红烧', '糖醋', '家烧'], desc: '野生大黄鱼极为珍贵，肉质细嫩，是东海名贵鱼种。' }
        ],
        tips: ['舟山海鲜以鲜为主，清蒸最佳', '购买时注意辨别野生和养殖', '海鲜过敏者慎食']
    },
    {
        location: '广东湛江',
        coords: '北纬21°16′ 东经110°21′',
        lat: 21.267, lng: 110.350,
        region: '南海',
        tideType: '不正规半日潮',
        highTide1: '08:20', lowTide1: '14:35',
        highTide2: '20:40', lowTide2: '02:55',
        seafood: [
            { name: '生蚝', alias: '牡蛎、蚝', icon: '🦪', habitat: '湛江近海养殖', season: '10月-次年4月', price: '5-15元/个', nutrition: '富含锌、蛋白质、牛磺酸', cooking: ['蒜蓉烤', '生吃', '蚝仔煎', '蚝油'], desc: '湛江生蚝个大肉肥，奶香浓郁，被誉为"海中牛奶"。' },
            { name: '白鲳鱼', alias: '银鲳、镜鱼', icon: '🐟', habitat: '南海近海', season: '5-10月', price: '50-100元/斤', nutrition: '高蛋白、富含不饱和脂肪酸', cooking: ['清蒸', '红烧', '干煎', '豆豉蒸'], desc: '白鲳鱼肉质细嫩，刺少味鲜，是南方餐桌上的常客。' },
            { name: '花蟹', alias: '远海梭子蟹', icon: '🦀', habitat: '南海沙泥底质海域', season: '全年，秋冬最肥', price: '60-150元/斤', nutrition: '高蛋白、低脂肪', cooking: ['清蒸', '避风塘炒', '姜葱炒', '蟹粥'], desc: '花蟹壳薄肉多，蟹膏丰富，是粤式海鲜的代表。' }
        ],
        tips: ['湛江海鲜讲究原汁原味', '生蚝建议选择正规养殖场', '夏季注意海鲜保鲜']
    },
    {
        location: '福建厦门',
        coords: '北纬24°27′ 东经118°04′',
        lat: 24.450, lng: 118.067,
        region: '台湾海峡',
        tideType: '正规半日潮',
        highTide1: '07:45', lowTide1: '14:00',
        highTide2: '20:05', lowTide2: '02:20',
        seafood: [
            { name: '土笋冻', alias: '沙虫冻', icon: '🍮', habitat: '厦门近海滩涂', season: '全年', price: '15-30元/份', nutrition: '高蛋白、富含胶原蛋白', cooking: ['冷食', '配酱油醋'], desc: '厦门特色小吃，由沙虫熬制而成，Q弹爽口，是当地人的最爱。' },
            { name: '章鱼', alias: '八爪鱼、望潮', icon: '🐙', habitat: '闽南近海礁石区', season: '4-9月', price: '30-60元/斤', nutrition: '高蛋白、低脂肪、富含牛磺酸', cooking: ['白灼', '红烧', '椒盐', '烧烤'], desc: '厦门章鱼肉质紧实有嚼劲，是闽南海鲜的代表之一。' },
            { name: '红蟳', alias: '青蟹、膏蟹', icon: '🦀', habitat: '闽南沿海', season: '中秋前后', price: '100-300元/斤', nutrition: '高蛋白、富含钙、磷', cooking: ['清蒸', '红蟳米糕', '姜母鸭配蟹'], desc: '红蟳是闽南地区最名贵的螃蟹，膏肥肉美，是节庆佳品。' }
        ],
        tips: ['厦门海鲜以清淡为主', '土笋冻是必尝特色', '八市是购买海鲜的好去处']
    },
    {
        location: '辽宁大连',
        coords: '北纬38°55′ 东经121°36′',
        lat: 38.917, lng: 121.600,
        region: '黄海/渤海',
        tideType: '正规半日潮',
        highTide1: '06:15', lowTide1: '12:30',
        highTide2: '18:35', lowTide2: '00:50',
        seafood: [
            { name: '海胆', alias: '刺锅子', icon: '🌰', habitat: '大连近海礁石区', season: '6-8月', price: '20-50元/个', nutrition: '富含蛋白质、维生素A、卵磷脂', cooking: ['刺身', '蒸蛋', '海胆饭', '烤海胆'], desc: '大连海胆黄色饱满，入口即化，鲜甜无比，是海鲜中的极品。' },
            { name: '扇贝', alias: '海扇、干贝', icon: '🐚', habitat: '大连獐子岛海域', season: '全年，冬季最肥', price: '15-30元/斤', nutrition: '高蛋白、富含锌、硒', cooking: ['蒜蓉粉丝蒸', '烤扇贝', '扇贝粥'], desc: '獐子岛扇贝品质上乘，贝柱饱满，是大连的招牌海鲜。' },
            { name: '鲍鱼', alias: '石决明', icon: '🐚', habitat: '大连长海县', season: '7-9月', price: '50-200元/只', nutrition: '高蛋白、富含钙、铁', cooking: ['清蒸', '红烧', '鲍鱼捞饭', '佛跳墙'], desc: '大连鲍鱼肉质肥厚，口感弹牙，是北方鲍鱼的代表。' }
        ],
        tips: ['大连海鲜以鲜活为主', '海胆要选黄满的', '购买时注意产地']
    },
    {
        location: '海南三亚',
        coords: '北纬18°15′ 东经109°30′',
        lat: 18.250, lng: 109.500,
        region: '南海',
        tideType: '不正规全日潮',
        highTide1: '09:30', lowTide1: '21:45',
        highTide2: '-', lowTide2: '-',
        seafood: [
            { name: '和乐蟹', alias: '青蟹', icon: '🦀', habitat: '海南万宁和乐镇', season: '中秋前后', price: '150-300元/斤', nutrition: '高蛋白、富含微量元素', cooking: ['清蒸', '姜葱炒', '蟹粥'], desc: '和乐蟹是海南四大名菜之一，膏满肉肥，鲜美无比。' },
            { name: '石斑鱼', alias: '过鱼、鲙鱼', icon: '🐟', habitat: '南海珊瑚礁区', season: '全年', price: '80-300元/斤', nutrition: '高蛋白、低脂肪、富含DHA', cooking: ['清蒸', '红烧', '煲汤', '刺身'], desc: '石斑鱼肉质细嫩，味道鲜美，是南海名贵鱼种。' },
            { name: '龙虾', alias: '大龙虾、锦绣龙虾', icon: '🦞', habitat: '南海深水区', season: '全年', price: '200-500元/斤', nutrition: '高蛋白、富含锌、硒', cooking: ['蒜蓉蒸', '芝士焗', '刺身', '龙虾粥'], desc: '三亚龙虾个大肉多，是高档海鲜的代表，口感鲜甜弹牙。' }
        ],
        tips: ['三亚海鲜建议去第一市场购买', '加工费另算，提前问清价格', '注意防止宰客']
    },
    {
        location: '江苏连云港',
        coords: '北纬34°36′ 东经119°13′',
        lat: 34.600, lng: 119.217,
        region: '黄海',
        tideType: '正规半日潮',
        highTide1: '06:45', lowTide1: '13:00',
        highTide2: '19:05', lowTide2: '01:20',
        seafood: [
            { name: '梭子蟹', alias: '海蟹、枪蟹', icon: '🦀', habitat: '黄海近海', season: '8-11月', price: '35-100元/斤', nutrition: '高蛋白、富含钙', cooking: ['清蒸', '香辣炒', '蟹黄包'], desc: '连云港梭子蟹肉质饱满，蟹黄丰富，是秋季必尝美味。' },
            { name: '对虾', alias: '明虾、中国对虾', icon: '🦐', habitat: '黄海近海', season: '4-6月、9-11月', price: '60-120元/斤', nutrition: '高蛋白、低脂肪', cooking: ['白灼', '盐焗', '油焖', '干烧'], desc: '连云港对虾肉质紧实，味道鲜甜，是当地特产。' },
            { name: '紫菜', alias: '条斑紫菜', icon: '🌿', habitat: '连云港沿海养殖', season: '11月-次年3月', price: '30-80元/斤（干）', nutrition: '富含碘、蛋白质、维生素', cooking: ['紫菜蛋花汤', '紫菜包饭', '凉拌'], desc: '连云港是中国紫菜之乡，紫菜品质上乘，口感鲜嫩。' }
        ],
        tips: ['连云港海鲜性价比高', '紫菜是当地特产值得购买', '赶海注意安全']
    },
    {
        location: '广西北海',
        coords: '北纬21°29′ 东经109°07′',
        lat: 21.483, lng: 109.117,
        region: '北部湾',
        tideType: '不正规全日潮',
        highTide1: '10:15', lowTide1: '22:30',
        highTide2: '-', lowTide2: '-',
        seafood: [
            { name: '沙虫', alias: '方格星虫', icon: '🪱', habitat: '北海银滩沙滩', season: '全年，冬季最肥', price: '80-150元/斤', nutrition: '高蛋白、富含氨基酸', cooking: ['白灼', '沙虫粥', '爆炒', '煲汤'], desc: '北海沙虫被誉为"海洋虫草"，营养价值极高，口感爽脆。' },
            { name: '珍珠贝', alias: '马氏珠母贝', icon: '🐚', habitat: '北海涠洲岛海域', season: '全年', price: '20-40元/斤', nutrition: '高蛋白、富含钙', cooking: ['蒜蓉蒸', '烤贝', '贝肉粥'], desc: '北海是中国南珠之乡，珍珠贝肉质鲜美，贝壳可产珍珠。' },
            { name: '鱿鱼', alias: '枪乌贼', icon: '🦑', habitat: '北部湾海域', season: '全年', price: '25-50元/斤', nutrition: '高蛋白、富含牛磺酸', cooking: ['铁板烧', '爆炒', '鱿鱼干', '烧烤'], desc: '北海鱿鱼肉质厚实，口感弹牙，是烧烤的绝佳食材。' }
        ],
        tips: ['北海老街有很多海鲜加工店', '沙虫是当地特色必尝', '涠洲岛海鲜更新鲜']
    }
];
