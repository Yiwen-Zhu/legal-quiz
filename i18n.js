(function(){
  const EN={
    categories:["CONTRACTS","COPYRIGHT","SCHOOL & PRIVACY","DEFAMATION","ONLINE PRIVACY","RECORDING","SELF-DEFENSE","MINORS & CONTRACTS","LEGAL RIGHTS"],
    scenarios:[
      "You see an online store accidentally list a $1,000 computer for $10. You immediately order and pay. A few minutes later, the store cancels the order.",
      "For a school history presentation, you find a copyrighted photo online. You put it in your slides and credit the author and source, but do not get permission.",
      "A teacher suspects a student violated school rules. A school official has no warrant but has specific facts suggesting the student's backpack contains prohibited items.",
      "In a class group chat, you write: “I think Alex is selfish and really annoying.” Alex is upset.",
      "A child-directed website collects the name, email, and other personal information of a 12-year-old user, and the site knows the user is under 13.",
      "You and a friend are talking on the phone. You want to record the call as a keepsake, but the states involved have different recording-consent rules.",
      "During an argument, one person initiates physical violence. The other takes necessary action to protect themselves from the immediate threat.",
      "A 16-year-old uses their own money to buy an ordinary consumer service and later changes their mind. Someone says: “Any contract signed by a minor is automatically invalid.”",
      "A school bans students from using a particular social platform on campus. A student says: “The First Amendment guarantees that I can post anything, anywhere, on any platform.”"
    ],
    questions:[
      "Which statement is the most accurate?","Which statement is the most accurate?","In a U.S. public-school setting, must the school always obtain a warrant first?","Based only on this statement, which core element of defamation is hardest to establish?","Which statement is most accurate?","Why is it wrong to simply say, “I'm part of the call, so I can always record it”?","Which factor is generally central to a self-defense analysis?","Why is that statement too absolute?","Which response is most accurate?"
    ],
    options:[
      ["Once you pay, a contract is automatically formed and the store must ship it for $10.","An online price tag normally becomes an irrevocable legal offer automatically.","Seeing an incorrect price and paying does not necessarily create an enforceable contract; the transaction terms and applicable law matter.","Once a consumer pays, an order with any pricing error can never be cancelled."],
      ["Giving credit automatically gives you permission to use it.","Anything used for schoolwork is always fair use.","Educational use may support fair use, but it is not an automatic exemption; the purpose, nature, amount used, and market effect are considered.","Students can never use copyrighted images in schoolwork."],
      ["Yes. Students have exactly the same search standard at school as adults have at home.","No. Public-school searches generally use a reasonable-suspicion standard rather than the usual warrant requirement.","Any search is automatically legal as long as a teacher is suspicious.","School officials are completely outside the Fourth Amendment."],
      ["It must be written rather than spoken.","The statement must be an objectively verifiable statement of fact rather than pure opinion.","You must prove that the speaker dislikes Alex.","You must prove that Alex did not respond that day."],
      ["Because it is online, the website can freely collect the information.","No additional process is needed as long as the user enters it themselves.","COPPA imposes special requirements in these circumstances, including verifiable parental consent where applicable.","COPPA covers everyone under 18 with the same rules."],
      ["Because every recording is a federal felony.","Because recording rules can vary by state, including whether one-party or all-party consent is required.","Because only police can record phone calls.","Because phone recordings have no legal effect under any circumstances."],
      ["If the other person started it, any level of force afterward is automatically lawful.","Whether there was an imminent unlawful threat and whether the force used was reasonable and proportionate under the circumstances.","Any action is allowed as long as you are afraid.","Self-defense applies only to criminal cases and can never affect civil liability."],
      ["Because minors are always treated as adults under U.S. law.","Minor-contract rules have exceptions and vary by state; many ordinary contracts may be voidable, but they cannot simply be called “always invalid.”","Once a minor has paid, they can never change their mind.","A contract is valid only if it is written on paper."],
      ["Correct, because the First Amendment restricts all private institutions.","Correct, because students have absolute free speech rights once they enter school.","Not accurate; the First Amendment primarily constrains government action, while private platforms and private institutions generally are not the government.","Not accurate, because students have no free-speech rights at all."]
    ],
    explanations:[
      "<strong>Key point:</strong> Contract law is not simply “click payment = guaranteed deal.” Offer, acceptance, consideration, and transaction terms can matter. Most contract-law questions are governed by state law.",
      "<strong>Key point:</strong> There is no rule that “schoolwork is automatically exempt.” U.S. fair use considers four factors. Nonprofit educational use may help, but it is not decisive by itself.",
      "<strong>Key point:</strong> In <em>New Jersey v. T.L.O.</em>, the Supreme Court established a special rule for school searches. Officials generally do not need a warrant, but the search must have reasonable grounds and be reasonably related in scope.",
      "<strong>Key point:</strong> U.S. defamation law generally concerns false statements of fact, while pure opinion receives stronger protection. Calling something “my opinion” is not automatically enough; context matters.",
      "<strong>Key point:</strong> COPPA primarily covers online personal information from children under 13. Covered services generally have notice and verifiable parental-consent obligations when applicable.",
      "<strong>Key point:</strong> U.S. recording laws vary by state. Some laws permit one-party consent, while others may require all parties' consent. Interstate calls can therefore be especially tricky.",
      "<strong>Key point:</strong> U.S. self-defense law commonly focuses on an imminent threat, reasonable belief, necessity, and proportionality. Exact rules vary by state.",
      "<strong>Key point:</strong> Capacity is an important part of contract law, but minors' contracts cannot simply be described as “all invalid.” State law, the type of transaction, and exceptions can matter.",
      "<strong>Key point:</strong> The First Amendment primarily constrains government action, not ordinary private platforms. Public schools also have special student-speech rules, so “everything must be allowed” is an oversimplification."
    ],
    result:[
      ["LEGAL ROOKIE","Your legal radar is still booting up","You may know some common-sense rules, but realistic situations can make intuitive answers surprisingly tempting. Start with contracts, privacy, and copyright."],
      ["EVERYDAY CITIZEN","Your basics are online","You can spot some legal rules, but exceptions, specific facts, and state-law differences still deserve more attention."],
      ["LEGAL THINKER","Your legal intuition is solid","You are starting to reason from legal rules rather than pure intuition. A little more case law and rule-based practice will sharpen it further."],
      ["LEGAL RADAR","Hard to fool with these tricks","You notice specific facts, jurisdiction, and exceptions—the details that separate legal reasoning from memorizing slogans."]
    ]
  };
  const ZH={
    next:"下一题 →",result:"查看结果 →",start:"开始测试",tip:"先判断法律规则，再看直觉。",right:"✓ 判断正确。",wrong:"× 这题容易被直觉带偏。",restart:"再测一次",missed:"你答错的题",perfect:"10/10。 全部答对。你确实很会抓法律题里的陷阱。",complete:"测试完成",correct:"答对",wrongLabel:"答错",accuracy:"正确率",source:"题目参考：U.S. Copyright Office、FTC、Cornell Legal Information Institute (Wex) 等公开法律资料。具体案件仍应以适用法律和专业法律意见为准。"
  };
  const ENUI={
    next:"Next →",result:"See results →",start:"Start test",tip:"Apply the legal rule before trusting your intuition.",right:"✓ Correct.",wrong:"× This one is designed to catch intuition.",restart:"Take it again",missed:"Questions you missed",perfect:"10/10. Perfect score—you spotted every legal trap.",complete:"TEST COMPLETE",correct:"Correct",wrongLabel:"Wrong",accuracy:"Accuracy",source:"Question references: public legal materials including the U.S. Copyright Office, FTC, and Cornell Legal Information Institute (Wex). Specific cases depend on applicable law and professional legal advice."
  };
  let lang=localStorage.getItem('lawIQ-language')||'zh';
  window.LawI18n={get lang(){return lang;}, ui(){return lang==='en'?ENUI:ZH;}, en:EN};

  function updateStatic(){
    const en=lang==='en';
    const map=en?{
      eyebrow:'10 QUESTIONS · NO LAW DEGREE REQUIRED',titleA:'Do you really',titleB:'know legal basics',titleC:'?',copy:"This isn't about memorizing statutes. It's about spotting legal boundaries in everyday situations. Every question includes an answer that sounds reasonable—but isn't quite right.",questions:'questions',minutes:'minutes',levels:'levels',start:'Start test',note:'Note: ',noteText:'This quiz uses general U.S. legal principles. Some questions can vary by state and by specific facts. It is a knowledge test, not legal advice.',score:'SCORE',complete:'TEST COMPLETE',correct:'Correct',wrong:'Wrong',accuracy:'Accuracy',restart:'Take it again'
    }:{
      eyebrow:'10 QUESTIONS · NO LAW DEGREE REQUIRED',titleA:'你真的懂',titleB:'法律常识',titleC:'吗？',copy:'不是背法条，而是判断现实生活中的法律边界。每道题都故意留了一个“看起来很合理”的错误答案。',questions:'道题',minutes:'分钟',levels:'个等级',start:'开始测试',note:'先说明：',noteText:'本测试以美国法律的一般原则为背景，部分问题会因州法、具体事实而不同。它是知识测试，不是法律意见。',score:'SCORE',complete:'测试完成',correct:'答对',wrong:'答错',accuracy:'正确率',restart:'再测一次'
    };
    document.querySelectorAll('[data-i18n]').forEach(el=>{if(map[el.dataset.i18n]!=null)el.textContent=map[el.dataset.i18n]});
    const b=document.getElementById('lang-btn'); if(b)b.textContent=en?'中':'EN';
    const j=document.querySelector('.jurisdiction'); if(j)j.textContent=en?'U.S. LAW · STUDENT EDITION':'美国法律 · 学生版';
    const src=document.querySelector('.sources-note'); if(src)src.textContent=(en?ENUI:ZH).source;
  }

  function applyQuestion(){
    if(typeof questions==='undefined'||typeof index==='undefined'||!document.getElementById('answers'))return;
    const q=questions[index], en=lang==='en';
    document.getElementById('category-label').textContent=en?EN.categories[index]:q.category;
    document.getElementById('scenario').textContent=en?EN.scenarios[index]:q.scenario;
    document.getElementById('question').textContent=en?EN.questions[index]:q.question;
    document.getElementById('explanation').innerHTML=en?EN.explanations[index]:q.explanation;
    document.querySelectorAll('.answer').forEach((btn,i)=>{
      const letter=btn.querySelector('.letter');
      const text=en?EN.options[index][i]:q.options[i];
      btn.innerHTML=`<span class="letter">${letter?letter.textContent:['A','B','C','D'][i]}</span>${text}`;
    });
    const ui=lang==='en'?ENUI:ZH;
    document.getElementById('tip').textContent=typeof answered!=='undefined'&&answered?(window.LawI18n.lastCorrect?ui.right:ui.wrong):ui.tip;
    document.getElementById('next-btn').textContent=index===questions.length-1?ui.result:ui.next;
  }

  const originalRender=window.renderQuestion;
  if(originalRender)window.renderQuestion=function(){originalRender();applyQuestion();};
  const originalChoose=window.chooseAnswer;
  if(originalChoose)window.chooseAnswer=function(choice){window.LawI18n.lastCorrect=choice===questions[index].answer;originalChoose(choice);applyQuestion();};
  const originalResult=window.showResult;
  if(originalResult)window.showResult=function(){originalResult();applyResult();};

  function applyResult(){
    const en=lang==='en', ui=en?ENUI:ZH;
    const s=Number(document.getElementById('final-score').textContent||0);
    const slot=s<=3?0:s<=5?1:s<=7?2:3;
    const r=en?EN.result[slot]:[
      ["LEGAL ROOKIE","你的法律雷达还没开机","你可能知道一些“常识”，但遇到真实情境时，很容易被“听起来合理”的说法带偏。先从合同、隐私和版权这些日常主题开始补课。"],
      ["EVERYDAY CITIZEN","基本常识在线","你能识别一部分法律规则，但对“例外”“具体事实”和“州法差异”还不够敏感。现实法律问题往往就藏在这些细节里。"],
      ["LEGAL THINKER","你的法律直觉不错","你已经开始用法律规则而不是个人直觉判断问题。再加强一些判例和具体规则，你会很难被常见的法律误区骗到。"],
      ["LEGAL RADAR","你很难被这些套路骗到","你不仅记得规则，还会注意“具体事实”“管辖区”和“例外”。这正是法律推理和单纯背知识点之间的区别。"]
    ][slot];
    document.getElementById('result-tag').textContent=r[0];
    document.getElementById('result-title').textContent=r[1];
    document.getElementById('result-description').textContent=r[2];
    const mistakes=document.getElementById('mistakes');
    const wrongs=questions.map((q,i)=>({q,i})).filter(x=>userAnswers[x.i]!==x.q.answer);
    mistakes.querySelector('h3')?.replaceChildren(document.createTextNode(ui.missed));
    mistakes.querySelectorAll('.mistake').forEach((el,n)=>{
      const obj=wrongs[n];
      if(!obj)return;
      const q=obj.q,i=obj.i;
      el.innerHTML=`<strong>Q${i+1} · ${en?EN.categories[i]:q.category}</strong><br>${(en?EN.explanations[i]:q.explanation).replace(/<[^>]+>/g,'')}`;
    });
    if(!wrongs.length)mistakes.innerHTML=`<div class="mistake" style="border-left-color:#58d68d;background:rgba(88,214,141,.06)"><strong>${ui.perfect}</strong></div>`;
  }

  window.addEventListener('load',()=>{
    updateStatic();
    const b=document.getElementById('lang-btn');
    if(b)b.addEventListener('click',()=>{lang=lang==='zh'?'en':'zh';localStorage.setItem('lawIQ-language',lang);updateStatic();if(document.getElementById('quiz-screen').classList.contains('active'))applyQuestion();if(document.getElementById('result-screen').classList.contains('active'))applyResult();});
  });
})();
