// ===== 全局状态 =====
let detLevel = 'easy';
let detScore = 0, identifyScore = 0, inferScore = 0;
let detIdx = 0;
let detShuffled = [];
let collected = new Set();

// 物质鉴别状态
let currentSubstance = null;
let usedOps = [];
let currentGuess = null;
let hintIndex = 0;
let identifySubstances = [];

// 推断闯关状态
let inferLevel = 'easy';
let inferIdx = 0;
let inferShuffled = [];
let inferUserAnswers = {};
let inferAnswered = false;

// ===== 初始化 =====
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.nav-item').forEach(n => {
    n.addEventListener('click', e => { e.preventDefault(); switchTab(n.dataset.tab); });
  });
  initElements();
  initDetective();
  initIdentify();
  initInference();
  updateCountdown();
  showRef('common');
  setInterval(updateCountdown, 60000);
});

// ===== Tab切换 =====
function switchTab(tab) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById('tab-' + tab).classList.add('active');
  document.querySelector('[data-tab="' + tab + '"]').classList.add('active');
}

// ===== 中考倒计时 =====
function updateCountdown() {
  const now = new Date();
  const diff = ZHONGKAO_DATE - now;
  const days = Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
  document.getElementById('countdown').textContent = days;
}

// ===== 速查表 =====
function showRef(type) {
  document.querySelectorAll('.ref-tab').forEach(t => t.classList.remove('active'));
  event.target.classList.add('active');
  const data = {
    common: `<table><tr><th>物质</th><th>化学式</th><th>主要性质/用途</th></tr>
<tr><td>水</td><td>H₂O</td><td>最常用溶剂，电解生成H₂和O₂</td></tr>
<tr><td>二氧化碳</td><td>CO₂</td><td>使澄清石灰水变浑浊，灭火</td></tr>
<tr><td>一氧化碳</td><td>CO</td><td>可燃，有毒，还原性</td></tr>
<tr><td>氧化钙</td><td>CaO</td><td>生石灰，与水放热，干燥剂</td></tr>
<tr><td>碳酸钙</td><td>CaCO₃</td><td>石灰石/大理石主要成分</td></tr>
<tr><td>氢氧化钠</td><td>NaOH</td><td>烧碱/火碱，强碱，易潮解</td></tr>
<tr><td>氢氧化钙</td><td>Ca(OH)₂</td><td>熟石灰/消石灰，改良酸性土壤</td></tr>
<tr><td>盐酸</td><td>HCl</td><td>浓盐酸挥发有白雾</td></tr>
<tr><td>硫酸</td><td>H₂SO₄</td><td>浓H₂SO₄吸水/脱水/强氧化性</td></tr>
<tr><td>氯化钠</td><td>NaCl</td><td>食盐，生理盐水0.9%</td></tr></table>`,
    ions: `<table><tr><th>待检离子</th><th>试剂</th><th>现象</th></tr>
<tr><td>H⁺</td><td>紫色石蕊</td><td>变红</td></tr>
<tr><td>OH⁻</td><td>酚酞试液</td><td>变红</td></tr>
<tr><td>Cl⁻</td><td>AgNO₃+稀HNO₃</td><td>白色沉淀</td></tr>
<tr><td>SO₄²⁻</td><td>BaCl₂+稀HNO₃</td><td>白色沉淀</td></tr>
<tr><td>CO₃²⁻</td><td>稀HCl+澄清石灰水</td><td>产生气泡，石灰水变浑浊</td></tr>
<tr><td>Fe³⁺</td><td>KSCN溶液</td><td>变血红色</td></tr>
<tr><td>Cu²⁺</td><td>NaOH溶液</td><td>蓝色沉淀</td></tr>
<tr><td>NH₄⁺</td><td>NaOH+湿润红色石蕊试纸</td><td>试纸变蓝</td></tr></table>`,
    gas: `<table><tr><th>气体</th><th>药品</th><th>收集方法</th><th>检验方法</th></tr>
<tr><td>O₂</td><td>KMnO₄(加热)<br>H₂O₂(MnO₂催化)</td><td>排水法/向上排空气</td><td>带火星木条复燃</td></tr>
<tr><td>H₂</td><td>Zn+稀H₂SO₄</td><td>排水法/向下排空气</td><td>点燃淡蓝火焰</td></tr>
<tr><td>CO₂</td><td>CaCO₃+稀HCl</td><td>向上排空气法</td><td>澄清石灰水变浑浊</td></tr></table>`,
    ph: `<h3>📐 pH与酸碱性</h3>
<p><strong>pH范围：</strong>0-14（酸性→中性→碱性）</p>
<p><strong>pH=7</strong> 中性 | <strong>pH&lt;7</strong> 酸性 | <strong>pH&gt;7</strong> 碱性</p>
<p><strong>口诀：</strong>pH越小越酸，越大越碱</p>
<table><tr><th>pH范围</th><th>常见物质举例</th></tr>
<tr><td>0-2</td><td>浓H₂SO₄、浓HCl（强酸）</td></tr>
<tr><td>3-5</td><td>醋、柠檬汁（弱酸）</td></tr>
<tr><td>6-8</td><td>水、NaCl溶液（中性附近）</td></tr>
<tr><td>9-11</td><td>肥皂水、NaHCO₃溶液（弱碱）</td></tr>
<tr><td>12-14</td><td>NaOH、Ca(OH)₂溶液（强碱）</td></tr></table>`
  };
  document.getElementById('ref-content').innerHTML = data[type] || '';
}

// ===== 元素图鉴 =====
function initElements() {
  const grid = document.getElementById('elementGrid');
  grid.innerHTML = '';
  ELEMENTS.forEach(el => {
    const card = document.createElement('div');
    const typeClass = el.tp === 'metal' ? 'el-metal' : el.tp === 'gas' ? 'el-gas' : 'el-nonmetal';
    const badge = el.tp === 'metal' ? '⚙️' : el.tp === 'gas' ? '💨' : '🧬';
    card.className = 'element-card ' + typeClass;
    card.innerHTML = '<span class="el-number">' + el.n + '</span><span class="el-badge">' + badge + '</span><span class="el-symbol">' + el.sym + '</span><span class="el-name">' + el.nm + '</span>';
    card.onclick = () => showElement(el);
    grid.appendChild(card);
  });
}

function showElement(el) {
  collected.add(el.n);
  const body = document.getElementById('elementDetailBody');
  const cmpHtml = el.cmp.map(c => '<span class="compound-tag">' + c + '</span>').join('');
  body.innerHTML =
    '<div class="el-detail-header">' +
    '<div class="el-detail-symbol" style="color:' + (el.color || 'var(--primary)') + '">' + el.sym + '</div>' +
    '<div class="el-detail-name">' + el.nm + '（第' + el.n + '号元素）</div>' +
    '</div>' +
    '<table class="el-detail-table">' +
    '<tr><td>相对原子质量</td><td>' + el.mass + '</td></tr>' +
    '<tr><td>元素类别</td><td>' + el.fam + '</td></tr>' +
    '<tr><td>常见化合价</td><td>' + el.val + '</td></tr>' +
    '<tr><td>主要性质</td><td>' + el.prop + '</td></tr>' +
    '<tr><td>检验方法</td><td>' + el.test + '</td></tr>' +
    '</table>' +
    '<div class="el-compounds"><h4>🧪 常见化合物</h4>' + cmpHtml + '</div>' +
    '<p style="text-align:center;color:var(--text-light);margin-top:12px;font-size:0.85rem">已收集 ' + collected.size + '/20 种元素 ' + (collected.size >= 20 ? '🎉 元素大师！' : '') + '</p>';
  document.getElementById('elementModal').classList.add('active');
}

function closeModal(id) { document.getElementById(id).classList.remove('active'); }

// ===== 实验侦探 =====
function initDetective() {
  detShuffled = shuffle([...DET[detLevel]]);
  detIdx = 0; detScore = 0;
  document.getElementById('detectiveScoreVal').textContent = '0';
  showDetectiveQ();
}

function setDetectiveLevel(lv, btn) {
  detLevel = lv;
  btn.parentElement.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  initDetective();
}

function showDetectiveQ() {
  const fb = document.getElementById('detectiveFeedback');
  const nb = document.getElementById('detectiveNextBtn');
  fb.classList.add('hidden'); nb.classList.add('hidden');
  if (detIdx >= detShuffled.length) { detIdx = 0; detShuffled = shuffle([...DET[detLevel]]); }
  const q = detShuffled[detIdx];
  document.getElementById('detectiveSceneIcon').textContent = q.sc;
  document.getElementById('detectiveQuestion').textContent = q.q;
  const opts = document.getElementById('detectiveOptions');
  opts.innerHTML = '';
  q.o.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'det-option';
    btn.textContent = String.fromCharCode(65 + i) + '. ' + opt;
    btn.onclick = () => answerDetective(i, q);
    opts.appendChild(btn);
  });
}

function answerDetective(idx, q) {
  const opts = document.querySelectorAll('.det-option');
  opts.forEach(o => o.onclick = null);
  const fb = document.getElementById('detectiveFeedback');
  const nb = document.getElementById('detectiveNextBtn');
  if (idx === q.a) {
    opts[idx].classList.add('correct');
    fb.className = 'detective-feedback correct';
    fb.innerHTML = '✅ 回答正确！+10分<br><br>' + q.e;
    detScore += 10;
    addCoins(10);
  } else {
    opts[idx].classList.add('wrong');
    opts[q.a].classList.add('correct');
    fb.className = 'detective-feedback wrong';
    fb.innerHTML = '❌ 回答错误，正确答案是 ' + String.fromCharCode(65 + q.a) + '<br><br>' + q.e;
  }
  fb.classList.remove('hidden');
  nb.classList.remove('hidden');
  document.getElementById('detectiveScoreVal').textContent = detScore;
}

function nextDetectiveQuestion() { detIdx++; showDetectiveQ(); }

// ===== 未知物质鉴别 =====
function initIdentify() {
  identifySubstances = shuffle([...UNKNOWNS]);
  identifyScore = 0;
  document.getElementById('identifyScoreVal').textContent = '0';
  loadIdentifyQuestion();
}

function loadIdentifyQuestion() {
  currentSubstance = identifySubstances.shift();
  if (!currentSubstance) {
    identifySubstances = shuffle([...UNKNOWNS]);
    currentSubstance = identifySubstances.shift();
  }
  usedOps = [];
  currentGuess = null;
  hintIndex = 0;
  // 重置 UI
  document.getElementById('beakerIcon').textContent = '❓';
  document.getElementById('beakerLabel').textContent = '未知物质';
  document.getElementById('obsLog').innerHTML = '<div class="obs-empty">还没有进行任何操作，点击上方按钮开始实验！</div>';
  document.getElementById('reactionBubble').classList.add('hidden');
  document.getElementById('identifyFeedback').classList.add('hidden');
  document.getElementById('hintText').textContent = '点击获取提示，缩小判断范围';
  document.getElementById('hintBtn').disabled = false;
  document.getElementById('hintBtn').textContent = '获取提示 (-20🪙)';
  // 渲染操作按钮
  renderOpsButtons();
  // 渲染选项
  renderGuessOptions();
  // 恢复烧杯颜色
  document.getElementById('liquidEllipse').setAttribute('fill', 'rgba(100,180,255,0.35)');
  document.getElementById('liquidRect').setAttribute('fill', 'rgba(100,180,255,0.35)');
}

function renderOpsButtons() {
  const opsDiv = document.getElementById('opsButtons');
  // 取该物质支持的所有操作
  const ops = Object.keys(currentSubstance.reactions);
  // 只展示常用操作（不要太多）
  const displayOps = ['观察外观', '加热', '加入石蕊溶液', '加入酚酞溶液', '加入稀盐酸', '加入稀硫酸', '加入AgNO₃溶液', '加入BaCl₂溶液', '加入NaOH溶液', '加入CuSO₄溶液', '加入FeCl₃溶液', '加入Na₂CO₃溶液', '加水溶解后测pH'];
  opsDiv.innerHTML = '';
  displayOps.forEach(op => {
    if (currentSubstance.reactions[op]) {
      const btn = document.createElement('button');
      btn.className = 'op-btn';
      btn.textContent = op;
      btn.onclick = () => doOperation(op);
      // 已操作过的标记
      if (usedOps.includes(op)) {
        btn.classList.add('op-used');
      }
      opsDiv.appendChild(btn);
    }
  });
}

function renderGuessOptions() {
  const div = document.getElementById('guessOptions');
  // 从所有物质中随机选5个（包含正确答案）
  let options = [currentSubstance];
  let others = UNKNOWNS.filter(u => u.formula !== currentSubstance.formula);
  others = shuffle(others).slice(0, 4);
  options = shuffle([...options, ...others]);
  div.innerHTML = '';
  options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'guess-btn';
    btn.textContent = opt.name;
    btn.dataset.formula = opt.formula;
    btn.onclick = () => selectGuess(btn, opt.formula);
    div.appendChild(btn);
  });
}

function selectGuess(btn, formula) {
  document.querySelectorAll('.guess-btn').forEach(b => b.classList.remove('guess-selected'));
  btn.classList.add('guess-selected');
  currentGuess = formula;
}

function doOperation(op) {
  if (usedOps.includes(op)) return;
  usedOps.push(op);
  const result = currentSubstance.reactions[op];
  // 标记按钮已使用
  const btns = document.querySelectorAll('.op-btn');
  btns.forEach(b => { if (b.textContent === op) b.classList.add('op-used'); });
  // 显示反应气泡动画
  const bubble = document.getElementById('reactionBubble');
  bubble.classList.remove('hidden');
  bubble.innerHTML = '🧪 ' + op;
  bubble.style.animation = 'none';
  bubble.offsetHeight;
  bubble.style.animation = 'bubblePop 0.4s ease';
  // 更新实验记录
  const log = document.getElementById('obsLog');
  if (log.querySelector('.obs-empty')) log.innerHTML = '';
  const entry = document.createElement('div');
  entry.className = 'obs-entry';
  entry.innerHTML = '<span class="obs-op">▸ ' + op + '</span><span class="obs-result">' + result + '</span>';
  log.appendChild(entry);
  log.scrollTop = log.scrollHeight;
  // 更新烧杯外观
  updateBeakerVisual(op);
  // 延迟隐藏气泡
  setTimeout(() => bubble.classList.add('hidden'), 2000);
}

function updateBeakerVisual(op) {
  const icon = document.getElementById('beakerIcon');
  const label = document.getElementById('beakerLabel');
  const ellipse = document.getElementById('liquidEllipse');
  const rect = document.getElementById('liquidRect');
  // 根据操作更新外观
  if (op === '观察外观') {
    icon.textContent = currentSubstance.icon;
    label.textContent = currentSubstance.appearance.split('，')[0];
  }
  if (currentSubstance.formula === 'CuSO₄' || (op === '加入CuSO₄溶液' && result && result.includes('蓝色'))) {
    ellipse.setAttribute('fill', 'rgba(52,152,219,0.5)');
    rect.setAttribute('fill', 'rgba(52,152,219,0.5)');
  }
  if (result && result.includes('变红') && !result.includes('红褐色')) {
    if (op.includes('酚酞') || op.includes('石蕊')) {
      if (result.includes('蓝色')) {
        ellipse.setAttribute('fill', 'rgba(52,152,219,0.5)');
        rect.setAttribute('fill', 'rgba(52,152,219,0.5)');
      }
    }
  }
  if (result && result.includes('红色')) {
    ellipse.setAttribute('fill', 'rgba(231,76,60,0.4)');
    rect.setAttribute('fill', 'rgba(231,76,60,0.4)');
  }
  if (result && result.includes('沉淀') && !result.includes('蓝色') && !result.includes('红褐色') && !result.includes('白色')) {
    ellipse.setAttribute('fill', 'rgba(149,165,166,0.5)');
    rect.setAttribute('fill', 'rgba(149,165,166,0.5)');
  }
}

function submitIdentify() {
  if (!currentGuess) {
    showFeedback('identifyFeedback', '⚠️ 请先选择一种物质！', 'warn');
    return;
  }
  const fb = document.getElementById('identifyFeedback');
  fb.classList.remove('hidden');
  if (currentGuess === currentSubstance.formula) {
    // 正确
    const opsBonus = Math.max(0, 10 - usedOps.length * 2);
    const pts = 10 + opsBonus;
    identifyScore += pts;
    addCoins(pts);
    document.getElementById('identifyScoreVal').textContent = identifyScore;
    fb.className = 'identify-feedback';
    fb.classList.add('correct');
    fb.innerHTML = '✅ 答对了！是<strong>' + currentSubstance.name + '</strong>！+' + pts + '分（用了' + usedOps.length + '步，效率奖励+' + opsBonus + '）<br><br><em>' + currentSubstance.explanation + '</em>';
    document.querySelectorAll('.guess-btn').forEach(b => {
      if (b.dataset.formula === currentGuess) b.classList.add('guess-correct');
    });
  } else {
    fb.className = 'identify-feedback';
    fb.classList.add('wrong');
    fb.innerHTML = '❌ 答错了！正确答案是<strong>' + currentSubstance.name + '</strong><br><br><em>' + currentSubstance.explanation + '</em>';
    document.querySelectorAll('.guess-btn').forEach(b => {
      if (b.dataset.formula === currentGuess) b.classList.add('guess-wrong');
      if (b.dataset.formula === currentSubstance.formula) b.classList.add('guess-correct');
    });
  }
}

function nextIdentify() {
  loadIdentifyQuestion();
}

function getHint() {
  if (!currentSubstance) return;
  const coins = parseInt(document.getElementById('coinCount').textContent) || 0;
  if (coins < 20) {
    document.getElementById('hintText').textContent = '金币不足！';
    return;
  }
  if (hintIndex >= currentSubstance.hints.length) {
    document.getElementById('hintText').textContent = '没有更多提示了！';
    document.getElementById('hintBtn').disabled = true;
    return;
  }
  addCoins(-20);
  const hint = currentSubstance.hints[hintIndex];
  hintIndex++;
  const hintDiv = document.getElementById('hintText');
  hintDiv.textContent = (hintIndex === 1 ? '' : hintDiv.textContent + '\n') + '💡 ' + hint;
  document.getElementById('hintBtn').textContent = '再一个提示 (-20🪙)';
  if (hintIndex >= currentSubstance.hints.length) {
    document.getElementById('hintBtn').disabled = true;
    document.getElementById('hintBtn').textContent = '提示用完';
  }
}

function showFeedback(id, msg, type) {
  const el = document.getElementById(id);
  el.className = 'identify-feedback';
  el.classList.add(type);
  el.textContent = msg;
  el.classList.remove('hidden');
}

// ===== 化学推断闯关 =====
function initInference() {
  inferShuffled = shuffle([...INFERENCE.filter(q => q.level === inferLevel)]);
  inferIdx = 0;
  inferScore = 0;
  inferAnswered = false;
  document.getElementById('inferScoreVal').textContent = '0';
  document.getElementById('inferTotal').textContent = inferShuffled.length || 1;
  loadInference();
}

function setInferLevel(lv, btn) {
  inferLevel = lv;
  btn.parentElement.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  initInference();
}

function loadInference() {
  const fb = document.getElementById('inferFeedback');
  const analysis = document.getElementById('inferAnalysis');
  const nextBtn = document.getElementById('inferNextBtn');
  fb.classList.add('hidden');
  analysis.classList.add('hidden');
  nextBtn.classList.add('hidden');
  inferAnswered = false;
  inferUserAnswers = {};
  if (inferIdx >= inferShuffled.length) {
    document.getElementById('inferDesc').innerHTML = '🎉 全部完成！最终得分：<strong>' + inferScore + '</strong> 分<br><button class="btn btn-primary" onclick="initInference()" style="margin-top:12px">再来一轮</button>';
    document.getElementById('inferRelations').innerHTML = '';
    document.getElementById('inferBlanks').innerHTML = '';
    return;
  }
  const q = inferShuffled[inferIdx];
  document.getElementById('inferCur').textContent = inferIdx + 1;
  const pct = ((inferIdx) / inferShuffled.length * 100) + '%';
  document.getElementById('inferBar').style.width = pct;
  // 题目描述
  document.getElementById('inferDesc').innerHTML = '<p>' + q.desc + '</p>';
  // 转化关系
  let relHtml = '<div class="infer-rel-title">📐 转化关系</div>';
  q.relations.forEach(r => {
    relHtml += '<div class="infer-rel-item">' + r + '</div>';
  });
  document.getElementById('inferRelations').innerHTML = relHtml;
  // 填空
  let blanksHtml = '<div class="infer-blanks-title">✏️ 请填写你的答案</div>';
  q.blanks.forEach((b, i) => {
    blanksHtml += '<div class="infer-blank-row"><label>' + b.replace('?', '') + '</label><input type="text" id="inferIn' + i + '" placeholder="输入物质名称/化学式" oninput="onInferInput()"></div>';
  });
  document.getElementById('inferBlanks').innerHTML = blanksHtml;
  // 回车提交
  document.querySelectorAll('#inferBlanks input').forEach(inp => {
    inp.addEventListener('keydown', e => { if (e.key === 'Enter') checkInference(); });
  });
}

function onInferInput() {
  document.getElementById('inferFeedback').classList.add('hidden');
}

function normalize(s) {
  return s.replace(/\s+/g, '').replace(/（/g, '(').replace(/）/g, ')').replace(/₂/g, '2').replace(/₃/g, '3').replace(/₄/g, '4').replace(/₅/g, '5').replace(/₆/g, '6').replace(/₇/g, '7').replace(/₈/g, '8').toLowerCase();
}

function checkInference() {
  if (inferAnswered) return;
  const q = inferShuffled[inferIdx];
  const inputs = document.querySelectorAll('#inferBlanks input');
  let allFilled = true;
  inputs.forEach(inp => { if (!inp.value.trim()) allFilled = false; });
  if (!allFilled) {
    const fb = document.getElementById('inferFeedback');
    fb.className = 'infer-feedback';
    fb.classList.add('warn');
    fb.textContent = '⚠️ 请填写所有答案！';
    fb.classList.remove('hidden');
    return;
  }
  inferAnswered = true;
  let correctCount = 0;
  inputs.forEach((inp, i) => {
    const userVal = normalize(inp.value);
    const answerVal = normalize(q.answers[i]);
    // 模糊匹配：包含关系即可
    if (userVal && answerVal && (answerVal.includes(userVal) || userVal.includes(answerVal))) {
      correctCount++;
      inp.style.borderColor = 'var(--success)';
      inp.style.background = '#e8f8f0';
    } else {
      inp.style.borderColor = 'var(--danger)';
      inp.style.background = '#fde8e8';
    }
  });
  const fb = document.getElementById('inferFeedback');
  const allCorrect = correctCount === q.blanks.length;
  if (allCorrect) {
    const pts = 15 * q.blanks.length;
    inferScore += pts;
    addCoins(pts);
    fb.className = 'infer-feedback';
    fb.classList.add('correct');
    fb.textContent = '✅ 全部正确！+' + pts + '分';
  } else {
    fb.className = 'infer-feedback';
    fb.classList.add('wrong');
    fb.textContent = '❌ 答对 ' + correctCount + '/' + q.blanks.length + ' 个';
  }
  fb.classList.remove('hidden');
  document.getElementById('inferScoreVal').textContent = inferScore;
  // 显示解析
  const analysis = document.getElementById('inferAnalysis');
  analysis.classList.remove('hidden');
  analysis.innerHTML = '<div class="infer-analysis-title">📖 详细解析</div>' +
    '<p>' + q.analysis + '</p>' +
    '<div class="infer-equation">' + q.equation + '</div>';
  document.getElementById('inferNextBtn').classList.remove('hidden');
}

function nextInference() {
  inferIdx++;
  loadInference();
}

// ===== 金币系统 =====
function addCoins(n) {
  const el = document.getElementById('coinCount');
  const cur = parseInt(el.textContent) || 0;
  el.textContent = cur + n;
}

// ===== 工具函数 =====
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// 模态框点击外部关闭
document.getElementById('elementModal').addEventListener('click', function(e) {
  if (e.target === this) this.classList.remove('active');
});
