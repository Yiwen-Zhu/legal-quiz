const questions = [
  {
    category: "CONTRACTS",
    scenario: "你在网上看到一家商店把一台原价 $1,000 的电脑误标成 $10。你立刻下单并付款。几分钟后商家取消订单。",
    question: "下面哪一项最准确？",
    options: [
      "付款后合同一定成立，商家必须按 $10 发货。",
      "网上标价通常自动构成不可撤销的法律要约。",
      "仅仅看到错误价格并付款，不一定意味着已经形成可执行合同；具体还要看交易规则和适用法。",
      "只要消费者付款，任何商品价格错误都不能取消。"
    ],
    answer: 2,
    explanation: "<strong>关键：</strong>合同法不是“点了付款=一定成交”这么简单。要约、承诺、对价以及具体交易条款都可能影响是否形成可执行合同；而且多数合同法问题由州法处理。"
  },
  {
    category: "COPYRIGHT",
    scenario: "你在做学校历史展示时，从网上找到一张受版权保护的照片。你把它放进 PPT，并标注作者和来源，但没有得到授权。",
    question: "哪个判断最准确？",
    options: [
      "教育用途可能支持 fair use，但不是自动豁免；还要综合考虑使用目的、作品性质、使用量和对市场的影响等因素。",
      "只要写了出处，就自动获得使用许可。",
      "只要用于学校作业，就永远属于 fair use。",
      "学生永远不能在作业中使用任何受版权保护的图片。"
    ],
    answer: 0,
    explanation: "<strong>关键：</strong>fair use 没有“学生作业自动免版权”的规则。美国版权法要求综合分析四个因素；非营利教育用途可能有利，但并非决定性因素。"
  },
  {
    category: "SCHOOL & PRIVACY",
    scenario: "老师怀疑某学生违反校规。学校工作人员没有搜查令，只根据具体事实怀疑学生书包里有违规物品。",
    question: "在美国公立学校环境下，学校是否绝对必须先拿到搜查令？",
    options: [
      "是，学生在学校享有和成年人在家中完全相同的搜查标准。",
      "不是；公立学校对学生搜查通常适用较低的合理怀疑标准，而不是一般意义上的搜查令要求。",
      "只要老师怀疑，任何搜查都自动合法。",
      "学校工作人员完全不受第四修正案约束。"
    ],
    answer: 1,
    explanation: "<strong>关键：</strong>美国最高法院在 <em>New Jersey v. T.L.O.</em> 中确立了学校搜查的特殊规则。学校官员通常不需要搜查令，但搜查需要有合理依据，并且范围与怀疑的事项相称。"
  },
  {
    category: "DEFAMATION",
    scenario: "你在班级群里说：“我觉得 Alex 很自私，真的很讨厌。” Alex 很生气。",
    question: "仅凭这句话，最难满足诽谤（defamation）的哪一个核心要求？",
    options: [
      "必须是写出来的，而不是说出来的。",
      "必须证明说话者讨厌 Alex。",
      "必须证明 Alex 当天没有反驳。",
      "必须证明陈述属于可以被验证真假的事实性陈述，而不只是纯粹意见。"
    ],
    answer: 3,
    explanation: "<strong>关键：</strong>美国诽谤法通常要求虚假的事实性陈述，而纯粹意见一般受更强的言论自由保护。不过，把一句话叫作“我的意见”并不会自动让它免于责任，具体语境很重要。"
  },
  {
    category: "ONLINE PRIVACY",
    scenario: "一个面向儿童的网站收集 12 岁用户的姓名、邮箱等个人信息，并且网站知道用户未满 13 岁。",
    question: "下面哪项最准确？",
    options: [
      "因为这是互联网，所以网站可以自由收集。",
      "只要用户自己输入，就不需要其他程序。",
      "美国 COPPA 对这类情况设置了特殊要求，包括在适用情形下取得可验证的家长同意。",
      "COPPA 保护所有 18 岁以下用户，规则完全相同。"
    ],
    answer: 2,
    explanation: "<strong>关键：</strong>COPPA 的核心范围是未满 13 岁儿童的在线个人信息。对受该规则覆盖的网站或服务，在适用情况下通常需要家长通知与可验证同意。"
  },
  {
    category: "RECORDING",
    scenario: "你和朋友在电话里聊天。你想把通话录下来留作纪念，但你们所在的州对录音同意规则不同。",
    question: "为什么不能简单地说“我本人参加通话，所以我永远可以录”？",
    options: [
      "因为任何录音都属于联邦重罪。",
      "因为录音规则可能由州法决定，不同州对单方/多方同意的要求可能不同。",
      "因为只有警察可以录电话。",
      "因为电话录音在任何情况下都不具有法律效力。"
    ],
    answer: 1,
    explanation: "<strong>关键：</strong>美国电话录音规则存在州际差异。有些法律允许一方同意，有些情形要求所有参与者同意。因此跨州通话尤其不能靠一个简单口诀判断。"
  },
  {
    category: "SELF-DEFENSE",
    scenario: "某人在争执中先主动使用身体暴力。另一方为了立即保护自己而采取必要的、与威胁相称的行动。",
    question: "自卫（self-defense）判断中，下面哪个因素通常最重要？",
    options: [
      "是否存在迫在眉睫的非法威胁，以及所使用的力量是否在具体情况下合理、相称。",
      "只要对方先挑衅，之后采取任何程度的武力都自动合法。",
      "只要自己害怕，就可以采取任何行动。",
      "自卫规则只适用于刑事案件，不可能影响民事责任。"
    ],
    answer: 0,
    explanation: "<strong>关键：</strong>美国自卫法通常围绕迫在眉睫的威胁、合理信念、必要性和相称性展开；具体规则因州而异。"
  },
  {
    category: "MINORS & CONTRACTS",
    scenario: "一名 16 岁学生用自己的钱购买了一项普通消费服务，后来反悔。有人告诉他：“未成年人签的任何合同都自动无效。”",
    question: "这个说法为什么过于绝对？",
    options: [
      "因为未成年人在美国法律上永远被视为成年人。",
      "因为只要付过钱，未成年人就永远不能反悔。",
      "因为合同只有写在纸上才有效。",
      "因为未成年人合同问题存在例外和州法差异；很多普通合同可能涉及未成年人的撤销权，但不能简单概括为“一律无效”。"
    ],
    answer: 3,
    explanation: "<strong>关键：</strong>合同能力（capacity）是合同法的重要组成部分，但未成年人合同并不是一句“全部无效”就能概括。具体规则会受到州法、交易性质和例外情况影响。"
  },
  {
    category: "LEGAL RIGHTS",
    scenario: "学校规定学生不能在校园内使用某个社交平台。一个学生于是说：“第一修正案保证我可以在任何地方、任何平台发表任何内容。”",
    question: "哪个回应最准确？",
    options: [
      "正确，因为第一修正案限制所有私人机构。",
      "正确，因为学生一进入学校就拥有绝对言论自由。",
      "不准确；第一修正案主要限制政府，而私人平台或私人机构通常不等同于政府。",
      "不准确，因为学生没有任何言论自由。"
    ],
    answer: 2,
    explanation: "<strong>关键：</strong>第一修正案主要约束政府行为，而不是一般意义上的私人平台。公立学校又涉及特殊的学生言论规则，因此“学校/平台都必须允许一切言论”是过度简化。"
  },
  {
    category: "STUDENT SPEECH",
    scenario: "一名公立学校学生放学后在自己的社交媒体账号上批评学校政策。帖子没有威胁，也没有煽动暴力，但学校认为内容不尊重学校。",
    question: "关于学校是否可以因为这条校外发帖而惩罚学生，哪项最准确？",
    options: [
      "学校的权力受到第一修正案限制；最高法院已经指出，校外学生言论通常受到更强保护，但并非绝对没有例外。",
      "只要学生批评学校，学校就一定可以处罚。",
      "学生只要使用社交媒体，第一修正案就完全不适用。",
      "学校对学生在校外说的任何话都有与校内完全相同的控制权。"
    ],
    answer: 0,
    explanation: "<strong>关键：</strong>在 <em>Mahanoy Area School District v. B.L.</em> 中，最高法院强调学校对校外学生言论的监管权通常比校内更受限制。不过，涉及真正威胁、严重欺凌等特殊情况时，分析仍可能不同。"
  }
];

let index = 0;
let score = 0;
let answered = false;
const userAnswers = [];

const $ = (id) => document.getElementById(id);

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  $(id).classList.add("active");
}

function renderQuestion() {
  const q = questions[index];
  answered = false;
  $("current-num").textContent = String(index + 1).padStart(2, "0");
  $("category-label").textContent = q.category;
  $("progress").style.width = `${((index + 1) / questions.length) * 100}%`;
  $("scenario").textContent = q.scenario;
  $("question").textContent = q.question;
  $("explanation").classList.add("hidden");
  $("explanation").innerHTML = q.explanation;
  $("next-btn").disabled = true;
  $("tip").textContent = "先判断法律规则，再看直觉。";

  const letters = ["A", "B", "C", "D"];
  $("answers").innerHTML = q.options.map((opt, i) => `
    <button class="answer" data-index="${i}">
      <span class="letter">${letters[i]}</span>${opt}
    </button>
  `).join("");

  document.querySelectorAll(".answer").forEach(btn => {
    btn.addEventListener("click", () => chooseAnswer(Number(btn.dataset.index)));
  });
}

function chooseAnswer(choice) {
  if (answered) return;
  answered = true;

  const q = questions[index];
  userAnswers[index] = choice;
  const buttons = document.querySelectorAll(".answer");

  buttons.forEach((btn, i) => {
    btn.classList.add("locked");
    if (i === q.answer) btn.classList.add("correct");
    if (i === choice && choice !== q.answer) btn.classList.add("wrong");
  });

  if (choice === q.answer) {
    score++;
    $("score").textContent = score;
    $("tip").textContent = "✓ 判断正确。";
  } else {
    $("tip").textContent = "× 这题容易被直觉带偏。";
  }
  window.dispatchEvent(new CustomEvent("lawiq:answer", { detail: { questionIndex: index, choice: choice, correct: choice === q.answer } }));

  $("explanation").classList.remove("hidden");
  $("next-btn").disabled = false;
  $("next-btn").textContent = index === questions.length - 1 ? "查看结果 →" : "下一题 →";
}

function nextQuestion() {
  if (!answered) return;
  if (index < questions.length - 1) {
    index++;
    renderQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  showScreen("result-screen");
  $("final-score").textContent = score;
  $("correct-count").textContent = score;
  $("wrong-count").textContent = 10 - score;
  $("accuracy").textContent = `${score * 10}%`;

  let tag, title, desc;
  if (score <= 3) {
    tag = "LEGAL ROOKIE";
    title = "你的法律雷达还没开机";
    desc = "你可能知道一些“常识”，但遇到真实情境时，很容易被“听起来合理”的说法带偏。先从合同、隐私和版权这些日常主题开始补课。";
  } else if (score <= 5) {
    tag = "EVERYDAY CITIZEN";
    title = "基本常识在线";
    desc = "你能识别一部分法律规则，但对“例外”“具体事实”和“州法差异”还不够敏感。现实法律问题往往就藏在这些细节里。";
  } else if (score <= 7) {
    tag = "LEGAL THINKER";
    title = "你的法律直觉不错";
    desc = "你已经开始用法律规则而不是个人直觉判断问题。再加强一些判例和具体规则，你会很难被常见的法律误区骗到。";
  } else {
    tag = "LEGAL RADAR";
    title = "你很难被这些套路骗到";
    desc = "你不仅记得规则，还会注意“具体事实”“管辖区”和“例外”。这正是法律推理和单纯背知识点之间的区别。";
  }

  window.dispatchEvent(new CustomEvent("lawiq:result", { detail: { score: score } }));
  $("result-tag").textContent = tag;
  $("result-title").textContent = title;
  $("result-description").textContent = desc;

  const mistakes = questions
    .map((q, i) => ({q, i}))
    .filter(({q, i}) => userAnswers[i] !== q.answer);

  $("mistakes").innerHTML = mistakes.length
    ? `<h3>你答错的题</h3>` + mistakes.map(({q, i}) => `
      <div class="mistake">
        <strong>Q${i + 1} · ${q.category}</strong><br>
        ${q.explanation.replace(/<[^>]+>/g, "")}
      </div>
    `).join("")
    : `<div class="mistake" style="border-left-color:#58d68d;background:rgba(88,214,141,.06)">
        <strong>10/10。</strong> 全部答对。你确实很会抓法律题里的陷阱。
      </div>`;
}

$("start-btn").addEventListener("click", () => {
  index = 0;
  score = 0;
  userAnswers.length = 0;
  $("score").textContent = "0";
  showScreen("quiz-screen");
  renderQuestion();
});

$("next-btn").addEventListener("click", nextQuestion);

$("restart-btn").addEventListener("click", () => {
  index = 0;
  score = 0;
  userAnswers.length = 0;
  $("score").textContent = "0";
  showScreen("quiz-screen");
  renderQuestion();
});
