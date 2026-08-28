// 成员数据共享模块：成员列表页 /members/ 与成员详情页 /members/[id]/ 共同使用。
export interface Member {
  id: string;
  name: string;
  title?: string;
  degree?: string;
  email: string;
  phone?: string;
  photo?: string;
  research?: string;
  color?: string;
  homepage?: string;
  cardLink?: string;
  badge?: string;
  bio?: string;
  education?: string[];
  career?: string[];
  appointments?: string[];
  awards?: string[];
  projects?: string[];
  papers?: string[];
  note?: string;
  kind?: "faculty" | "student";
}

export const faculty: Member[] = [
  {
    id: "zeng-dong",
    name: "曾栋",
    title: "副研究员 / 硕士生导师",
    photo: "/images/members/PI-zengdong.jpg",
    email: "zd1989@smu.edu.cn",
    phone: "",
    research: "高端医学X射线CT成像方法与技术",
    color: "#D94848",
    homepage: "https://portal.smu.edu.cn/swyxgcxy/info/1020/3442.htm",
    bio: "南方医科大学生物医学工程学院副研究员。2016-2018年南方医科大学博士后，2017-2018年约翰斯霍普金斯大学博士后，2019-2022年华南理工大学博士后。主持国家自然科学基金广东联合基金集成项目子课题、国自然青年科学基金项目，在Nature Communications Engineering、IEEE TMI等期刊发表系列创新成果。",
    education: [
      "2011.09-2016.07 南方医科大学，生物医学工程，博士",
      "2007.09-2011.07 南方医科大学，生物医学工程，学士",
    ],
    career: [
      "2022.01-至今 南方医科大学生物医学工程学院，副研究员",
      "2019.01-2022.01 华南理工大学，博士后",
      "2017.09-2018.08 美国约翰斯霍普金斯大学，博士后",
      "2016.09-2018.12 南方医科大学，博士后",
    ],
    appointments: [
      "中国体视学学会青委会 委员",
    ],
    awards: [
      "广东省百名博士博士后创新人物，2019年",
      "广州市青年科技人才托举工程项目，2022年",
    ],
    projects: [
      "国家自然科学基金广东联合基金集成项目子课题，2022-2025，主持",
      "国家自然科学基金青年科学基金项目，2018-2020，主持",
    ],
    papers: [
      "S. Li, D. Zeng, and J. Ma, et al., Physics in Medicine and Biology, 2022.",
      "D. Zeng, and J. Ma, et al., IEEE TRPMS, 2021.",
      "D. Li, D. Zeng, and J. Ma, et al., IEEE Transactions on Medical Imaging, 2020.",
      "D. Zeng, and J. Ma, et al., IEEE Transactions on Medical Imaging, 2020.",
      "L. Yao, D. Zeng, and J. Ma, et al., Physics in Medicine and Biology, 2019.",
    ],
  },
  {
    id: "ma-jianhua",
    name: "马建华",
    title: "教授 / 博士生导师 ",
    email: "jhma@smu.edu.cn",
    photo: "/images/members/PI-majianhua.jpg",
    phone: "",
    research: "高端医学CT成像与影像分析",
    color: "#D94848",
    homepage: "https://gr.xjtu.edu.cn/jhma75/",
    cardLink: "https://gr.xjtu.edu.cn/jhma75/",
    bio: "马建华，国家级领军学者，西安交通大学智能化诊疗装备研究中心创始主任。长期从事高端医学CT成像理论与算法研究，所取得的创新成果已成功适配于自研分布式微剂量CT系统和东软医疗国产高端CT系列产品中。主持科技部重点研发计划项目、NSFC区域创新重大集成项目等国家级课题10余项，创建2个省级科研平台，兼任4个国家级专业委员会副主委、IEEE-TMI与PMB等期刊编委、陕西省科技创新团队负责人。在医学成像领域发表学术论文百余篇，连续三年(2022年-2024年)获评中国高被引学者；授权发明专利30件，并实现产业转化。获2024年广东省自然科学奖一等奖（排1）、2019年广东省技术发明奖一等奖（排1）、丁颖科技奖（广东省科协个人最高奖）等荣誉。",
    education: [
      "2005.09-2008.07 南方医科大学，生物医学工程专业（医学成像），博士",
      "2002.09-2005.07 中山大学，计算数学专业（医学图像分析），硕士",
      "1998.09-2002.07 曲阜师范大学，应用数学专业，学士",
    ],
    career: [
      "2014.07-至今 南方医科大学，生物医学工程学院，教授 / 系主任",
      "2012.12-2014.06 南方医科大学，生物医学工程学院，教授 / 副所长",
      "2011.03-2012.03 美国纽约大学石溪分校，放射学系，访问学者",
      "2009.09-2012.11 南方医科大学，生物医学工程学院，副教授",
      "2006.09-2009.08 南方医科大学，生物医学工程学院，讲师",
      "2005.08-2006.08 南方医科大学，生物医学工程学院，助教",
    ],
    appointments: [
      "中国图象图形学学会 理事",
      "中国图象图形学学会医学影像分会 副主任委员",
      "中国生物医学工程学会青年委员会 副主任委员",
      "中国计量学会CT辐射剂量控制分会 委员",
      "中国体视觉学会CT理论与应用分会 委员",
      "广东省生物医学工程学会 常务理事",
      "Physics in Medicine and Biology 期刊 International Advisory Board",
    ],
    awards: [
      "广东省技术发明奖一等奖，高端宽体CT低剂量成像关键技术与系统研发及应用，第一完成人，2019年",
      "广东省科学技术奖二等奖，基于多约束统一迭代模型的医学成像新技术与应用，第二完成人，2015年",
    ],
    projects: [
      "国家自然科学基金联合基金项目（U1708261），医用多级能谱CT低剂量精准成像新方法及关键技术研究，2018.01-2021.12，265万元，主持",
      "广东省应用型科技研发专项（2015B020233008），数字乳腺层析成像系统关键技术研发与整机研制，2016.01-2019.12，500万元，主持",
      "国家自然科学基金面上项目（81371544），基于系统精准建模的超低剂量SCT优质成像新方法研究，2014.01-2017.12，70万元，主持",
      "广州市科技计划项目（201705030009），广州市医用放射成像与检测技术重点实验室，2017.01-2019.12，200万元，主持",
      "广州市科技计划项目（CT201510010039），超低剂量SCT优质成像技术研究，2015.06-2018.05，20万元，主持",
    ],
    papers: [
      "D. Zeng, L. Yao, Y. Ge, et al., Full-Spectrum-Knowledge-Aware Tensor Model for Energy-Resolved CT Iterative Reconstruction, IEEE TMI, 39(9): 2831-2843, 2020.",
      "J. He, Y. Wang, and J. Ma*, Radon Inversion via Deep Learning, IEEE TMI, 39(6): 2076-2087, 2020.",
      "X. Tao, H. Zhang, Y. Wang, et al., VVBP-Tensor in the FBP Algorithm: Its Properties and Application in Low-dose CT Reconstruction, IEEE TMI, 39(3): 764-776, 2020.",
      "J. He, Y. Yang, Y. Wang, et al., Optimizing a Parameterized Plug-and-Play ADMM for Iterative Low-Dose CT Reconstruction, IEEE TMI, 38(2): 371-382, 2018.",
      "S. Li, D. Zeng, J. Peng, et al., An Efficient Iterative Cerebral Perfusion CT Reconstruction via Low-Rank Tensor Decomposition with Spatial-Temporal Total Variation Regularization, IEEE TMI, 38(2): 360-370, 2018.",
      "Q. Xie, D. Zeng, Q. Zhao, et al., Robust Low-dose CT Sinogram Preprocessing via Exploiting Noise-generating Mechanism, IEEE TMI, 36: 2487-2498, 2017.",
      "J. Ma, Z. Liang, Y. Fan, et al., Variance analysis of x-ray CT sinograms in the presence of electronic noise background, Medical Physics, 39(7): 4051-4065, 2012.",
    ],
  },
  {
    id: "bian-zhaoying",
    name: "边兆英",
    photo: "/images/members/PI-bianzhaoying.jpg",
    title: "副教授 / 硕士生导师",
    email: "zybian@smu.edu.cn",
    phone: "020-62789313",
    research: "医学CT低剂量成像",
    color: "#D94848",
    homepage: "https://portal.smu.edu.cn/swyxgcxy/info/1020/1206.htm",
    cardLink: "https://portal.smu.edu.cn/swyxgcxy/info/1020/1206.htm",
    bio: "南方医科大学生物医学工程学院副教授。2008年山东大学生物医学工程学士、2011年南方医科大学生物医学工程硕士、2015年博士。主持国家自然科学基金青年项目，参与广东省应用型科技研发专项等课题。中国体视觉学会会员、中国生物医学工程学会会员。",
    education: [
      "2012.09-2015.07 南方医科大学，生物医学工程，博士",
      "2008.09-2011.07 南方医科大学，生物医学工程，硕士",
      "2004.09-2008.07 山东大学，生物医学工程，学士",
    ],
    career: [
      "2015.09-至今 南方医科大学生物医学工程学院信息技术系，讲师 / 副教授",
    ],
    appointments: [
      "中国体视觉学会 会员",
      "中国生物医学工程学会 会员",
    ],
    awards: [
      "广东省技术发明一等奖，2019年，第三完成人",
    ],
    projects: [
      "国家自然科学基金青年项目（61701217），基于靶向扫描的低剂量灌注CT心肌缺血定量成像新方法研究，2018.01-2020.12，25万元，主持",
      "广东省应用型科技研发专项（2015B020233008），数字乳腺层析成像系统关键技术研发与整机研制，2016.01-2018.12，500万元，参与",
      "广州市科技计划项目（201705030009），广州市医用放射成像与检测技术重点实验室，2017.01-2018.12，200万元，参与",
    ],
    papers: [
      "Z. Bian#, D. Zeng#, Z. Zhang, et al., Low-dose dynamic myocardial perfusion CT imaging using a motion adaptive sparsity prior, Medical Physics, 2017, 44(9): e188~e201.",
      "D. Zeng, X. Zhang, Z. Bian*, et al., Cerebral perfusion computed tomography deconvolution via structure tensor total variation regularization, Medical Physics, 2016, 43(5): 2091~2107.",
      "X. Tian, D. Zeng, S. Zhang, et al., Robust low-dose dynamic cerebral perfusion CT image restoration via coupled dictionary learning scheme, Journal of X-Ray Science and Technology, 2016, 24(6): 837~853.",
      "Z. Bian, J. Ma*, J. Huang, et al., SR-NLM: a sinogram restoration induced non-local means image filtering for low-dose computed tomography, Computerized Medical Imaging and Graphics, 2013, 37(4): 293~303.",
    ],
  },
];

export const phdStudents: Member[] = [
  { id: "stu-wanghao", name: "王昊", degree: "博士研究生", photo: "/images/members/stu-wanghao.jpg", research: "静态CT重建理论和算法、低剂量CT多机构协作学习、AI医学诊断分析", bio: "南方医科大学生物医学工程专业硕博连读博士研究生，工学学士。主要从事静态CT重建理论与算法、多机构协作医学成像及医学影像人工智能研究，围绕非理想采样静态CT成像，开展多几何静态CT重建及解析模型与人工智能融合的智能重建方法研究，同时开展低剂量CT多机构协作学习与跨机型医学影像协调研究。以第一作者发表期刊论文3篇、会议论文5篇，并获国家奖学金、南方医科大学研究生一等奖学金、优秀研究生、第十届全国大学生生物医学工程创新设计竞赛二等奖及第九届中国国际“互联网+”大学生创新创业大赛广东省分赛铜奖等奖项。", email: "wang_hao@smu.edu.cn" },
  { id: "stu-liaojingyi", name: "廖静怡", degree: "博士研究生", photo: "/images/members/stu-liaojingyi.jpg", research: "基于人工智能的医学成像与病理分析技术研究", bio: "南方医科大学博士研究生在读，研究方向为基于人工智能的医学CBCT成像与消化道病理分析研究，目前已发表SCI期刊论文1篇、EI会议论文5篇，并参与2项国家重点研发计划课题。曾获南方医科大学第九届中国国际“互联网+”大学生创新创业大赛银奖、2023年“挑战杯”南方医科大学学术科技作品竞赛优胜奖、2023年南方医科大学“优秀研究生”荣誉称号。", email: "1jy@smu.edu.cn" },
];


// 硕士研究生分为三个年级（行）展示，按拼音首字母排序；不对外显示真实年级。
const masterRow1: Member[] = [
  { id: "stu-caoboxuan", name: "曹博宣", degree: "硕士研究生", photo: "/images/members/stu-caoboxuan.jpg", research: "智能CT成像理论与方法、灌注CT、CT体模制作与设备质控", bio: "在研课题为静态CT颅脑灌注成像协议设计、3D打印多病灶仿真灌注物理体模。拥有医工竞赛和创业比赛团队组织经验、三甲医院影像科合作经历、三甲医院放疗科实习经历。", email: "caoboxuan2002@smu.edu.cn" },
  { id: "stu-houhaomin", name: "侯浩民", degree: "硕士研究生", photo: "/images/members/stu-houhaomin.jpg", research: "新型CT蒙卡与解析建模、光子计数CT能谱优化", bio: "学习光子计数CT成像与能谱校正技术，完成从探测器建模、多能数据采集的全链路研发，拥有临床设备QA、QC经验、医工竞赛经验和放疗相关实习经历。", email: "houhm@smu.edu.cn" },
  { id: "stu-kongdeyang", name: "孔德阳", degree: "硕士研究生", photo: "/images/members/stu-kongdeyang.jpg", research: "静态CT重建理论与算法、深度学习在医学成像中的应用", bio: "南医大生物医学工程硕士研究生，爱好摄影，多次参加医工竞赛并获奖，具有丰富的科研项目落地与团队协作经验。", email: "kongdy@smu.edu.cn" },
  { id: "stu-liyule", name: "李玉乐", degree: "硕士研究生", photo: "/images/members/stu-liyule.jpg", research: "探源一体成像系统、光源最优展布理论、蒙特卡洛物理仿真", email: "ylli@smu.edu.cn" },
  { id: "stu-mengxiao", name: "孟筱", degree: "硕士研究生", photo: "/images/members/stu-mengxiao.jpg", research: "深度学习在医学影像中的应用", email: "mx_1125@smu.edu.cn" },
  { id: "stu-wangyankun", name: "王延坤", degree: "硕士研究生", photo: "/images/members/stu-wangyankun.jpg", research: "基于物理模型与深度学习的静态CT散射校正研究", email: "ykwang@smu.edu.cn" },
  { id: "stu-wujunhao", name: "吴君浩", degree: "硕士研究生", photo: "/images/members/stu-wujunhao.jpg", research: "静态CT重建理论和算法、低剂量CT重建", bio: "拥有CT重建算法推导、CT重建算法实现、生医工竞赛经验。", email: "wujunhao@smu.edu.cn" },
  { id: "stu-xiaomeng", name: "肖萌", degree: "硕士研究生", photo: "/images/members/stu-xiaomeng.png", research: "心肌灌注成像的图像处理与定量分析", email: "xiao_m@smu.edu.cn" },
];

const masterRow2: Member[] = [
  { id: "stu-chenqiule", name: "陈秋乐", degree: "硕士研究生", photo: "/images/members/stu-chenqiule.jpg", research: "CT成像理论研究", email: "chenqiule@smu.edu.cn" },
  { id: "stu-gaoyuanxiang", name: "高远翔", degree: "硕士研究生", photo: "/images/members/stu-gaoyuanxiang.jpg", research: "深度学习在医学影像重建中的应用", bio: "热爱学习", email: "yuanxiang499@qq.com" },
  { id: "stu-jianglin", name: "江林", degree: "硕士研究生", photo: "/images/members/stu-jianglin.jpg", research: "深度学习模型轻量化与压缩、FPGA嵌入式平台算法部署", bio: "拥有创新创业竞赛经验、硬件驱动开发实习经验。", email: "jl1205@smu.edu.cn" },
  { id: "stu-liuyiwei", name: "刘逸炜", degree: "硕士研究生", photo: "/images/members/stu-liuyiwei.jpg", research: "医学智能体", email: "liuyiwei@smu.edu.cn" },
  { id: "stu-liuyue", name: "刘悦", degree: "硕士研究生", photo: "/images/members/stu-liuyue.jpg", research: "PCCT仿真方法研究", email: "liuyue1004@smu.edu.cn" },
  { id: "stu-wutianyang", name: "吴天洋", degree: "硕士研究生", photo: "/images/members/stu-wutianyang.jpg", research: "医学影像在深度学习中的应用", bio: "这个网站的主要开发者之一", email: "wutianyangabc@126.com" },
  { id: "stu-xujiatong", name: "许佳彤", degree: "硕士研究生", photo: "/images/members/stu-xujiatong.jpg", research: "深度学习在医学影像中的应用", email: "xujiatong1019@163.com" },
  { id: "stu-yangfangyu", name: "杨芳雨", degree: "硕士研究生", photo: "/images/members/stu-yangfangyu.jpg", research: "深度学习在影像方面的应用", email: "yangfy333@163.com" },
  { id: "stu-yebaihong", name: "叶柏宏", degree: "硕士研究生", photo: "/images/members/stu-yebaihong.jpg", research: "静态CT成像架构及重建算法设计、CT蒙卡仿真", bio: "拥有CT成像蒙卡仿真、架构设计及重建算法实现经验。", email: "ybh22520356@smu.edu.cn" },
];

const masterRow3: Member[] = [
  { id: "stu-housong", name: "侯嵩", degree: "硕士研究生", photo: "/images/members/stu-housong.jpg", research: "", email: "housong@smu.edu.cn" },
  { id: "stu-libingchen", name: "李冰晨", degree: "硕士研究生", photo: "/images/members/stu-libingchen.jpg", research: "", email: "libingchen@smu.edu.cn" },
  { id: "stu-lijiaqi", name: "李嘉琦", degree: "硕士研究生", photo: "/images/members/stu-lijiaqi.jpg", research: "", email: "lijiaqi@smu.edu.cn" },
  { id: "stu-luoxiaohong", name: "罗小宏", degree: "硕士研究生", photo: "/images/members/stu-luoxiaohong.jpg", research: "", email: "luoxiaohong@smu.edu.cn" },
  { id: "stu-qianyifan", name: "钱祎璠", degree: "硕士研究生", photo: "/images/members/stu-qianyifan.jpg", research: "", email: "qianyifan@smu.edu.cn" },
  { id: "stu-xiaojinghao", name: "肖敬浩", degree: "硕士研究生", photo: "/images/members/stu-xiaojinghao.jpg", research: "", email: "xiaojinghao@smu.edu.cn" },
  { id: "stu-xiemenglan", name: "谢梦兰", degree: "硕士研究生", photo: "/images/members/stu-xiemenglan.jpg", research: "", email: "xiemenglan@smu.edu.cn" },
  { id: "stu-xuyanghao", name: "徐洋浩", degree: "硕士研究生", photo: "/images/members/stu-xuyanghao.jpg", research: "", email: "xuyanghao@smu.edu.cn" },
  { id: "stu-xuyaxuan", name: "徐雅宣", degree: "硕士研究生", photo: "/images/members/stu-xuyaxuan.jpg", research: "", email: "xuyaxuan@smu.edu.cn" },
];

export const masterStudentGroups: Member[][] = [masterRow1, masterRow2, masterRow3];

export const masterStudents: Member[] = [...masterRow1, ...masterRow2, ...masterRow3];

// 毕业成员（简洁名单，不生成详情页）
export const graduateGroups: { year: string; items: { id: string; name: string; degree?: string }[] }[] = [
  {
    year: "2022",
    items: [
      { id: "grd-lisui", name: "李穗" },
      { id: "grd-hefawei", name: "和法伟" },
      { id: "grd-zhuqisen", name: "朱其森" },
      { id: "grd-wanglei", name: "王蕾" },
      { id: "grd-fushuai", name: "符帅" },
    ],
  },
  {
    year: "2023",
    items: [
      { id: "grd-lidanyang", name: "李丹阳" },
      { id: "grd-duanzheng", name: "段政" },
      { id: "grd-zhouhao", name: "周昊" },
      { id: "grd-hongzixuan", name: "洪梓璇" },
    ],
  },
  {
    year: "2024",
    items: [
      { id: "grd-zhumanman", name: "朱曼曼" },
      { id: "grd-pengshengwang", name: "彭声旺" },
      { id: "grd-linzongyue", name: "林宗悦" },
      { id: "grd-chenshixuan", name: "陈世宣" },
      { id: "grd-wangchen", name: "汪辰" },
      { id: "grd-songyuyan", name: "宋雨烟" },
      { id: "grd-yaotianyi", name: "姚添译" },
    ],
  },
  {
    year: "2025",
    items: [
      { id: "grd-mengmingqiang", name: "蒙铭强" },
      { id: "grd-zengzhixiong", name: "曾智雄" },
      { id: "grd-liwenwei", name: "李文伟" },
      { id: "grd-zengcuidie", name: "曾翠蝶" },
      { id: "grd-zhangxiaoyu", name: "张晓瑜" },
      { id: "grd-masiyuan", name: "马思源" },
      { id: "grd-liaojingyi", name: "廖静怡" },
      { id: "grd-shengjiabing", name: "绳家兵" },
    ],
  },
  {
    year: "2026",
    items: [
      { id: "grd-guoyi", name: "郭义" },
      { id: "grd-maozerui", name: "毛泽睿" },
      { id: "grd-chenzeying", name: "陈泽滢" },
      { id: "grd-wenzihao", name: "温子皓" },
      { id: "grd-liying", name: "李颖" },
      { id: "grd-jianghaotao", name: "江浩涛" },
      { id: "grd-yuyehui", name: "余烨辉" },
      { id: "grd-zhangyujian", name: "张宇健" },
      { id: "grd-huangsiman", name: "黄锶熳" },
      { id: "grd-songhanxiao", name: "宋含笑"},
      { id: "grd-shihuaxian", name: "石华仙" },
    ],
  },
];

export const members: Member[] = [
  ...faculty.map((m) => ({ ...m, kind: "faculty" as const })),
  ...phdStudents.map((m) => ({
    ...m,
    kind: "student" as const,
    color: "var(--accent-blue)",
    note: m.photo || m.bio ? undefined : "照片与详细简历正在整理中，欢迎通过邮箱联系交流。",
  })),
  ...masterStudents.map((m) => ({
    ...m,
    kind: "student" as const,
    color: "var(--accent-blue-light)",
    note: m.photo || m.bio ? undefined : "照片与详细简历正在整理中，欢迎通过邮箱联系交流。",
  })),
];

export function getMember(id: string): Member | undefined {
  return members.find((m) => m.id === id);
}
