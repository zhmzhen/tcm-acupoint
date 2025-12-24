// 二十四节气饮食数据
const dietData = [
    { name: '立春', date: '2月3-5日', principle: '养肝护阳', foods: ['韭菜', '豆芽', '香椿', '菠菜'], avoid: ['辛辣', '油腻'], soup: '枸杞菊花茶', desc: '春季阳气初生，宜食辛甘发散之品' },
    { name: '雨水', date: '2月18-20日', principle: '健脾祛湿', foods: ['山药', '薏米', '红枣', '莲子'], avoid: ['生冷', '黏腻'], soup: '山药薏米粥', desc: '雨水增多，注意健脾化湿' },
    { name: '惊蛰', date: '3月5-7日', principle: '清肝泻火', foods: ['梨', '荠菜', '芹菜', '菊花'], avoid: ['动火食物'], soup: '菊花枸杞茶', desc: '阳气渐盛，宜清淡平和' },
    { name: '春分', date: '3月20-22日', principle: '阴阳平衡', foods: ['春笋', '香椿', '荠菜', '豌豆'], avoid: ['大寒大热'], soup: '春笋老鸭汤', desc: '昼夜平分，饮食宜平衡' },
    { name: '清明', date: '4月4-6日', principle: '柔肝养肺', foods: ['菠菜', '山药', '银耳', '百合'], avoid: ['发物', '油腻'], soup: '银耳百合羹', desc: '气清景明，宜清补养肝' },
    { name: '谷雨', date: '4月19-21日', principle: '健脾除湿', foods: ['冬瓜', '赤小豆', '鲫鱼', '扁豆'], avoid: ['湿热食物'], soup: '赤小豆鲫鱼汤', desc: '雨生百谷，祛湿为要' },
    { name: '立夏', date: '5月5-7日', principle: '养心安神', foods: ['苦瓜', '莲子', '绿豆', '西瓜'], avoid: ['过于寒凉'], soup: '莲子百合汤', desc: '夏季开始，养心为先' },
    { name: '小满', date: '5月20-22日', principle: '清热利湿', foods: ['苦瓜', '黄瓜', '冬瓜', '绿豆'], avoid: ['肥甘厚味'], soup: '冬瓜薏米汤', desc: '湿热渐盛，清热祛湿' },
    { name: '芒种', date: '6月5-7日', principle: '清补养阴', foods: ['西红柿', '黄瓜', '丝瓜', '苦瓜'], avoid: ['辛辣燥热'], soup: '酸梅汤', desc: '仲夏时节，宜清补' },
    { name: '夏至', date: '6月21-22日', principle: '清心祛暑', foods: ['绿豆', '西瓜', '荷叶', '薄荷'], avoid: ['温热食物'], soup: '绿豆百合汤', desc: '阳气最盛，清热解暑' },
    { name: '小暑', date: '7月6-8日', principle: '消暑益气', foods: ['莲藕', '绿豆', '西瓜', '冬瓜'], avoid: ['过食生冷'], soup: '莲藕排骨汤', desc: '暑气渐盛，消暑养阴' },
    { name: '大暑', date: '7月22-24日', principle: '清热解暑', foods: ['苦瓜', '丝瓜', '冬瓜', '绿豆'], avoid: ['油腻辛辣'], soup: '三豆汤', desc: '一年最热，重在防暑' },
    { name: '立秋', date: '8月7-9日', principle: '润肺养阴', foods: ['梨', '银耳', '百合', '蜂蜜'], avoid: ['辛辣发散'], soup: '银耳雪梨汤', desc: '秋季开始，润燥为先' },
    { name: '处暑', date: '8月22-24日', principle: '滋阴润燥', foods: ['莲子', '山药', '百合', '梨'], avoid: ['燥热食物'], soup: '百合莲子粥', desc: '暑气渐消，滋阴润燥' },
    { name: '白露', date: '9月7-9日', principle: '养阴润肺', foods: ['梨', '葡萄', '银耳', '蜂蜜'], avoid: ['辛辣刺激'], soup: '川贝雪梨汤', desc: '秋燥渐起，润肺为要' },
    { name: '秋分', date: '9月22-24日', principle: '阴阳平衡', foods: ['芝麻', '核桃', '蜂蜜', '梨'], avoid: ['寒凉过度'], soup: '芝麻核桃糊', desc: '昼夜平分，平补为宜' },
    { name: '寒露', date: '10月8-9日', principle: '滋阴润燥', foods: ['芝麻', '糯米', '蜂蜜', '乳品'], avoid: ['辛辣燥热'], soup: '芝麻糯米粥', desc: '寒气渐生，滋阴防燥' },
    { name: '霜降', date: '10月23-24日', principle: '平补润燥', foods: ['柿子', '栗子', '萝卜', '山药'], avoid: ['生冷寒凉'], soup: '栗子山药汤', desc: '深秋时节，平补脾胃' },
    { name: '立冬', date: '11月7-8日', principle: '温补肾阳', foods: ['羊肉', '牛肉', '核桃', '栗子'], avoid: ['寒凉生冷'], soup: '当归生姜羊肉汤', desc: '冬季开始，温补为主' },
    { name: '小雪', date: '11月22-23日', principle: '温肾健脾', foods: ['羊肉', '牛肉', '鸡肉', '核桃'], avoid: ['生冷瓜果'], soup: '羊肉萝卜汤', desc: '天气渐寒，温补肾阳' },
    { name: '大雪', date: '12月6-8日', principle: '温补肾阳', foods: ['羊肉', '狗肉', '鹿肉', '核桃'], avoid: ['寒凉食物'], soup: '枸杞羊肉汤', desc: '严寒时节，大补元气' },
    { name: '冬至', date: '12月21-23日', principle: '滋阴补阳', foods: ['羊肉', '饺子', '汤圆', '核桃'], avoid: ['过于燥热'], soup: '羊肉饺子', desc: '阴极阳生，进补佳时' },
    { name: '小寒', date: '1月5-7日', principle: '温阳散寒', foods: ['羊肉', '牛肉', '生姜', '大枣'], avoid: ['生冷寒凉'], soup: '姜枣茶', desc: '一年最冷，温阳为要' },
    { name: '大寒', date: '1月20-21日', principle: '温补脾肾', foods: ['羊肉', '鸡肉', '核桃', '桂圆'], avoid: ['寒凉生冷'], soup: '桂圆红枣茶', desc: '严寒将尽，温补收藏' }
];

// 获取当前节气
function getCurrentSolarTerm() {
    const now = new Date();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    
    const termDates = [
        { name: '小寒', month: 1, day: 6 },
        { name: '大寒', month: 1, day: 20 },
        { name: '立春', month: 2, day: 4 },
        { name: '雨水', month: 2, day: 19 },
        { name: '惊蛰', month: 3, day: 6 },
        { name: '春分', month: 3, day: 21 },
        { name: '清明', month: 4, day: 5 },
        { name: '谷雨', month: 4, day: 20 },
        { name: '立夏', month: 5, day: 6 },
        { name: '小满', month: 5, day: 21 },
        { name: '芒种', month: 6, day: 6 },
        { name: '夏至', month: 6, day: 21 },
        { name: '小暑', month: 7, day: 7 },
        { name: '大暑', month: 7, day: 23 },
        { name: '立秋', month: 8, day: 8 },
        { name: '处暑', month: 8, day: 23 },
        { name: '白露', month: 9, day: 8 },
        { name: '秋分', month: 9, day: 23 },
        { name: '寒露', month: 10, day: 8 },
        { name: '霜降', month: 10, day: 24 },
        { name: '立冬', month: 11, day: 8 },
        { name: '小雪', month: 11, day: 22 },
        { name: '大雪', month: 12, day: 7 },
        { name: '冬至', month: 12, day: 22 }
    ];
    
    let currentTerm = termDates[termDates.length - 1].name;
    
    for (let i = 0; i < termDates.length; i++) {
        const term = termDates[i];
        if (month < term.month || (month === term.month && day < term.day)) {
            currentTerm = termDates[i === 0 ? termDates.length - 1 : i - 1].name;
            break;
        }
        if (i === termDates.length - 1) {
            currentTerm = term.name;
        }
    }
    
    return dietData.find(d => d.name === currentTerm) || dietData[0];
}
