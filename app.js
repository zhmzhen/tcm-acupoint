// 应用逻辑

// 收藏列表
let favorites = JSON.parse(localStorage.getItem('tcm_favorites') || '[]');

// 学习记录
let learnedAcupoints = JSON.parse(localStorage.getItem('tcm_learned') || '[]');

// ==================== 每日穴位学习数据 ====================
// 包含更多穴位的完整数据，用于每日学习
const dailyAcupointList = [
    // 头面部穴位
    { name: '太阳穴', pinyin: 'Tài Yáng', meridian: '经外奇穴', location: '眉梢与外眼角中间，向后约1寸凹陷处', effects: ['缓解头痛', '明目醒脑', '缓解眼疲劳'], bodyPart: '头部' },
    { name: '百会穴', pinyin: 'Bǎi Huì', meridian: '督脉', location: '头顶正中线，两耳尖连线的中点', effects: ['升阳举陷', '醒脑开窍', '宁心安神'], bodyPart: '头部' },
    { name: '风池穴', pinyin: 'Fēng Chí', meridian: '足少阳胆经', location: '后颈部，枢骨之下，胸锁乳突肌与斜方肌上端之间的凹陷中', effects: ['祛风解表', '清头明目', '通利官窍'], bodyPart: '头部' },
    { name: '印堂穴', pinyin: 'Yìn Táng', meridian: '经外奇穴', location: '两眉头连线的中点', effects: ['清头明目', '通鼻开窍', '宁心安神'], bodyPart: '面部' },
    { name: '睛明穴', pinyin: 'Jīng Míng', meridian: '足太阳膀胱经', location: '目内眦角稍上方凹陷处', effects: ['明目退翳', '祛风清热'], bodyPart: '面部' },
    { name: '攒竹穴', pinyin: 'Cuán Zhú', meridian: '足太阳膀胱经', location: '眉头凹陷中，眶上切迹处', effects: ['清热明目', '祛风通络'], bodyPart: '面部' },
    { name: '迎香穴', pinyin: 'Yíng Xiāng', meridian: '手阳明大肠经', location: '鼻翼外缘中点旁，鼻唇沟中', effects: ['通鼻窍', '散风热'], bodyPart: '面部' },
    { name: '人中穴', pinyin: 'Rén Zhōng', meridian: '督脉', location: '人中沟的上1/3与中1/3交点处', effects: ['醒神开窍', '清热熄风'], bodyPart: '面部' },
    { name: '承浆穴', pinyin: 'Chéng Jiāng', meridian: '任脉', location: '面部，颏唇沟的正中凹陷处', effects: ['生津敛液', '舒筋活络'], bodyPart: '面部' },
    { name: '颊车穴', pinyin: 'Jiá Chē', meridian: '足阳明胃经', location: '下颌角前上方约1横指，咬肌中', effects: ['祛风清热', '开关通络'], bodyPart: '面部' },
    
    // 颈肩部穴位
    { name: '肩井穴', pinyin: 'Jiān Jǐng', meridian: '足少阳胆经', location: '肩上，大椎与肩峰连线的中点', effects: ['祛风清热', '活络消肿', '催乳'], bodyPart: '肩部' },
    { name: '天柱穴', pinyin: 'Tiān Zhù', meridian: '足太阳膀胱经', location: '后发际正中直上0.5寸，旁开1.3寸', effects: ['清头明目', '强筋骨'], bodyPart: '颈部' },
    { name: '大椎穴', pinyin: 'Dà Zhuī', meridian: '督脉', location: '第7颈椎棘突下凹陷中', effects: ['清热解表', '截疟止痫'], bodyPart: '颈部' },
    { name: '肩髃穴', pinyin: 'Jiān Yú', meridian: '手阳明大肠经', location: '肩峰端下缘，上臂外展时呈现凹陷处', effects: ['通经活络', '疏散风热'], bodyPart: '肩部' },
    { name: '肩贞穴', pinyin: 'Jiān Zhēn', meridian: '手太阳小肠经', location: '肩关节后下方，臂内收时，腋后纹头上1寸', effects: ['清头聪耳', '通经活络'], bodyPart: '肩部' },
    
    // 手臂部穴位
    { name: '合谷穴', pinyin: 'Hé Gǔ', meridian: '手阳明大肠经', location: '手背第1、2掌骨间，第2掌骨桡侧中点（虎口处）', effects: ['镇静止痛', '通经活络', '清热解表'], bodyPart: '手部' },
    { name: '内关穴', pinyin: 'Nèi Guān', meridian: '手厥阴心包经', location: '腕横纹上2寸，掌长肌腱与桡侧腕屈肌腱之间', effects: ['宁心安神', '理气止痛', '止呕'], bodyPart: '手臂' },
    { name: '外关穴', pinyin: 'Wài Guān', meridian: '手少阳三焦经', location: '腕背横纹上2寸，桡骨与尺骨之间', effects: ['清热解表', '通经活络'], bodyPart: '手臂' },
    { name: '神门穴', pinyin: 'Shén Mén', meridian: '手少阴心经', location: '腕横纹尺侧端，尺侧腕屈肌腱的桡侧凹陷处', effects: ['宁心安神', '通经活络'], bodyPart: '手部' },
    { name: '曲池穴', pinyin: 'Qū Chí', meridian: '手阳明大肠经', location: '屈肘成直角，肘横纹外侧端与肱骨外上髁连线中点', effects: ['清热和营', '降逆活络'], bodyPart: '手臂' },
    { name: '手三里', pinyin: 'Shǒu Sān Lǐ', meridian: '手阳明大肠经', location: '曲池穴下2寸，阳溪与曲池连线上', effects: ['通经活络', '清热明目', '调理肠胃'], bodyPart: '手臂' },
    { name: '列缺穴', pinyin: 'Liè Quē', meridian: '手太阴肺经', location: '桡骨茎突上方，腕横纹上1.5寸', effects: ['宣肺解表', '通经活络', '通调任脉'], bodyPart: '手臂' },
    { name: '劳宫穴', pinyin: 'Láo Gōng', meridian: '手厥阴心包经', location: '掌心，第2、3掌骨之间偏于第3掌骨', effects: ['清心泄热', '开窍醒神'], bodyPart: '手部' },
    { name: '少商穴', pinyin: 'Shào Shāng', meridian: '手太阴肺经', location: '拇指桡侧指甲角旁0.1寸', effects: ['清热利咽', '开窍醒神'], bodyPart: '手部' },
    { name: '鱼际穴', pinyin: 'Yú Jì', meridian: '手太阴肺经', location: '第1掌骨中点桡侧，赤白肉际处', effects: ['清肺泻热', '利咽止痛'], bodyPart: '手部' },
    
    // 胸腹部穴位
    { name: '中脘穴', pinyin: 'Zhōng Wǎn', meridian: '任脉', location: '前正中线上，脐上4寸', effects: ['健脾和胃', '降逆利水'], bodyPart: '腹部' },
    { name: '关元穴', pinyin: 'Guān Yuán', meridian: '任脉', location: '前正中线上，脐下3寸', effects: ['培元固本', '补益下焦'], bodyPart: '腹部' },
    { name: '气海穴', pinyin: 'Qì Hǎi', meridian: '任脉', location: '前正中线上，脐下1.5寸', effects: ['益气助阳', '调经固经'], bodyPart: '腹部' },
    { name: '神阙穴', pinyin: 'Shén Què', meridian: '任脉', location: '脐中央', effects: ['温阳救逆', '利水固脱'], bodyPart: '腹部' },
    { name: '天枢穴', pinyin: 'Tiān Shū', meridian: '足阳明胃经', location: '脐中旁开2寸', effects: ['调肠腑', '理气行滞'], bodyPart: '腹部' },
    { name: '膻中穴', pinyin: 'Dàn Zhōng', meridian: '任脉', location: '前正中线上，两乳头连线的中点', effects: ['宽胸理气', '活血通络'], bodyPart: '胸部' },
    { name: '期门穴', pinyin: 'Qī Mén', meridian: '足厥阴肝经', location: '乳头直下，第6肋间隙', effects: ['疏肝健脾', '理气活血'], bodyPart: '胸部' },
    
    // 背腰部穴位
    { name: '肾俞穴', pinyin: 'Shèn Shù', meridian: '足太阳膀胱经', location: '第2腰椎棘突下，旁开1.5寸', effects: ['益肾助阳', '强腰利水'], bodyPart: '腰部' },
    { name: '命门穴', pinyin: 'Mìng Mén', meridian: '督脉', location: '第2腰椎棘突下凹陷中', effects: ['补肾壮阳', '培元固本'], bodyPart: '腰部' },
    { name: '腰阳关', pinyin: 'Yāo Yáng Guān', meridian: '督脉', location: '第4腰椎棘突下凹陷中', effects: ['祛寒除湿', '舒筋活络'], bodyPart: '腰部' },
    { name: '志室穴', pinyin: 'Zhì Shì', meridian: '足太阳膀胱经', location: '第2腰椎棘突下，旁开3寸', effects: ['益肾固精', '清热利湿'], bodyPart: '腰部' },
    { name: '肺俞穴', pinyin: 'Fèi Shù', meridian: '足太阳膀胱经', location: '第3胸椎棘突下，旁开1.5寸', effects: ['调补肺气', '补虚清热'], bodyPart: '背部' },
    { name: '心俞穴', pinyin: 'Xīn Shù', meridian: '足太阳膀胱经', location: '第5胸椎棘突下，旁开1.5寸', effects: ['宽胸理气', '通络安神'], bodyPart: '背部' },
    { name: '肝俞穴', pinyin: 'Gān Shù', meridian: '足太阳膀胱经', location: '第9胸椎棘突下，旁开1.5寸', effects: ['疏肝利胆', '理气明目'], bodyPart: '背部' },
    { name: '脾俞穴', pinyin: 'Pí Shù', meridian: '足太阳膀胱经', location: '第11胸椎棘突下，旁开1.5寸', effects: ['健脾和胃', '利湿升清'], bodyPart: '背部' },
    { name: '胃俞穴', pinyin: 'Wèi Shù', meridian: '足太阳膀胱经', location: '第12胸椎棘突下，旁开1.5寸', effects: ['和胃健脾', '理中降逆'], bodyPart: '背部' },
    
    // 腿部穴位
    { name: '足三里', pinyin: 'Zú Sān Lǐ', meridian: '足阳明胃经', location: '犊鼻下3寸，胫骨前缘一横指处', effects: ['健脾和胃', '扶正培元', '通经活络'], bodyPart: '腿部' },
    { name: '三阴交', pinyin: 'Sān Yīn Jiāo', meridian: '足太阴脾经', location: '内踝尖上3寸，胫骨内侧缘后方', effects: ['健脾益血', '调肝补肾', '安神助眠'], bodyPart: '腿部' },
    { name: '阳陵泉', pinyin: 'Yáng Líng Quán', meridian: '足少阳胆经', location: '腓骨小头前下方凹陷处', effects: ['疏肝利胆', '舒筋活络'], bodyPart: '腿部' },
    { name: '阴陵泉', pinyin: 'Yīn Líng Quán', meridian: '足太阴脾经', location: '胫骨内侧髁后下方凹陷处', effects: ['健脾理气', '益肾调经', '通利小便'], bodyPart: '腿部' },
    { name: '血海穴', pinyin: 'Xuè Hǎi', meridian: '足太阴脾经', location: '髌底内侧端上2寸，股四头肌内侧头隆起处', effects: ['调经统血', '健脾化湿'], bodyPart: '腿部' },
    { name: '梁丘穴', pinyin: 'Liáng Qiū', meridian: '足阳明胃经', location: '髌底上2寸，股外侧肌与股直肌腱之间', effects: ['理气和胃', '通经活络'], bodyPart: '腿部' },
    { name: '委中穴', pinyin: 'Wěi Zhōng', meridian: '足太阳膀胱经', location: '腘横纹中点，股二头肌腱与半腱肌腱中间', effects: ['舒筋通络', '泄热清暑', '凉血解毒'], bodyPart: '腿部' },
    { name: '承山穴', pinyin: 'Chéng Shān', meridian: '足太阳膀胱经', location: '腓肠肌两肌腹之间凹陷的顶端', effects: ['理气止痛', '舒筋活络'], bodyPart: '腿部' },
    { name: '丰隆穴', pinyin: 'Fēng Lóng', meridian: '足阳明胃经', location: '外踝尖上8寸，条口穴外1寸', effects: ['化痰降逆', '开窍'], bodyPart: '腿部' },
    
    // 足部穴位
    { name: '涌泉穴', pinyin: 'Yǒng Quán', meridian: '足少阴肾经', location: '足底前1/3与后2/3交点凹陷处', effects: ['滋阴益肾', '平肝熄风', '开窍醒神'], bodyPart: '足部' },
    { name: '太冲穴', pinyin: 'Tài Chōng', meridian: '足厥阴肝经', location: '足背第1、2跖骨结合部前方凹陷处', effects: ['平肝泄热', '舒肝养血', '清利下焦'], bodyPart: '足部' },
    { name: '太溪穴', pinyin: 'Tài Xī', meridian: '足少阴肾经', location: '内踝后方，内踝尖与跟腱之间的凹陷处', effects: ['滋阴益肾', '壮阳强腰'], bodyPart: '足部' },
    { name: '昆仑穴', pinyin: 'Kūn Lún', meridian: '足太阳膀胱经', location: '外踝尖与跟腱之间的凹陷处', effects: ['安神清热', '舒筋活络'], bodyPart: '足部' },
    { name: '解溪穴', pinyin: 'Jiě Xī', meridian: '足阳明胃经', location: '足背踝关节横纹中央凹陷处', effects: ['舒筋活络', '清胃化痰', '镇惊安神'], bodyPart: '足部' },
    { name: '申脉穴', pinyin: 'Shēn Mài', meridian: '足太阳膀胱经', location: '外踝直下方凹陷处', effects: ['补阳益气', '疏导水湿'], bodyPart: '足部' },
    { name: '照海穴', pinyin: 'Zhào Hǎi', meridian: '足少阴肾经', location: '内踝尖下方凹陷处', effects: ['滋阴清热', '调经止带'], bodyPart: '足部' },
    { name: '行间穴', pinyin: 'Xíng Jiān', meridian: '足厥阴肝经', location: '足背第1、2趾间，趾蹼缘后方赤白肉际处', effects: ['清肝泻热', '凉血安神'], bodyPart: '足部' },
    { name: '内庭穴', pinyin: 'Nèi Tíng', meridian: '足阳明胃经', location: '足背第2、3趾间，趾蹼缘后方赤白肉际处', effects: ['清胃泻火', '理气止痛'], bodyPart: '足部' },
    { name: '公孙穴', pinyin: 'Gōng Sūn', meridian: '足太阴脾经', location: '第1跖骨基底部的前下方', effects: ['健脾和胃', '调冲任'], bodyPart: '足部' }
];

// 获取今日穴位（根据日期固定）
function getDailyAcupoint() {
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    const index = dayOfYear % dailyAcupointList.length;
    return dailyAcupointList[index];
}

// 初始化每日穴位显示
function initDailyAcupoint() {
    const acupoint = getDailyAcupoint();
    const today = new Date();
    const dateStr = `${today.getMonth() + 1}月${today.getDate()}日`;
    
    document.getElementById('daily-date').textContent = dateStr;
    document.getElementById('daily-name').textContent = `${acupoint.name}（${acupoint.pinyin}）`;
    document.getElementById('daily-desc').textContent = `${acupoint.meridian} · ${acupoint.bodyPart} · ${acupoint.effects[0]}`;
}

// 显示每日穴位详情
function showDailyAcupoint() {
    const acupoint = getDailyAcupoint();
    
    // 记录学习
    if (!learnedAcupoints.includes(acupoint.name)) {
        learnedAcupoints.push(acupoint.name);
        localStorage.setItem('tcm_learned', JSON.stringify(learnedAcupoints));
    }
    
    // 构造完整的穴位数据用于显示
    const fullAcupoint = {
        name: acupoint.name,
        pinyin: acupoint.pinyin,
        meridian: acupoint.meridian,
        location: acupoint.location,
        effects: acupoint.effects,
        massage: {
            method: '用拇指指腹按压穴位，顺时针方向揉按',
            duration: '3-5分钟',
            frequency: '每日2-3次',
            strength: '中等力度，以有酸胀感为宜'
        },
        tips: '按摩前可先热敷，效果更佳'
    };
    
    // 显示结果
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <div class="result-header">
            <h2>📖 每日一穴 · ${acupoint.name}</h2>
            <button class="back-btn" onclick="hideResults()">
                <i class="fas fa-times"></i> 关闭
            </button>
        </div>
        <div class="learn-badge">
            <i class="fas fa-check-circle"></i> 今日已学习
        </div>
    `;
    resultsDiv.innerHTML += renderAcupointCard(fullAcupoint, '每日学习');
    resultsDiv.innerHTML += `
        <div class="notice" style="margin-top: 16px;">
            <i class="fas fa-graduation-cap"></i>
            <strong>学习进度：</strong>已学习 ${learnedAcupoints.length} / ${dailyAcupointList.length} 个穴位
        </div>
    `;
    resultsDiv.classList.add('show');
    resultsDiv.scrollIntoView({ behavior: 'smooth' });
}

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', function() {
    initDailyAcupoint();
    initDailyDiet();
    initDailyFitness();
    initDailyTea();
    initDailyWine();
    initDailyTide();
});

// ==================== 潮汐与水产数据 ====================
const tideData = [
    {
        location: '山东青岛',
        coords: '北纬36°04′ 东经120°23′',
        region: '黄海',
        tideType: '正规半日潮',
        highTide1: '06:30',
        lowTide1: '12:45',
        highTide2: '18:50',
        lowTide2: '01:05',
        seafood: [
            {
                name: '大虾',
                alias: '中国对虾、明虾',
                icon: '🦐',
                habitat: '黄海、渤海近海',
                season: '4-6月、9-11月',
                price: '80-150元/斤',
                nutrition: '高蛋白、低脂肪，富含锌、硒',
                cooking: ['白灼', '油焖', '椒盐', '蒜蓉蒸'],
                desc: '青岛大虾肉质紧实鲜甜，是当地最具代表性的海鲜之一。'
            },
            {
                name: '蛤蜊',
                alias: '花蛤、杂色蛤',
                icon: '🐚',
                habitat: '青岛胶州湾',
                season: '全年，春秋最肥',
                price: '8-15元/斤',
                nutrition: '高蛋白、富含铁、维生素B12',
                cooking: ['辣炒', '蒜蓉蒸', '蛤蜊汤', '烤蛤蜊'],
                desc: '胶州湾蛤蜊被誉为"天下第一鲜"，肉质饱满，鲜味浓郁。'
            },
            {
                name: '海参',
                alias: '刺参、辽参',
                icon: '🥒',
                habitat: '黄海北部深水区',
                season: '11月-次年4月',
                price: '200-800元/斤（鲜）',
                nutrition: '高蛋白、低脂低糖，富含胶原蛋白',
                cooking: ['葱烧', '小米粥', '凉拌', '红烧'],
                desc: '北方刺参品质上乘，营养价值高，是滋补佳品。'
            }
        ],
        tips: ['退潮时是赶海最佳时机', '注意查看潮汐表避免危险', '带好工具和防晒装备']
    },
    {
        location: '浙江舟山',
        coords: '北纬29°59′ 东经122°12′',
        region: '东海',
        tideType: '正规半日潮',
        highTide1: '07:15',
        lowTide1: '13:30',
        highTide2: '19:35',
        lowTide2: '01:50',
        seafood: [
            {
                name: '带鱼',
                alias: '刀鱼、白带鱼',
                icon: '🐟',
                habitat: '东海中下层',
                season: '11月-次年2月',
                price: '25-60元/斤',
                nutrition: '富含DHA、EPA，高蛋白',
                cooking: ['红烧', '清蒸', '干煎', '糖醋'],
                desc: '舟山带鱼银光闪闪，肉质细嫩，刺少味鲜，是东海四大经济鱼类之首。'
            },
            {
                name: '梭子蟹',
                alias: '枪蟹、海蟹',
                icon: '🦀',
                habitat: '东海近海沙泥底',
                season: '8-11月',
                price: '40-120元/斤',
                nutrition: '高蛋白、富含钙、磷',
                cooking: ['清蒸', '葱姜炒', '蟹粉豆腐', '醉蟹'],
                desc: '舟山梭子蟹膏满黄肥，肉质鲜美，是秋季最受欢迎的海鲜。'
            },
            {
                name: '大黄鱼',
                alias: '黄花鱼、黄瓜鱼',
                icon: '🐠',
                habitat: '东海近海',
                season: '4-6月',
                price: '野生500-2000元/斤',
                nutrition: '富含蛋白质、微量元素',
                cooking: ['清蒸', '红烧', '糖醋', '家烧'],
                desc: '野生大黄鱼极为珍贵，肉质细嫩，是东海名贵鱼种。'
            }
        ],
        tips: ['舟山海鲜以鲜为主，清蒸最佳', '购买时注意辨别野生和养殖', '海鲜过敏者慎食']
    },
    {
        location: '广东湛江',
        coords: '北纬21°16′ 东经110°21′',
        region: '南海',
        tideType: '不正规半日潮',
        highTide1: '08:20',
        lowTide1: '14:35',
        highTide2: '20:40',
        lowTide2: '02:55',
        seafood: [
            {
                name: '生蚝',
                alias: '牡蛎、蚝',
                icon: '🦪',
                habitat: '湛江近海养殖',
                season: '10月-次年4月',
                price: '5-15元/个',
                nutrition: '富含锌、蛋白质、牛磺酸',
                cooking: ['蒜蓉烤', '生吃', '蚝仔煎', '蚝油'],
                desc: '湛江生蚝个大肉肥，奶香浓郁，被誉为"海中牛奶"。'
            },
            {
                name: '白鲳鱼',
                alias: '银鲳、镜鱼',
                icon: '🐟',
                habitat: '南海近海',
                season: '5-10月',
                price: '50-100元/斤',
                nutrition: '高蛋白、富含不饱和脂肪酸',
                cooking: ['清蒸', '红烧', '干煎', '豆豉蒸'],
                desc: '白鲳鱼肉质细嫩，刺少味鲜，是南方餐桌上的常客。'
            },
            {
                name: '花蟹',
                alias: '远海梭子蟹',
                icon: '🦀',
                habitat: '南海沙泥底质海域',
                season: '全年，秋冬最肥',
                price: '60-150元/斤',
                nutrition: '高蛋白、低脂肪',
                cooking: ['清蒸', '避风塘炒', '姜葱炒', '蟹粥'],
                desc: '花蟹壳薄肉多，蟹膏丰富，是粤式海鲜的代表。'
            }
        ],
        tips: ['湛江海鲜讲究原汁原味', '生蚝建议选择正规养殖场', '夏季注意海鲜保鲜']
    },
    {
        location: '福建厦门',
        coords: '北纬24°27′ 东经118°04′',
        region: '台湾海峡',
        tideType: '正规半日潮',
        highTide1: '07:45',
        lowTide1: '14:00',
        highTide2: '20:05',
        lowTide2: '02:20',
        seafood: [
            {
                name: '土笋冻',
                alias: '沙虫冻',
                icon: '🍮',
                habitat: '厦门近海滩涂',
                season: '全年',
                price: '15-30元/份',
                nutrition: '高蛋白、富含胶原蛋白',
                cooking: ['冷食', '配酱油醋'],
                desc: '厦门特色小吃，由沙虫熬制而成，Q弹爽口，是当地人的最爱。'
            },
            {
                name: '章鱼',
                alias: '八爪鱼、望潮',
                icon: '🐙',
                habitat: '闽南近海礁石区',
                season: '4-9月',
                price: '30-60元/斤',
                nutrition: '高蛋白、低脂肪、富含牛磺酸',
                cooking: ['白灼', '红烧', '椒盐', '烧烤'],
                desc: '厦门章鱼肉质紧实有嚼劲，是闽南海鲜的代表之一。'
            },
            {
                name: '红蟳',
                alias: '青蟹、膏蟹',
                icon: '🦀',
                habitat: '闽南沿海',
                season: '中秋前后',
                price: '100-300元/斤',
                nutrition: '高蛋白、富含钙、磷',
                cooking: ['清蒸', '红蟳米糕', '姜母鸭配蟹'],
                desc: '红蟳是闽南地区最名贵的螃蟹，膏肥肉美，是节庆佳品。'
            }
        ],
        tips: ['厦门海鲜以清淡为主', '土笋冻是必尝特色', '八市是购买海鲜的好去处']
    },
    {
        location: '辽宁大连',
        coords: '北纬38°55′ 东经121°36′',
        region: '黄海/渤海',
        tideType: '正规半日潮',
        highTide1: '06:15',
        lowTide1: '12:30',
        highTide2: '18:35',
        lowTide2: '00:50',
        seafood: [
            {
                name: '海胆',
                alias: '刺锅子',
                icon: '🌰',
                habitat: '大连近海礁石区',
                season: '6-8月',
                price: '20-50元/个',
                nutrition: '富含蛋白质、维生素A、卵磷脂',
                cooking: ['刺身', '蒸蛋', '海胆饭', '烤海胆'],
                desc: '大连海胆黄色饱满，入口即化，鲜甜无比，是海鲜中的极品。'
            },
            {
                name: '扇贝',
                alias: '海扇、干贝',
                icon: '🐚',
                habitat: '大连獐子岛海域',
                season: '全年，冬季最肥',
                price: '15-30元/斤',
                nutrition: '高蛋白、富含锌、硒',
                cooking: ['蒜蓉粉丝蒸', '烤扇贝', '扇贝粥'],
                desc: '獐子岛扇贝品质上乘，贝柱饱满，是大连的招牌海鲜。'
            },
            {
                name: '鲍鱼',
                alias: '石决明',
                icon: '🐚',
                habitat: '大连长海县',
                season: '7-9月',
                price: '50-200元/只',
                nutrition: '高蛋白、富含钙、铁',
                cooking: ['清蒸', '红烧', '鲍鱼捞饭', '佛跳墙'],
                desc: '大连鲍鱼肉质肥厚，口感弹牙，是北方鲍鱼的代表。'
            }
        ],
        tips: ['大连海鲜以鲜活为主', '海胆要选黄满的', '购买时注意产地']
    },
    {
        location: '海南三亚',
        coords: '北纬18°15′ 东经109°30′',
        region: '南海',
        tideType: '不正规全日潮',
        highTide1: '09:30',
        lowTide1: '21:45',
        highTide2: '-',
        lowTide2: '-',
        seafood: [
            {
                name: '和乐蟹',
                alias: '青蟹',
                icon: '🦀',
                habitat: '海南万宁和乐镇',
                season: '中秋前后',
                price: '150-300元/斤',
                nutrition: '高蛋白、富含微量元素',
                cooking: ['清蒸', '姜葱炒', '蟹粥'],
                desc: '和乐蟹是海南四大名菜之一，膏满肉肥，鲜美无比。'
            },
            {
                name: '石斑鱼',
                alias: '过鱼、鲙鱼',
                icon: '🐟',
                habitat: '南海珊瑚礁区',
                season: '全年',
                price: '80-300元/斤',
                nutrition: '高蛋白、低脂肪、富含DHA',
                cooking: ['清蒸', '红烧', '煲汤', '刺身'],
                desc: '石斑鱼肉质细嫩，味道鲜美，是南海名贵鱼种。'
            },
            {
                name: '龙虾',
                alias: '大龙虾、锦绣龙虾',
                icon: '🦞',
                habitat: '南海深水区',
                season: '全年',
                price: '200-500元/斤',
                nutrition: '高蛋白、富含锌、硒',
                cooking: ['蒜蓉蒸', '芝士焗', '刺身', '龙虾粥'],
                desc: '三亚龙虾个大肉多，是高档海鲜的代表，口感鲜甜弹牙。'
            }
        ],
        tips: ['三亚海鲜建议去第一市场购买', '加工费另算，提前问清价格', '注意防止宰客']
    },
    {
        location: '江苏连云港',
        coords: '北纬34°36′ 东经119°13′',
        region: '黄海',
        tideType: '正规半日潮',
        highTide1: '06:45',
        lowTide1: '13:00',
        highTide2: '19:05',
        lowTide2: '01:20',
        seafood: [
            {
                name: '梭子蟹',
                alias: '海蟹、枪蟹',
                icon: '🦀',
                habitat: '黄海近海',
                season: '8-11月',
                price: '35-100元/斤',
                nutrition: '高蛋白、富含钙',
                cooking: ['清蒸', '香辣炒', '蟹黄包'],
                desc: '连云港梭子蟹肉质饱满，蟹黄丰富，是秋季必尝美味。'
            },
            {
                name: '对虾',
                alias: '明虾、中国对虾',
                icon: '🦐',
                habitat: '黄海近海',
                season: '4-6月、9-11月',
                price: '60-120元/斤',
                nutrition: '高蛋白、低脂肪',
                cooking: ['白灼', '盐焗', '油焖', '干烧'],
                desc: '连云港对虾肉质紧实，味道鲜甜，是当地特产。'
            },
            {
                name: '紫菜',
                alias: '条斑紫菜',
                icon: '🌿',
                habitat: '连云港沿海养殖',
                season: '11月-次年3月',
                price: '30-80元/斤（干）',
                nutrition: '富含碘、蛋白质、维生素',
                cooking: ['紫菜蛋花汤', '紫菜包饭', '凉拌'],
                desc: '连云港是中国紫菜之乡，紫菜品质上乘，口感鲜嫩。'
            }
        ],
        tips: ['连云港海鲜性价比高', '紫菜是当地特产值得购买', '赶海注意安全']
    },
    {
        location: '广西北海',
        coords: '北纬21°29′ 东经109°07′',
        region: '北部湾',
        tideType: '不正规全日潮',
        highTide1: '10:15',
        lowTide1: '22:30',
        highTide2: '-',
        lowTide2: '-',
        seafood: [
            {
                name: '沙虫',
                alias: '方格星虫',
                icon: '🪱',
                habitat: '北海银滩沙滩',
                season: '全年，冬季最肥',
                price: '80-150元/斤',
                nutrition: '高蛋白、富含氨基酸',
                cooking: ['白灼', '沙虫粥', '爆炒', '煲汤'],
                desc: '北海沙虫被誉为"海洋虫草"，营养价值极高，口感爽脆。'
            },
            {
                name: '珍珠贝',
                alias: '马氏珠母贝',
                icon: '🐚',
                habitat: '北海涠洲岛海域',
                season: '全年',
                price: '20-40元/斤',
                nutrition: '高蛋白、富含钙',
                cooking: ['蒜蓉蒸', '烤贝', '贝肉粥'],
                desc: '北海是中国南珠之乡，珍珠贝肉质鲜美，贝壳可产珍珠。'
            },
            {
                name: '鱿鱼',
                alias: '枪乌贼',
                icon: '🦑',
                habitat: '北部湾海域',
                season: '全年',
                price: '25-50元/斤',
                nutrition: '高蛋白、富含牛磺酸',
                cooking: ['铁板烧', '爆炒', '鱿鱼干', '烧烤'],
                desc: '北海鱿鱼肉质厚实，口感弹牙，是烧烤的绝佳食材。'
            }
        ],
        tips: ['北海老街有很多海鲜加工店', '沙虫是当地特色必尝', '涠洲岛海鲜更新鲜']
    }
];

// 获取今日潮汐
function getDailyTide() {
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    return tideData[dayOfYear % tideData.length];
}

// 初始化潮汐
function initDailyTide() {
    const tide = getDailyTide();
    const today = new Date();
    document.getElementById('tide-date').textContent = `${today.getMonth() + 1}月${today.getDate()}日`;
    document.getElementById('tide-name').textContent = tide.location;
    document.getElementById('tide-desc').textContent = `${tide.region} · 高潮${tide.highTide1}`;
}

// 显示潮汐详情
function showDailyTide() {
    const tide = getDailyTide();
    const resultsDiv = document.getElementById('results');
    
    resultsDiv.innerHTML = `
        <div class="result-header">
            <h2>🌊 ${tide.location} · 潮汐与水产</h2>
            <button class="back-btn" onclick="hideResults()">
                <i class="fas fa-times"></i> 关闭
            </button>
        </div>
        
        <div class="tide-detail-card">
            <div class="tide-info-box">
                <div class="tide-location">📍 ${tide.location}</div>
                <div class="tide-coords">${tide.coords} · ${tide.region}</div>
                <div class="tide-times">
                    <div class="tide-time-item">
                        <div class="tide-time-label">第一次高潮</div>
                        <div class="tide-time-value">🌊 ${tide.highTide1}</div>
                    </div>
                    <div class="tide-time-item">
                        <div class="tide-time-label">第一次低潮</div>
                        <div class="tide-time-value">🏖️ ${tide.lowTide1}</div>
                    </div>
                    ${tide.highTide2 !== '-' ? `
                    <div class="tide-time-item">
                        <div class="tide-time-label">第二次高潮</div>
                        <div class="tide-time-value">🌊 ${tide.highTide2}</div>
                    </div>
                    <div class="tide-time-item">
                        <div class="tide-time-label">第二次低潮</div>
                        <div class="tide-time-value">🏖️ ${tide.lowTide2}</div>
                    </div>
                    ` : `
                    <div class="tide-time-item" style="grid-column: span 2;">
                        <div class="tide-time-label">潮汐类型</div>
                        <div class="tide-time-value">${tide.tideType}</div>
                    </div>
                    `}
                </div>
            </div>
            
            <div class="tide-section">
                <div class="section-title"><i class="fas fa-fish"></i> 当地特色水产</div>
                <div class="seafood-grid">
                    ${tide.seafood.map(s => `
                        <div class="seafood-item">
                            <div class="seafood-header">
                                <span class="seafood-icon">${s.icon}</span>
                                <div>
                                    <div class="seafood-name">${s.name}</div>
                                    <div class="seafood-alias">${s.alias}</div>
                                </div>
                            </div>
                            <div class="seafood-info">
                                <div class="seafood-info-item"><span class="label">产地：</span>${s.habitat}</div>
                                <div class="seafood-info-item"><span class="label">营养：</span>${s.nutrition}</div>
                                <div class="seafood-info-item"><span class="label">做法：</span>${s.cooking.join('、')}</div>
                            </div>
                            <div>
                                <span class="seafood-season">🗓️ ${s.season}</span>
                                <span class="seafood-price">💰 ${s.price}</span>
                            </div>
                            <div class="seafood-desc">${s.desc}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="tide-tip-box">
                <div class="tide-tip-title">🎣 赶海小贴士</div>
                <ul class="tide-tip-list">
                    ${tide.tips.map(t => `<li>${t}</li>`).join('')}
                </ul>
            </div>
            
            <div class="notice">
                <i class="fas fa-info-circle"></i> 
                <strong>温馨提示：</strong>潮汐时间仅供参考，实际以当地海洋预报为准。赶海时注意安全，关注天气变化。
            </div>
        </div>
    `;
    
    resultsDiv.classList.add('show');
    resultsDiv.scrollIntoView({ behavior: 'smooth' });
}

// ==================== 运动健康数据 ====================
const fitnessData = [
    {
        name: '颈椎康复操',
        targetSymptoms: ['颈椎痛', '肩颈僵硬', '头痛'],
        muscles: [
            { name: '斜方肌', location: '颈部后侧至肩部', function: '控制头部后仰和肩胛骨运动' },
            { name: '胸锁乳突肌', location: '颈部两侧', function: '控制头部转动和前屈' },
            { name: '头夹肌', location: '颈后深层', function: '维持颈椎稳定' }
        ],
        exercises: [
            { name: '颈部前后点头', sets: '3组', reps: '每组10次', tips: '动作缓慢，幅度适中' },
            { name: '颈部左右转动', sets: '3组', reps: '每组10次', tips: '转到最大幅度停留3秒' },
            { name: '颈部侧屈', sets: '3组', reps: '每组10次', tips: '耳朵尽量靠近肩膀' },
            { name: '肩部环绕', sets: '2组', reps: '每组15次', tips: '前后各做一半' }
        ],
        duration: '15-20分钟',
        frequency: '每日1-2次',
        precautions: ['动作要慢，避免快速转动', '有眩晕感立即停止', '急性期不宜做'],
        benefits: '缓解颈部肌肉紧张，改善颈椎活动度，预防颈椎病'
    },
    {
        name: '腰背强化训练',
        targetSymptoms: ['腰痛', '腰肌劳损', '久坐不适'],
        muscles: [
            { name: '竖脊肌', location: '脊柱两侧', function: '维持脊柱直立，控制躯干后伸' },
            { name: '腰方肌', location: '腰部深层', function: '稳定腰椎，控制侧屈' },
            { name: '多裂肌', location: '脊柱深层', function: '精细控制脊柱节段运动' },
            { name: '腹横肌', location: '腹部深层', function: '核心稳定，保护腰椎' }
        ],
        exercises: [
            { name: '猫牛式', sets: '3组', reps: '每组10次', tips: '配合呼吸，吸气抬头塌腰，呼气低头拱背' },
            { name: '死虫式', sets: '3组', reps: '每组8次', tips: '保持腰部贴地，对侧手脚交替' },
            { name: '臀桥', sets: '3组', reps: '每组12次', tips: '臀部发力，顶峰收紧臀肌' },
            { name: '平板支撑', sets: '3组', reps: '每组30秒', tips: '身体成一条直线，不要塌腰' }
        ],
        duration: '20-30分钟',
        frequency: '每周3-4次',
        precautions: ['腰痛急性期避免训练', '动作标准比次数重要', '循序渐进增加难度'],
        benefits: '强化核心肌群，保护腰椎，改善体态'
    },
    {
        name: '肩周康复训练',
        targetSymptoms: ['肩周炎', '肩膀疼痛', '手臂抬举困难'],
        muscles: [
            { name: '三角肌', location: '肩部表层', function: '控制手臂各方向抬举' },
            { name: '冈上肌', location: '肩胛骨上方', function: '手臂外展起始动作' },
            { name: '冈下肌', location: '肩胛骨后方', function: '手臂外旋' },
            { name: '肩胛下肌', location: '肩胛骨前方', function: '手臂内旋' }
        ],
        exercises: [
            { name: '钟摆运动', sets: '3组', reps: '每组20次', tips: '身体前倾，手臂自然下垂画圈' },
            { name: '爬墙运动', sets: '3组', reps: '每组10次', tips: '手指沿墙向上爬，记录高度' },
            { name: '毛巾拉伸', sets: '3组', reps: '每组10次', tips: '双手握毛巾，上下拉动' },
            { name: '外旋训练', sets: '3组', reps: '每组12次', tips: '肘部贴身，小臂向外旋转' }
        ],
        duration: '15-20分钟',
        frequency: '每日1-2次',
        precautions: ['疼痛剧烈时减小幅度', '热敷后训练效果更好', '坚持才能见效'],
        benefits: '恢复肩关节活动度，缓解粘连，减轻疼痛'
    },
    {
        name: '膝关节保护训练',
        targetSymptoms: ['膝盖疼痛', '上下楼困难', '关节僵硬'],
        muscles: [
            { name: '股四头肌', location: '大腿前侧', function: '伸直膝关节，稳定髌骨' },
            { name: '腘绳肌', location: '大腿后侧', function: '屈曲膝关节' },
            { name: '臀大肌', location: '臀部', function: '髋关节伸展，减轻膝盖负担' },
            { name: '小腿三头肌', location: '小腿后侧', function: '踝关节跖屈，辅助膝关节稳定' }
        ],
        exercises: [
            { name: '直腿抬高', sets: '3组', reps: '每组15次', tips: '膝盖伸直，抬高45度停留' },
            { name: '靠墙静蹲', sets: '3组', reps: '每组30秒', tips: '膝盖不超过脚尖，大腿与地面平行' },
            { name: '坐姿伸膝', sets: '3组', reps: '每组12次', tips: '可绑沙袋增加阻力' },
            { name: '单腿平衡', sets: '3组', reps: '每组30秒', tips: '闭眼增加难度' }
        ],
        duration: '20-25分钟',
        frequency: '每周4-5次',
        precautions: ['避免深蹲和跳跃', '训练后可冰敷', '肥胖者先减重'],
        benefits: '强化膝关节周围肌肉，提高稳定性，减轻磨损'
    },
    {
        name: '改善失眠瑜伽',
        targetSymptoms: ['失眠', '焦虑', '入睡困难'],
        muscles: [
            { name: '膈肌', location: '胸腔底部', function: '主要呼吸肌，深呼吸放松' },
            { name: '腰大肌', location: '腰椎两侧', function: '连接上下半身，紧张影响睡眠' },
            { name: '梨状肌', location: '臀部深层', function: '紧张可压迫坐骨神经' }
        ],
        exercises: [
            { name: '婴儿式', sets: '1组', reps: '保持2分钟', tips: '额头贴地，双臂前伸或放身侧' },
            { name: '仰卧扭转', sets: '2组', reps: '每侧1分钟', tips: '双肩贴地，膝盖倒向一侧' },
            { name: '双腿靠墙', sets: '1组', reps: '保持5分钟', tips: '臀部靠墙，双腿垂直向上' },
            { name: '尸躺式', sets: '1组', reps: '保持10分钟', tips: '全身放松，专注呼吸' }
        ],
        duration: '20-30分钟',
        frequency: '每晚睡前',
        precautions: ['在床上或瑜伽垫上进行', '配合腹式呼吸', '避免剧烈运动'],
        benefits: '放松身心，调节自主神经，改善睡眠质量'
    },
    {
        name: '缓解眼疲劳操',
        targetSymptoms: ['眼疲劳', '干眼症', '视力模糊'],
        muscles: [
            { name: '眼外肌', location: '眼球周围', function: '控制眼球运动方向' },
            { name: '睫状肌', location: '眼球内部', function: '调节晶状体，控制对焦' },
            { name: '眼轮匝肌', location: '眼睑周围', function: '控制眨眼和闭眼' }
        ],
        exercises: [
            { name: '眨眼练习', sets: '3组', reps: '每组20次', tips: '用力闭眼再睁开，促进泪液分泌' },
            { name: '远近交替', sets: '3组', reps: '每组10次', tips: '看远处5秒，再看近处5秒' },
            { name: '眼球转动', sets: '2组', reps: '顺逆各5圈', tips: '头不动，眼球画大圈' },
            { name: '眼保健操', sets: '1组', reps: '完整一遍', tips: '按压眼周穴位' }
        ],
        duration: '5-10分钟',
        frequency: '每小时1次',
        precautions: ['每20分钟休息20秒看20英尺外', '保持屏幕适当亮度', '多眨眼'],
        benefits: '缓解眼肌疲劳，促进眼部血液循环，保护视力'
    },
    {
        name: '消化促进运动',
        targetSymptoms: ['胃痛', '消化不良', '便秘'],
        muscles: [
            { name: '腹直肌', location: '腹部前侧', function: '躯干屈曲，辅助排便' },
            { name: '腹斜肌', location: '腹部两侧', function: '躯干旋转，促进肠道蠕动' },
            { name: '膈肌', location: '胸腔底部', function: '腹式呼吸按摩内脏' }
        ],
        exercises: [
            { name: '腹式呼吸', sets: '3组', reps: '每组10次', tips: '吸气腹部隆起，呼气腹部收紧' },
            { name: '仰卧抬腿', sets: '3组', reps: '每组15次', tips: '双腿伸直交替抬起' },
            { name: '扭转式', sets: '2组', reps: '每侧30秒', tips: '坐姿扭转，按摩腹部器官' },
            { name: '饭后散步', sets: '1组', reps: '15-20分钟', tips: '慢速行走，不要剧烈运动' }
        ],
        duration: '15-20分钟',
        frequency: '每日1次',
        precautions: ['饭后1小时再运动', '避免剧烈运动', '多喝水'],
        benefits: '促进胃肠蠕动，改善消化功能，缓解便秘'
    },
    {
        name: '心肺耐力训练',
        targetSymptoms: ['疲劳', '气短', '体力下降'],
        muscles: [
            { name: '心肌', location: '心脏', function: '泵血供应全身' },
            { name: '膈肌', location: '胸腔底部', function: '主要呼吸肌' },
            { name: '肋间肌', location: '肋骨之间', function: '辅助呼吸' }
        ],
        exercises: [
            { name: '快走', sets: '1组', reps: '30分钟', tips: '心率达到最大心率60-70%' },
            { name: '开合跳', sets: '3组', reps: '每组30秒', tips: '组间休息30秒' },
            { name: '高抬腿', sets: '3组', reps: '每组20次', tips: '膝盖抬至髋部高度' },
            { name: '波比跳', sets: '3组', reps: '每组8次', tips: '初学者可省略跳跃' }
        ],
        duration: '30-45分钟',
        frequency: '每周3-5次',
        precautions: ['循序渐进增加强度', '心脏病患者需医生指导', '运动前热身'],
        benefits: '增强心肺功能，提高耐力，改善精力'
    }
];

// ==================== 茶道数据 ====================
const teaData = [
    {
        name: '龙井茶',
        type: '绿茶',
        origin: '浙江杭州西湖',
        appearance: '扁平光滑，色泽嫩绿，形如雀舌',
        aroma: '清香持久，有豆花香',
        taste: '鲜爽甘醇，回甘明显',
        brewing: {
            water: '80-85°C矿泉水或纯净水',
            ratio: '1:50（3g茶叶配150ml水）',
            vessel: '玻璃杯或白瓷盖碗',
            time: '第一泡1分钟，后续递增30秒',
            steps: [
                '温杯：用热水温润茶具',
                '投茶：将茶叶轻放入杯中',
                '注水：沿杯壁缓缓注入80°C热水',
                '观赏：欣赏茶叶舒展之美',
                '品饮：待茶叶沉底后即可品尝'
            ]
        },
        benefits: ['提神醒脑', '抗氧化', '降脂减肥', '清热解暑'],
        bestTime: '上午9-11点',
        taboo: ['空腹不宜', '睡前不宜', '胃寒者少饮'],
        storage: '密封、避光、冷藏保存',
        price: '特级500-2000元/斤，一级200-500元/斤'
    },
    {
        name: '铁观音',
        type: '乌龙茶',
        origin: '福建安溪',
        appearance: '卷曲紧结，色泽砂绿，重实匀整',
        aroma: '兰花香浓郁，音韵明显',
        taste: '醇厚甘鲜，七泡有余香',
        brewing: {
            water: '95-100°C沸水',
            ratio: '1:20（7g茶叶配140ml水）',
            vessel: '紫砂壶或盖碗',
            time: '第一泡15秒，后续递增5秒',
            steps: [
                '温壶温杯：沸水烫洗茶具',
                '投茶：茶叶投入壶中约1/3',
                '洗茶：快速注水后立即倒出',
                '冲泡：高冲低斟，激发香气',
                '出汤：茶汤倒入公道杯分饮'
            ]
        },
        benefits: ['消食去腻', '减肥健美', '抗衰老', '清热降火'],
        bestTime: '饭后1小时',
        taboo: ['空腹不宜', '贫血者少饮', '孕妇慎饮'],
        storage: '密封、避光、冷藏或冷冻',
        price: '清香型200-800元/斤，浓香型300-1500元/斤'
    },
    {
        name: '普洱熟茶',
        type: '黑茶',
        origin: '云南西双版纳、普洱',
        appearance: '条索肥壮，色泽红褐油润',
        aroma: '陈香浓郁，有枣香或参香',
        taste: '醇厚顺滑，回甘生津',
        brewing: {
            water: '100°C沸水',
            ratio: '1:20（7g茶叶配140ml水）',
            vessel: '紫砂壶最佳',
            time: '第一泡10秒，后续递增5秒',
            steps: [
                '醒茶：提前将茶饼撬散醒茶',
                '温壶：沸水烫洗紫砂壶',
                '投茶洗茶：投茶后快速洗茶两遍',
                '冲泡：沸水直冲，快速出汤',
                '品饮：观汤色、闻香气、品滋味'
            ]
        },
        benefits: ['暖胃护胃', '降脂减肥', '助消化', '安神助眠'],
        bestTime: '饭后或晚间',
        taboo: ['新茶少饮', '失眠者晚间少饮'],
        storage: '通风、干燥、无异味处存放',
        price: '普通100-300元/饼，老茶500-数万元/饼'
    },
    {
        name: '正山小种',
        type: '红茶',
        origin: '福建武夷山桐木关',
        appearance: '条索紧结，色泽乌润',
        aroma: '松烟香或花果香',
        taste: '醇厚甜润，桂圆汤味',
        brewing: {
            water: '90-95°C热水',
            ratio: '1:50（3g茶叶配150ml水）',
            vessel: '白瓷盖碗或玻璃杯',
            time: '第一泡30秒，后续递增10秒',
            steps: [
                '温杯：热水温润茶具',
                '投茶：将茶叶置入盖碗',
                '注水：沿碗壁缓缓注水',
                '闷泡：盖上碗盖闷泡',
                '出汤：茶汤倒入品茗杯'
            ]
        },
        benefits: ['暖胃养胃', '提神消疲', '利尿消肿', '抗菌消炎'],
        bestTime: '下午茶时间',
        taboo: ['发烧时不宜', '空腹不宜'],
        storage: '密封、避光、阴凉处',
        price: '正宗桐木关500-2000元/斤'
    },
    {
        name: '白毫银针',
        type: '白茶',
        origin: '福建福鼎、政和',
        appearance: '芽头肥壮，满披白毫，银白闪亮',
        aroma: '毫香清鲜，有花香',
        taste: '清甜醇爽，毫味足',
        brewing: {
            water: '85-90°C热水',
            ratio: '1:50（3g茶叶配150ml水）',
            vessel: '玻璃杯或白瓷盖碗',
            time: '第一泡2分钟，后续递增30秒',
            steps: [
                '温杯：轻柔温润茶具',
                '投茶：轻放茶叶，勿压碎',
                '注水：水流细缓，沿杯壁注入',
                '静置：让茶叶自然舒展',
                '品饮：先闻香，再品味'
            ]
        },
        benefits: ['清热降火', '美容养颜', '抗氧化', '护肝明目'],
        bestTime: '午后或夏季',
        taboo: ['脾胃虚寒者少饮', '经期女性少饮'],
        storage: '密封、避光、干燥处，可长期存放',
        price: '特级800-3000元/斤'
    },
    {
        name: '大红袍',
        type: '乌龙茶（岩茶）',
        origin: '福建武夷山',
        appearance: '条索紧结，色泽绿褐鲜润',
        aroma: '岩骨花香，香气馥郁',
        taste: '醇厚甘爽，岩韵明显',
        brewing: {
            water: '98-100°C沸水',
            ratio: '1:15（8g茶叶配120ml水）',
            vessel: '紫砂壶或盖碗',
            time: '第一泡15秒，后续递增5秒',
            steps: [
                '高温烫壶：沸水烫洗茶具',
                '投茶摇香：投茶后摇晃激发香气',
                '悬壶高冲：高处注水激发茶性',
                '刮沫淋盖：刮去浮沫，淋盖提温',
                '关公巡城：均匀分茶入杯'
            ]
        },
        benefits: ['提神醒脑', '消食去腻', '利尿消肿', '抗衰老'],
        bestTime: '上午或饭后',
        taboo: ['空腹不宜', '睡前不宜', '胃病者少饮'],
        storage: '密封、避光、阴凉干燥处',
        price: '正岩茶1000-5000元/斤，母树茶无价'
    },
    {
        name: '碧螺春',
        type: '绿茶',
        origin: '江苏苏州太湖洞庭山',
        appearance: '卷曲如螺，满身披毫，银绿隐翠',
        aroma: '花果香浓郁，清香持久',
        taste: '鲜爽生津，回味甘甜',
        brewing: {
            water: '75-80°C温水',
            ratio: '1:50（3g茶叶配150ml水）',
            vessel: '玻璃杯',
            time: '第一泡1分钟，后续递增20秒',
            steps: [
                '温杯：温水轻润玻璃杯',
                '注水：先注入七分水',
                '投茶：将茶叶轻撒入水中',
                '观赏：欣赏茶叶翻滚舒展',
                '品饮：待茶叶沉底后品尝'
            ]
        },
        benefits: ['提神益思', '利尿解毒', '抗菌消炎', '减肥瘦身'],
        bestTime: '上午',
        taboo: ['空腹不宜', '胃寒者少饮', '睡前不宜'],
        storage: '密封、冷藏保存',
        price: '特级1000-3000元/斤'
    },
    {
        name: '祁门红茶',
        type: '红茶',
        origin: '安徽祁门',
        appearance: '条索紧细，色泽乌润',
        aroma: '祁门香独特，似花似果似蜜',
        taste: '醇和鲜爽，回味隽永',
        brewing: {
            water: '90-95°C热水',
            ratio: '1:50（3g茶叶配150ml水）',
            vessel: '白瓷盖碗或茶壶',
            time: '第一泡30秒，后续递增10秒',
            steps: [
                '温具：热水温润茶具',
                '投茶：将茶叶置入盖碗',
                '注水：沿碗壁缓缓注入',
                '闷泡：盖上碗盖适当闷泡',
                '品饮：可纯饮或加奶调饮'
            ]
        },
        benefits: ['暖胃护胃', '提神消疲', '生津清热', '利尿'],
        bestTime: '下午茶',
        taboo: ['发烧时不宜', '结石患者少饮'],
        storage: '密封、避光、阴凉处',
        price: '特级300-1000元/斤'
    }
];

// ==================== 酒道数据 ====================
const wineData = [
    {
        name: '茅台酒',
        type: '酱香型白酒',
        origin: '贵州茅台镇',
        alcohol: '53%vol',
        appearance: '无色透明，微黄',
        aroma: '酱香突出，幽雅细腻，空杯留香持久',
        taste: '醇厚丰满，回味悠长，空杯隔夜香犹存',
        price: '飞天茅台约1500-3000元/瓶，年份酒更高',
        rating: '⭐⭐⭐⭐⭐',
        drinking: {
            temperature: '常温或微温（15-20°C）',
            vessel: '小酒杯（15-20ml）',
            method: '小口慢品，让酒液在口中停留',
            pairing: ['酱香菜肴', '红烧肉', '卤味', '花生米']
        },
        history: '始于1951年，由三家烧房合并而成，国酒之称',
        tips: ['真品瓶盖可旋转但不脱落', '酒体挂杯明显', '空杯留香可达24小时'],
        healthNote: '适量饮用，每次不超过50ml'
    },
    {
        name: '五粮液',
        type: '浓香型白酒',
        origin: '四川宜宾',
        alcohol: '52%vol',
        appearance: '无色透明，清亮',
        aroma: '窖香浓郁，香气协调，陈香舒适',
        taste: '绵甜甘冽，香味协调，余味净爽',
        price: '普五约1000-1500元/瓶',
        rating: '⭐⭐⭐⭐⭐',
        drinking: {
            temperature: '常温（18-22°C）',
            vessel: '小酒杯',
            method: '先闻香，再小口品尝',
            pairing: ['川菜', '火锅', '烧烤', '凉菜']
        },
        history: '始于明代，由五种粮食酿造而成',
        tips: ['五种粮食：高粱、大米、糯米、小麦、玉米', '酒体醇厚', '回味悠长'],
        healthNote: '适量饮用，每次不超过50ml'
    },
    {
        name: '汾酒',
        type: '清香型白酒',
        origin: '山西杏花村',
        alcohol: '53%vol',
        appearance: '无色透明，清亮如水',
        aroma: '清香纯正，余香悠长',
        taste: '绵软甘甜，清爽利口',
        price: '青花汾酒约300-800元/瓶',
        rating: '⭐⭐⭐⭐',
        drinking: {
            temperature: '常温或冰镇',
            vessel: '小酒杯',
            method: '可纯饮或加冰',
            pairing: ['清淡菜肴', '海鲜', '凉菜', '面食']
        },
        history: '中国最古老的名酒之一，有4000年历史',
        tips: ['清香型白酒代表', '适合初饮者', '口感清爽'],
        healthNote: '适量饮用，每次不超过100ml'
    },
    {
        name: '拉菲红酒',
        type: '干红葡萄酒',
        origin: '法国波尔多',
        alcohol: '12.5-13.5%vol',
        appearance: '深宝石红色，边缘泛紫',
        aroma: '黑醋栗、雪松、烟熏、矿物质香气',
        taste: '单宁细腻，结构优雅，余味悠长',
        price: '大拉菲约5000-20000元/瓶，副牌约1500-3000元',
        rating: '⭐⭐⭐⭐⭐',
        drinking: {
            temperature: '16-18°C',
            vessel: '波尔多杯',
            method: '开瓶后醒酒1-2小时',
            pairing: ['牛排', '羊排', '奶酪', '黑巧克力']
        },
        history: '1855年波尔多分级一级庄，罗斯柴尔德家族所有',
        tips: ['需要醒酒', '陈年潜力强', '适合收藏'],
        healthNote: '每日不超过150ml'
    },
    {
        name: '青岛啤酒',
        type: '淡色拉格啤酒',
        origin: '山东青岛',
        alcohol: '4.3%vol',
        appearance: '金黄色，泡沫洁白细腻',
        aroma: '麦芽香与酒花香平衡',
        taste: '清爽纯正，口感顺滑',
        price: '经典约5-8元/瓶，奥古特约15-20元/瓶',
        rating: '⭐⭐⭐⭐',
        drinking: {
            temperature: '8-10°C冰镇',
            vessel: '啤酒杯',
            method: '45度角倒入杯中',
            pairing: ['海鲜', '烧烤', '炸鸡', '小龙虾']
        },
        history: '1903年德国人创建，中国最早的啤酒厂之一',
        tips: ['冰镇后口感最佳', '倒酒留泡沫', '新鲜饮用'],
        healthNote: '每日不超过500ml'
    },
    {
        name: '獭祭清酒',
        type: '纯米大吟酿',
        origin: '日本山口县',
        alcohol: '16%vol',
        appearance: '清澈透明，微带淡黄',
        aroma: '果香浓郁，有蜜瓜、梨的香气',
        taste: '甘甜顺滑，余味清爽',
        price: '二割三分约500-800元/瓶，三割九分约200-300元',
        rating: '⭐⭐⭐⭐⭐',
        drinking: {
            temperature: '冷饮5-10°C或温饮40°C',
            vessel: '清酒杯或葡萄酒杯',
            method: '冷饮更能体现香气',
            pairing: ['刺身', '寿司', '天妇罗', '清淡日料']
        },
        history: '旭酒造出品，以精米步合著称',
        tips: ['二割三分精米步合23%', '开瓶后尽快饮用', '冷藏保存'],
        healthNote: '每日不超过180ml'
    },
    {
        name: '轩尼诗XO',
        type: '干邑白兰地',
        origin: '法国干邑地区',
        alcohol: '40%vol',
        appearance: '琥珀色，晶莹剔透',
        aroma: '橡木、香草、干果、香料复合香气',
        taste: '醇厚圆润，层次丰富，余味悠长',
        price: '约1200-1800元/瓶',
        rating: '⭐⭐⭐⭐⭐',
        drinking: {
            temperature: '常温（18-20°C）',
            vessel: '白兰地杯（郁金香杯）',
            method: '手心温杯，小口慢品',
            pairing: ['雪茄', '黑巧克力', '奶酪', '坚果']
        },
        history: '1765年创立，XO级别陈酿至少10年',
        tips: ['可加冰或加水', '手心温杯激发香气', '适合餐后饮用'],
        healthNote: '每日不超过30ml'
    },
    {
        name: '山崎单一麦芽威士忌',
        type: '日本威士忌',
        origin: '日本大阪',
        alcohol: '43%vol',
        appearance: '金黄琥珀色',
        aroma: '花香、果香、橡木香层次分明',
        taste: '柔和顺滑，有蜂蜜和香草味',
        price: '12年约800-1500元/瓶，18年约3000-5000元',
        rating: '⭐⭐⭐⭐⭐',
        drinking: {
            temperature: '常温或加冰',
            vessel: '威士忌杯',
            method: '可纯饮、加冰或加水',
            pairing: ['日式料理', '烤肉', '坚果', '黑巧克力']
        },
        history: '三得利1923年创建，日本威士忌鼻祖',
        tips: ['Highball喝法很流行', '加水可释放更多香气', '适合收藏'],
        healthNote: '每日不超过50ml'
    }
];

// 获取今日运动
function getDailyFitness() {
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    return fitnessData[dayOfYear % fitnessData.length];
}

// 获取今日茶
function getDailyTea() {
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    return teaData[dayOfYear % teaData.length];
}

// 获取今日酒
function getDailyWine() {
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    return wineData[dayOfYear % wineData.length];
}

// 初始化运动健康
function initDailyFitness() {
    const fitness = getDailyFitness();
    const today = new Date();
    document.getElementById('fitness-date').textContent = `${today.getMonth() + 1}月${today.getDate()}日`;
    document.getElementById('fitness-name').textContent = fitness.name;
    document.getElementById('fitness-desc').textContent = `针对：${fitness.targetSymptoms.join('、')}`;
}

// 初始化茶道
function initDailyTea() {
    const tea = getDailyTea();
    const today = new Date();
    document.getElementById('tea-date').textContent = `${today.getMonth() + 1}月${today.getDate()}日`;
    document.getElementById('tea-name').textContent = tea.name;
    document.getElementById('tea-desc').textContent = `${tea.type} · ${tea.origin}`;
}

// 初始化酒道
function initDailyWine() {
    const wine = getDailyWine();
    const today = new Date();
    document.getElementById('wine-date').textContent = `${today.getMonth() + 1}月${today.getDate()}日`;
    document.getElementById('wine-name').textContent = wine.name;
    document.getElementById('wine-desc').textContent = `${wine.type} · ${wine.rating}`;
}

// 显示运动健康详情
function showDailyFitness() {
    const fitness = getDailyFitness();
    const resultsDiv = document.getElementById('results');
    
    resultsDiv.innerHTML = `
        <div class="result-header">
            <h2>💪 ${fitness.name}</h2>
            <button class="back-btn" onclick="hideResults()">
                <i class="fas fa-times"></i> 关闭
            </button>
        </div>
        
        <div class="fitness-detail-card">
            <div class="fitness-target-box">
                <div class="target-title">🎯 适用症状</div>
                <div class="target-symptoms">
                    ${fitness.targetSymptoms.map(s => `<span class="symptom-tag">${s}</span>`).join('')}
                </div>
            </div>
            
            <div class="fitness-section">
                <div class="section-title"><i class="fas fa-dumbbell"></i> 涉及肌肉</div>
                <div class="muscle-list">
                    ${fitness.muscles.map(m => `
                        <div class="muscle-item">
                            <div class="muscle-name">${m.name}</div>
                            <div class="muscle-location">📍 ${m.location}</div>
                            <div class="muscle-function">💡 ${m.function}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="fitness-section">
                <div class="section-title"><i class="fas fa-list-ol"></i> 训练动作</div>
                <div class="exercise-list">
                    ${fitness.exercises.map((e, i) => `
                        <div class="exercise-item">
                            <div class="exercise-num">${i + 1}</div>
                            <div class="exercise-content">
                                <div class="exercise-name">${e.name}</div>
                                <div class="exercise-detail">${e.sets} × ${e.reps}</div>
                                <div class="exercise-tips">💡 ${e.tips}</div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="fitness-info">
                <div class="info-item"><i class="fas fa-clock"></i> 时长：${fitness.duration}</div>
                <div class="info-item"><i class="fas fa-calendar"></i> 频率：${fitness.frequency}</div>
            </div>
            
            <div class="fitness-section">
                <div class="section-title" style="color: #e74c3c;"><i class="fas fa-exclamation-triangle"></i> 注意事项</div>
                <ul class="precaution-list">
                    ${fitness.precautions.map(p => `<li>${p}</li>`).join('')}
                </ul>
            </div>
            
            <div class="notice">
                <i class="fas fa-star"></i> <strong>训练效果：</strong>${fitness.benefits}
            </div>
        </div>
    `;
    
    resultsDiv.classList.add('show');
    resultsDiv.scrollIntoView({ behavior: 'smooth' });
}

// 显示茶道详情
function showDailyTea() {
    const tea = getDailyTea();
    const resultsDiv = document.getElementById('results');
    
    resultsDiv.innerHTML = `
        <div class="result-header">
            <h2>🍵 ${tea.name}</h2>
            <button class="back-btn" onclick="hideResults()">
                <i class="fas fa-times"></i> 关闭
            </button>
        </div>
        
        <div class="tea-detail-card">
            <div class="tea-info-box">
                <div class="tea-type">${tea.type}</div>
                <div class="tea-origin">📍 ${tea.origin}</div>
            </div>
            
            <div class="tea-section">
                <div class="section-title"><i class="fas fa-eye"></i> 外观</div>
                <p>${tea.appearance}</p>
            </div>
            
            <div class="tea-section">
                <div class="section-title"><i class="fas fa-wind"></i> 香气</div>
                <p>${tea.aroma}</p>
            </div>
            
            <div class="tea-section">
                <div class="section-title"><i class="fas fa-glass-whiskey"></i> 口感</div>
                <p>${tea.taste}</p>
            </div>
            
            <div class="tea-section brewing-section">
                <div class="section-title"><i class="fas fa-mug-hot"></i> 冲泡方法</div>
                <div class="brewing-info">
                    <div class="brewing-item"><span class="label">水温：</span>${tea.brewing.water}</div>
                    <div class="brewing-item"><span class="label">茶水比：</span>${tea.brewing.ratio}</div>
                    <div class="brewing-item"><span class="label">茶具：</span>${tea.brewing.vessel}</div>
                    <div class="brewing-item"><span class="label">时间：</span>${tea.brewing.time}</div>
                </div>
                <div class="brewing-steps">
                    <div class="steps-title">冲泡步骤：</div>
                    ${tea.brewing.steps.map((s, i) => `<div class="step-item"><span class="step-num">${i + 1}</span>${s}</div>`).join('')}
                </div>
            </div>
            
            <div class="tea-section">
                <div class="section-title"><i class="fas fa-heart"></i> 功效</div>
                <div class="benefits-grid">
                    ${tea.benefits.map(b => `<span class="benefit-tag">${b}</span>`).join('')}
                </div>
            </div>
            
            <div class="tea-info-grid">
                <div class="info-card">
                    <div class="info-label">最佳时间</div>
                    <div class="info-value">${tea.bestTime}</div>
                </div>
                <div class="info-card">
                    <div class="info-label">参考价格</div>
                    <div class="info-value">${tea.price}</div>
                </div>
            </div>
            
            <div class="tea-section">
                <div class="section-title" style="color: #e74c3c;"><i class="fas fa-ban"></i> 饮用禁忌</div>
                <ul class="taboo-list">
                    ${tea.taboo.map(t => `<li>${t}</li>`).join('')}
                </ul>
            </div>
            
            <div class="notice">
                <i class="fas fa-box"></i> <strong>存储方法：</strong>${tea.storage}
            </div>
        </div>
    `;
    
    resultsDiv.classList.add('show');
    resultsDiv.scrollIntoView({ behavior: 'smooth' });
}

// 显示酒道详情
function showDailyWine() {
    const wine = getDailyWine();
    const resultsDiv = document.getElementById('results');
    
    resultsDiv.innerHTML = `
        <div class="result-header">
            <h2>🍷 ${wine.name}</h2>
            <button class="back-btn" onclick="hideResults()">
                <i class="fas fa-times"></i> 关闭
            </button>
        </div>
        
        <div class="wine-detail-card">
            <div class="wine-info-box">
                <div class="wine-type">${wine.type}</div>
                <div class="wine-origin">📍 ${wine.origin}</div>
                <div class="wine-rating">${wine.rating}</div>
            </div>
            
            <div class="wine-specs">
                <div class="spec-item"><span class="label">酒精度：</span>${wine.alcohol}</div>
                <div class="spec-item"><span class="label">参考价格：</span>${wine.price}</div>
            </div>
            
            <div class="wine-section">
                <div class="section-title"><i class="fas fa-eye"></i> 外观</div>
                <p>${wine.appearance}</p>
            </div>
            
            <div class="wine-section">
                <div class="section-title"><i class="fas fa-wind"></i> 香气</div>
                <p>${wine.aroma}</p>
            </div>
            
            <div class="wine-section">
                <div class="section-title"><i class="fas fa-glass-whiskey"></i> 口感</div>
                <p>${wine.taste}</p>
            </div>
            
            <div class="wine-section drinking-section">
                <div class="section-title"><i class="fas fa-wine-glass-alt"></i> 品饮方法</div>
                <div class="drinking-info">
                    <div class="drinking-item"><span class="label">温度：</span>${wine.drinking.temperature}</div>
                    <div class="drinking-item"><span class="label">酒具：</span>${wine.drinking.vessel}</div>
                    <div class="drinking-item"><span class="label">方法：</span>${wine.drinking.method}</div>
                </div>
                <div class="pairing-section">
                    <div class="pairing-title">🍽️ 推荐搭配：</div>
                    <div class="pairing-items">
                        ${wine.drinking.pairing.map(p => `<span class="pairing-tag">${p}</span>`).join('')}
                    </div>
                </div>
            </div>
            
            <div class="wine-section">
                <div class="section-title"><i class="fas fa-history"></i> 历史背景</div>
                <p>${wine.history}</p>
            </div>
            
            <div class="wine-section">
                <div class="section-title"><i class="fas fa-lightbulb"></i> 品鉴要点</div>
                <ul class="tips-list">
                    ${wine.tips.map(t => `<li>${t}</li>`).join('')}
                </ul>
            </div>
            
            <div class="notice" style="background: #fff3cd; border-left-color: #ffc107;">
                <i class="fas fa-exclamation-circle" style="color: #856404;"></i> 
                <strong style="color: #856404;">健康提示：</strong>
                <span style="color: #856404;">${wine.healthNote}。未成年人禁止饮酒，酒后不开车。</span>
            </div>
        </div>
    `;
    
    resultsDiv.classList.add('show');
    resultsDiv.scrollIntoView({ behavior: 'smooth' });
}

// ==================== 二十四节气饮食数据 ====================
const solarTermsData = [
    {
        name: '小寒', startMonth: 1, startDay: 5,
        principle: '温补肾阳，驱寒保暖',
        description: '小寒是一年中最冷的时节之一，宜温补肾阳，多食温热食物。',
        vegetables: ['白萝卜', '大白菜', '冬笋', '韭菜', '菠菜', '芹菜'],
        fruits: ['苹果', '橙子', '柚子', '甘蔗', '山楂'],
        meats: ['羊肉', '牛肉', '鸡肉', '鱼肉'],
        grains: ['糯米', '黑米', '红豆', '黑豆'],
        soups: ['羊肉萝卜汤', '当归生姜羊肉汤', '黑豆排骨汤'],
        teas: ['红茶', '姜茶', '桂圆红枣茶'],
        avoid: ['生冷食物', '冰镇饮料', '寒性水果'],
        tips: '早睡晚起，注意保暖，适当进补'
    },
    {
        name: '大寒', startMonth: 1, startDay: 20,
        principle: '滋阴补阳，养精蓄锐',
        description: '大寒是冬季最后一个节气，宜滋阴补阳，为来年储备能量。',
        vegetables: ['山药', '莲藕', '白萝卜', '胡萝卜', '菠菜'],
        fruits: ['苹果', '梨', '柚子', '橙子', '猕猴桃'],
        meats: ['羊肉', '鸡肉', '鸭肉', '鱼肉'],
        grains: ['糯米', '小米', '黑米', '红枣'],
        soups: ['山药排骨汤', '莲藕猪蹄汤', '乌鸡汤'],
        teas: ['红茶', '普洱茶', '枸杞茶'],
        avoid: ['辛辣刺激', '油腻食物', '生冷食物'],
        tips: '注意防寒保暖，适度运动，早睡早起'
    },
    {
        name: '立春', startMonth: 2, startDay: 4,
        principle: '养肝护阳，升发阳气',
        description: '立春是春季开始，宜养肝护阳，饮食清淡，助阳气升发。',
        vegetables: ['韭菜', '香椿', '豆芽', '荠菜', '菠菜', '芹菜'],
        fruits: ['草莓', '樱桃', '苹果', '橙子'],
        meats: ['鸡肉', '鱼肉', '瘦肉'],
        grains: ['小米', '燕麦', '绿豆'],
        soups: ['韭菜鸡蛋汤', '菠菜豆腐汤', '荠菜馄饨'],
        teas: ['菊花茶', '玫瑰花茶', '绿茶'],
        avoid: ['酸味食物过多', '辛辣油腻', '大补食物'],
        tips: '早睡早起，舒展筋骨，保持心情舒畅'
    },
    {
        name: '雨水', startMonth: 2, startDay: 19,
        principle: '健脾祛湿，调养脾胃',
        description: '雨水时节湿气渐重，宜健脾祛湿，少食生冷油腻。',
        vegetables: ['山药', '薏米', '扁豆', '芹菜', '韭菜'],
        fruits: ['苹果', '橙子', '草莓'],
        meats: ['鲫鱼', '鸡肉', '瘦肉'],
        grains: ['薏米', '红豆', '小米', '玉米'],
        soups: ['薏米红豆汤', '山药排骨汤', '鲫鱼豆腐汤'],
        teas: ['陈皮茶', '茯苓茶', '薏米水'],
        avoid: ['生冷食物', '油腻食物', '甜食过多'],
        tips: '注意保暖防湿，适当运动，调理脾胃'
    },
    {
        name: '惊蛰', startMonth: 3, startDay: 6,
        principle: '清肝泻火，润肺养阴',
        description: '惊蛰万物复苏，宜清肝泻火，饮食清淡，多食蔬果。',
        vegetables: ['菠菜', '芹菜', '荠菜', '春笋', '豆芽'],
        fruits: ['梨', '苹果', '草莓', '枇杷'],
        meats: ['鸭肉', '鱼肉', '瘦肉'],
        grains: ['糙米', '燕麦', '绿豆'],
        soups: ['银耳雪梨汤', '菠菜猪肝汤', '春笋鸡汤'],
        teas: ['菊花茶', '金银花茶', '绿茶'],
        avoid: ['辛辣食物', '油炸食品', '羊肉狗肉'],
        tips: '早睡早起，适当运动，保持情绪稳定'
    },
    {
        name: '春分', startMonth: 3, startDay: 21,
        principle: '阴阳平衡，调和五脏',
        description: '春分昼夜平分，宜阴阳调和，饮食均衡，不偏寒热。',
        vegetables: ['香椿', '春笋', '菠菜', '韭菜', '荠菜'],
        fruits: ['草莓', '樱桃', '枇杷', '桑葚'],
        meats: ['鱼肉', '鸡肉', '瘦肉'],
        grains: ['小米', '燕麦', '黑米'],
        soups: ['香椿豆腐汤', '春笋老鸭汤', '枸杞叶猪肝汤'],
        teas: ['玫瑰花茶', '茉莉花茶', '枸杞茶'],
        avoid: ['大寒大热食物', '暴饮暴食', '过度进补'],
        tips: '调节作息，适度运动，保持心态平和'
    },
    {
        name: '清明', startMonth: 4, startDay: 5,
        principle: '养肝明目，清热利湿',
        description: '清明时节雨纷纷，宜养肝明目，清热利湿，饮食清淡。',
        vegetables: ['艾草', '荠菜', '马兰头', '菠菜', '芹菜'],
        fruits: ['桑葚', '草莓', '枇杷', '樱桃'],
        meats: ['鱼肉', '鸡肉', '鸭肉'],
        grains: ['糯米', '薏米', '绿豆'],
        soups: ['艾叶鸡蛋汤', '荠菜豆腐汤', '薏米冬瓜汤'],
        teas: ['菊花茶', '决明子茶', '绿茶'],
        avoid: ['发物', '辛辣刺激', '油腻食物'],
        tips: '踏青郊游，舒展身心，注意防雨保暖'
    },
    {
        name: '谷雨', startMonth: 4, startDay: 20,
        principle: '健脾除湿，益肝补肾',
        description: '谷雨是春季最后一个节气，雨水增多，宜健脾除湿。',
        vegetables: ['香椿', '蒲公英', '苦菜', '菠菜', '豆芽'],
        fruits: ['樱桃', '桑葚', '草莓', '枇杷'],
        meats: ['鲫鱼', '鸡肉', '瘦肉'],
        grains: ['薏米', '红豆', '扁豆', '玉米'],
        soups: ['薏米排骨汤', '鲫鱼豆腐汤', '香椿炒蛋'],
        teas: ['陈皮茶', '薏米茶', '绿茶'],
        avoid: ['生冷食物', '油腻食物', '湿热食物'],
        tips: '适当运动，注意祛湿，保持居室通风'
    },
    {
        name: '立夏', startMonth: 5, startDay: 6,
        principle: '养心安神，清热消暑',
        description: '立夏是夏季开始，宜养心安神，清热消暑，饮食清淡。',
        vegetables: ['苦瓜', '黄瓜', '冬瓜', '丝瓜', '西红柿'],
        fruits: ['西瓜', '樱桃', '杨梅', '桃子', '李子'],
        meats: ['鸭肉', '鱼肉', '瘦肉'],
        grains: ['绿豆', '薏米', '小米'],
        soups: ['绿豆汤', '冬瓜排骨汤', '苦瓜排骨汤'],
        teas: ['菊花茶', '金银花茶', '荷叶茶'],
        avoid: ['辛辣食物', '油腻食物', '过量冷饮'],
        tips: '午休养心，避免大汗，保持心情愉悦'
    },
    {
        name: '小满', startMonth: 5, startDay: 21,
        principle: '清热利湿，健脾养胃',
        description: '小满时节湿热渐盛，宜清热利湿，健脾养胃。',
        vegetables: ['苦瓜', '冬瓜', '黄瓜', '芹菜', '莴笋'],
        fruits: ['西瓜', '桃子', '杨梅', '枇杷', '李子'],
        meats: ['鸭肉', '鱼肉', '兔肉'],
        grains: ['薏米', '绿豆', '红豆', '玉米'],
        soups: ['薏米冬瓜汤', '绿豆百合汤', '苦瓜黄豆汤'],
        teas: ['荷叶茶', '薏米茶', '菊花茶'],
        avoid: ['辛辣油腻', '生冷过度', '暴饮暴食'],
        tips: '注意防暑祛湿，饮食有节，起居有常'
    },
    {
        name: '芒种', startMonth: 6, startDay: 6,
        principle: '清热解暑，生津止渴',
        description: '芒种时节天气炎热，宜清热解暑，多补充水分。',
        vegetables: ['苦瓜', '黄瓜', '丝瓜', '冬瓜', '茄子'],
        fruits: ['西瓜', '哈密瓜', '桃子', '杨梅', '荔枝'],
        meats: ['鸭肉', '鱼肉', '瘦肉'],
        grains: ['绿豆', '薏米', '小米'],
        soups: ['绿豆汤', '酸梅汤', '冬瓜海带汤'],
        teas: ['菊花茶', '金银花茶', '乌梅茶'],
        avoid: ['辛辣食物', '油腻食物', '过量荔枝'],
        tips: '注意防暑降温，适当午休，多喝水'
    },
    {
        name: '夏至', startMonth: 6, startDay: 21,
        principle: '清心降火，养阴生津',
        description: '夏至是一年中白昼最长的一天，宜清心降火，养阴生津。',
        vegetables: ['苦瓜', '黄瓜', '冬瓜', '丝瓜', '莲藕'],
        fruits: ['西瓜', '哈密瓜', '葡萄', '桃子', '李子'],
        meats: ['鸭肉', '鱼肉', '兔肉'],
        grains: ['绿豆', '薏米', '莲子'],
        soups: ['绿豆汤', '莲子百合汤', '冬瓜薏米汤'],
        teas: ['荷叶茶', '菊花茶', '薄荷茶'],
        avoid: ['辛辣燥热', '油腻厚味', '过量冷饮'],
        tips: '避免正午外出，保持心静，适当运动'
    },
    {
        name: '小暑', startMonth: 7, startDay: 7,
        principle: '消暑清热，健脾利湿',
        description: '小暑天气炎热，宜消暑清热，注意健脾利湿。',
        vegetables: ['苦瓜', '冬瓜', '黄瓜', '丝瓜', '茄子'],
        fruits: ['西瓜', '葡萄', '桃子', '李子', '芒果'],
        meats: ['鸭肉', '鱼肉', '瘦肉'],
        grains: ['绿豆', '薏米', '红豆'],
        soups: ['绿豆汤', '冬瓜排骨汤', '薏米红豆汤'],
        teas: ['菊花茶', '金银花茶', '荷叶茶'],
        avoid: ['辛辣食物', '油腻食物', '过量冷饮'],
        tips: '注意防暑降温，保持充足睡眠，多喝水'
    },
    {
        name: '大暑', startMonth: 7, startDay: 23,
        principle: '清热解暑，益气养阴',
        description: '大暑是一年中最热的时节，宜清热解暑，益气养阴。',
        vegetables: ['苦瓜', '冬瓜', '黄瓜', '丝瓜', '莲藕'],
        fruits: ['西瓜', '葡萄', '龙眼', '荔枝', '芒果'],
        meats: ['鸭肉', '鱼肉', '瘦肉'],
        grains: ['绿豆', '薏米', '莲子', '百合'],
        soups: ['绿豆汤', '莲子百合汤', '酸梅汤'],
        teas: ['菊花茶', '金银花茶', '乌梅茶'],
        avoid: ['辛辣燥热', '油腻厚味', '暴饮暴食'],
        tips: '避免高温时段外出，保持心情平静，饮食清淡'
    },
    {
        name: '立秋', startMonth: 8, startDay: 7,
        principle: '润肺养阴，防燥护肤',
        description: '立秋是秋季开始，宜润肺养阴，防燥护肤。',
        vegetables: ['莲藕', '百合', '银耳', '山药', '南瓜'],
        fruits: ['梨', '葡萄', '苹果', '柿子', '石榴'],
        meats: ['鸭肉', '猪肉', '鱼肉'],
        grains: ['小米', '糯米', '黑米'],
        soups: ['银耳莲子汤', '百合雪梨汤', '山药排骨汤'],
        teas: ['菊花茶', '枸杞茶', '蜂蜜水'],
        avoid: ['辛辣食物', '油炸食品', '生冷过度'],
        tips: '早睡早起，适当运动，注意润燥'
    },
    {
        name: '处暑', startMonth: 8, startDay: 23,
        principle: '滋阴润燥，养肺护肤',
        description: '处暑暑气渐消，秋燥渐起，宜滋阴润燥。',
        vegetables: ['莲藕', '百合', '银耳', '山药', '菠菜'],
        fruits: ['梨', '葡萄', '苹果', '柿子', '香蕉'],
        meats: ['鸭肉', '猪肉', '鱼肉'],
        grains: ['小米', '糯米', '燕麦'],
        soups: ['银耳雪梨汤', '百合莲子汤', '山药枸杞汤'],
        teas: ['菊花茶', '枸杞茶', '蜂蜜柚子茶'],
        avoid: ['辛辣燥热', '油腻食物', '烧烤煎炸'],
        tips: '注意润燥，保持充足睡眠，适当运动'
    },
    {
        name: '白露', startMonth: 9, startDay: 8,
        principle: '养阴润肺，健脾益胃',
        description: '白露秋意渐浓，宜养阴润肺，健脾益胃。',
        vegetables: ['莲藕', '山药', '百合', '南瓜', '胡萝卜'],
        fruits: ['梨', '苹果', '葡萄', '柿子', '石榴'],
        meats: ['鸭肉', '猪肉', '鸡肉'],
        grains: ['小米', '糯米', '红枣'],
        soups: ['银耳百合汤', '山药排骨汤', '莲藕猪蹄汤'],
        teas: ['菊花茶', '桂花茶', '蜂蜜水'],
        avoid: ['辛辣刺激', '生冷食物', '油腻食物'],
        tips: '注意保暖，早睡早起，适当进补'
    },
    {
        name: '秋分', startMonth: 9, startDay: 23,
        principle: '阴阳平衡，滋阴润燥',
        description: '秋分昼夜平分，宜阴阳调和，滋阴润燥。',
        vegetables: ['莲藕', '山药', '百合', '银耳', '南瓜'],
        fruits: ['梨', '苹果', '柿子', '石榴', '葡萄'],
        meats: ['鸭肉', '猪肉', '鱼肉'],
        grains: ['小米', '糯米', '黑米', '红枣'],
        soups: ['银耳雪梨汤', '山药枸杞汤', '百合莲子汤'],
        teas: ['菊花茶', '枸杞茶', '桂花茶'],
        avoid: ['辛辣燥热', '油腻食物', '生冷过度'],
        tips: '调节作息，适度运动，保持心态平和'
    },
    {
        name: '寒露', startMonth: 10, startDay: 8,
        principle: '养阴防燥，润肺益胃',
        description: '寒露气温下降，秋燥明显，宜养阴防燥。',
        vegetables: ['山药', '莲藕', '百合', '南瓜', '胡萝卜'],
        fruits: ['梨', '苹果', '柿子', '石榴', '橙子'],
        meats: ['鸭肉', '猪肉', '鸡肉', '鱼肉'],
        grains: ['小米', '糯米', '红枣', '核桃'],
        soups: ['银耳百合汤', '山药排骨汤', '莲藕猪蹄汤'],
        teas: ['菊花茶', '枸杞茶', '蜂蜜柚子茶'],
        avoid: ['辛辣刺激', '生冷食物', '烧烤煎炸'],
        tips: '注意保暖，早睡早起，适当进补'
    },
    {
        name: '霜降', startMonth: 10, startDay: 23,
        principle: '健脾养胃，润肺生津',
        description: '霜降是秋季最后一个节气，宜健脾养胃，润肺生津。',
        vegetables: ['山药', '南瓜', '白萝卜', '胡萝卜', '莲藕'],
        fruits: ['苹果', '梨', '柿子', '橙子', '柚子'],
        meats: ['鸭肉', '猪肉', '牛肉', '羊肉'],
        grains: ['小米', '糯米', '红枣', '核桃', '栗子'],
        soups: ['山药排骨汤', '萝卜牛肉汤', '银耳莲子汤'],
        teas: ['菊花茶', '枸杞茶', '红枣茶'],
        avoid: ['辛辣刺激', '生冷食物', '油腻过度'],
        tips: '注意保暖防寒，适当进补，早睡早起'
    },
    {
        name: '立冬', startMonth: 11, startDay: 7,
        principle: '温补肾阳，养精蓄锐',
        description: '立冬是冬季开始，宜温补肾阳，养精蓄锐。',
        vegetables: ['白萝卜', '山药', '大白菜', '胡萝卜', '莲藕'],
        fruits: ['苹果', '梨', '橙子', '柚子', '甘蔗'],
        meats: ['羊肉', '牛肉', '鸡肉', '鱼肉'],
        grains: ['糯米', '黑米', '红枣', '核桃', '栗子'],
        soups: ['羊肉萝卜汤', '当归生姜羊肉汤', '山药排骨汤'],
        teas: ['红茶', '姜茶', '桂圆红枣茶'],
        avoid: ['生冷食物', '寒性水果', '过量饮酒'],
        tips: '早睡晚起，注意保暖，适当进补'
    },
    {
        name: '小雪', startMonth: 11, startDay: 22,
        principle: '温肾壮阳，益气补血',
        description: '小雪天气渐冷，宜温肾壮阳，益气补血。',
        vegetables: ['白萝卜', '大白菜', '山药', '胡萝卜', '菠菜'],
        fruits: ['苹果', '橙子', '柚子', '甘蔗', '山楂'],
        meats: ['羊肉', '牛肉', '鸡肉', '鱼肉'],
        grains: ['糯米', '黑米', '红豆', '黑豆', '核桃'],
        soups: ['羊肉汤', '牛肉萝卜汤', '乌鸡汤'],
        teas: ['红茶', '姜茶', '枸杞茶'],
        avoid: ['生冷食物', '冰镇饮料', '寒性水果'],
        tips: '注意防寒保暖，适度运动，早睡晚起'
    },
    {
        name: '大雪', startMonth: 12, startDay: 7,
        principle: '温补脾肾，养阴益精',
        description: '大雪时节寒冷，宜温补脾肾，养阴益精。',
        vegetables: ['白萝卜', '大白菜', '山药', '莲藕', '菠菜'],
        fruits: ['苹果', '橙子', '柚子', '甘蔗', '猕猴桃'],
        meats: ['羊肉', '牛肉', '鸡肉', '鸭肉'],
        grains: ['糯米', '黑米', '红枣', '核桃', '栗子'],
        soups: ['羊肉汤', '山药排骨汤', '当归炖鸡'],
        teas: ['红茶', '姜茶', '桂圆红枣茶'],
        avoid: ['生冷食物', '冰镇饮料', '辛辣过度'],
        tips: '注意防寒保暖，适当进补，保持室内通风'
    },
    {
        name: '冬至', startMonth: 12, startDay: 22,
        principle: '温补肾阳，固本培元',
        description: '冬至是一年中夜最长的一天，宜温补肾阳，固本培元。',
        vegetables: ['白萝卜', '大白菜', '山药', '胡萝卜', '韭菜'],
        fruits: ['苹果', '橙子', '柚子', '甘蔗', '山楂'],
        meats: ['羊肉', '牛肉', '鸡肉', '鱼肉'],
        grains: ['糯米', '黑米', '红枣', '核桃', '黑豆'],
        soups: ['羊肉饺子', '当归生姜羊肉汤', '山药枸杞汤'],
        teas: ['红茶', '姜茶', '桂圆红枣茶'],
        avoid: ['生冷食物', '冰镇饮料', '寒性水果'],
        tips: '冬至进补，早睡晚起，注意保暖'
    }
];

// 获取当前节气
function getCurrentSolarTerm() {
    const now = new Date();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    
    // 找到当前节气
    for (let i = solarTermsData.length - 1; i >= 0; i--) {
        const term = solarTermsData[i];
        if (month > term.startMonth || (month === term.startMonth && day >= term.startDay)) {
            return term;
        }
    }
    // 如果是年初，返回小寒
    return solarTermsData[0];
}

// 初始化每日饮食显示
function initDailyDiet() {
    const term = getCurrentSolarTerm();
    document.getElementById('diet-solar-term').textContent = term.name;
    document.getElementById('diet-principle').textContent = term.principle;
    document.getElementById('diet-foods').textContent = `应季：${term.vegetables.slice(0, 3).join('、')}、${term.fruits.slice(0, 2).join('、')}`;
}

// 显示每日饮食详情
function showDailyDiet() {
    const term = getCurrentSolarTerm();
    const resultsDiv = document.getElementById('results');
    
    resultsDiv.innerHTML = `
        <div class="result-header">
            <h2>🥗 ${term.name} · 节气饮食</h2>
            <button class="back-btn" onclick="hideResults()">
                <i class="fas fa-times"></i> 关闭
            </button>
        </div>
        
        <div class="diet-detail-card">
            <div class="diet-principle-box">
                <div class="principle-title">🎯 养生原则</div>
                <div class="principle-text">${term.principle}</div>
                <div class="principle-desc">${term.description}</div>
            </div>
            
            <div class="diet-section">
                <div class="section-title"><i class="fas fa-leaf"></i> 应季蔬菜</div>
                <div class="food-grid">
                    ${term.vegetables.map(v => `<span class="food-item good"><span class="food-icon">🥬</span>${v}</span>`).join('')}
                </div>
            </div>
            
            <div class="diet-section">
                <div class="section-title"><i class="fas fa-apple-alt"></i> 应季水果</div>
                <div class="food-grid">
                    ${term.fruits.map(f => `<span class="food-item good"><span class="food-icon">🍎</span>${f}</span>`).join('')}
                </div>
            </div>
            
            <div class="diet-section">
                <div class="section-title"><i class="fas fa-drumstick-bite"></i> 推荐肉类</div>
                <div class="food-grid">
                    ${term.meats.map(m => `<span class="food-item good"><span class="food-icon">🍖</span>${m}</span>`).join('')}
                </div>
            </div>
            
            <div class="diet-section">
                <div class="section-title"><i class="fas fa-seedling"></i> 推荐谷物</div>
                <div class="food-grid">
                    ${term.grains.map(g => `<span class="food-item good"><span class="food-icon">🌾</span>${g}</span>`).join('')}
                </div>
            </div>
            
            <div class="diet-section">
                <div class="section-title"><i class="fas fa-mug-hot"></i> 推荐汤品/茶饮</div>
                <div class="food-grid">
                    ${term.soups.map(s => `<span class="food-item good"><span class="food-icon">🍲</span>${s}</span>`).join('')}
                    ${term.teas.map(t => `<span class="food-item good"><span class="food-icon">🍵</span>${t}</span>`).join('')}
                </div>
            </div>
            
            <div class="diet-section">
                <div class="section-title" style="color: #CD5C5C;"><i class="fas fa-ban"></i> 忌口食物</div>
                <div class="food-grid">
                    ${term.avoid.map(a => `<span class="food-item avoid"><span class="food-icon">⚠️</span>${a}</span>`).join('')}
                </div>
            </div>
            
            <div class="notice">
                <i class="fas fa-lightbulb"></i> <strong>养生提示：</strong>${term.tips}
            </div>
        </div>
    `;
    
    resultsDiv.classList.add('show');
    resultsDiv.scrollIntoView({ behavior: 'smooth' });
}

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

// 穴位本地图片配置（需要手动下载图片到 images 文件夹）
const localAcupointImages = {
    '太阳穴': 'taiyang.jpg',
    '风池穴': 'fengchi.jpg',
    '百会穴': 'baihui.jpg',
    '合谷穴': 'hegu.jpg',
    '内关穴': 'neiguan.jpg',
    '足三里': 'zusanli.jpg',
    '三阴交': 'sanyinjiao.jpg',
    '涌泉穴': 'yongquan.jpg',
    '中脘穴': 'zhongwan.jpg',
    '关元穴': 'guanyuan.jpg',
    '神门穴': 'shenmen.jpg',
    '肾俞穴': 'shenshu.jpg'
};

// 获取穴位图片 HTML
function getAcupointImage(name) {
    const config = acupointImages[name];
    const localImg = localAcupointImages[name];
    
    // 如果有本地图片，优先使用
    if (localImg) {
        return `
            <div class="acupoint-img-container">
                <img src="images/${localImg}" 
                     alt="${name}示意图" 
                     onerror="this.parentElement.innerHTML=getAcupointFallback('${name}');"
                     loading="lazy">
                ${config ? `<div class="acupoint-img-desc">${config.desc}</div>` : ''}
            </div>
        `;
    }
    
    // 没有本地图片时显示定位说明
    return getAcupointFallback(name);
}

// 穴位图片加载失败时的备用显示
function getAcupointFallback(name) {
    const config = acupointImages[name];
    const desc = config ? config.desc : '请参考文字描述定位';
    const bodyPart = config ? config.fallback : '穴位';
    
    return `
        <div class="acupoint-img-container">
            <div class="acupoint-location-card">
                <div class="location-header">
                    <span class="location-icon">📍</span>
                    <span class="location-title">${name} · ${bodyPart}</span>
                </div>
                <div class="location-desc">${desc}</div>
            </div>
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

// 症状同义词/关联词映射表，用于模糊匹配
const symptomSynonyms = {
    // 肺部/胸部相关
    '肺': ['感冒', '咳嗽'],
    '肺部': ['感冒', '咳嗽'],
    '肺疼': ['感冒', '咳嗽'],
    '肺痛': ['感冒', '咳嗽'],
    '肺部疼痛': ['感冒', '咳嗽'],
    '胸疼': ['感冒', '焦虑'],
    '胸痛': ['感冒', '焦虑'],
    '胸口疼': ['感冒', '焦虑'],
    '胸闷': ['焦虑', '感冒'],
    '呼吸困难': ['感冒', '焦虑'],
    '咳嗽': ['感冒'],
    // 头部相关
    '头': ['头痛', '失眠', '焦虑'],
    '头部': ['头痛', '失眠'],
    '头疼': ['头痛'],
    '头晕': ['头痛', '焦虑'],
    '头胀': ['头痛'],
    '偏头痛': ['头痛'],
    '脑袋疼': ['头痛'],
    // 肩颈相关
    '肩': ['肩周炎', '颈椎痛'],
    '肩部': ['肩周炎', '颈椎痛'],
    '肩疼': ['肩周炎'],
    '肩膀疼': ['肩周炎'],
    '颈': ['颈椎痛'],
    '颈部': ['颈椎痛'],
    '颈椎': ['颈椎痛'],
    '脖子疼': ['颈椎痛'],
    '脖子僵': ['颈椎痛'],
    '落枕': ['颈椎痛'],
    // 腰部相关
    '腰': ['腰痛'],
    '腰部': ['腰痛'],
    '腰疼': ['腰痛'],
    '腰酸': ['腰痛', '疲劳'],
    '腰背痛': ['腰痛'],
    '背痛': ['腰痛'],
    '背疼': ['腰痛'],
    // 胃部相关
    '胃': ['胃痛', '助消化'],
    '胃部': ['胃痛', '助消化'],
    '胃疼': ['胃痛'],
    '胃不舒服': ['胃痛', '助消化'],
    '消化不良': ['助消化', '胃痛'],
    '胃胀': ['胃痛', '助消化'],
    '腹胀': ['助消化', '胃痛'],
    '肚子疼': ['胃痛', '助消化'],
    '肚子痛': ['胃痛', '助消化'],
    // 睡眠相关
    '睡不着': ['失眠'],
    '多梦': ['失眠'],
    '入睡困难': ['失眠'],
    '睡眠不好': ['失眠'],
    '睡眠质量差': ['失眠'],
    '睡不好': ['失眠'],
    // 情绪相关
    '心情不好': ['焦虑', '失眠'],
    '压力大': ['焦虑', '失眠'],
    '紧张': ['焦虑'],
    '烦躁': ['焦虑', '失眠'],
    '抑郁': ['焦虑'],
    '心烦': ['焦虑', '失眠'],
    // 眼睛相关
    '眼': ['眼疲劳'],
    '眼睛': ['眼疲劳'],
    '眼睛干': ['眼疲劳'],
    '眼干': ['眼疲劳'],
    '眼涩': ['眼疲劳'],
    '视力模糊': ['眼疲劳'],
    '眼睛疲劳': ['眼疲劳'],
    '眼睛累': ['眼疲劳'],
    // 女性相关
    '姨妈痛': ['痛经'],
    '月经痛': ['痛经'],
    '生理痛': ['痛经'],
    '大姨妈': ['痛经'],
    '例假': ['痛经'],
    '经期': ['痛经'],
    // 排便相关
    '拉不出': ['便秘'],
    '排便困难': ['便秘'],
    '大便干燥': ['便秘'],
    '上厕所困难': ['便秘'],
    // 其他
    '累': ['疲劳'],
    '没精神': ['疲劳', '提神醒脑'],
    '困倦': ['疲劳', '提神醒脑'],
    '乏力': ['疲劳'],
    '精神不好': ['疲劳', '提神醒脑'],
    '没力气': ['疲劳'],
    '免疫力低': ['增强免疫'],
    '容易感冒': ['增强免疫', '感冒'],
    '体质差': ['增强免疫'],
    '皮肤差': ['美容养颜'],
    '脸色差': ['美容养颜'],
    '气色不好': ['美容养颜'],
    '长痘': ['美容养颜'],
    '发烧': ['感冒'],
    '流鼻涕': ['感冒'],
    '鼻塞': ['感冒'],
    '嗓子疼': ['感冒'],
    '喉咙痛': ['感冒']
};

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
    
    // 1. 精确匹配
    let data = acupointData[symptom];
    let matchedSymptom = symptom;
    
    // 2. 如果没有精确匹配，尝试简单模糊匹配
    if (!data) {
        for (let key in acupointData) {
            if (key.includes(symptom) || symptom.includes(key)) {
                data = acupointData[key];
                matchedSymptom = key;
                break;
            }
        }
    }
    
    // 3. 如果还没匹配到，使用同义词映射
    if (!data && symptomSynonyms[symptom]) {
        const synonyms = symptomSynonyms[symptom];
        for (let syn of synonyms) {
            if (acupointData[syn]) {
                data = acupointData[syn];
                matchedSymptom = syn;
                break;
            }
        }
    }
    
    // 4. 最后尝试部分匹配同义词表的 key
    if (!data) {
        for (let key in symptomSynonyms) {
            if (symptom.includes(key) || key.includes(symptom)) {
                const synonyms = symptomSynonyms[key];
                for (let syn of synonyms) {
                    if (acupointData[syn]) {
                        data = acupointData[syn];
                        matchedSymptom = syn;
                        break;
                    }
                }
                if (data) break;
            }
        }
    }
    
    if (data) {
        renderResults(matchedSymptom, data, symptom);
    } else {
        // 显示推荐症状
        document.getElementById('results').innerHTML = `
            <div class="empty-state">
                <i class="fas fa-search"></i>
                <p>未找到"${symptom}"相关的穴位信息</p>
                <p style="font-size: 13px; margin-top: 8px;">您可以尝试以下关键词：</p>
                <div class="tags-wrapper" style="justify-content: center; margin-top: 12px;">
                    <span class="tag" onclick="selectSymptom('头痛')">头痛</span>
                    <span class="tag" onclick="selectSymptom('失眠')">失眠</span>
                    <span class="tag" onclick="selectSymptom('感冒')">感冒</span>
                    <span class="tag" onclick="selectSymptom('胃痛')">胃痛</span>
                    <span class="tag" onclick="selectSymptom('腰痛')">腰痛</span>
                    <span class="tag" onclick="selectSymptom('疲劳')">疲劳</span>
                </div>
            </div>
        `;
        document.getElementById('results').classList.add('show');
    }
}

// 渲染搜索结果（增加原始搜索词参数）
function renderResultsWithOriginal(symptom, data, originalQuery) {
    renderResults(symptom, data, originalQuery);
}

// 渲染搜索结果
function renderResults(symptom, data, originalQuery = '') {
    const resultsDiv = document.getElementById('results');
    
    // 如果是通过同义词匹配的，显示提示
    const matchHint = (originalQuery && originalQuery !== symptom) 
        ? `<p style="font-size: 13px; color: #8B7355; margin-bottom: 12px;">🔍 根据"${originalQuery}"为您匹配到"${symptom}"相关穴位</p>` 
        : '';
    
    let html = `
        <div class="result-header">
            <h2>🩺 ${symptom} - 推荐穴位</h2>
            <button class="back-btn" onclick="hideResults()">
                <i class="fas fa-times"></i> 关闭
            </button>
        </div>
        ${matchHint}
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
