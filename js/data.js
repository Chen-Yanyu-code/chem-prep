// ===== 20个中考必考元素 =====
const ELEMENTS=[
{sym:"H",nm:"氢",n:1,tp:"gas",mass:"1",fam:"非金属",val:"+1",prop:"最轻气体,密度极小,可燃,淡蓝火焰",test:"点燃火焰淡蓝,产物只有水",cmp:["H₂O","HCl","H₂SO₄","NaOH"]},
{sym:"He",nm:"氦",n:2,tp:"gas",mass:"4",fam:"稀有气体",val:"0",prop:"密度小,化学性质极不活泼",test:"使燃着木条熄灭且不能燃烧",cmp:["几乎不形成化合物"]},
{sym:"C",nm:"碳",n:6,tp:"nonmetal",mass:"12",fam:"非金属",val:"+2,+4",prop:"同素异形体:金刚石/石墨/C₆₀;可燃性和还原性",test:"O₂中燃烧使石灰水变浑浊",cmp:["CO₂","CO","CH₄","CaCO₃"]},
{sym:"N",nm:"氮",n:7,tp:"gas",mass:"14",fam:"非金属",val:"-3~+5",prop:"空气中约78%,常温很不活泼",test:"使燃着木条熄灭",cmp:["N₂","NH₃","HNO₃"]},
{sym:"O",nm:"氧",n:8,tp:"gas",mass:"16",fam:"非金属",val:"-2",prop:"地壳含量最多元素,支持燃烧和呼吸",test:"使带火星木条复燃",cmp:["H₂O","CO₂","Fe₂O₃","H₂O₂"]},
{sym:"Na",nm:"钠",n:11,tp:"metal",mass:"23",fam:"金属",val:"+1",prop:"银白色,质软,密度<水,极活泼",test:"焰色黄色;与水:浮熔游响红",cmp:["NaCl","NaOH","Na₂CO₃","NaHCO₃"]},
{sym:"Mg",nm:"镁",n:12,tp:"metal",mass:"24",fam:"金属",val:"+2",prop:"银白色轻金属,空气燃烧耀眼白光",test:"燃烧发出耀眼白光",cmp:["MgO","MgCl₂","Mg(OH)₂"]},
{sym:"Al",nm:"铝",n:13,tp:"metal",mass:"27",fam:"金属",val:"+3",prop:"银白色轻金属,致密氧化膜抗腐蚀,两性",test:"致密氧化膜;可与NaOH反应",cmp:["Al₂O₃","AlCl₃","Al(OH)₃"]},
{sym:"Si",nm:"硅",n:14,tp:"nonmetal",mass:"28",fam:"非金属",val:"+4",prop:"地壳含量第二,半导体材料",test:"SiO₂溶于氢氟酸",cmp:["SiO₂","Na₂SiO₃","H₂SiO₃"]},
{sym:"P",nm:"磷",n:15,tp:"nonmetal",mass:"31",fam:"非金属",val:"+3,+5",prop:"红磷稳定制火柴;白磷自燃剧毒",test:"白磷自燃产生白烟",cmp:["P₂O₅","H₃PO₄","Ca₃(PO₄)₂"]},
{sym:"S",nm:"硫",n:16,tp:"nonmetal",mass:"32",fam:"非金属",val:"-2,+4,+6",prop:"淡黄色粉末,燃烧蓝紫火焰,SO₂刺激性",test:"燃烧蓝紫火焰",cmp:["SO₂","SO₃","H₂SO₄"]},
{sym:"Cl",nm:"氯",n:17,tp:"gas",mass:"35.5",fam:"非金属",val:"-1,+1~+7",prop:"黄绿色有毒气体,强氧化性",test:"淀粉KI试纸变蓝;AgNO₃白色沉淀",cmp:["Cl₂","HCl","NaCl","KClO₃"]},
{sym:"K",nm:"钾",n:19,tp:"metal",mass:"39",fam:"金属",val:"+1",prop:"银白色,比钠更活泼",test:"焰色紫色(透蓝钴玻璃)",cmp:["KCl","KOH","KNO₃","KMnO₄"]},
{sym:"Ca",nm:"钙",n:20,tp:"metal",mass:"40",fam:"金属",val:"+2",prop:"银白色,较活泼;CaCO₃是石灰石成分",test:"焰色砖红;石灰水变浑浊",cmp:["CaO","Ca(OH)₂","CaCO₃"]},
{sym:"Fe",nm:"铁",n:26,tp:"metal",mass:"56",fam:"金属",val:"+2,+3",prop:"银白色,纯铁软;Fe²⁺浅绿Fe³⁺黄色",test:"KSCN变血红;O₂中火星四射",cmp:["Fe₂O₃","Fe₃O₄","FeCl₃","FeSO₄"]},
{sym:"Cu",nm:"铜",n:29,tp:"metal",mass:"64",fam:"金属",val:"+1,+2",prop:"紫红色,导电性仅次于银",test:"焰色绿;Cu²⁺蓝色",cmp:["CuO","CuSO₄","Cu(OH)₂"]},
{sym:"Zn",nm:"锌",n:30,tp:"metal",mass:"65",fam:"金属",val:"+2",prop:"蓝白色,与稀H₂SO₄制H₂",test:"与稀硫酸放出H₂",cmp:["ZnO","ZnCl₂","ZnSO₄","Zn(OH)₂"]},
{sym:"Ag",nm:"银",n:47,tp:"metal",mass:"108",fam:"金属",val:"+1",prop:"银白色,导电最佳,不与HCl/稀H₂SO₄反应",test:"Cl⁻→白色AgCl沉淀",cmp:["AgNO₃","AgCl","AgBr"]},
{sym:"I",nm:"碘",n:53,tp:"nonmetal",mass:"127",fam:"非金属",val:"-1,+1~+7",prop:"紫黑色固体,升华,遇淀粉变蓝",test:"淀粉试纸变蓝;AgI黄色沉淀",cmp:["I₂","KI","AgI"]},
{sym:"Ba",nm:"钡",n:56,tp:"metal",mass:"137",fam:"金属",val:"+2",prop:"银白色,Ba²⁺有毒,BaSO₄钡餐",test:"焰色黄绿;BaSO₄白色沉淀不溶于稀HNO₃",cmp:["BaSO₄","BaCl₂","BaCO₃"]}
];

// ===== 侦探题 =====
const DET={
easy:[
{sc:"🔥",q:"某银白色金属在空气中燃烧发出耀眼白光生成白色固体，该金属是？",o:["铁","镁","铜","钠"],a:1,e:"镁燃烧发出耀眼白光生成白色MgO，是中考高频考点。"},
{sc:"🔵",q:"一种气体通入澄清石灰水变浑浊，该气体是？",o:["O₂","H₂","CO₂","N₂"],a:2,e:"CO₂+Ca(OH)₂→CaCO₃↓+H₂O，白色沉淀使石灰水变浑浊。"},
{sc:"🧪",q:"溶液滴加酚酞变红，说明溶液呈？",o:["酸性","碱性","中性","无法判断"],a:1,e:"酚酞在pH>8.2时变红，是检验碱性溶液的常用指示剂。"},
{sc:"💨",q:"点燃气体火焰淡蓝色，干冷烧杯内壁有水雾，该气体是？",o:["CO₂","O₂","H₂","N₂"],a:2,e:"H₂燃烧产物只有水，干冷烧杯有水雾，火焰淡蓝色。"},
{sc:"🧲",q:"铁钉放入硫酸铜溶液，现象是？",o:["表面红色固体析出，蓝色变浅绿","银白色固体析出","无现象","铁钉溶解有气泡"],a:0,e:"Fe+CuSO₄→FeSO₄+Cu，Cu红色析出，Fe²⁺浅绿色。"}
],
medium:[
{sc:"🔬",q:"白色粉末可能含Na₂CO₃、CaCO₃、NaOH、CaO。加水后产生白色沉淀，上层清液变红。一定含有？",o:["CaCO₃","Na₂CO₃和CaO","CaO","NaOH"],a:1,e:"CaO+H₂O→Ca(OH)₂放热，Ca(OH)₂+Na₂CO₃→CaCO₃↓，碱使酚酞变红。"},
{sc:"🧪",q:"检验Cl⁻应使用？",o:["AgNO₃溶液","AgNO₃+稀HNO₃","BaCl₂溶液","Ba(NO₃)₂+稀HNO₃"],a:1,e:"AgCl不溶于稀HNO₃，加稀HNO₃排除CO₃²⁻等干扰。"},
{sc:"🔥",q:"下列实验能成功的是？",o:["燃着木条鉴别N₂和CO₂","闻气味鉴别H₂和CO","带火星木条鉴别O₂和空气","酚酞鉴别蒸馏水和食盐水"],a:2,e:"O₂使带火星木条复燃，空气中不变。其余选项均无法鉴别。"},
{sc:"⚗️",q:"除去CO₂中少量CO的方法？",o:["通过灼热CuO","通入石灰水","点燃","通过NaOH溶液"],a:0,e:"CO+CuO→Cu+CO₂(加热)，将CO转为CO₂。B和D会吸收主体CO₂。"},
{sc:"🧫",q:"用pH试纸测定pH的正确操作？",o:["直接浸入溶液","润湿后蘸取滴在试纸上","玻璃棒蘸取滴在试纸上比色","可精确测pH=7.25"],a:2,e:"不能润湿、不能浸入、只能读整数。"}
],
hard:[
{sc:"🧪",q:"固体可能含CaCO₃、Na₂SO₄、BaCl₂、KOH。加水有白色沉淀；过滤后加足量稀盐酸，沉淀部分溶解有无色气体。一定含有？",o:["CaCO₃和BaCl₂","Na₂SO₄和BaCl₂","CaCO₃、Na₂SO₄和BaCl₂","KOH和CaCO₃"],a:2,e:"BaSO₄不溶于酸(来自Na₂SO₄+BaCl₂)，CaCO₃溶于酸产CO₂，部分溶解说明两者都有。"},
{sc:"⚡",q:"溶液含AgNO₃、Cu(NO₃)₂、Fe(NO₃)₂、Zn(NO₃)₂。加铁粉后滤渣加盐酸有气泡。正确的是？",o:["滤渣含Ag、Cu、Fe","滤液含Fe²⁺、Zn²⁺","滤渣不含Ag","滤液含Cu²⁺"],a:1,e:"金属活动性Zn>Fe>(H)>Cu>Ag。Fe过量则Ag、Cu全被置换，滤液含Fe²⁺、Zn²⁺。"},
{sc:"🔬",q:"检验NaOH中是否含Na₂CO₃可行的方法？",o:["加酚酞","加Ca(OH)₂后加酚酞","加过量CaCl₂后加酚酞","无法检验"],a:2,e:"CaCl₂过量：有Na₂CO₃则白色沉淀，溶液仍使酚酞变红。Ca(OH)₂引入OH⁻干扰。"},
{sc:"🧫",q:"50mL 6% H₂O₂(ρ≈1.03)制O₂最多约？(H=1,O=16)",o:["约1.2g","约2.4g","约4.8g","约0.6g"],a:0,e:"m(H₂O₂)=50×1.03×6%≈3.09g；2H₂O₂→2H₂O+O₂；m(O₂)≈1.44g。"},
{sc:"⚗️",q:"下列制气方法正确的是？",o:["排水法收集CO₂","向下排空气法收集CO₂","排水法收集O₂(KMnO₄)","长颈漏斗下端未入液面制H₂"],a:2,e:"O₂不易溶于水可用排水法。CO₂溶于水应用向上排空气法。长颈漏斗需液封。"}
]};

// ===== 未知物质鉴别 =====
// 每道题是一个物质，定义对各种操作的反应
const UNKNOWNS = [
  {
    name: "NaOH（氢氧化钠）",
    formula: "NaOH",
    appearance: "白色固体，颗粒状，有潮解现象（表面有水珠）",
    icon: "⬜",
    reactions: {
      "加热": "固体不分解，加热后熔化。加热水溶液无明显变化。",
      "加入稀盐酸": "无明显现象（生成NaCl和H₂O，两者均无色）。",
      "加入稀硫酸": "无明显现象（生成Na₂SO₄和H₂O，均无色）。",
      "加入石蕊溶液": "溶液变蓝色。说明溶液呈碱性。",
      "加入酚酞溶液": "溶液变红色。说明溶液呈碱性。",
      "加入AgNO₃溶液": "无明显沉淀（Na⁺和Ag⁺不反应；OH⁻和Ag⁺反应生成棕褐色Ag₂O沉淀，但量少不明显）。",
      "加入BaCl₂溶液": "无明显现象（Na⁺、OH⁻与Ba²⁺、Cl⁻不反应）。",
      "加入CuSO₄溶液": "生成蓝色沉淀。反应：2NaOH + CuSO₄ → Cu(OH)₂↓(蓝色) + Na₂SO₄。",
      "加入FeCl₃溶液": "生成红褐色沉淀。反应：3NaOH + FeCl₃ → Fe(OH)₃↓(红褐色) + 3NaCl。",
      "加入CO₂气体": "溶液变浑浊（若足量CO₂则重新溶解）。反应：2NaOH + CO₂ → Na₂CO₃ + H₂O。",
      "加入Na₂CO₃溶液": "无明显现象（两者不反应）。",
      "加水溶解后测pH": "pH > 7，强碱性，pH约12~14。",
      "观察外观": "白色固体，颗粒状或片状。暴露在空气中容易潮解（表面变湿），这是NaOH的特征之一。"
    },
    hints: ["溶液使酚酞变红", "加CuSO₄出现蓝色沉淀", "加FeCl₃出现红褐色沉淀"],
    explanation: "NaOH是强碱，溶液呈强碱性（使酚酞变红）。与CuSO₄、FeCl₃等盐溶液发生复分解反应生成有色沉淀是重要的鉴别方法。NaOH容易潮解也是其特征性质。"
  },
  {
    name: "Na₂CO₃（碳酸钠）",
    formula: "Na₂CO₃",
    appearance: "白色粉末（工业品为颗粒状），俗称纯碱或苏打",
    icon: "⬜",
    reactions: {
      "加热": "碳酸钠在高温下较稳定，一般加热不分解（区别于NaHCO₃）。",
      "加入稀盐酸": "产生大量气泡，气体能使澄清石灰水变浑浊。反应：Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂↑。",
      "加入稀硫酸": "产生大量气泡，气体能使澄清石灰水变浑浊。反应：Na₂CO₃ + H₂SO₄ → Na₂SO₄ + H₂O + CO₂↑。",
      "加入石蕊溶液": "溶液变蓝色。Na₂CO₃溶液呈碱性（水解）。",
      "加入酚酞溶液": "溶液变红色。Na₂CO₃溶液呈碱性。",
      "加入AgNO₃溶液": "生成白色沉淀（Ag₂CO₃）。反应：Na₂CO₃ + 2AgNO₃ → Ag₂CO₃↓(白色) + 2NaNO₃。加稀HNO₃沉淀溶解并产生CO₂气泡（区别于AgCl不溶于稀HNO₃）。",
      "加入BaCl₂溶液": "生成白色沉淀（BaCO₃）。反应：Na₂CO₃ + BaCl₂ → BaCO₃↓(白色) + 2NaCl。加入稀盐酸沉淀溶解并产生气泡（区别于BaSO₄不溶于稀盐酸）。",
      "加入CuSO₄溶液": "生成蓝绿色沉淀（碱式碳酸铜）。Na₂CO₃+CuSO₄→生成沉淀。",
      "加入FeCl₃溶液": "生成红褐色沉淀（碳酸铁水解生成Fe(OH)₃）。",
      "加入CO₂气体": "与CO₂过量反应生成NaHCO₃，现象不明显。",
      "加入Na₂CO₃溶液": "——（无法与自身反应）",
      "加水溶解后测pH": "pH > 7，溶液呈碱性（约pH 11）。",
      "观察外观": "白色粉末状固体，无臭味，易溶于水。"
    },
    hints: ["加稀盐酸产生气泡，气体使石灰水变浑浊", "加BaCl₂出现白色沉淀且能被稀盐酸溶解", "溶液呈碱性（酚酞变红）"],
    explanation: "Na₂CO₃的核心特征：① CO₃²⁻遇酸产生CO₂气泡；② CO₃²⁻与Ba²⁺、Ag⁺等生成沉淀但沉淀能被稀酸溶解；③ 水溶液呈碱性。与NaHCO₃的区别：Na₂CO₃加热不分解，NaHCO₃加热分解。"
  },
  {
    name: "NaHCO₃（碳酸氢钠）",
    formula: "NaHCO₃",
    appearance: "白色细小晶体，俗称小苏打",
    icon: "⬜",
    reactions: {
      "加热": "加热分解，产生CO₂和H₂O。反应：2NaHCO₃ →(加热) Na₂CO₃ + H₂O + CO₂↑。这是Na₂CO₃与NaHCO₃的重要区别！",
      "加入稀盐酸": "立即产生大量气泡（比Na₂CO₃反应更剧烈）。气体使澄清石灰水变浑浊。反应：NaHCO₃ + HCl → NaCl + H₂O + CO₂↑。",
      "加入稀硫酸": "立即产生大量气泡。反应：2NaHCO₃ + H₂SO₄ → Na₂SO₄ + 2H₂O + 2CO₂↑。",
      "加入石蕊溶液": "溶液变蓝色（碱性，但碱性弱于Na₂CO₃）。",
      "加入酚酞溶液": "溶液变浅红色（碱性较弱）。",
      "加入AgNO₃溶液": "生成淡黄色沉淀（AgHCO₃，不稳定，很快分解为Ag₂CO₃白色沉淀）。",
      "加入BaCl₂溶液": "无沉淀（NaHCO₃与BaCl₂不反应，这是与Na₂CO₃的区别！）。",
      "加入CuSO₄溶液": "产生蓝色沉淀，同时有气泡。",
      "加入FeCl₃溶液": "产生红褐色沉淀并有气泡（CO₂）。",
      "加入CO₂气体": "不反应（HCO₃⁻不再与CO₂反应）。",
      "加入Na₂CO₃溶液": "无明显现象（不反应）。",
      "加水溶解后测pH": "pH约8~9，弱碱性。",
      "观察外观": "白色细小晶体，无臭，味略有碱味，溶于水。"
    },
    hints: ["加热分解（区别Na₂CO₃）", "加稀盐酸立即产生大量气泡", "加BaCl₂无沉淀（区别Na₂CO₃）"],
    explanation: "NaHCO₃最重要的特征：① 加热分解（Na₂CO₃不分解）是最关键鉴别点；② 与BaCl₂不反应（Na₂CO₃与BaCl₂生成BaCO₃白色沉淀）；③ 与酸反应产生CO₂。"
  },
  {
    name: "CuSO₄溶液（硫酸铜）",
    formula: "CuSO₄",
    appearance: "蓝色溶液（无水CuSO₄为白色粉末，遇水变蓝）",
    icon: "🔵",
    reactions: {
      "加热": "蒸干后得到蓝色硫酸铜晶体（CuSO₄·5H₂O），再强热则变为白色无水CuSO₄，高温分解生成CuO、SO₃。",
      "加入稀盐酸": "无明显现象（CuSO₄与HCl不反应，溶液仍呈蓝色）。",
      "加入稀硫酸": "无明显现象。",
      "加入石蕊溶液": "溶液变红（CuSO₄溶液水解，呈酸性）。",
      "加入酚酞溶液": "无变色（溶液呈酸性，酚酞无色）。",
      "加入AgNO₃溶液": "无明显现象（Cu²⁺与Ag⁺不反应；SO₄²⁻与Ag⁺的反应极微弱）。",
      "加入BaCl₂溶液": "生成白色沉淀（BaSO₄），不溶于稀硝酸。反应：CuSO₄ + BaCl₂ → BaSO₄↓(白色) + CuCl₂。",
      "加入NaOH溶液": "生成蓝色沉淀（Cu(OH)₂）。反应：CuSO₄ + 2NaOH → Cu(OH)₂↓(蓝色) + Na₂SO₄。加热蓝色沉淀变黑（CuO）。",
      "加入铁粉": "蓝色溶液褪色变为浅绿色，铁粉表面出现红色固体（铜）。反应：Fe + CuSO₄ → FeSO₄ + Cu。",
      "加入锌片": "锌片表面出现红色固体（铜），溶液蓝色褪去变为无色（ZnSO₄）。反应：Zn + CuSO₄ → ZnSO₄ + Cu。",
      "加入Na₂CO₃溶液": "生成蓝绿色沉淀（碱式碳酸铜），有气泡。",
      "加水溶解后测pH": "pH < 7，溶液呈弱酸性（Cu²⁺水解）。",
      "观察外观": "蓝色透明溶液（无水CuSO₄为白色粉末，极易与水反应变蓝，可用于检验水分）。"
    },
    hints: ["蓝色溶液是最明显特征", "加NaOH生成蓝色沉淀", "加铁粉溶液蓝色褪去，铁粉表面出现红色铜"],
    explanation: "CuSO₄溶液呈蓝色是最典型特征（Cu²⁺蓝色）。常见反应：① 与NaOH生成蓝色Cu(OH)₂沉淀；② 与铁发生置换反应；③ 与BaCl₂生成BaSO₄白色沉淀。无水CuSO₄检验水的反应也是中考考点。"
  },
  {
    name: "稀盐酸（HCl）",
    formula: "HCl",
    appearance: "无色溶液，挥发性（浓盐酸有刺激性气味，稀盐酸气味较弱）",
    icon: "💧",
    reactions: {
      "加热": "加热会挥发出HCl气体（有刺激性气味），液体浓度降低。",
      "加入石蕊溶液": "溶液变红色。酸性溶液使石蕊变红。",
      "加入酚酞溶液": "无变色（酸性溶液，酚酞无色）。",
      "加入NaOH溶液": "无明显现象（生成NaCl和H₂O，但可用指示剂辅助判断）。中和反应放热。",
      "加入Na₂CO₃溶液": "产生大量气泡（CO₂），反应：2HCl + Na₂CO₃ → 2NaCl + H₂O + CO₂↑。",
      "加入NaHCO₃": "立即产生大量气泡。反应：HCl + NaHCO₃ → NaCl + H₂O + CO₂↑。",
      "加入AgNO₃溶液": "产生白色沉淀（AgCl），不溶于稀硝酸！这是鉴别Cl⁻的标准方法。反应：HCl + AgNO₃ → AgCl↓(白色) + HNO₃。",
      "加入BaCl₂溶液": "无明显现象（Cl⁻与Ba²⁺不反应）。",
      "加入铁片": "铁片溶解，产生气泡（H₂），溶液变浅绿色（FeCl₂）。反应：Fe + 2HCl → FeCl₂ + H₂↑。",
      "加入锌片": "锌片溶解，产生大量气泡（H₂）。反应：Zn + 2HCl → ZnCl₂ + H₂↑。",
      "加入铜片": "无明显现象（Cu不与稀盐酸反应）。",
      "加入大理石": "大理石溶解，产生气泡（CO₂）。反应：CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑。",
      "加水溶解后测pH": "pH < 7，酸性，稀盐酸pH约2~4。",
      "观察外观": "无色透明溶液，浓盐酸在空气中有白雾（HCl挥发与水蒸气结合）。"
    },
    hints: ["石蕊变红（酸性）", "加AgNO₃产生不溶于稀硝酸的白色沉淀", "与活泼金属（Zn、Fe）反应产生H₂气泡"],
    explanation: "稀盐酸（HCl）是强酸，核心特征：① 石蕊变红；② 与AgNO₃生成不溶于稀HNO₃的AgCl白色沉淀（是鉴别Cl⁻的金标准）；③ 与活泼金属反应放H₂；④ 与碳酸盐反应产CO₂。"
  },
  {
    name: "Fe₂O₃（氧化铁）",
    formula: "Fe₂O₃",
    appearance: "红棕色粉末（铁锈的主要成分）",
    icon: "🟤",
    reactions: {
      "加热": "高温下（1400℃以上）分解，通常实验条件下不分解。",
      "加入稀盐酸": "红棕色粉末溶解，溶液变黄色（Fe³⁺）。反应：Fe₂O₃ + 6HCl → 2FeCl₃ + 3H₂O。",
      "加入稀硫酸": "红棕色粉末溶解，溶液变黄色。反应：Fe₂O₃ + 3H₂SO₄ → Fe₂(SO₄)₃ + 3H₂O。",
      "加入石蕊溶液": "不溶于石蕊，加入稀酸溶解后变红。",
      "加入酚酞溶液": "不溶于酚酞，加入稀酸溶解后无变色（酸性）。",
      "加入NaOH溶液": "不反应（Fe₂O₃是碱性氧化物，不溶于碱）。",
      "加入AgNO₃溶液": "不反应（固体不溶解）。",
      "加入BaCl₂溶液": "不反应。",
      "加入CO（一氧化碳，加热）": "被CO还原，高温下：Fe₂O₃ + 3CO →(高温) 2Fe + 3CO₂（气体导入石灰水变浑浊）。",
      "加入H₂（加热）": "被H₂还原：Fe₂O₃ + 3H₂ →(加热) 2Fe + 3H₂O。",
      "加入铝粉（铝热反应）": "铝热反应（需点燃）：Fe₂O₃ + 2Al → Al₂O₃ + 2Fe（放出大量热）。",
      "加入KSCN溶液": "Fe₂O₃溶于稀酸后得到Fe³⁺溶液，加KSCN变血红色。",
      "加水溶解后测pH": "几乎不溶于水，pH约为7（中性）。",
      "观察外观": "红棕色粉末，这是最明显的外观特征（铁锈颜色）。"
    },
    hints: ["红棕色粉末（最明显特征）", "溶于稀盐酸得到黄色溶液（Fe³⁺）", "不溶于NaOH（碱性氧化物）"],
    explanation: "Fe₂O₃是碱性氧化物，红棕色是最重要特征。溶于酸得到Fe³⁺（黄色），KSCN检验变血红色。在高温下能被CO、H₂、Al等还原剂还原为铁，是工业炼铁的原料。"
  },
  {
    name: "Ca(OH)₂溶液（氢氧化钙）",
    formula: "Ca(OH)₂",
    appearance: "白色固体，微溶于水，水溶液（石灰水）为无色澄清溶液",
    icon: "💧",
    reactions: {
      "加热": "加热石灰水，溶解度降低，析出白色固体（Ca(OH)₂，注意：加热碱性减弱）。",
      "加入稀盐酸": "无明显现象（生成CaCl₂和H₂O，可用指示剂判断）。",
      "加入稀硫酸": "生成白色沉淀（CaSO₄，微溶）。反应：Ca(OH)₂ + H₂SO₄ → CaSO₄↓(白色) + 2H₂O。",
      "加入石蕊溶液": "溶液变蓝色（碱性）。",
      "加入酚酞溶液": "溶液变红色（碱性）。",
      "加入AgNO₃溶液": "无明显现象（OH⁻与Ag⁺反应生成棕色Ag₂O，量少时不明显；Ca²⁺与Ag⁺不反应）。",
      "加入BaCl₂溶液": "无明显现象（Ca(OH)₂与BaCl₂不反应）。",
      "加入Na₂CO₃溶液": "生成白色沉淀（CaCO₃）。反应：Ca(OH)₂ + Na₂CO₃ → CaCO₃↓(白色) + 2NaOH。",
      "通入CO₂气体": "溶液变浑浊（CaCO₃白色沉淀）。继续通入过量CO₂则沉淀溶解变清（CaCO₃+H₂O+CO₂→Ca(HCO₃)₂）。这是检验CO₂的标准方法！",
      "通入HCl气体": "溶液变浑浊（HCl过量后Ca(OH)₂中和形成CaCl₂溶液，若先前有Ca²⁺则沉淀）。",
      "加入FeCl₃溶液": "生成红褐色沉淀（Fe(OH)₃）。",
      "加入CuSO₄溶液": "生成蓝色沉淀（Cu(OH)₂）并有白色CaSO₄沉淀。",
      "加水溶解后测pH": "pH > 7，碱性（溶解度小，pH约11~12）。",
      "观察外观": "固体为白色粉末，石灰水（溶液）为无色澄清液体，与NaCl溶液外观难以区分。"
    },
    hints: ["通CO₂变浑浊（石灰水检验CO₂的经典反应）", "加Na₂CO₃产生白色CaCO₃沉淀", "溶液呈碱性（酚酞变红）"],
    explanation: "Ca(OH)₂（熟石灰/消石灰）最重要特征：通入CO₂溶液变浑浊（这是检验CO₂的标准方法）。与Na₂CO₃反应生成CaCO₃白色沉淀。溶液呈碱性（酚酞变红）。注意：Ca(OH)₂溶解度随温度升高而减小（与大多数固体相反）。"
  },
  {
    name: "H₂O₂溶液（过氧化氢）",
    formula: "H₂O₂",
    appearance: "无色液体，与水外观相同（工业品有刺激性气味）",
    icon: "💧",
    reactions: {
      "加热": "加热分解（但较慢）。加热后产生气泡（O₂），气体使带火星木条复燃。",
      "加入MnO₂（二氧化锰）": "立即产生大量气泡！MnO₂作催化剂，气体使带火星木条复燃。反应：2H₂O₂ →(MnO₂) 2H₂O + O₂↑。这是实验室制O₂的常用方法！",
      "加入Fe（铁粉）": "铁粉加速分解（Fe²⁺也是催化剂），产生气泡。",
      "加入血液/肝脏组织": "产生大量气泡（生物体内过氧化氢酶分解H₂O₂）。",
      "加入稀盐酸": "无明显反应。",
      "加入石蕊溶液": "稀H₂O₂呈弱酸性，使石蕊轻微变红。",
      "加入酚酞溶液": "无变色（弱酸性）。",
      "加入AgNO₃溶液": "慢慢产生棕黑色Ag沉淀（H₂O₂氧化Ag⁺）。",
      "加入KMnO₄溶液": "紫色褪去（H₂O₂还原KMnO₄）。",
      "加入NaOH溶液": "无明显现象，碱性条件下分解加速。",
      "观察外观": "无色透明液体，外观与水完全相同，无法仅凭外观判断。高浓度H₂O₂有刺激性气味。",
      "加水溶解后测pH": "pH略小于7，呈弱酸性。"
    },
    hints: ["加MnO₂立即产生大量气泡（O₂），气体使带火星木条复燃", "与水外观相同但加催化剂分解", "带火星木条检验可确认为O₂"],
    explanation: "H₂O₂是实验室制O₂的常用药品。最重要特征：加MnO₂（催化剂）立即分解产生O₂（带火星木条复燃）。H₂O₂本身既有氧化性又有还原性，工业上用于漂白剂、消毒剂。"
  },
  {
    name: "KMnO₄（高锰酸钾）",
    formula: "KMnO₄",
    appearance: "紫黑色固体（晶体），溶液呈紫色",
    icon: "🟣",
    reactions: {
      "加热": "加热分解，产生O₂（带火星木条复燃），固体变黑（MnO₂和K₂MnO₄）。反应：2KMnO₄ →(加热) K₂MnO₄ + MnO₂ + O₂↑。这是实验室加热法制O₂！",
      "加入稀盐酸": "紫色溶液褪色（KMnO₄强氧化性，氧化Cl⁻为Cl₂）。",
      "加入稀硫酸": "溶液紫色在稀酸中更稳定，但浓H₂SO₄下紫色褪去。",
      "加入石蕊溶液": "溶液呈酸性（K₂MnO₄水解），但KMnO₄氧化性强，会使石蕊褪色。",
      "加入酚酞溶液": "无变色（酸性溶液）。",
      "加入H₂O₂溶液": "紫色褪去（被H₂O₂还原）。",
      "加入Na₂SO₃溶液": "紫色褪去（被还原）。",
      "加入乙醇（酒精）": "紫色褪去，溶液变橙黄色（KMnO₄氧化乙醇）。",
      "加入FeSO₄溶液": "紫色褪去（Fe²⁺被氧化为Fe³⁺）。",
      "加水溶解后测pH": "溶液呈弱酸性至中性（pH约6~7）。",
      "观察外观": "紫黑色固体，溶于水后溶液呈鲜艳紫色，是非常明显的颜色特征！"
    },
    hints: ["紫黑色固体/紫色溶液（最明显特征）", "加热分解产生O₂，带火星木条复燃", "具有强氧化性，能使多种物质褪色"],
    explanation: "KMnO₄（高锰酸钾）最明显特征是紫黑色（溶液紫色）。实验室用加热KMnO₄制O₂是重要实验。KMnO₄有强氧化性，能将许多还原性物质氧化（溶液褪色）。注意棉花团不能沾KMnO₄（防止堵管并发生危险）。"
  },
  {
    name: "Na₂SO₄溶液（硫酸钠）",
    formula: "Na₂SO₄",
    appearance: "无色溶液（固体为白色晶体）",
    icon: "💧",
    reactions: {
      "加热": "蒸干后得到白色固体（Na₂SO₄·10H₂O晶体或无水Na₂SO₄）。",
      "加入稀盐酸": "无明显现象（Na₂SO₄与HCl不反应）。",
      "加入稀硫酸": "无明显现象（Na₂SO₄与稀H₂SO₄不反应）。",
      "加入石蕊溶液": "无明显变色（Na₂SO₄溶液呈中性）。",
      "加入酚酞溶液": "无变色（中性）。",
      "加入AgNO₃溶液": "无白色AgCl沉淀（无Cl⁻）。但可能生成淡黄色Ag₂SO₄（微溶，现象不明显）。",
      "加入BaCl₂溶液": "立即产生白色沉淀（BaSO₄），不溶于稀硝酸！反应：Na₂SO₄ + BaCl₂ → BaSO₄↓(白色，不溶于酸) + 2NaCl。这是检验SO₄²⁻的标准方法！",
      "加入NaOH溶液": "无明显现象（Na₂SO₄与NaOH不反应）。",
      "加入BaCl₂+稀HNO₃": "白色沉淀不溶于稀硝酸（确认为BaSO₄，确认SO₄²⁻存在）。",
      "加入CaCl₂溶液": "无明显现象（CaSO₄微溶，可能有少量白色浑浊）。",
      "加水溶解后测pH": "pH约为7，溶液呈中性。",
      "观察外观": "无色透明溶液，外观与水、NaCl溶液相似，无明显气味。"
    },
    hints: ["加BaCl₂立即产生白色沉淀，且不溶于稀硝酸", "溶液呈中性（石蕊不变色）", "加AgNO₃无白色沉淀（无Cl⁻）"],
    explanation: "Na₂SO₄（硫酸钠）的核心特征是含SO₄²⁻离子。检验SO₄²⁻的标准步骤：先加稀HNO₃酸化（排除CO₃²⁻干扰），再加BaCl₂溶液，若有白色沉淀且不溶于稀HNO₃则确认含SO₄²⁻。"
  }
];

// ===== 化学推断题 =====
// 中考化学高频推断题：给出转化关系，推断物质
const INFERENCE = [
  {
    level: "easy",
    desc: "A、B、C是初中常见物质。A是空气中含量最多的气体，B是能使带火星木条复燃的气体，C是B的一种常见制取原料（液态，双氧水）。",
    relations: [
      "空气 --分离→ A（含量最多的气体）",
      "空气 --分离→ B（使带火星木条复燃）",
      "C --MnO₂催化→ B + 水"
    ],
    question: "A、B、C分别是什么？",
    blanks: ["A = ?", "B = ?", "C = ?"],
    answers: ["N₂（氮气）", "O₂（氧气）", "H₂O₂（过氧化氢）"],
    analysis: "A是空气中含量最多的气体→N₂（约78%）。B能使带火星木条复燃→O₂（氧气的特征检验）。C分解生成O₂和水，有MnO₂催化→H₂O₂（过氧化氢），这是实验室常温制O₂的方法。",
    equation: "2H₂O₂ →(MnO₂) 2H₂O + O₂↑"
  },
  {
    level: "easy",
    desc: "A是黑色固体，B是红色金属，C是蓝色溶液，D是浅绿色溶液。A放入C中，发生置换反应生成B和D。",
    relations: [
      "A（黑色固体）+ C（蓝色溶液） → B（红色固体） + D（浅绿色溶液）"
    ],
    question: "A、B、C、D分别是什么？写出该反应方程式。",
    blanks: ["A = ?", "B = ?", "C = ?", "D = ?"],
    answers: ["Fe（铁）", "Cu（铜）", "CuSO₄溶液（硫酸铜）", "FeSO₄溶液（硫酸亚铁）"],
    analysis: "蓝色溶液→CuSO₄（Cu²⁺蓝色）。红色固体→Cu（铜）。浅绿色溶液→FeSO₄（Fe²⁺浅绿色）。A是铁（Fe），活动性比Cu强，置换出Cu。",
    equation: "Fe + CuSO₄ → FeSO₄ + Cu"
  },
  {
    level: "easy",
    desc: "A是石灰石的主要成分，B是生石灰，C是熟石灰（氢氧化钙），D是气体能使澄清石灰水变浑浊。A → B（高温），B + H₂O → C，C + D → A（白色沉淀）。",
    relations: [
      "A --高温煅烧→ B + D",
      "B + H₂O → C（放热）",
      "C + D → A↓ + H₂O"
    ],
    question: "A、B、C、D分别是什么？",
    blanks: ["A = ?", "B = ?", "C = ?", "D = ?"],
    answers: ["CaCO₃（碳酸钙）", "CaO（氧化钙）", "Ca(OH)₂（氢氧化钙）", "CO₂（二氧化碳）"],
    analysis: "经典钙循环：CaCO₃高温分解→CaO+CO₂；CaO+H₂O→Ca(OH)₂（放大量热）；Ca(OH)₂+CO₂→CaCO₃↓+H₂O（检验CO₂的方法）。四种物质相互转化是中考必考链！",
    equation: "CaCO₃ →(高温) CaO + CO₂↑；CaO + H₂O → Ca(OH)₂；Ca(OH)₂ + CO₂ → CaCO₃↓ + H₂O"
  },
  {
    level: "medium",
    desc: "A~E是初中常见物质。A是红棕色固体，B是A溶于稀盐酸的产物（黄色溶液），C是向B中加入足量铁粉后滤液中的溶质，D是C与NaOH反应的沉淀，E是D在空气中久置变色的产物。",
    relations: [
      "A（红棕色固体）+ 稀HCl → B（黄色溶液）",
      "B + 足量Fe → C（溶液）+ Cu（错：应为Fe置换Cu²⁺，但本题是Fe³⁺转变）",
      "B + 足量Fe → C + Fe本身消耗",
      "C + NaOH → D（沉淀）",
      "D --空气中久置→ E（红褐色）"
    ],
    question: "A、B、C、D、E分别是什么？",
    blanks: ["A = ?", "B = ?", "C = ?", "D = ?", "E = ?"],
    answers: ["Fe₂O₃（氧化铁）", "FeCl₃溶液（氯化铁）", "FeCl₂溶液（氯化亚铁）", "Fe(OH)₂（氢氧化亚铁，白色）", "Fe(OH)₃（氢氧化铁，红褐色）"],
    analysis: "A红棕色固体→Fe₂O₃。Fe₂O₃+6HCl→2FeCl₃+3H₂O，得黄色FeCl₃溶液(B)。足量Fe使Fe³⁺全部→Fe²⁺（Fe+2Fe³⁺→3Fe²⁺），得FeCl₂溶液(C)。FeCl₂+2NaOH→Fe(OH)₂↓(白色，D)。Fe(OH)₂在空气中氧化：4Fe(OH)₂+O₂+2H₂O→4Fe(OH)₃(红褐色，E)。",
    equation: "Fe₂O₃+6HCl→2FeCl₃+3H₂O；Fe+2FeCl₃→3FeCl₂；FeCl₂+2NaOH→Fe(OH)₂↓+2NaCl；4Fe(OH)₂+O₂+2H₂O→4Fe(OH)₃"
  },
  {
    level: "medium",
    desc: "A~D是四种初中常见物质。A是一种白色固体，溶于水放大量热；A+H₂O→B（强碱溶液）；B+CO₂→C（白色沉淀）；C+足量CO₂→D（可溶性盐）；B+D→C↓。",
    relations: [
      "A + H₂O → B（强碱，溶液变热）",
      "B + CO₂ → C↓（白色沉淀）",
      "C + 足量CO₂ + H₂O → D（溶液）",
      "B + D → C↓ + H₂O"
    ],
    question: "A、B、C、D分别是什么？",
    blanks: ["A = ?", "B = ?", "C = ?", "D = ?"],
    answers: ["CaO（氧化钙）", "Ca(OH)₂溶液（石灰水）", "CaCO₃（碳酸钙）", "Ca(HCO₃)₂（碳酸氢钙）"],
    analysis: "A溶于水放热且生成强碱→CaO（生石灰）。B是Ca(OH)₂（熟石灰）。Ca(OH)₂+CO₂→CaCO₃↓+H₂O（C是CaCO₃）。CaCO₃过量CO₂→Ca(HCO₃)₂溶液（D）。Ca(OH)₂+Ca(HCO₃)₂→2CaCO₃↓+2H₂O（B+D→C↓，验证）。",
    equation: "CaO+H₂O→Ca(OH)₂；Ca(OH)₂+CO₂→CaCO₃↓+H₂O；CaCO₃+CO₂+H₂O→Ca(HCO₃)₂"
  },
  {
    level: "medium",
    desc: "A~E是初中常见物质。A是最常见的单质（金属）；A+稀H₂SO₄→B+H₂↑；A+CuSO₄→C+Cu；B+NaOH→D↓+Na₂SO₄；D加热→E+H₂O；E是黑色固体，能溶于稀盐酸。",
    relations: [
      "A（常见金属）+ 稀H₂SO₄ → B + H₂↑",
      "A + CuSO₄ → C + Cu（置换）",
      "B + NaOH → D↓（白色，遇空气变色）",
      "D --加热→ E（黑色）+ H₂O"
    ],
    question: "A、B、C、D、E分别是什么？",
    blanks: ["A = ?", "B = ?", "C = ?", "D = ?", "E = ?"],
    answers: ["Fe（铁）", "FeSO₄（硫酸亚铁）", "FeSO₄（硫酸亚铁，与B相同）", "Fe(OH)₂（氢氧化亚铁）", "FeO（氧化亚铁）"],
    analysis: "A与稀H₂SO₄反应→Fe+H₂SO₄→FeSO₄+H₂↑，A是Fe，B是FeSO₄。A+CuSO₄→FeSO₄+Cu，C也是FeSO₄。B+2NaOH→Fe(OH)₂↓（白色，但很快被氧化变灰绿再红褐）。Fe(OH)₂加热→FeO+H₂O（E是FeO，黑色，溶于稀盐酸）。",
    equation: "Fe+H₂SO₄→FeSO₄+H₂↑；Fe+CuSO₄→FeSO₄+Cu；FeSO₄+2NaOH→Fe(OH)₂↓+Na₂SO₄；Fe(OH)₂→FeO+H₂O"
  },
  {
    level: "hard",
    desc: "A~F是初中常见物质（其中A、D是单质，B、C、E、F是化合物）。A是最常见的气体单质，B是温室气体；A+B→C（在光照或高温下）；C+H₂O→D+B（D是绿色植物光合作用的产物，也是生命活动的能量来源）；D+足量O₂→B+H₂O；B+NaOH→E；E+HCl→F+B↑+H₂O。",
    relations: [
      "A + B --光→ C（光合作用）",
      "C + H₂O → D（葡萄糖）+ B",
      "D + O₂ → B + H₂O（呼吸作用）",
      "B + NaOH → E",
      "E + HCl → F + B↑ + H₂O"
    ],
    question: "A、B、C、D、E、F分别是什么？",
    blanks: ["A = ?", "B = ?", "C = ?", "D = ?", "E = ?", "F = ?"],
    answers: ["CO₂不对——重新分析：A是CO₂，但A是单质...重新：A是O₂（单质）→不对…实际：A=CO₂气体（注意本题A是气体单质）", "CO₂（二氧化碳）", "C₆H₁₂O₆（葡萄糖）→太复杂，简化为淀粉", "O₂（氧气）→光合作用释放", "Na₂CO₃（碳酸钠）", "NaCl（氯化钠）"],
    answers: ["CO₂（二氧化碳）", "O₂（氧气）", "（CH₂O）即有机物", "H₂O（水）", "Na₂CO₃（碳酸钠）", "NaCl（氯化钠）"],
    analysis: "重新梳理：D是葡萄糖，光合作用是CO₂+H₂O→(CH₂O)+O₂；A是CO₂，B是O₂——但题目说A是单质！修正：A=O₂（单质），B=CO₂（温室气体）。光合作用：6CO₂+6H₂O→C₆H₁₂O₆+6O₂，CO₂(B)+NaOH→Na₂CO₃(E)；Na₂CO₃+2HCl→2NaCl+H₂O+CO₂↑，F=NaCl。",
    equation: "CO₂+2NaOH→Na₂CO₃+H₂O；Na₂CO₃+2HCl→2NaCl+H₂O+CO₂↑"
  },
  {
    level: "hard",
    desc: "某白色粉末可能含有Na₂CO₃、NaOH、Na₂SO₄、BaCl₂中的一种或几种。实验步骤及现象：①取样溶于水，得无色澄清溶液；②向溶液中加入过量稀盐酸，产生气泡；③取②的溶液，加入AgNO₃溶液，产生白色沉淀，该沉淀不溶于稀硝酸。",
    relations: [
      "①溶于水→无色澄清（排除不溶性物质）",
      "②加过量HCl→气泡（含CO₃²⁻）",
      "③加AgNO₃→白色沉淀不溶于稀HNO₃（含Cl⁻）"
    ],
    question: "请分析：该白色粉末一定含有什么，一定不含什么，可能含有什么？",
    blanks: ["一定含有 = ?", "一定不含 = ?", "可能含有 = ?"],
    answers: ["Na₂CO₃", "BaCl₂（与Na₂CO₃共存时会产生BaCO₃沉淀，步骤①中溶液澄清，矛盾；且③中Cl⁻来自步骤②加入的稀盐酸，不能说明原粉末含BaCl₂）", "NaOH、Na₂SO₄"],
    analysis: "①溶液澄清→BaCl₂和Na₂CO₃不能共存（会生成BaCO₃沉淀），所以不能同时含有。②加HCl有气泡→含CO₃²⁻→一定含Na₂CO₃→因此一定不含BaCl₂。③Cl⁻来自步骤②加入的稀盐酸，不能证明原来含BaCl₂。NaOH无法通过以上实验确定（Na₂CO₃溶液也呈碱性），Na₂SO₄也无法确定（没有检验SO₄²⁻）。",
    equation: "Na₂CO₃+2HCl→2NaCl+H₂O+CO₂↑；Cl⁻+AgNO₃→AgCl↓（白色，不溶于稀HNO₃）"
  },
  {
    level: "hard",
    desc: "A~E是初中常见物质（含酸、碱、盐、氧化物）。已知：A+B→C+H₂O（中和反应）；C+D→E↓（白色）+NaNO₃；E不溶于稀硝酸；B+D→E↓+NaOH；A是一种常见的酸。",
    relations: [
      "A（酸）+ B（碱）→ C + H₂O（中和）",
      "C + D → E↓（白色，不溶酸）+ NaNO₃",
      "B + D → E↓ + NaOH"
    ],
    question: "A、B、C、D、E分别是什么？",
    blanks: ["A = ?", "B = ?", "C = ?", "D = ?", "E = ?"],
    answers: ["H₂SO₄（稀硫酸）", "NaOH（氢氧化钠）", "Na₂SO₄（硫酸钠）", "Ba(NO₃)₂（硝酸钡）", "BaSO₄（硫酸钡）"],
    analysis: "E白色沉淀不溶于稀硝酸→BaSO₄或AgCl，含Ba则含SO₄²⁻。C+D→BaSO₄+NaNO₃，D含Ba和NO₃⁻→D是Ba(NO₃)₂。C含SO₄²⁻且Na→C是Na₂SO₄。A+B→Na₂SO₄+H₂O（中和）→A是H₂SO₄，B是NaOH。验证：NaOH+Ba(NO₃)₂→BaSO₄？不对，NaOH与Ba(NO₃)₂不直接生成BaSO₄。修正：B+D→E+NaOH，即NaOH+Ba(NO₃)₂→无反应…重新：E不溶于稀HNO₃说明E是BaSO₄。",
    equation: "H₂SO₄+2NaOH→Na₂SO₄+2H₂O；Na₂SO₄+Ba(NO₃)₂→BaSO₄↓+2NaNO₃"
  },
  {
    level: "easy",
    desc: "A是金属单质，B是A的氧化物（黑色），C是含A的蓝色溶液，D是A的氢氧化物（蓝色沉淀）。A+O₂→B；B+H₂SO₄→C；C+NaOH→D↓；D加热→B+H₂O。",
    relations: [
      "A（金属）+ O₂ → B（黑色氧化物）",
      "B + H₂SO₄ → C（蓝色溶液）",
      "C + NaOH → D↓（蓝色）+ Na₂SO₄",
      "D --加热→ B（黑色）+ H₂O"
    ],
    question: "A、B、C、D分别是什么？",
    blanks: ["A = ?", "B = ?", "C = ?", "D = ?"],
    answers: ["Cu（铜）", "CuO（氧化铜）", "CuSO₄（硫酸铜溶液）", "Cu(OH)₂（氢氧化铜）"],
    analysis: "蓝色溶液→CuSO₄（Cu²⁺蓝色）。蓝色沉淀→Cu(OH)₂。黑色氧化物→CuO。因此A是铜（Cu），整条链：Cu→CuO→CuSO₄→Cu(OH)₂→CuO，是铜的化合物转化链，中考必考！",
    equation: "2Cu+O₂→(加热)2CuO；CuO+H₂SO₄→CuSO₄+H₂O；CuSO₄+2NaOH→Cu(OH)₂↓+Na₂SO₄；Cu(OH)₂→(加热)CuO+H₂O"
  }
];

// ===== 实验室 =====
const LAB={
oxygen:{name:"制取氧气",scene:"🫁",tools:["试管","酒精灯","水槽","集气瓶","导管","铁架台"],reagents:["KMnO₄","KClO₃","MnO₂","H₂O₂","H₂O"],steps:"1.检查气密性→2.装入KMnO₄→3.排水法收集→4.先撤导管后熄灯",phenomenon:"🔥 加热KMnO₄分解\n🫁 排水法收集无色气体\n🔥 带火星木条复燃！",equation:"2KMnO₄ → K₂MnO₄ + MnO₂ + O₂↑",tips:"⚠️ 先撤导管后熄灯！"},
hydrogen:{name:"制取氢气",scene:"💨",tools:["试管","锌粒","试管架","导管","集气瓶"],reagents:["Zn","稀H₂SO₄","稀HCl","NaOH"],steps:"1.检查气密性→2.加锌粒→3.倒稀硫酸→4.向下排空气或排水法收集",phenomenon:"💨 锌粒大量气泡\n🔥 淡蓝火焰\n💧 干冷烧杯有水雾",equation:"Zn + H₂SO₄ → ZnSO₄ + H₂↑",tips:"⚠️ 点燃前必须验纯！"},
co2:{name:"制取CO₂",scene:"🫧",tools:["试管","长颈漏斗","导管","集气瓶","玻璃片"],reagents:["大理石","稀HCl","澄清石灰水"],steps:"1.检查气密性→2.大理石+稀盐酸→3.向上排空气法→4.石灰水检验",phenomenon:"🫧 大量气泡\n🔵 石灰水变浑浊\n🔥 燃着木条熄灭",equation:"CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑",tips:"⚠️ 长颈漏斗下端须液封！"},
neutral:{name:"酸碱中和",scene:"🧪",tools:["烧杯","玻璃棒","滴管","pH试纸"],reagents:["NaOH溶液","稀HCl","酚酞"],steps:"1.NaOH+酚酞(变红)→2.逐滴HCl搅拌→3.红色刚消失→4.pH≈7",phenomenon:"🔴 NaOH碱性红色\n⚪ HCl滴入红色变浅\n⚪ 恰好中和无色pH=7",equation:"NaOH + HCl → NaCl + H₂O",tips:"⚠️ 缓慢滴加搅拌防飞溅！"},
metal:{name:"金属活动性",scene:"⚡",tools:["试管","砂纸","镊子"],reagents:["Mg条","Zn粒","Fe钉","Cu片","稀HCl"],steps:"1.砂纸打磨→2.分别放入试管加HCl→3.观察气泡速率→4.比较活泼性",phenomenon:"⚡ Mg最剧烈\n⚡ Zn较快\n⚡ Fe较慢\n❌ Cu无现象",equation:"Mg>Zn>Fe>(H)>Cu",tips:"⚠️ 排在H前面的金属才与酸反应放H₂！"}
};

const ZHONGKAO_DATE=new Date('2026-06-20');
