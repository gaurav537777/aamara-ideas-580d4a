/* buildhub.js <outdir>  — reads data/1..9.json meta, writes <outdir>/index.html (the hub). Light theme. */
const fs=require('fs'),path=require('path');
const here=__dirname, outdir=process.argv[2];
const nums=['1','2','3','4','5','6','7','8','9','10','11'];
const biz=nums.map(n=>{const d=JSON.parse(fs.readFileSync(path.join(here,'data',n+'.json'),'utf8'));return {n:n,num:d.meta.num,name:d.meta.hubName,tag:d.meta.hubTagline,thumbStyle:d.meta.thumbStyle,thumbGlyph:d.meta.thumbGlyph,fresh:d.meta.fresh};});
const LOGO_PATHS=fs.readFileSync(path.join(here,'aamara_paths.txt'),'utf8').trim();
const logoSvg=`<svg class="logo-mark" viewBox="312 272 410 82" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Aamara">${LOGO_PATHS}</svg>`;

const thumb=b=>b.thumbStyle
  ? `<div class="bthumb bthumb-art" style="${b.thumbStyle}"><span class="bnum">${b.num}</span><span class="bglyph">${b.thumbGlyph||''}</span></div>`
  : `<div class="bthumb" style="background-image:url(${b.n}/assets/hero-poster.jpg)"><span class="bnum">${b.num}</span></div>`;
const card=b=>`    <article class="bcard">
      ${thumb(b)}${b.fresh?`<span class="bribbon">${b.fresh}</span>`:''}
      <div class="bbody">
        <h3 class="bname">${b.name}</h3>
        <p class="btag">${b.tag}</p>
        <div class="blinks"><span class="bplay">▶ Play the case</span><a class="bdoss" href="${b.n}/case.html">Full dossier ↗</a></div>
      </div>
      <a class="bstretch" href="${b.n}/" aria-label="Play the ${b.name} case"></a>
    </article>`;

const html=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="robots" content="noindex,nofollow">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Aamara Capital — Eleven Business Ideas</title>
<style>
:root{--cream:#faf9f5;--paper:#ffffff;--charcoal:#141310;--charcoal-2:#0c0b0a;--gold:#a9782f;--wine:#5c2b2e;--ember:#a8624f;--ink-soft:#5a5443;--ink-mute:#857c6a;--line:rgba(20,19,16,0.12);}
*{box-sizing:border-box;}
body{margin:0;background:var(--cream);color:var(--charcoal);font-family:"Jost","Segoe UI",Arial,sans-serif;line-height:1.6;-webkit-font-smoothing:antialiased;}
h1,h2,h3{font-family:"Cormorant Garamond","Georgia",serif;font-weight:600;margin:0;color:var(--charcoal-2);}
a{color:inherit;text-decoration:none;}
em{color:var(--ember);font-style:italic;}
.hero{text-align:center;padding:70px 6vw 44px;background:radial-gradient(ellipse at 50% 16%,rgba(92,43,46,0.09),transparent 60%),linear-gradient(180deg,#ffffff,#f3efe6);}
.logo-mark{height:46px;width:auto;display:block;margin:0 auto 10px;}
.logo-sub{font-family:"Jost",sans-serif;font-size:.7rem;letter-spacing:.62em;text-transform:uppercase;color:var(--gold);text-indent:.62em;}
.logo-tag{font-family:"Cormorant Garamond",serif;font-style:italic;font-size:1rem;color:var(--ink-mute);margin-top:8px;}
.wm-rule{width:60px;height:1px;background:var(--gold);margin:26px auto 24px;}
.htitle{font-size:clamp(2.4rem,6vw,4.2rem);line-height:1.04;text-wrap:balance;}
.htitle em{color:var(--ember);font-style:italic;}
.hsub{max-width:660px;margin:18px auto 0;color:var(--ink-soft);font-size:clamp(1rem,1.6vw,1.16rem);}
.hnote{margin-top:20px;font-size:.7rem;letter-spacing:.14em;text-transform:uppercase;color:var(--ink-mute);}
.grid{max-width:1160px;margin:0 auto;padding:40px 5vw 90px;display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
@media(max-width:920px){.grid{grid-template-columns:1fr 1fr;}}
@media(max-width:600px){.grid{grid-template-columns:1fr;}}
.bcard{position:relative;display:flex;flex-direction:column;background:var(--paper);border:1px solid var(--line);border-radius:16px;overflow:hidden;
  box-shadow:0 12px 30px -22px rgba(60,40,20,0.4);transition:transform .28s ease,border-color .28s ease,box-shadow .28s ease;}
.bcard:hover{transform:translateY(-6px);border-color:var(--gold);box-shadow:0 26px 46px -26px rgba(60,40,20,0.5);}
.bthumb{height:172px;background-size:cover;background-position:center;position:relative;overflow:hidden;}
.bthumb::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(12,11,10,0.05),rgba(12,11,10,0.28));}
.bthumb-art .bglyph{position:absolute;right:12px;bottom:-16px;z-index:1;font-family:"Cormorant Garamond",serif;font-size:6.4rem;line-height:1;color:rgba(255,255,255,0.16);}
.bribbon{position:absolute;top:14px;right:14px;z-index:3;font-size:.6rem;letter-spacing:.16em;text-transform:uppercase;color:#fff;background:var(--wine);border:1px solid rgba(255,255,255,0.5);border-radius:20px;padding:5px 12px;box-shadow:0 6px 16px -8px rgba(0,0,0,0.5);}
.bnum{position:absolute;top:14px;left:16px;z-index:2;font-family:"Cormorant Garamond",serif;font-size:1.3rem;color:#fff;
  background:rgba(12,11,10,0.5);border:1px solid rgba(255,255,255,0.65);width:42px;height:42px;border-radius:50%;display:flex;align-items:center;justify-content:center;}
.bbody{padding:20px 22px 22px;display:flex;flex-direction:column;flex:1;}
.bname{font-size:1.6rem;color:var(--charcoal-2);line-height:1.1;}
.btag{font-size:.86rem;color:var(--ink-soft);margin:9px 0 18px;flex:1;}
.blinks{display:flex;align-items:center;justify-content:space-between;gap:10px;}
.bplay{font-size:.72rem;letter-spacing:.14em;text-transform:uppercase;color:var(--gold);border:1px solid var(--gold);border-radius:30px;padding:9px 16px;transition:all .2s;}
.bcard:hover .bplay{background:var(--gold);color:#fff;}
.bdoss{position:relative;z-index:2;font-size:.7rem;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-mute);border-bottom:1px solid transparent;padding-bottom:2px;transition:all .2s;}
.bdoss:hover{color:var(--wine);border-color:var(--gold);}
.bstretch{position:absolute;inset:0;z-index:1;}
footer{text-align:center;padding:44px 6vw 72px;border-top:1px solid var(--line);background:#f3efe6;}
footer p{color:var(--ink-mute);font-size:.8rem;max-width:660px;margin:0 auto 8px;}
footer b{color:var(--gold);}
</style>
</head>
<body>
<div class="hero">
  ${logoSvg}
  <div class="logo-sub">Capital</div>
  <div class="logo-tag">Driven by passion, built on trust</div>
  <div class="wm-rule"></div>
  <h1 class="htitle">Eleven ideas,<br>made <em>playable</em>.</h1>
  <p class="hsub">Each candidate has a full dossier — and an interactive walk-through where you investigate, meet the buyers, make the calls and decide. <em>Idea 01 is reworked around the Diwali plan; ideas 10 &amp; 11 are new.</em></p>
  <div class="hnote">Tap any card to play · or open its dossier</div>
</div>
<main class="grid">
${biz.map(card).join('\n')}
</main>
<footer>
  <p>Private preview — link-only, not indexed. Every number in every walk-through is drawn from that business's dossier, including its <b>EST.</b> flags.</p>
  <p style="font-size:.72rem;margin-top:14px;">Videos: Pexels (free/commercial licence). Prepared for Aamara Capital.</p>
</footer>
</body>
</html>`;
fs.mkdirSync(outdir,{recursive:true});
fs.writeFileSync(path.join(outdir,'index.html'),html);
console.log('hub written:',path.join(outdir,'index.html'),html.length,'bytes');
