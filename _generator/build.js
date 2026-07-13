/* build.js <data.json> <out.html>
   Assembles a playable page from a business data file + engine.css + engine.js.
   Assets referenced relatively: assets/hero.mp4, assets/hero-sd.mp4, assets/hero-poster.jpg, case.html, ../ (hub). */
const fs=require('fs'),path=require('path');
const here=__dirname;
const CSS=fs.readFileSync(path.join(here,'engine.css'),'utf8');
const ENGINE=fs.readFileSync(path.join(here,'engine.js'),'utf8');
const LOGO_PATHS=fs.readFileSync(path.join(here,'aamara_paths.txt'),'utf8').trim();
const LOGO=`<svg class="topbar-logo" viewBox="312 272 410 82" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Aamara Capital">${LOGO_PATHS}</svg>`;
const dataPath=process.argv[2], outPath=process.argv[3];
const d=JSON.parse(fs.readFileSync(dataPath,'utf8'));

const stat=s=>`<div class="stat reveal"><div class="num" data-to="${s.to}" data-prefix="${s.prefix||''}" data-suffix="${s.suffix||''}"${s.dec?` data-dec="${s.dec}"`:''}>${s.prefix||''}0${s.suffix||''}</div><div class="lab">${s.labelHtml}</div></div>`;
const wrow=r=>`<div class="wage-row"><div class="wl"><span>${r.label}</span><b>${r.value}</b></div><div class="wage-bar-outer"><div class="wage-bar-inner ${r.cls}" data-w="${r.w}">${r.barText||''}</div></div></div>`;

/* --- optional building blocks (default to the classic video treatment) --- */
const DEFAULT_HERO_STAGE=`<div class="wheel-stage">
      <div class="wheel-ring2"></div><div class="wheel-ring"></div>
      <video class="wheel-video" autoplay muted loop playsinline preload="metadata" poster="assets/hero-poster.jpg">
        <source src="assets/hero.mp4" type="video/mp4">
      </video>
    </div>`;
const heroStage = d.hero.stageHtml || DEFAULT_HERO_STAGE;
const imgbandStyle = d.imgband.style || 'background-image:url(assets/hero-poster.jpg)';
const DEFAULT_WAGE_MEDIA=`<div class="wage-img">
        <video class="wage-video" autoplay muted loop playsinline preload="none" poster="assets/hero-poster.jpg">
          <source src="assets/hero.mp4" type="video/mp4">
        </video>
      </div>`;
const wageMedia = d.human.mediaHtml || DEFAULT_WAGE_MEDIA;
const dossierLabelTop = d.meta.dossierLabel || 'Full dossier ↗';
const dossierLabelFoot = (d.footer && d.footer.dossierLabel) || 'Open the full dossier →';

/* optional A–Z alphabet range module */
const alphabetSection = a => !a ? '' : `
<section id="range" data-chapter="The Range">
  <div class="wrap">
    <div class="kicker reveal">${a.kicker}</div>
    <h2 class="sec-title reveal d1">${a.titleHtml}</h2>
    <p class="lead reveal d2">${a.lead}</p>
    <div class="alpha-grid reveal d2">
      ${a.tiles.map(t=>`<div class="alpha-tile${(a.heroLetters||[]).indexOf(t.l)>-1?' hero':''}"><span class="al">${t.l}</span><span class="aw">${t.w}</span></div>`).join('')}
    </div>
    ${a.note?`<p class="note reveal d3" style="margin-top:22px;text-align:center;">${a.note}</p>`:''}
  </div>
</section>`;

const DATA_JSON=JSON.stringify(d).replace(/</g,'\\u003c');

const html=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="robots" content="noindex,nofollow">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${d.meta.title}</title>
<style>${CSS}</style>
</head>
<body>
<div class="topbar"><a href="../">← All ideas</a><a class="topbar-brand" href="../">${LOGO}</a><a href="case.html">${dossierLabelTop}</a></div>
<div class="progress-rail" id="rail"></div>
<nav class="chapter-dots" id="dots"></nav>

<section id="hero" data-chapter="Start">
  <div class="wrap">
    <div class="hero-badge">${d.hero.badge}</div>
    <h1 class="hero-title">${d.hero.titleHtml}</h1>
    <p class="hero-sub">${d.hero.sub}</p>
    ${heroStage}
    <a href="#opportunity" class="start-btn">${d.hero.startLabel||'Begin ↓'}</a>
    <div class="scroll-hint">Scroll to play · ~6 minutes</div>
  </div>
</section>

<section id="opportunity" data-chapter="The Opening">
  <div class="wrap">
    <div class="kicker reveal">${d.opening.kicker}</div>
    <h2 class="sec-title reveal d1">${d.opening.titleHtml}</h2>
    <p class="lead reveal d2">${d.opening.lead}</p>
    <div class="stat-grid" id="statGrid">${d.opening.stats.map(stat).join('')}</div>
  </div>
</section>

<div class="imgband" style="${imgbandStyle}">
  <div class="cap"><div class="ct">${d.imgband.title}</div><div class="cs">${d.imgband.sub}</div></div>
</div>

<section id="whitespace" data-chapter="The Whitespace">
  <div class="wrap">
    <div class="kicker reveal">${d.whitespace.kicker}</div>
    <h2 class="sec-title reveal d1">${d.whitespace.titleHtml}</h2>
    <p class="lead reveal d2">${d.whitespace.lead}</p>
    <div class="quad-shell reveal d2">
      <div>
        <div class="quad" id="quad">
          <div class="gap-zone">${d.whitespace.gapLabelHtml}</div>
          <span class="axis-y top">${d.whitespace.axisYtop}</span>
          <div class="axis-x"><span>${d.whitespace.axisXleft}</span><span>${d.whitespace.axisXright}</span></div>
        </div>
      </div>
      <div class="card reveal d3">${d.whitespace.sidebarHtml}</div>
    </div>
  </div>
</section>

<section id="hook" class="detective-bg" data-chapter="${d.hook.chapter}">
  <div class="wrap">
    <div class="kicker reveal">${d.hook.kicker}</div>
    <h2 class="sec-title reveal d1">${d.hook.titleHtml}</h2>
    <p class="lead reveal d2">${d.hook.lead}</p>
    <div class="files reveal d2" id="files"></div>
    <div class="detective-status" id="detStatus"></div>
  </div>
</section>

<section id="personas" data-chapter="The Buyers">
  <div class="wrap">
    <div class="kicker reveal">${d.personas.kicker}</div>
    <h2 class="sec-title reveal d1">${d.personas.titleHtml}</h2>
    <p class="lead reveal d2">${d.personas.lead}</p>
    <div class="persona-grid reveal d2" id="personaGrid"></div>
  </div>
</section>

<section id="tycoon" class="tycoon-bg" data-chapter="Build It">
  <div class="wrap">
    <div class="kicker reveal">${d.tycoon.kicker}</div>
    <h2 class="sec-title reveal d1">${d.tycoon.titleHtml}</h2>
    <p class="lead reveal d2">${d.tycoon.lead}</p>
    <div id="decisions" class="reveal d2"></div>
    <div class="tyc-score" id="tycScore"></div>
  </div>
</section>
${alphabetSection(d.alphabet)}
<section id="human" data-chapter="${d.human.chapter}">
  <div class="wrap">
    <div class="kicker reveal">${d.human.kicker}</div>
    <h2 class="sec-title reveal d1">${d.human.titleHtml}</h2>
    <p class="lead reveal d2">${d.human.lead}</p>
    <div class="wage-shell reveal d2">
      <div class="wage-track" id="wageTrack">
        ${d.human.rows.map(wrow).join('\n        ')}
        <p class="note" style="margin-top:8px;">${d.human.note}</p>
      </div>
      ${wageMedia}
    </div>
  </div>
</section>

<section id="quiz" class="quiz-bg" data-chapter="The IC Vote">
  <div class="wrap">
    <div class="kicker reveal center">${d.quiz.kicker}</div>
    <h2 class="sec-title reveal d1" style="text-align:center;">${d.quiz.titleHtml}</h2>
    <p class="lead reveal d2" style="margin:0 auto;text-align:center;">${d.quiz.lead}</p>
    <div class="quiz-card reveal d2" id="quizCard">
      <div class="q-progress" id="qProgress"></div>
      <div class="q-text" id="qText"></div>
      <div class="q-opts" id="qOpts"></div>
      <div class="q-explain" id="qExplain"></div>
      <button class="q-next" id="qNext">Next →</button>
    </div>
    <div class="quiz-result" id="quizResult">
      <div class="q-progress">Your recall score</div>
      <div class="score-big"><span id="scoreNum">0</span>/<span id="scoreDen">5</span></div>
      <p class="lead" style="margin:14px auto 0;" id="scoreMsg"></p>
      <h3 style="font-size:2rem;margin:44px 0 6px;">Cast your vote</h3>
      <p class="note">${d.vote.prompt}</p>
      <div class="verdict-box">
        <button class="vote-btn vote-invest" id="voteYes">${d.vote.yesLabel}</button>
        <button class="vote-btn vote-pass" id="voteNo">${d.vote.noLabel}</button>
      </div>
      <div class="vote-msg" id="voteMsg"></div>
    </div>
  </div>
</section>

<footer>
  <div class="fwm">Aamara Capital</div>
  <div class="frule"></div>
  <p>${d.footer.note1}</p>
  <p>${d.footer.note2}</p>
  <div class="footlinks">
    <a class="deep-link solid" href="case.html">${dossierLabelFoot}</a>
    ${d.footer.extraLink?`<a class="deep-link solid" href="${d.footer.extraLink.href}">${d.footer.extraLink.label}</a>`:''}
    <a class="deep-link" href="../">← Back to all ideas</a>
  </div>
  <p style="margin-top:22px;font-size:.72rem;">${d.footer.videoCredit}</p>
</footer>

<script>window.__D=${DATA_JSON};</script>
<script>${ENGINE}</script>
</body>
</html>`;

fs.writeFileSync(outPath,html);
console.log('wrote',outPath,html.length,'bytes');
