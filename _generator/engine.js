(function(){
var D=window.__D;

/* reveal on scroll */
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)e.target.classList.add('in');});},{threshold:0.15});
document.querySelectorAll('.reveal').forEach(function(el){io.observe(el);});

/* progress rail + chapter dots */
var rail=document.getElementById('rail');
var secs=[].slice.call(document.querySelectorAll('section'));
var dotsNav=document.getElementById('dots');
secs.forEach(function(s){var a=document.createElement('a');a.href='#'+s.id;a.dataset.label=s.dataset.chapter||'';dotsNav.appendChild(a);});
var dots=[].slice.call(dotsNav.children);
function onScroll(){
  var h=document.documentElement;
  rail.style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+'%';
  var cur=0;
  secs.forEach(function(s,i){if(s.getBoundingClientRect().top<=window.innerHeight*0.45)cur=i;});
  dots.forEach(function(d,i){d.classList.toggle('active',i===cur);});
}
window.addEventListener('scroll',onScroll,{passive:true});onScroll();

/* animated counters */
var cIO=new IntersectionObserver(function(es){es.forEach(function(e){
  if(!e.isIntersecting||e.target.dataset.done)return;
  e.target.dataset.done=1;
  var el=e.target,to=+el.dataset.to,pre=el.dataset.prefix||'',suf=el.dataset.suffix||'',dec=+(el.dataset.dec||0);
  var t0=performance.now();
  function step(t){var k=Math.min(1,(t-t0)/1400),ease=1-Math.pow(1-k,3);
    el.textContent=pre+(to*ease).toFixed(dec)+suf;if(k<1)requestAnimationFrame(step);}
  requestAnimationFrame(step);
});},{threshold:0.6});
document.querySelectorAll('.stat .num').forEach(function(el){cIO.observe(el);});

/* whitespace quadrant */
var quad=document.getElementById('quad');
if(quad){D.whitespace.players.forEach(function(p){
  var dot=document.createElement('div');
  dot.className='plot'+(p.mine?' mine':'');
  dot.style.left=(p.x*100)+'%';dot.style.bottom=(p.y*100)+'%';
  var tip=document.createElement('span');tip.className='tip';
  var b=document.createElement('b');b.textContent=p.n;tip.appendChild(b);
  tip.appendChild(document.createTextNode(' — '+p.d));
  dot.appendChild(tip);quad.appendChild(dot);
});}

/* detective / the hook */
var filesEl=document.getElementById('files');
var cases=D.hook.cases,opened=0;
var detCountWrap=document.getElementById('detStatus');
if(detCountWrap)detCountWrap.innerHTML='Cards opened: <b id="detCount">0</b> / '+cases.length+' — '+D.hook.statusInitialTail;
cases.forEach(function(c){
  var f=document.createElement('div');f.className='file';
  var real=c.verdict==='real';
  f.innerHTML='<div class="file-inner">'
    +'<div class="file-face file-front"><div class="fname">'+c.name+'</div>'
    +'<div class="fmeta">'+c.meta+'</div><div class="clue">'+c.clue+'</div>'
    +'<div class="stamp">Tap to investigate</div></div>'
    +'<div class="file-face file-back"><div class="verdict '+(real?'v-real':'v-fail')+'">'
    +(real?'✓ '+(c.tag||'Holds up'):'✗ '+(c.tag||'Fails scrutiny'))+'</div>'
    +'<div class="fdet">'+c.det+'</div></div></div>';
  f.addEventListener('click',function(){
    if(f.classList.contains('flipped'))return;
    f.classList.add('flipped');opened++;
    var cnt=document.getElementById('detCount');if(cnt)cnt.textContent=opened;
    if(opened===cases.length){detCountWrap.classList.add('solved');detCountWrap.innerHTML=D.hook.statusSolvedHtml;}
  });
  filesEl.appendChild(f);
});

/* personas */
var pg=document.getElementById('personaGrid');
D.personas.items.forEach(function(p){
  var el=document.createElement('div');el.className='persona';
  el.innerHTML='<div class="persona-inner">'
    +'<div class="persona-face persona-front"><div class="pmono">'+(p.name.trim()[0]||'')+'</div>'
    +'<div class="pinfo"><div class="pname">'+p.name+'</div><div class="prole">'+p.role+'</div>'
    +'<div class="pflip">↻ Flip — what converts them</div></div></div>'
    +'<div class="persona-face persona-back">'
    +'<div class="pblk"><div class="pl">Buying trigger</div><div class="pt">'+p.trig+'</div></div>'
    +'<div class="pblk"><div class="pl">The objection</div><div class="pt">'+p.obj+'</div></div>'
    +'<div class="pblk pconv"><div class="pl">What converts them ✓</div><div class="pt">'+p.conv+'</div></div>'
    +'</div></div>';
  el.addEventListener('click',function(){el.classList.toggle('flipped');});
  pg.appendChild(el);
});

/* tycoon decisions */
var decEl=document.getElementById('decisions'),decisions=D.tycoon.decisions,decMade=0,decRight=0;
var tycScore=document.getElementById('tycScore');
tycScore.innerHTML='Decisions made: <b>0 / '+decisions.length+'</b>';
decisions.forEach(function(d){
  var box=document.createElement('div');box.className='decision';
  box.innerHTML='<div class="dq">'+d.q+'</div><div class="dctx">'+d.ctx+'</div>';
  var opts=document.createElement('div');opts.className='opts';
  var fb=document.createElement('div');fb.className='feedback';
  var goodOpt=d.opts.filter(function(x){return x.good;})[0];
  d.opts.forEach(function(o){
    var b=document.createElement('button');b.className='opt';b.textContent=o.t;
    b.addEventListener('click',function(){
      [].slice.call(opts.children).forEach(function(c){c.disabled=true;});
      b.classList.add(o.good?'chosen-good':'chosen-bad');
      fb.className='feedback show '+(o.good?'good':'bad');
      fb.innerHTML=(o.good?'✓ ':'✗ ')+o.fb+(o.good?'':'<br><br><b>The dossier’s call:</b> '+(goodOpt?goodOpt.t:'')+'.');
      decMade++;if(o.good)decRight++;
      tycScore.innerHTML='Decisions made: <b>'+decMade+' / '+decisions.length+'</b>'
        +(decMade===decisions.length?' — you matched the diligence on <b>'+decRight+' of '+decisions.length+'</b>. '+(decRight===decisions.length?'A clean board.':'The dossier argues the greener option each time.'):'');
    });
    opts.appendChild(b);
  });
  box.appendChild(opts);box.appendChild(fb);decEl.appendChild(box);
});

/* wage bars */
var wt=document.getElementById('wageTrack');
if(wt){var wIO=new IntersectionObserver(function(es){es.forEach(function(e){
  if(!e.isIntersecting)return;
  e.target.querySelectorAll('.wage-bar-inner').forEach(function(b){b.style.width=b.dataset.w+'%';});
  wIO.unobserve(e.target);
});},{threshold:0.4});wIO.observe(wt);}

/* quiz */
var quiz=D.quiz.items,qi=0,score=0;
var qText=document.getElementById('qText'),qOpts=document.getElementById('qOpts'),
    qExplain=document.getElementById('qExplain'),qNext=document.getElementById('qNext'),
    qProgress=document.getElementById('qProgress');
function renderQ(){
  var item=quiz[qi];
  qProgress.textContent='Question '+(qi+1)+' of '+quiz.length;
  qText.textContent=item.q;
  qOpts.innerHTML='';qExplain.className='q-explain';qNext.className='q-next';
  item.opts.forEach(function(o,i){
    var b=document.createElement('button');b.className='q-opt';b.textContent=o;
    b.addEventListener('click',function(){
      [].slice.call(qOpts.children).forEach(function(c,ci){c.disabled=true;if(ci===item.a)c.classList.add('correct');});
      if(i===item.a)score++;else b.classList.add('wrong');
      qExplain.innerHTML=(i===item.a?'✓ Right. ':'✗ ')+item.e;
      qExplain.classList.add('show');qNext.classList.add('show');
      qNext.textContent=qi<quiz.length-1?'Next →':'See your score →';
    });
    qOpts.appendChild(b);
  });
}
qNext.addEventListener('click',function(){
  if(qi<quiz.length-1){qi++;renderQ();}
  else{
    document.getElementById('quizCard').style.display='none';
    var r=document.getElementById('quizResult');r.classList.add('show');
    document.getElementById('scoreNum').textContent=score;
    document.getElementById('scoreDen').textContent=quiz.length;
    var ratio=score/quiz.length,msg;
    if(ratio>=1)msg='Full marks. You’ve internalised the whole thesis.';
    else if(ratio>=0.7)msg='Strong recall — you could brief the room.';
    else if(ratio>=0.4)msg='Solid grasp of the shape of the deal.';
    else msg='A quick reread wouldn’t hurt — the story’s worth it.';
    document.getElementById('scoreMsg').textContent=msg;
  }
});
renderQ();

document.getElementById('voteYes').addEventListener('click',function(){document.getElementById('voteMsg').innerHTML=D.vote.yesMsg;});
document.getElementById('voteNo').addEventListener('click',function(){document.getElementById('voteMsg').innerHTML=D.vote.noMsg;});
})();
