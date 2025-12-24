// 运动健康数据
const fitnessData = [
    {
        name: '颈椎康复操',
        targetSymptoms: ['颈椎痛', '肩颈僵硬', '头痛'],
        duration: '15-20分钟',
        frequency: '每日1-2次',
        muscles: [
            { name: '斜方肌', location: '颈部后侧至肩部', function: '控制头部后仰和肩胛骨运动' },
            { name: '胸锁乳突肌', location: '颈部两侧', function: '控制头部转动和前屈' },
            { name: '头夹肌', location: '颈后深层', function: '维持颈椎稳定' }
        ],
        exercises: [
            { name: '颈部前屈后伸', detail: '缓慢低头至下巴触胸，再仰头看天花板', reps: '10次', tips: '动作要慢，感受拉伸' },
            { name: '左右侧屈', detail: '耳朵尽量靠近肩膀，保持5秒', reps: '左右各10次', tips: '肩膀保持不动' },
            { name: '颈部旋转', detail: '头部缓慢向左右转动，看向肩膀后方', reps: '左右各10次', tips: '转动幅度以舒适为准' },
            { name: '米字操', detail: '用头部画"米"字，活动颈椎各方向', reps: '5组', tips: '速度均匀，不要过快' }
        ],
        precautions: ['动作缓慢，避免猛烈转动', '有颈椎病史者请咨询医生', '感到头晕应立即停止'],
        benefits: ['缓解颈部疲劳', '改善颈椎活动度', '预防颈椎病']
    },
    {
        name: '腰背强化训练',
        targetSymptoms: ['腰痛', '久坐不适', '腰肌劳损'],
        duration: '20-30分钟',
        frequency: '每周3-4次',
        muscles: [
            { name: '竖脊肌', location: '脊柱两侧', function: '维持脊柱直立，控制躯干伸展' },
            { name: '腰方肌', location: '腰部深层', function: '稳定腰椎，侧屈躯干' },
            { name: '多裂肌', location: '脊柱深层', function: '稳定脊柱各节段' }
        ],
        exercises: [
            { name: '猫牛式', detail: '四点支撑，交替弓背和塌腰', reps: '15次', tips: '配合呼吸，弓背呼气' },
            { name: '臀桥', detail: '仰卧屈膝，抬起臀部至身体成直线', reps: '15次，保持3秒', tips: '收紧臀部和腹部' },
            { name: '鸟狗式', detail: '四点支撑，对侧手脚同时伸展', reps: '左右各10次', tips: '保持躯干稳定不晃动' },
            { name: '平板支撑', detail: '俯卧撑姿势，保持身体成直线', reps: '30-60秒', tips: '不要塌腰或撅臀' }
        ],
        precautions: ['腰椎间盘突出者避免过度弯腰', '动作过程中保持核心收紧', '疼痛时立即停止'],
        benefits: ['增强腰背肌力量', '改善体态', '预防腰椎疾病']
    },
    {
        name: '肩周康复训练',
        targetSymptoms: ['肩周炎', '肩膀疼痛', '手臂抬举困难'],
        duration: '15-20分钟',
        frequency: '每日1次',
        muscles: [
            { name: '三角肌', location: '肩部外侧', function: '控制手臂各方向抬举' },
            { name: '冈上肌', location: '肩胛骨上方', function: '手臂外展起始动作' },
            { name: '冈下肌', location: '肩胛骨后方', function: '手臂外旋' }
        ],
        exercises: [
            { name: '钟摆运动', detail: '身体前倾，手臂自然下垂画圈', reps: '顺逆时针各20圈', tips: '利用重力，不要用力' },
            { name: '爬墙运动', detail: '面墙站立，手指沿墙向上爬', reps: '10次', tips: '记录每次高度，逐渐提高' },
            { name: '毛巾拉伸', detail: '双手握毛巾两端，上下拉动', reps: '15次', tips: '动作缓慢，感受拉伸' },
            { name: '肩部环绕', detail: '双肩向前、向上、向后画圈', reps: '前后各15次', tips: '幅度由小到大' }
        ],
        precautions: ['急性期避免剧烈运动', '热敷后进行效果更好', '循序渐进，不要强求幅度'],
        benefits: ['改善肩关节活动度', '缓解肩部疼痛', '预防粘连加重']
    },
    {
        name: '膝关节保护训练',
        targetSymptoms: ['膝盖疼痛', '上下楼困难', '膝关节退化'],
        duration: '20分钟',
        frequency: '每周4-5次',
        muscles: [
            { name: '股四头肌', location: '大腿前侧', function: '伸直膝关节，稳定髌骨' },
            { name: '腘绳肌', location: '大腿后侧', function: '屈曲膝关节' },
            { name: '小腿三头肌', location: '小腿后侧', function: '踝关节跖屈，辅助膝关节稳定' }
        ],
        exercises: [
            { name: '直腿抬高', detail: '仰卧，一腿伸直抬起45度', reps: '每腿15次', tips: '膝盖保持伸直' },
            { name: '靠墙静蹲', detail: '背靠墙，屈膝90度保持', reps: '30-60秒，3组', tips: '膝盖不超过脚尖' },
            { name: '坐姿伸膝', detail: '坐椅子上，伸直小腿保持', reps: '每腿15次，保持5秒', tips: '可绑沙袋增加难度' },
            { name: '踮脚提踵', detail: '双脚站立，踮起脚尖', reps: '20次', tips: '扶墙保持平衡' }
        ],
        precautions: ['避免深蹲和跳跃', '运动前充分热身', '膝盖肿胀时暂停运动'],
        benefits: ['增强膝关节周围肌力', '减轻关节负担', '延缓退化进程']
    },
    {
        name: '改善失眠瑜伽',
        targetSymptoms: ['失眠', '焦虑', '入睡困难'],
        duration: '15-20分钟',
        frequency: '睡前进行',
        muscles: [
            { name: '腹横肌', location: '腹部深层', function: '稳定核心，配合呼吸' },
            { name: '膈肌', location: '胸腹之间', function: '主要呼吸肌' },
            { name: '髂腰肌', location: '髋部深层', function: '屈髋，影响腰椎曲度' }
        ],
        exercises: [
            { name: '仰卧蝴蝶式', detail: '仰卧，脚掌相对，膝盖外展', reps: '保持3-5分钟', tips: '可在膝下垫枕头' },
            { name: '双腿靠墙', detail: '臀部靠墙，双腿伸直上举', reps: '保持5-10分钟', tips: '促进下肢血液回流' },
            { name: '婴儿式', detail: '跪坐，身体前倾，额头触地', reps: '保持2-3分钟', tips: '放松全身，深呼吸' },
            { name: '4-7-8呼吸法', detail: '吸气4秒，屏息7秒，呼气8秒', reps: '4-6个循环', tips: '激活副交感神经' }
        ],
        precautions: ['在安静环境中进行', '穿着宽松舒适', '不要在饱餐后立即进行'],
        benefits: ['放松身心', '调节自律神经', '提高睡眠质量']
    },
    {
        name: '缓解眼疲劳操',
        targetSymptoms: ['眼疲劳', '视力模糊', '眼干涩'],
        duration: '10分钟',
        frequency: '每工作1小时做一次',
        muscles: [
            { name: '眼外肌', location: '眼球周围', function: '控制眼球转动' },
            { name: '睫状肌', location: '眼球内部', function: '调节晶状体，控制焦距' },
            { name: '眼轮匝肌', location: '眼睑周围', function: '控制眨眼' }
        ],
        exercises: [
            { name: '眨眼运动', detail: '快速眨眼20次，再慢速眨眼10次', reps: '3组', tips: '促进泪液分泌' },
            { name: '远近交替', detail: '看远处5秒，再看近处5秒', reps: '10次', tips: '锻炼睫状肌调节能力' },
            { name: '眼球转动', detail: '眼球顺时针、逆时针各转动', reps: '各10圈', tips: '头部保持不动' },
            { name: '眼保健操', detail: '按揉睛明、攒竹、太阳穴', reps: '每穴1分钟', tips: '力度适中，感到酸胀为宜' }
        ],
        precautions: ['摘掉眼镜或隐形眼镜', '手部清洁后再按摩', '眼部有炎症时避免按摩'],
        benefits: ['缓解视疲劳', '改善眼部血液循环', '预防近视加深']
    },
    {
        name: '消化促进运动',
        targetSymptoms: ['胃痛', '便秘', '消化不良'],
        duration: '15分钟',
        frequency: '餐后1小时进行',
        muscles: [
            { name: '腹直肌', location: '腹部前侧', function: '屈曲躯干，增加腹压' },
            { name: '腹斜肌', location: '腹部两侧', function: '旋转躯干，辅助排便' },
            { name: '膈肌', location: '胸腹之间', function: '腹式呼吸，按摩内脏' }
        ],
        exercises: [
            { name: '腹式呼吸', detail: '吸气时腹部隆起，呼气时收缩', reps: '20次', tips: '按摩肠胃，促进蠕动' },
            { name: '仰卧抱膝', detail: '仰卧，双膝抱向胸口', reps: '保持30秒，5次', tips: '轻轻左右摇摆' },
            { name: '坐姿扭转', detail: '坐姿，躯干向左右扭转', reps: '左右各10次', tips: '刺激肠道蠕动' },
            { name: '顺时针揉腹', detail: '以肚脐为中心顺时针按摩', reps: '50圈', tips: '力度适中，促进排便' }
        ],
        precautions: ['饭后不要立即运动', '腹痛剧烈时停止', '孕妇避免腹部按摩'],
        benefits: ['促进消化', '缓解便秘', '改善胃肠功能']
    },
    {
        name: '心肺耐力训练',
        targetSymptoms: ['疲劳', '气短', '体力下降'],
        duration: '30-45分钟',
        frequency: '每周3-5次',
        muscles: [
            { name: '心肌', location: '心脏', function: '泵血，维持循环' },
            { name: '肋间肌', location: '肋骨之间', function: '辅助呼吸' },
            { name: '股四头肌', location: '大腿前侧', function: '下肢运动主要肌群' }
        ],
        exercises: [
            { name: '快走', detail: '保持心率在最大心率60-70%', reps: '20-30分钟', tips: '可以说话但略喘' },
            { name: '原地踏步', detail: '抬膝至髋部高度', reps: '3分钟×3组', tips: '手臂自然摆动' },
            { name: '开合跳', detail: '双脚开合跳跃，手臂上举', reps: '30秒×3组', tips: '落地时膝盖微屈' },
            { name: '爬楼梯', detail: '匀速上下楼梯', reps: '10-15分钟', tips: '扶好扶手，注意安全' }
        ],
        precautions: ['心脏病患者需医生指导', '运动前后充分热身放松', '感到胸闷头晕立即停止'],
        benefits: ['增强心肺功能', '提高体力', '改善精神状态']
    }
];
