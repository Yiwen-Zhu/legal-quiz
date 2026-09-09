(function(){
  let streak=0, devClicks=0, devTimer=null;
  let konami=[];
  const secret=['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
  function en(){return localStorage.getItem('lawIQ-language')==='en';}
  function toast(title,body){
    let box=document.getElementById('easter-egg-toast');
    if(!box){box=document.createElement('div');box.id='easter-egg-toast';box.className='easter-egg';document.body.appendChild(box);}
    box.innerHTML=`<strong>${title}</strong><br>${body}`;
    box.classList.add('show'); clearTimeout(box._timer); box._timer=setTimeout(()=>box.classList.remove('show'),3800);
  }
  function resetStreak(){streak=0;}

  // 🕵️ Detective Egg — 5 correct answers in a row
  window.addEventListener('lawiq:answer',e=>{
    if(e.detail.correct){streak++;if(streak===5)toast(en()?'🕵️ DETECTIVE MODE':'🕵️ 侦探模式',en()?'Five correct answers in a row. Your legal radar found the pattern.':'连续答对 5 题。你的法律雷达已经发现规律。');}
    else resetStreak();
  });

  // ⚖️ Supreme Court Egg — Konami code
  window.addEventListener('keydown',e=>{
    const key=e.key.length===1?e.key.toLowerCase():e.key;
    konami.push(key); if(konami.length>secret.length)konami.shift();
    if(secret.every((x,i)=>konami[i]===x)){
      toast(en()?'⚖️ SUPREME COURT EASTER EGG':'⚖️ 最高法院彩蛋',en()?'You found the hidden route. Legal Radar +10.':'你找到了隐藏通道。法律雷达 +10。');
      konami=[];
    }
  });

  // 📜 Objection! Egg — choose D on question 4 (the pure-opinion trap)
  window.addEventListener('lawiq:answer',e=>{
    if(e.detail.questionIndex===3 && e.detail.choice===3 && !e.detail.correct){
      toast('📜 OBJECTION!',en()?'That answer is confidently wrong. Sustained.':'这个答案错得很有自信。反对有效。');
    }
  });

  // 👨‍⚖️ Judge Mode — perfect score
  window.addEventListener('lawiq:result',e=>{
    if(e.detail.score===10){
      setTimeout(()=>toast(en()?'👨‍⚖️ JUDGE MODE UNLOCKED':'👨‍⚖️ JUDGE MODE 已解锁',en()?'10/10. The court recognizes your legal reasoning.':'10/10。法庭认可你的法律推理能力。'),500);
      document.body.classList.add('judge-mode');
    }
  });

  // 🐛 Developer Mode — click LAW IQ seven times
  window.addEventListener('load',()=>{
    const logo=document.getElementById('brand-logo');
    if(!logo)return;
    logo.addEventListener('click',()=>{
      devClicks++; clearTimeout(devTimer); devTimer=setTimeout(()=>devClicks=0,1800);
      if(devClicks===7){
        devClicks=0;
        toast(en()?'🐛 DEVELOPER MODE':'🐛 开发者模式',en()?'Console access granted. Nice debugging.':'隐藏开发通道已开启。不错的调试。');
        document.body.classList.toggle('dev-mode');
      }
    });
  });

})();
