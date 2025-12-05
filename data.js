// 穴位数据库
const acupointData = {
    // ========== 症状对应穴位 ==========
    "头痛": {
        acupoints: [
            {
                name: "太阳穴",
                pinyin: "Tài Yáng Xué",
                location: "眉梢与外眼角之间，向后约1寸凹陷处",
                meridian: "经外奇穴",
                massage: {
                    method: "用双手拇指或中指指腹，轻轻按压太阳穴，做环形按揉",
                    duration: "3-5分钟",
                    frequency: "每日2-3次",
                    strength: "中等力度，以感到酸胀为宜"
                },
                effects: ["缓解头痛", "明目醒脑", "缓解眼疲劳"],
                tips: "头痛发作时可增加按摩次数，配合深呼吸效果更佳"
            },
            {
                name: "风池穴",
                pinyin: "Fēng Chí Xué",
                location: "后颈部，枕骨下方，胸锁乳突肌与斜方肌之间的凹陷处",
                meridian: "足少阳胆经",
                massage: {
                    method: "双手拇指分别按住两侧风池穴，其余四指抱住头部，拇指做环形按揉",
                    duration: "3-5分钟",
                    frequency: "每日2-3次",
                    strength: "中等偏重，以酸胀感向头顶放射为佳"
                },
                effects: ["治疗头痛", "缓解颈部僵硬", "改善头晕"],
                tips: "低头族必按穴位，可预防颈椎病引起的头痛"
            },
            {
                name: "合谷穴",
                pinyin: "Hé Gǔ Xué",
                location: "手背第1、2掌骨之间，约平第2掌骨中点处",
                meridian: "手阳明大肠经",
                massage: {
                    method: "用另一手拇指按压，做环形按揉或点按",
                    duration: "2-3分钟/每手",
                    frequency: "每日3-4次",
                    strength: "中等力度，有明显酸胀感"
                },
                effects: ["止痛要穴", "缓解各种头面部疼痛", "清热解表"],
                tips: "孕妇禁按此穴！头痛时双手合谷穴交替按摩效果更好"
            }
        ],
        diet: {
            recommended: ["菊花茶", "薄荷茶", "绿豆汤", "芹菜", "苦瓜", "梨"],
            avoid: ["辛辣食物", "酒精", "浓茶", "咖啡", "油炸食品"],
            tips: "多喝水，保持充足睡眠，避免长时间看屏幕"
        }
    },
    
    "失眠": {
        acupoints: [
            {
                name: "安眠穴",
                pinyin: "Ān Mián Xué",
                location: "耳后，翳风穴与风池穴连线的中点",
                meridian: "经外奇穴",
                massage: {
                    method: "用中指指腹轻轻按压，做小幅度环形按揉",
                    duration: "5-10分钟",
                    frequency: "睡前30分钟",
                    strength: "轻柔力度，以舒适放松为主"
                },
                effects: ["镇静安神", "改善睡眠质量", "缓解焦虑"],
                tips: "睡前配合腹式呼吸，在安静环境中按摩效果最佳"
            },
            {
                name: "神门穴",
                pinyin: "Shén Mén Xué",
                location: "腕横纹尺侧端，尺侧腕屈肌腱的桡侧凹陷处",
                meridian: "手少阴心经",
                massage: {
                    method: "用拇指指腹按压，轻轻揉动",
                    duration: "3-5分钟/每手",
                    frequency: "睡前按摩",
                    strength: "轻柔，以微微酸胀为度"
                },
                effects: ["宁心安神", "改善心悸", "缓解焦虑失眠"],
                tips: "心烦意乱时随时可按，是调节情绪的重要穴位"
            },
            {
                name: "涌泉穴",
                pinyin: "Yǒng Quán Xué",
                location: "足底前1/3与后2/3交界处，足趾跖屈时足底凹陷处",
                meridian: "足少阴肾经",
                massage: {
                    method: "用拇指指腹用力按揉，或用掌根搓热",
                    duration: "5-10分钟/每足",
                    frequency: "睡前泡脚后按摩",
                    strength: "中等偏重，以发热为佳"
                },
                effects: ["引火归元", "滋阴降火", "改善睡眠"],
                tips: "睡前用热水泡脚15分钟后按摩效果翻倍"
            }
        ],
        diet: {
            recommended: ["小米粥", "莲子", "百合", "红枣", "牛奶", "香蕉", "核桃"],
            avoid: ["咖啡", "浓茶", "可乐", "辛辣刺激", "睡前大量饮水"],
            tips: "晚餐不宜过饱，睡前2小时避免剧烈运动和使用电子设备"
        }
    },
    
    "颈椎痛": {
        acupoints: [
            {
                name: "风池穴",
                pinyin: "Fēng Chí Xué",
                location: "后颈部，枕骨下方，胸锁乳突肌与斜方肌之间的凹陷处",
                meridian: "足少阳胆经",
                massage: {
                    method: "双手拇指按住穴位，向上向内用力，做环形按揉",
                    duration: "5分钟",
                    frequency: "每日3-4次",
                    strength: "中等偏重，酸胀感明显"
                },
                effects: ["缓解颈部僵硬", "改善颈椎病症状", "舒筋活络"],
                tips: "久坐办公后必按，可配合颈部拉伸运动"
            },
            {
                name: "肩井穴",
                pinyin: "Jiān Jǐng Xué",
                location: "肩上，大椎穴与肩峰连线的中点",
                meridian: "足少阳胆经",
                massage: {
                    method: "用对侧手的中指和食指按压，做提捏动作",
                    duration: "3-5分钟/每侧",
                    frequency: "每日2-3次",
                    strength: "中等力度，可稍重"
                },
                effects: ["缓解肩颈僵硬", "改善肩周疼痛", "疏通经络"],
                tips: "孕妇慎用！可请他人帮忙按摩效果更好"
            },
            {
                name: "后溪穴",
                pinyin: "Hòu Xī Xué",
                location: "微握拳，第5掌指关节后尺侧，横纹头赤白肉际处",
                meridian: "手太阳小肠经",
                massage: {
                    method: "将后溪穴抵在桌沿上，来回滚动刺激",
                    duration: "5-10分钟",
                    frequency: "每小时一次（久坐时）",
                    strength: "中等力度"
                },
                effects: ["通督脉", "缓解颈椎不适", "改善腰背痛"],
                tips: "办公室神穴！把手放桌沿滚动即可，简单有效"
            }
        ],
        diet: {
            recommended: ["黑豆", "核桃", "芝麻", "骨头汤", "牛奶", "深海鱼"],
            avoid: ["生冷食物", "过咸食物", "酒精"],
            tips: "注意保暖，避免空调直吹颈部，每小时起身活动"
        }
    },
    
    "肩周炎": {
        acupoints: [
            {
                name: "肩髃穴",
                pinyin: "Jiān Yú Xué",
                location: "肩峰前下方，上臂外展平举时肩部出现的凹陷处",
                meridian: "手阳明大肠经",
                massage: {
                    method: "用拇指或中指按压，做环形按揉",
                    duration: "3-5分钟/每侧",
                    frequency: "每日3次",
                    strength: "中等力度，以酸胀为度"
                },
                effects: ["疏通肩部经络", "缓解肩关节疼痛", "改善活动受限"],
                tips: "按摩时可配合肩部画圈运动"
            },
            {
                name: "肩井穴",
                pinyin: "Jiān Jǐng Xué",
                location: "肩上，大椎穴与肩峰连线的中点",
                meridian: "足少阳胆经",
                massage: {
                    method: "用拇指和食指提捏，或用掌根按压",
                    duration: "3-5分钟/每侧",
                    frequency: "每日2-3次",
                    strength: "中等偏重"
                },
                effects: ["缓解肩背疼痛", "放松肩部肌肉"],
                tips: "孕妇禁按！"
            },
            {
                name: "曲池穴",
                pinyin: "Qū Chí Xué",
                location: "屈肘成直角，肘横纹外侧端与肱骨外上髁连线中点",
                meridian: "手阳明大肠经",
                massage: {
                    method: "用拇指按压，做环形按揉",
                    duration: "2-3分钟/每侧",
                    frequency: "每日3次",
                    strength: "中等力度"
                },
                effects: ["疏通手臂经络", "缓解肘臂疼痛", "清热解表"],
                tips: "肩周炎患者可沿手臂经络从肩到肘依次按摩"
            }
        ],
        diet: {
            recommended: ["羊肉", "生姜", "葱白", "桂圆", "当归炖鸡"],
            avoid: ["生冷寒凉", "冰镇饮料", "西瓜", "螃蟹"],
            tips: "注意肩部保暖，坚持做肩部康复操，避免提重物"
        }
    },
    
    "腰痛": {
        acupoints: [
            {
                name: "肾俞穴",
                pinyin: "Shèn Shù Xué",
                location: "腰部，第2腰椎棘突下，旁开1.5寸",
                meridian: "足太阳膀胱经",
                massage: {
                    method: "双手握拳，用拳背突起部位按揉，或用掌根搓热",
                    duration: "5-10分钟",
                    frequency: "每日2次",
                    strength: "中等偏重，以发热为佳"
                },
                effects: ["补肾壮腰", "缓解腰膝酸软", "改善肾虚症状"],
                tips: "早晚各一次，搓至腰部发热效果最好"
            },
            {
                name: "委中穴",
                pinyin: "Wěi Zhōng Xué",
                location: "膝后区，腘横纹中点",
                meridian: "足太阳膀胱经",
                massage: {
                    method: "坐位屈膝，用拇指按压，做点按或弹拨",
                    duration: "2-3分钟/每侧",
                    frequency: "每日2-3次",
                    strength: "中等力度，有酸胀感"
                },
                effects: ["舒筋活络", "缓解腰背疼痛", "清热解毒"],
                tips: "\"腰背委中求\"，腰痛必按穴位"
            },
            {
                name: "腰阳关穴",
                pinyin: "Yāo Yáng Guān Xué",
                location: "腰部，后正中线上，第4腰椎棘突下凹陷中",
                meridian: "督脉",
                massage: {
                    method: "用拇指或掌根按压，做环形按揉",
                    duration: "3-5分钟",
                    frequency: "每日2次",
                    strength: "中等力度"
                },
                effects: ["温阳补肾", "强腰健膝", "缓解腰部冷痛"],
                tips: "可配合热敷效果更佳"
            }
        ],
        diet: {
            recommended: ["黑豆", "核桃", "枸杞", "山药", "羊肉", "韭菜"],
            avoid: ["生冷食物", "过咸食物", "久坐不动"],
            tips: "避免久坐久站，睡硬板床，注意腰部保暖"
        }
    },
    
    "胃痛": {
        acupoints: [
            {
                name: "中脘穴",
                pinyin: "Zhōng Wǎn Xué",
                location: "上腹部，前正中线上，脐上4寸",
                meridian: "任脉",
                massage: {
                    method: "用掌心或四指并拢，顺时针方向按揉",
                    duration: "5-10分钟",
                    frequency: "饭后1小时，每日2次",
                    strength: "轻柔，以舒适为度"
                },
                effects: ["和胃健脾", "缓解胃痛", "改善消化不良"],
                tips: "饭后不宜立即按摩，顺时针按揉助消化"
            },
            {
                name: "足三里",
                pinyin: "Zú Sān Lǐ",
                location: "小腿外侧，犊鼻下3寸，胫骨前嵴外1横指处",
                meridian: "足阳明胃经",
                massage: {
                    method: "用拇指按压，做环形按揉或点按",
                    duration: "3-5分钟/每侧",
                    frequency: "每日2-3次",
                    strength: "中等偏重，酸胀感明显"
                },
                effects: ["调理脾胃", "增强体质", "缓解胃肠不适"],
                tips: "\"肚腹三里留\"，胃肠问题首选穴位，长期按摩可强身健体"
            },
            {
                name: "内关穴",
                pinyin: "Nèi Guān Xué",
                location: "前臂掌侧，腕横纹上2寸，掌长肌腱与桡侧腕屈肌腱之间",
                meridian: "手厥阴心包经",
                massage: {
                    method: "用拇指按压，做环形按揉",
                    duration: "2-3分钟/每手",
                    frequency: "胃痛发作时随时按",
                    strength: "中等力度"
                },
                effects: ["和胃降逆", "止呕止痛", "宁心安神"],
                tips: "晕车、恶心时按此穴效果显著"
            }
        ],
        diet: {
            recommended: ["小米粥", "山药", "南瓜", "红薯", "生姜红糖水", "温热食物"],
            avoid: ["生冷食物", "辛辣刺激", "油腻食物", "过酸食物", "暴饮暴食"],
            tips: "饮食规律，细嚼慢咽，少食多餐，保持心情舒畅"
        }
    },
    
    "感冒": {
        acupoints: [
            {
                name: "风池穴",
                pinyin: "Fēng Chí Xué",
                location: "后颈部，枕骨下方，胸锁乳突肌与斜方肌之间的凹陷处",
                meridian: "足少阳胆经",
                massage: {
                    method: "双手拇指按压，向上向内用力按揉",
                    duration: "3-5分钟",
                    frequency: "每日3-4次",
                    strength: "中等偏重"
                },
                effects: ["疏风散寒", "缓解头痛鼻塞", "提高免疫力"],
                tips: "感冒初期按摩效果最好，可配合喝姜汤"
            },
            {
                name: "大椎穴",
                pinyin: "Dà Zhuī Xué",
                location: "后正中线上，第7颈椎棘突下凹陷中",
                meridian: "督脉",
                massage: {
                    method: "用中指按压，或用掌根搓热",
                    duration: "3-5分钟",
                    frequency: "每日2-3次",
                    strength: "中等力度，以发热为佳"
                },
                effects: ["解表退热", "通阳散寒", "增强抵抗力"],
                tips: "发热时可重点按摩此穴，有助于退热"
            },
            {
                name: "合谷穴",
                pinyin: "Hé Gǔ Xué",
                location: "手背第1、2掌骨之间，约平第2掌骨中点处",
                meridian: "手阳明大肠经",
                massage: {
                    method: "用拇指按压，做环形按揉",
                    duration: "2-3分钟/每手",
                    frequency: "每日3-4次",
                    strength: "中等力度"
                },
                effects: ["清热解表", "缓解头痛发热", "通鼻窍"],
                tips: "孕妇禁按！感冒头痛时按此穴效果好"
            }
        ],
        diet: {
            recommended: ["生姜红糖水", "葱白粥", "紫苏叶茶", "梨汤", "萝卜汤", "多喝温水"],
            avoid: ["生冷食物", "油腻食物", "辛辣刺激", "海鲜发物"],
            tips: "多休息，多喝水，注意保暖，保持室内通风"
        }
    },
    
    "眼疲劳": {
        acupoints: [
            {
                name: "睛明穴",
                pinyin: "Jīng Míng Xué",
                location: "面部，目内眦角稍上方凹陷处",
                meridian: "足太阳膀胱经",
                massage: {
                    method: "用食指或中指指腹轻轻按压，做小幅度按揉",
                    duration: "1-2分钟",
                    frequency: "每小时一次（用眼时）",
                    strength: "轻柔，切勿用力过大"
                },
                effects: ["明目醒神", "缓解眼疲劳", "改善视力模糊"],
                tips: "按摩前洗净双手，闭眼按摩效果更好"
            },
            {
                name: "太阳穴",
                pinyin: "Tài Yáng Xué",
                location: "眉梢与外眼角之间，向后约1寸凹陷处",
                meridian: "经外奇穴",
                massage: {
                    method: "用双手拇指或中指做环形按揉",
                    duration: "2-3分钟",
                    frequency: "每日3-4次",
                    strength: "中等力度"
                },
                effects: ["缓解眼疲劳", "改善头痛", "明目醒脑"],
                tips: "眼保健操必做穴位"
            },
            {
                name: "攒竹穴",
                pinyin: "Cuán Zhú Xué",
                location: "面部，眉头凹陷中，眶上切迹处",
                meridian: "足太阳膀胱经",
                massage: {
                    method: "用拇指或食指按压，轻轻揉动",
                    duration: "1-2分钟",
                    frequency: "用眼疲劳时随时按",
                    strength: "轻柔"
                },
                effects: ["明目止痛", "缓解眼睛干涩", "改善头痛"],
                tips: "配合远眺和眨眼练习效果更佳"
            }
        ],
        diet: {
            recommended: ["枸杞", "菊花茶", "蓝莓", "胡萝卜", "猪肝", "决明子茶"],
            avoid: ["长时间看屏幕", "熬夜", "辛辣刺激"],
            tips: "遵循20-20-20法则：每20分钟看20英尺外20秒"
        }
    },
    
    "便秘": {
        acupoints: [
            {
                name: "天枢穴",
                pinyin: "Tiān Shū Xué",
                location: "腹部，脐中旁开2寸",
                meridian: "足阳明胃经",
                massage: {
                    method: "用食指和中指并拢，顺时针方向按揉",
                    duration: "5-10分钟",
                    frequency: "早起空腹或睡前",
                    strength: "中等力度，以腹部温热为度"
                },
                effects: ["调理肠胃", "促进排便", "缓解腹胀"],
                tips: "顺时针按揉促进肠蠕动，配合腹式呼吸"
            },
            {
                name: "足三里",
                pinyin: "Zú Sān Lǐ",
                location: "小腿外侧，犊鼻下3寸，胫骨前嵴外1横指处",
                meridian: "足阳明胃经",
                massage: {
                    method: "用拇指按压，做环形按揉",
                    duration: "3-5分钟/每侧",
                    frequency: "每日2次",
                    strength: "中等偏重"
                },
                effects: ["调理脾胃", "促进消化", "增强肠动力"],
                tips: "长期按摩可改善体质"
            },
            {
                name: "支沟穴",
                pinyin: "Zhī Gōu Xué",
                location: "前臂背侧，腕背横纹上3寸，尺骨与桡骨之间",
                meridian: "手少阳三焦经",
                massage: {
                    method: "用拇指按压，做点按或按揉",
                    duration: "2-3分钟/每侧",
                    frequency: "便秘时随时按",
                    strength: "中等力度"
                },
                effects: ["通便要穴", "清热利湿", "疏通三焦"],
                tips: "便秘特效穴，按压后多喝温水"
            }
        ],
        diet: {
            recommended: ["香蕉", "蜂蜜水", "红薯", "燕麦", "芹菜", "火龙果", "酸奶"],
            avoid: ["辛辣食物", "油炸食品", "精细加工食品", "过量饮茶"],
            tips: "多喝水，多吃膳食纤维，养成定时排便习惯，适量运动"
        }
    },
    
    "痛经": {
        acupoints: [
            {
                name: "三阴交",
                pinyin: "Sān Yīn Jiāo",
                location: "小腿内侧，内踝尖上3寸，胫骨内侧缘后际",
                meridian: "足太阴脾经",
                massage: {
                    method: "用拇指按压，做环形按揉",
                    duration: "5分钟/每侧",
                    frequency: "经期前3天开始，每日2-3次",
                    strength: "中等力度，以酸胀为度"
                },
                effects: ["调经止痛", "活血化瘀", "调理妇科"],
                tips: "孕妇禁按！女性保健要穴，平时常按可调理月经"
            },
            {
                name: "关元穴",
                pinyin: "Guān Yuán Xué",
                location: "下腹部，前正中线上，脐下3寸",
                meridian: "任脉",
                massage: {
                    method: "用掌心或四指按揉，可配合热敷",
                    duration: "5-10分钟",
                    frequency: "痛经时随时按",
                    strength: "轻柔，以温热舒适为度"
                },
                effects: ["温经散寒", "调理冲任", "缓解痛经"],
                tips: "配合热水袋热敷效果更佳"
            },
            {
                name: "血海穴",
                pinyin: "Xuè Hǎi Xué",
                location: "大腿内侧，髌底内侧端上2寸，股四头肌内侧头隆起处",
                meridian: "足太阴脾经",
                massage: {
                    method: "用拇指按压，做环形按揉",
                    duration: "3-5分钟/每侧",
                    frequency: "每日2次",
                    strength: "中等力度"
                },
                effects: ["活血化瘀", "调经止痛", "养血润燥"],
                tips: "月经不调、痛经必按穴位"
            }
        ],
        diet: {
            recommended: ["红糖姜茶", "当归", "红枣", "桂圆", "黑糖", "羊肉汤"],
            avoid: ["生冷食物", "冰镇饮料", "寒凉水果", "辛辣刺激"],
            tips: "经期注意保暖，避免受凉，保持心情舒畅，适当休息"
        }
    },
    
    "焦虑": {
        acupoints: [
            {
                name: "内关穴",
                pinyin: "Nèi Guān Xué",
                location: "前臂掌侧，腕横纹上2寸，掌长肌腱与桡侧腕屈肌腱之间",
                meridian: "手厥阴心包经",
                massage: {
                    method: "用拇指按压，做环形按揉",
                    duration: "3-5分钟/每手",
                    frequency: "焦虑时随时按",
                    strength: "中等力度"
                },
                effects: ["宁心安神", "缓解焦虑", "改善心悸"],
                tips: "紧张焦虑时的急救穴位，配合深呼吸"
            },
            {
                name: "神门穴",
                pinyin: "Shén Mén Xué",
                location: "腕横纹尺侧端，尺侧腕屈肌腱的桡侧凹陷处",
                meridian: "手少阴心经",
                massage: {
                    method: "用拇指轻轻按揉",
                    duration: "3-5分钟/每手",
                    frequency: "每日2-3次",
                    strength: "轻柔"
                },
                effects: ["安神定志", "缓解心烦", "改善失眠"],
                tips: "情绪不稳定时的调节穴位"
            },
            {
                name: "太冲穴",
                pinyin: "Tài Chōng Xué",
                location: "足背，第1、2跖骨结合部之前凹陷中",
                meridian: "足厥阴肝经",
                massage: {
                    method: "用拇指按压，向足趾方向推按",
                    duration: "3-5分钟/每足",
                    frequency: "每日2次",
                    strength: "中等偏重，以酸胀为度"
                },
                effects: ["疏肝解郁", "平肝潜阳", "缓解烦躁"],
                tips: "生气、烦躁时的\"消气穴\"，按后心情会舒畅"
            }
        ],
        diet: {
            recommended: ["玫瑰花茶", "茉莉花茶", "百合", "莲子", "小米", "香蕉"],
            avoid: ["咖啡", "浓茶", "酒精", "辛辣刺激"],
            tips: "保持规律作息，适当运动，学会放松，必要时寻求专业帮助"
        }
    },
    
    "疲劳": {
        acupoints: [
            {
                name: "足三里",
                pinyin: "Zú Sān Lǐ",
                location: "小腿外侧，犊鼻下3寸，胫骨前嵴外1横指处",
                meridian: "足阳明胃经",
                massage: {
                    method: "用拇指按压，做环形按揉",
                    duration: "5分钟/每侧",
                    frequency: "每日2次",
                    strength: "中等偏重"
                },
                effects: ["补中益气", "增强体力", "提高免疫力"],
                tips: "\"常按足三里，胜吃老母鸡\"，强身健体第一穴"
            },
            {
                name: "关元穴",
                pinyin: "Guān Yuán Xué",
                location: "下腹部，前正中线上，脐下3寸",
                meridian: "任脉",
                massage: {
                    method: "用掌心按揉，或艾灸",
                    duration: "5-10分钟",
                    frequency: "每日1-2次",
                    strength: "轻柔，以温热为度"
                },
                effects: ["培元固本", "补益元气", "改善虚弱"],
                tips: "体质虚弱者的保健要穴"
            },
            {
                name: "百会穴",
                pinyin: "Bǎi Huì Xué",
                location: "头顶正中，两耳尖连线与头部正中线的交点",
                meridian: "督脉",
                massage: {
                    method: "用指腹轻轻按压或叩击",
                    duration: "2-3分钟",
                    frequency: "每日2-3次",
                    strength: "轻柔"
                },
                effects: ["醒脑开窍", "升阳举陷", "缓解头昏"],
                tips: "困倦时按此穴可快速提神"
            }
        ],
        diet: {
            recommended: ["人参茶", "黄芪", "红枣", "枸杞", "山药", "鸡肉", "牛肉"],
            avoid: ["生冷食物", "过度节食", "熬夜"],
            tips: "保证充足睡眠，适当运动，劳逸结合"
        }
    },
    
    "提神醒脑": {
        acupoints: [
            {
                name: "百会穴",
                pinyin: "Bǎi Huì Xué",
                location: "头顶正中，两耳尖连线与头部正中线的交点",
                meridian: "督脉",
                massage: {
                    method: "用指腹轻轻按压或叩击",
                    duration: "2-3分钟",
                    frequency: "困倦时随时按",
                    strength: "轻柔"
                },
                effects: ["醒脑开窍", "提升阳气", "改善精神不振"],
                tips: "下午犯困时的提神穴位"
            },
            {
                name: "风池穴",
                pinyin: "Fēng Chí Xué",
                location: "后颈部，枕骨下方凹陷处",
                meridian: "足少阳胆经",
                massage: {
                    method: "双手拇指按揉",
                    duration: "3分钟",
                    frequency: "每日2-3次",
                    strength: "中等力度"
                },
                effects: ["醒脑明目", "缓解疲劳", "改善头晕"],
                tips: "久坐后按摩可快速恢复精神"
            },
            {
                name: "合谷穴",
                pinyin: "Hé Gǔ Xué",
                location: "手背第1、2掌骨之间",
                meridian: "手阳明大肠经",
                massage: {
                    method: "用拇指按压",
                    duration: "2分钟/每手",
                    frequency: "随时可按",
                    strength: "中等力度"
                },
                effects: ["提神醒脑", "缓解疲劳"],
                tips: "孕妇禁按！"
            }
        ],
        diet: {
            recommended: ["绿茶", "薄荷茶", "柠檬水", "坚果", "黑巧克力"],
            avoid: ["过量咖啡", "高糖食物"],
            tips: "保持充足睡眠是根本，适当午休15-20分钟"
        }
    },
    
    "增强免疫": {
        acupoints: [
            {
                name: "足三里",
                pinyin: "Zú Sān Lǐ",
                location: "小腿外侧，犊鼻下3寸",
                meridian: "足阳明胃经",
                massage: {
                    method: "用拇指按压按揉",
                    duration: "5分钟/每侧",
                    frequency: "每日2次",
                    strength: "中等偏重"
                },
                effects: ["增强体质", "提高免疫力", "强身健体"],
                tips: "长期坚持按摩，可明显改善体质"
            },
            {
                name: "关元穴",
                pinyin: "Guān Yuán Xué",
                location: "脐下3寸",
                meridian: "任脉",
                massage: {
                    method: "掌心按揉或艾灸",
                    duration: "5-10分钟",
                    frequency: "每日1次",
                    strength: "轻柔温和"
                },
                effects: ["培元固本", "增强正气"],
                tips: "秋冬季节保健要穴"
            },
            {
                name: "大椎穴",
                pinyin: "Dà Zhuī Xué",
                location: "第7颈椎棘突下",
                meridian: "督脉",
                massage: {
                    method: "搓热或拍打",
                    duration: "3-5分钟",
                    frequency: "每日1-2次",
                    strength: "中等力度，以发热为佳"
                },
                effects: ["提高抵抗力", "预防感冒"],
                tips: "换季时多按摩可预防感冒"
            }
        ],
        diet: {
            recommended: ["黄芪", "枸杞", "红枣", "香菇", "蜂蜜", "大蒜"],
            avoid: ["生冷食物", "过度劳累", "熬夜"],
            tips: "规律作息，适当运动，保持心情愉快"
        }
    },
    
    "美容养颜": {
        acupoints: [
            {
                name: "足三里",
                pinyin: "Zú Sān Lǐ",
                location: "小腿外侧，犊鼻下3寸",
                meridian: "足阳明胃经",
                massage: {
                    method: "按揉",
                    duration: "5分钟/每侧",
                    frequency: "每日2次",
                    strength: "中等力度"
                },
                effects: ["调理脾胃", "气血充足则面色红润"],
                tips: "内调外养，美容从调理脾胃开始"
            },
            {
                name: "三阴交",
                pinyin: "Sān Yīn Jiāo",
                location: "内踝尖上3寸",
                meridian: "足太阴脾经",
                massage: {
                    method: "按揉",
                    duration: "5分钟/每侧",
                    frequency: "每日2次",
                    strength: "中等力度"
                },
                effects: ["调理气血", "延缓衰老", "改善肤质"],
                tips: "孕妇禁按！女性美容养颜要穴"
            },
            {
                name: "太阳穴",
                pinyin: "Tài Yáng Xué",
                location: "眉梢与外眼角之间",
                meridian: "经外奇穴",
                massage: {
                    method: "轻柔按揉",
                    duration: "2-3分钟",
                    frequency: "每日2次",
                    strength: "轻柔"
                },
                effects: ["改善眼周循环", "淡化细纹"],
                tips: "配合眼霜按摩效果更好"
            }
        ],
        diet: {
            recommended: ["红枣", "桂圆", "枸杞", "银耳", "燕窝", "蜂蜜", "玫瑰花茶"],
            avoid: ["辛辣刺激", "油炸食品", "熬夜", "过度日晒"],
            tips: "充足睡眠是最好的美容，多喝水，保持心情愉快"
        }
    },
    
    "助消化": {
        acupoints: [
            {
                name: "中脘穴",
                pinyin: "Zhōng Wǎn Xué",
                location: "脐上4寸",
                meridian: "任脉",
                massage: {
                    method: "顺时针按揉",
                    duration: "5-10分钟",
                    frequency: "饭后1小时",
                    strength: "轻柔"
                },
                effects: ["和胃健脾", "促进消化"],
                tips: "饭后散步时可边走边按"
            },
            {
                name: "足三里",
                pinyin: "Zú Sān Lǐ",
                location: "犊鼻下3寸",
                meridian: "足阳明胃经",
                massage: {
                    method: "按揉",
                    duration: "3-5分钟/每侧",
                    frequency: "每日2次",
                    strength: "中等力度"
                },
                effects: ["调理脾胃", "增强消化功能"],
                tips: "消化系统保健第一穴"
            },
            {
                name: "天枢穴",
                pinyin: "Tiān Shū Xué",
                location: "脐旁2寸",
                meridian: "足阳明胃经",
                massage: {
                    method: "顺时针按揉",
                    duration: "3-5分钟",
                    frequency: "每日2次",
                    strength: "中等力度"
                },
                effects: ["调理肠胃", "促进排便"],
                tips: "腹胀、消化不良时按摩"
            }
        ],
        diet: {
            recommended: ["山楂", "陈皮", "麦芽", "萝卜", "酸奶", "普洱茶"],
            avoid: ["暴饮暴食", "过于油腻", "边吃边说话"],
            tips: "细嚼慢咽，饭后散步，不要立即躺下"
        }
    }
};

// 身体部位对应穴位
const bodyPartData = {
    "头部": ["百会穴", "风池穴", "太阳穴"],
    "面部": ["睛明穴", "攒竹穴", "太阳穴", "迎香穴"],
    "颈部": ["风池穴", "大椎穴", "天柱穴"],
    "肩部": ["肩井穴", "肩髃穴", "天宗穴"],
    "背部": ["大椎穴", "肺俞穴", "心俞穴", "肝俞穴"],
    "胸腹": ["中脘穴", "关元穴", "天枢穴", "气海穴"],
    "手臂": ["曲池穴", "手三里", "外关穴"],
    "手部": ["合谷穴", "后溪穴", "内关穴", "神门穴"],
    "腰部": ["肾俞穴", "腰阳关穴", "命门穴"],
    "腿部": ["足三里", "三阴交", "血海穴", "委中穴"],
    "膝部": ["犊鼻穴", "阳陵泉", "阴陵泉"],
    "足部": ["涌泉穴", "太冲穴", "昆仑穴", "太溪穴"]
};

// 穴位详细信息（用于身体部位查询）
const acupointDetails = {
    "百会穴": {
        name: "百会穴",
        pinyin: "Bǎi Huì Xué",
        location: "头顶正中，两耳尖连线与头部正中线的交点",
        meridian: "督脉",
        massage: {
            method: "用指腹轻轻按压或叩击",
            duration: "2-3分钟",
            frequency: "每日2-3次",
            strength: "轻柔"
        },
        effects: ["醒脑开窍", "升阳举陷", "安神定志"],
        tips: "头晕、困倦、精神不振时按摩效果好"
    },
    "涌泉穴": {
        name: "涌泉穴",
        pinyin: "Yǒng Quán Xué",
        location: "足底前1/3与后2/3交界处凹陷中",
        meridian: "足少阴肾经",
        massage: {
            method: "用拇指按揉或掌根搓热",
            duration: "5-10分钟/每足",
            frequency: "睡前按摩",
            strength: "中等偏重，以发热为佳"
        },
        effects: ["滋阴降火", "引火归元", "安神助眠"],
        tips: "泡脚后按摩效果翻倍，失眠者必按"
    },
    "太冲穴": {
        name: "太冲穴",
        pinyin: "Tài Chōng Xué",
        location: "足背，第1、2跖骨结合部之前凹陷中",
        meridian: "足厥阴肝经",
        massage: {
            method: "用拇指按压，向足趾方向推按",
            duration: "3-5分钟/每足",
            frequency: "每日2次",
            strength: "中等偏重"
        },
        effects: ["疏肝解郁", "平肝潜阳", "清热利湿"],
        tips: "生气、烦躁时的\"消气穴\""
    },
    "迎香穴": {
        name: "迎香穴",
        pinyin: "Yíng Xiāng Xué",
        location: "鼻翼外缘中点旁，鼻唇沟中",
        meridian: "手阳明大肠经",
        massage: {
            method: "用食指指腹按揉",
            duration: "2-3分钟",
            frequency: "鼻塞时随时按",
            strength: "轻柔"
        },
        effects: ["通鼻窍", "缓解鼻塞", "改善嗅觉"],
        tips: "感冒鼻塞时的特效穴"
    },
    "天柱穴": {
        name: "天柱穴",
        pinyin: "Tiān Zhù Xué",
        location: "后发际正中旁开1.3寸，斜方肌外缘凹陷中",
        meridian: "足太阳膀胱经",
        massage: {
            method: "用拇指按压按揉",
            duration: "3分钟",
            frequency: "每日2次",
            strength: "中等力度"
        },
        effects: ["缓解颈部僵硬", "改善头痛", "明目"],
        tips: "颈椎不适时配合风池穴一起按摩"
    },
    "天宗穴": {
        name: "天宗穴",
        pinyin: "Tiān Zōng Xué",
        location: "肩胛骨冈下窝中央凹陷处",
        meridian: "手太阳小肠经",
        massage: {
            method: "用对侧手中指按压",
            duration: "3分钟/每侧",
            frequency: "每日2次",
            strength: "中等力度"
        },
        effects: ["缓解肩背疼痛", "舒筋活络"],
        tips: "肩周炎患者常用穴位"
    },
    "肺俞穴": {
        name: "肺俞穴",
        pinyin: "Fèi Shù Xué",
        location: "背部，第3胸椎棘突下，旁开1.5寸",
        meridian: "足太阳膀胱经",
        massage: {
            method: "用拳背或掌根按揉",
            duration: "3-5分钟",
            frequency: "每日1-2次",
            strength: "中等力度"
        },
        effects: ["宣肺理气", "改善咳嗽", "增强肺功能"],
        tips: "呼吸系统保健要穴"
    },
    "心俞穴": {
        name: "心俞穴",
        pinyin: "Xīn Shù Xué",
        location: "背部，第5胸椎棘突下，旁开1.5寸",
        meridian: "足太阳膀胱经",
        massage: {
            method: "用拳背或掌根按揉",
            duration: "3-5分钟",
            frequency: "每日1-2次",
            strength: "轻柔"
        },
        effects: ["宁心安神", "改善心悸", "缓解失眠"],
        tips: "心脏保健穴位"
    },
    "肝俞穴": {
        name: "肝俞穴",
        pinyin: "Gān Shù Xué",
        location: "背部，第9胸椎棘突下，旁开1.5寸",
        meridian: "足太阳膀胱经",
        massage: {
            method: "用拳背或掌根按揉",
            duration: "3-5分钟",
            frequency: "每日1-2次",
            strength: "中等力度"
        },
        effects: ["疏肝理气", "明目", "改善情绪"],
        tips: "肝脏保健穴位，情绪不佳时可按摩"
    },
    "气海穴": {
        name: "气海穴",
        pinyin: "Qì Hǎi Xué",
        location: "下腹部，前正中线上，脐下1.5寸",
        meridian: "任脉",
        massage: {
            method: "用掌心按揉",
            duration: "5分钟",
            frequency: "每日1-2次",
            strength: "轻柔温和"
        },
        effects: ["补气益元", "调理气机"],
        tips: "\"气海一穴暖全身\"，体虚者保健要穴"
    },
    "手三里": {
        name: "手三里",
        pinyin: "Shǒu Sān Lǐ",
        location: "前臂背面，曲池下2寸",
        meridian: "手阳明大肠经",
        massage: {
            method: "用拇指按压按揉",
            duration: "2-3分钟/每侧",
            frequency: "每日2次",
            strength: "中等力度"
        },
        effects: ["通经活络", "缓解手臂疼痛"],
        tips: "手臂酸痛时按摩"
    },
    "外关穴": {
        name: "外关穴",
        pinyin: "Wài Guān Xué",
        location: "前臂背侧，腕背横纹上2寸，尺骨与桡骨之间",
        meridian: "手少阳三焦经",
        massage: {
            method: "用拇指按压",
            duration: "2-3分钟/每侧",
            frequency: "每日2次",
            strength: "中等力度"
        },
        effects: ["清热解表", "通经活络"],
        tips: "感冒发热时可按摩"
    },
    "命门穴": {
        name: "命门穴",
        pinyin: "Mìng Mén Xué",
        location: "腰部，后正中线上，第2腰椎棘突下凹陷中",
        meridian: "督脉",
        massage: {
            method: "用掌根搓热",
            duration: "5分钟",
            frequency: "每日2次",
            strength: "中等力度，以发热为佳"
        },
        effects: ["温肾壮阳", "强腰健膝"],
        tips: "腰部保健要穴，搓至发热效果好"
    },
    "犊鼻穴": {
        name: "犊鼻穴",
        pinyin: "Dú Bí Xué",
        location: "膝部，髌韧带外侧凹陷中",
        meridian: "足阳明胃经",
        massage: {
            method: "用拇指按压",
            duration: "2-3分钟/每侧",
            frequency: "每日2次",
            strength: "中等力度"
        },
        effects: ["通利关节", "缓解膝痛"],
        tips: "膝关节疼痛时按摩"
    },
    "阳陵泉": {
        name: "阳陵泉",
        pinyin: "Yáng Líng Quán",
        location: "小腿外侧，腓骨头前下方凹陷中",
        meridian: "足少阳胆经",
        massage: {
            method: "用拇指按压按揉",
            duration: "3分钟/每侧",
            frequency: "每日2次",
            strength: "中等力度"
        },
        effects: ["舒筋活络", "缓解筋骨疼痛"],
        tips: "\"筋会阳陵泉\"，筋骨问题首选穴"
    },
    "阴陵泉": {
        name: "阴陵泉",
        pinyin: "Yīn Líng Quán",
        location: "小腿内侧，胫骨内侧髁后下方凹陷中",
        meridian: "足太阴脾经",
        massage: {
            method: "用拇指按压按揉",
            duration: "3分钟/每侧",
            frequency: "每日2次",
            strength: "中等力度"
        },
        effects: ["健脾利湿", "消肿"],
        tips: "水肿、湿气重时按摩"
    },
    "昆仑穴": {
        name: "昆仑穴",
        pinyin: "Kūn Lún Xué",
        location: "足外踝后方，外踝尖与跟腱之间凹陷中",
        meridian: "足太阳膀胱经",
        massage: {
            method: "用拇指按压",
            duration: "2-3分钟/每侧",
            frequency: "每日2次",
            strength: "中等力度"
        },
        effects: ["舒筋活络", "缓解足踝疼痛"],
        tips: "脚踝扭伤后可按摩（急性期除外）"
    },
    "太溪穴": {
        name: "太溪穴",
        pinyin: "Tài Xī Xué",
        location: "足内踝后方，内踝尖与跟腱之间凹陷中",
        meridian: "足少阴肾经",
        massage: {
            method: "用拇指按压按揉",
            duration: "3分钟/每侧",
            frequency: "每日2次",
            strength: "中等力度"
        },
        effects: ["滋阴补肾", "清热降火"],
        tips: "肾虚者保健要穴"
    }
};
