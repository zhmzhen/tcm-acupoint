// 穴位数据
const dailyAcupointList = [
    { name: '合谷穴', pinyin: 'Hegu', meridian: '手阳明大肠经', location: '手背第1、2掌骨间，第2掌骨桡侧中点', effects: ['头痛', '牙痛', '感冒', '面瘫'], bodyPart: '手部' },
    { name: '足三里', pinyin: 'Zusanli', meridian: '足阳明胃经', location: '小腿前外侧，犊鼻下3寸', effects: ['胃痛', '腹胀', '消化不良', '增强免疫'], bodyPart: '腿部' },
    { name: '太阳穴', pinyin: 'Taiyang', meridian: '经外奇穴', location: '眉梢与目外眦之间，向后约1寸凹陷处', effects: ['头痛', '偏头痛', '眼疲劳', '失眠'], bodyPart: '头部' },
    { name: '风池穴', pinyin: 'Fengchi', meridian: '足少阳胆经', location: '项部枕骨下，胸锁乳突肌与斜方肌之间凹陷', effects: ['头痛', '颈椎病', '感冒', '眩晕'], bodyPart: '头部' },
    { name: '内关穴', pinyin: 'Neiguan', meridian: '手厥阴心包经', location: '前臂掌侧，腕横纹上2寸', effects: ['心悸', '失眠', '恶心', '晕车'], bodyPart: '手臂' },
    { name: '三阴交', pinyin: 'Sanyinjiao', meridian: '足太阴脾经', location: '小腿内侧，内踝尖上3寸', effects: ['月经不调', '失眠', '消化不良', '水肿'], bodyPart: '腿部' },
    { name: '百会穴', pinyin: 'Baihui', meridian: '督脉', location: '头顶正中线与两耳尖连线交点', effects: ['头痛', '眩晕', '失眠', '健忘'], bodyPart: '头部' },
    { name: '涌泉穴', pinyin: 'Yongquan', meridian: '足少阴肾经', location: '足底前1/3凹陷处', effects: ['失眠', '头痛', '高血压', '足底痛'], bodyPart: '足部' },
    { name: '关元穴', pinyin: 'Guanyuan', meridian: '任脉', location: '下腹部前正中线，脐下3寸', effects: ['腹痛', '月经不调', '遗尿', '阳痿'], bodyPart: '腹部' },
    { name: '气海穴', pinyin: 'Qihai', meridian: '任脉', location: '下腹部前正中线，脐下1.5寸', effects: ['腹痛', '腹胀', '月经不调', '虚脱'], bodyPart: '腹部' },
    { name: '中脘穴', pinyin: 'Zhongwan', meridian: '任脉', location: '上腹部前正中线，脐上4寸', effects: ['胃痛', '呕吐', '腹胀', '消化不良'], bodyPart: '腹部' },
    { name: '神门穴', pinyin: 'Shenmen', meridian: '手少阴心经', location: '腕部腕横纹尺侧端凹陷处', effects: ['失眠', '心悸', '健忘', '焦虑'], bodyPart: '手腕' },
    { name: '曲池穴', pinyin: 'Quchi', meridian: '手阳明大肠经', location: '肘横纹外侧端凹陷处', effects: ['发热', '咽喉肿痛', '手臂痛', '高血压'], bodyPart: '手臂' },
    { name: '肩井穴', pinyin: 'Jianjing', meridian: '足少阳胆经', location: '肩上，大椎与肩峰连线中点', effects: ['肩颈痛', '头痛', '落枕', '乳腺炎'], bodyPart: '肩部' },
    { name: '委中穴', pinyin: 'Weizhong', meridian: '足太阳膀胱经', location: '腘横纹中点', effects: ['腰痛', '下肢痿痹', '中暑', '腹痛'], bodyPart: '腿部' },
    { name: '承山穴', pinyin: 'Chengshan', meridian: '足太阳膀胱经', location: '小腿后面正中，腓肠肌两肌腹交界下', effects: ['腰腿痛', '痔疮', '便秘', '小腿抽筋'], bodyPart: '腿部' },
    { name: '太冲穴', pinyin: 'Taichong', meridian: '足厥阴肝经', location: '足背第1、2跖骨结合部前凹陷', effects: ['头痛', '眩晕', '高血压', '月经不调'], bodyPart: '足部' },
    { name: '迎香穴', pinyin: 'Yingxiang', meridian: '手阳明大肠经', location: '鼻翼外缘中点旁，鼻唇沟中', effects: ['鼻塞', '鼻炎', '嗅觉减退', '面瘫'], bodyPart: '面部' },
    { name: '印堂穴', pinyin: 'Yintang', meridian: '经外奇穴', location: '两眉头连线中点', effects: ['头痛', '眩晕', '失眠', '鼻炎'], bodyPart: '头部' },
    { name: '睛明穴', pinyin: 'Jingming', meridian: '足太阳膀胱经', location: '目内眦角稍上方凹陷处', effects: ['目赤肿痛', '视物模糊', '近视', '迎风流泪'], bodyPart: '面部' },
    { name: '攒竹穴', pinyin: 'Cuanzhu', meridian: '足太阳膀胱经', location: '眉头凹陷中', effects: ['头痛', '眉棱骨痛', '目视不明', '眼睑下垂'], bodyPart: '面部' },
    { name: '听宫穴', pinyin: 'Tinggong', meridian: '手太阳小肠经', location: '耳屏前，下颌骨髁状突后缘凹陷', effects: ['耳鸣', '耳聋', '牙痛', '面瘫'], bodyPart: '面部' },
    { name: '天突穴', pinyin: 'Tiantu', meridian: '任脉', location: '颈部前正中线，胸骨上窝中央', effects: ['咳嗽', '哮喘', '咽喉肿痛', '声音嘶哑'], bodyPart: '颈部' },
    { name: '膻中穴', pinyin: 'Danzhong', meridian: '任脉', location: '胸部前正中线，两乳头连线中点', effects: ['胸闷', '心悸', '咳嗽', '乳少'], bodyPart: '胸部' },
    { name: '大椎穴', pinyin: 'Dazhui', meridian: '督脉', location: '后正中线，第7颈椎棘突下凹陷', effects: ['发热', '感冒', '颈椎病', '咳嗽'], bodyPart: '背部' },
    { name: '命门穴', pinyin: 'Mingmen', meridian: '督脉', location: '腰部后正中线，第2腰椎棘突下凹陷', effects: ['腰痛', '遗精', '阳痿', '月经不调'], bodyPart: '腰部' },
    { name: '肾俞穴', pinyin: 'Shenshu', meridian: '足太阳膀胱经', location: '腰部第2腰椎棘突下旁开1.5寸', effects: ['腰痛', '遗精', '阳痿', '耳鸣'], bodyPart: '腰部' },
    { name: '血海穴', pinyin: 'Xuehai', meridian: '足太阴脾经', location: '大腿内侧，髌底内侧端上2寸', effects: ['月经不调', '痛经', '湿疹', '皮肤瘙痒'], bodyPart: '腿部' },
    { name: '阳陵泉', pinyin: 'Yanglingquan', meridian: '足少阳胆经', location: '小腿外侧，腓骨头前下方凹陷', effects: ['胁肋痛', '下肢痿痹', '膝关节痛', '口苦'], bodyPart: '腿部' },
    { name: '阴陵泉', pinyin: 'Yinlingquan', meridian: '足太阴脾经', location: '小腿内侧，胫骨内侧髁后下方凹陷', effects: ['腹胀', '水肿', '小便不利', '膝痛'], bodyPart: '腿部' }
];

// 症状-穴位映射数据
const acupointData = {
    '头痛': { points: ['太阳穴', '风池穴', '百会穴', '合谷穴'], diet: ['菊花茶', '薄荷', '绿豆'], massage: '用拇指按揉太阳穴，每次3-5分钟' },
    '失眠': { points: ['神门穴', '内关穴', '百会穴', '涌泉穴'], diet: ['酸枣仁', '百合', '莲子'], massage: '睡前按揉神门穴，配合深呼吸' },
    '颈椎痛': { points: ['风池穴', '肩井穴', '大椎穴', '后溪穴'], diet: ['葛根', '桑枝', '威灵仙'], massage: '按揉风池穴，配合颈部活动' },
    '胃痛': { points: ['中脘穴', '足三里', '内关穴', '公孙穴'], diet: ['山药', '小米', '生姜'], massage: '顺时针按揉中脘穴，每次5分钟' },
    '腰痛': { points: ['肾俞穴', '命门穴', '委中穴', '腰阳关'], diet: ['杜仲', '核桃', '黑芝麻'], massage: '双手搓热后按揉肾俞穴' },
    '感冒': { points: ['风池穴', '大椎穴', '合谷穴', '迎香穴'], diet: ['生姜', '葱白', '紫苏'], massage: '按揉迎香穴缓解鼻塞' },
    '便秘': { points: ['天枢穴', '大肠俞', '支沟穴', '承山穴'], diet: ['蜂蜜', '香蕉', '火龙果'], massage: '顺时针按摩腹部，配合天枢穴' },
    '月经不调': { points: ['三阴交', '血海穴', '关元穴', '气海穴'], diet: ['当归', '红枣', '益母草'], massage: '经前一周开始按揉三阴交' },
    '眼疲劳': { points: ['睛明穴', '攒竹穴', '太阳穴', '风池穴'], diet: ['枸杞', '菊花', '决明子'], massage: '闭眼按揉睛明穴，每次1分钟' },
    '肩周炎': { points: ['肩井穴', '肩髃穴', '曲池穴', '外关穴'], diet: ['桑枝', '威灵仙', '羌活'], massage: '按揉肩井穴，配合肩部活动' },
    '高血压': { points: ['太冲穴', '曲池穴', '风池穴', '百会穴'], diet: ['芹菜', '海带', '山楂'], massage: '每日按揉太冲穴，从上向下推' },
    '消化不良': { points: ['足三里', '中脘穴', '内关穴', '公孙穴'], diet: ['山楂', '陈皮', '麦芽'], massage: '饭后按揉足三里促进消化' },
    '鼻炎': { points: ['迎香穴', '印堂穴', '合谷穴', '风池穴'], diet: ['辛夷花', '苍耳子', '白芷'], massage: '按揉迎香穴，每日多次' },
    '咳嗽': { points: ['天突穴', '膻中穴', '肺俞穴', '列缺穴'], diet: ['梨', '枇杷', '川贝'], massage: '轻按天突穴，配合深呼吸' },
    '焦虑': { points: ['神门穴', '内关穴', '太冲穴', '百会穴'], diet: ['玫瑰花', '合欢花', '酸枣仁'], massage: '按揉神门穴，配合腹式呼吸' }
};

// 症状同义词映射
const symptomSynonyms = {
    '头疼': ['头痛'], '脑袋疼': ['头痛'], '偏头痛': ['头痛'],
    '睡不着': ['失眠'], '入睡困难': ['失眠'], '多梦': ['失眠'],
    '脖子疼': ['颈椎痛'], '颈椎病': ['颈椎痛'], '落枕': ['颈椎痛'],
    '胃疼': ['胃痛'], '胃不舒服': ['胃痛'], '胃胀': ['胃痛', '消化不良'],
    '腰疼': ['腰痛'], '腰酸': ['腰痛'], '腰椎间盘': ['腰痛'],
    '发烧': ['感冒'], '流鼻涕': ['感冒', '鼻炎'], '鼻塞': ['感冒', '鼻炎'],
    '拉不出': ['便秘'], '排便困难': ['便秘'],
    '大姨妈': ['月经不调'], '痛经': ['月经不调'], '经期不准': ['月经不调'],
    '眼睛累': ['眼疲劳'], '眼干': ['眼疲劳'], '视力模糊': ['眼疲劳'],
    '肩膀疼': ['肩周炎'], '肩膀痛': ['肩周炎'], '五十肩': ['肩周炎'],
    '血压高': ['高血压'], '头晕': ['高血压', '头痛'],
    '吃不下': ['消化不良'], '胀气': ['消化不良'],
    '过敏性鼻炎': ['鼻炎'], '打喷嚏': ['鼻炎', '感冒'],
    '咳': ['咳嗽'], '嗓子痒': ['咳嗽'],
    '紧张': ['焦虑'], '心慌': ['焦虑'], '烦躁': ['焦虑']
};
