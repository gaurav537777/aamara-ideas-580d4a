/* buildvendors.js <out.html> — branded, no-JS vendor sourcing sheet for Idea 01. */
const fs=require('fs'),path=require('path');
const here=__dirname;
const LOGO_PATHS=fs.readFileSync(path.join(here,'aamara_paths.txt'),'utf8').trim();
const LOGO=`<svg class="logo-mark" viewBox="312 272 410 82" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Aamara">${LOGO_PATHS}</svg>`;

// v = verified contact; nf = not found. phones/emails only where read off a live page.
const GROUPS=[
  { title:"Anchor OEM — tableware makers (private-label / custom)", vendors:[
    { n:"Clay Craft (India) Pvt. Ltd.", city:"Jaipur", tier:"Premium ceramic & new-bone-china tableware, mugs, hotelware — India's largest branded maker", custom:"Full OEM/ODM — custom shapes, moulds, decoration, private label", web:"claycraftindia.com", phone:"+91 80034 11101", email:"sales@claycraftindia.com", market:{u:"indiamart.com/crown-craft-india-private-limited",l:"IndiaMART"}, use:"Start the OEM/ODM conversation here — scalable premium private-label dinnerware & hotelware." },
    { n:"RNS Global Ceramics", city:"Khurja, UP", tier:"Stoneware / ceramic dinnerware, mugs, bowls, tea sets — mid, B2B", custom:"Yes — logo printing, custom shapes, colour match, private label", web:"rnsglobalceramics.com", phone:"9557744936", email:"partner@rnsglobalceramics.com", email2:"info@ / care@rnsglobalceramics.com", use:"Khurja OEM built for private label + logo/decal — good for custom stoneware runs. Use partner@ for private label." },
    { n:"Bharat Potteries Ltd. (BP Bharat)", city:"Jaipur", tier:"Fine bone china — dinner/tea sets, mugs; premium, ISO, est. 1978", custom:"Yes — bone-china private label / custom decoration", web:"bharatpotteries.com", phone:"+91 91160 00892", phone2:"+91 98290 36363", email:"info@bharatpotteries.com", market:{u:"indiamart.com/bharatpotteries-ltd",l:"IndiaMART"}, use:"A step above stoneware — premium fine-bone-china private label." },
    { n:"By Artist For Artist (BAFA Pottery)", city:"Jaipur", tier:"Handcrafted blue pottery, terracotta; bespoke hotelware, hand-painted — artisanal luxury", custom:"Yes — bespoke design; samples in 10–15 days", web:"byartistforartist.com", phone:"+91 97826 66666", phone2:"+91 88791 00086", email:"info@byartistforartist.com", market:{u:"indiamart.com/byartist-forartist",l:"IndiaMART"}, use:"Bespoke hand-painted blue-pottery / terracotta capsules & statement pieces." },
    { n:"DNF Ceramics", city:"Khurja, UP", tier:"Handmade dinnerware, planters, decor, custom gifts — 10k+ SKUs, est. 1976", custom:"Yes — custom designs, packaging, bulk runs", web:"dnfceramics.com", phone:"+91 80621 81327", phoneNote:"IndiaMART line — ask for a direct mobile", email:"hello@dnfceramics.com", market:{u:"indiamart.com/dnf-ceramic",l:"IndiaMART"}, use:"Handmade stoneware + planters/decor cross-sell; flexible on custom & bulk." },
    { n:"Hitkari Potteries", city:"New Delhi (Okhla)", tier:"Legacy bone-china & porcelain — heritage brand", custom:"Mostly own-brand — confirm private label on the call", web:"hitkari.co.in", phone:"+91 84488 20435", email:"sales@hitkari.co.in", use:"Bone-china benchmark / possible legacy OEM — ask directly if they take private label." }
  ]},
  { title:"Decal / monogram suppliers (for the A–Z program)", vendors:[
    { n:"Mulder (India) Pvt. Ltd.", city:"Bengaluru", tier:"Ceramic / glass / metal decals & transfers — European standards", custom:"Yes — custom decals (decal supplier, not a tableware maker)", web:"mulderindia.com", phone:"+91 80 2783 3523", phone2:"+91 63663 83500", email:"marketing@mulderindia.com", market:{u:"indiamart.com/mulder-india-pvtltd",l:"IndiaMART"}, use:"Monogram / logo decal supplier for the branding program — pair with a tableware OEM." },
    { n:"K.B. Polychem (India) Ltd.", city:"Agra, UP", tier:"Ceramic + heat-transfer decals; ceramic/glass colours — lead-free & cadmium-free", custom:"Yes — custom decal design + positioning help", web:"kbgroupindia.com", phone:"+91 562 297 0333", phone2:"+91 562 297 0666", email:"info@kbgroupindia.com", market:{u:"indiamart.com/kb-polychem-india",l:"IndiaMART"}, use:"Food-safe (lead/cadmium-free) ceramic decals — the compliance angle matters for tableware." },
    { n:"Surabhi Ceramics", city:"Mumbai / Thane", tier:"Decal transfer paper, ceramic/glass colours, precious-metal lines — materials, not a printer; est. 1994", custom:"Supplies the raw decal/transfer + colour materials", web:"surabhiceramics.com", phone:"079 4267 1535", phoneNote:"IndiaMART line", email:null, use:"Source of decal paper + food-safe colours if we ever control decoration in-house." },
    { n:"SIAK Transfers Ltd.", city:"Stoke-on-Trent, UK", tier:"Screen-printed ceramic / glass / sanitaryware decals — UK maker", custom:"Yes (UK)", web:"siaktransfers.com", phone:"+44 1782 839464", email:"sales@siaktransfers.com", use:"Premium decal fallback if Indian decal quality falls short — import cost/lead-time apply.", intl:true }
  ]},
  { title:"More OEM options (contact lives on the marketplace — verify on call)", vendors:[
    { n:"Fienza Ceramic LLP", city:"Morbi, Gujarat", tier:"Mugs, dinner sets, bowls, plates — mid, est. 2018", custom:"Manufacturer/trader — confirm private label on call", web:"indiamart.com/fienza-ceramic", phone:null, phoneNote:"use IndiaMART “Get Best Price”", email:"fienzaceramic@gmail.com", emailNote:"from directory listings, not a company page — verify first", market:{u:"indiamart.com/fienza-ceramic",l:"IndiaMART"}, use:"Morbi-cluster, price-competitive mug / dinner-set OEM at volume." },
    { n:"India Ceramic", city:"Khurja, UP", tier:"Handcrafted kitchenware, planters, designer crockery — mid", custom:"Yes — custom lines & brand collaborations", web:"indiaceramic.com", phone:null, phoneNote:"pull from indiaceramic.com/contact-us", email:null, use:"Another Khurja custom/OEM option." },
    { n:"HandiGlobal", city:"Khurja, UP", tier:"Export ceramic mugs, dinnerware, decor — FOB/CIF, container loads", custom:"Yes — B2B export / custom", web:"handiglobal.com", phone:null, phoneNote:"pull from handiglobal.com", email:null, use:"Export-oriented Khurja OEM if we scale to container volumes." }
  ]}
];

const tel=p=>p?`tel:${p.replace(/[^+\d]/g,'')}`:'';
const contactRow=(label,val,opts={})=>{
  if(!val) return `<div class="crow"><span class="cl">${label}</span><span class="cv nf">not found${opts.note?` — ${opts.note}`:''}</span></div>`;
  let inner=val;
  if(opts.type==='phone') inner=`<a href="${tel(val)}">${val}</a>`;
  else if(opts.type==='email') inner=`<a href="mailto:${val}">${val}</a>`;
  else if(opts.type==='web') inner=`<a href="https://${val}" target="_blank" rel="noopener">${val}</a>`;
  else if(opts.type==='market') inner=`<a href="https://${val.u}" target="_blank" rel="noopener">${val.l} ↗</a>`;
  return `<div class="crow"><span class="cl">${label}</span><span class="cv">${inner}${opts.note?` <span class="cnote">(${opts.note})</span>`:''}</span></div>`;
};
const vcard=v=>`<div class="vcard">
  <div class="vhead"><div class="vname">${v.n}${v.intl?' <span class="intl">UK</span>':''}</div><div class="vcity">${v.city}</div></div>
  <div class="vtier">${v.tier}</div>
  <div class="vcustom">✓ ${v.custom}</div>
  <div class="vcontacts">
    ${contactRow('Phone', v.phone, {type:'phone', note:v.phoneNote})}
    ${v.phone2?contactRow('Alt', v.phone2, {type:'phone'}):''}
    ${contactRow('Email', v.email, {type:'email', note:v.emailNote})}
    ${v.email2?contactRow('Alt', v.email2.split(' ')[0], {type:'email'}):''}
    ${contactRow('Web', v.web, {type:'web'})}
    ${v.market?contactRow('Listing', v.market, {type:'market'}):''}
  </div>
  <div class="vuse"><b>For us:</b> ${v.use}</div>
</div>`;
const group=g=>`<section class="vgroup"><h2>${g.title}</h2><div class="vgrid">${g.vendors.map(vcard).join('')}</div></section>`;

const out=process.argv[2];
const html=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="robots" content="noindex,nofollow">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Vendor Sourcing Sheet — Premium Earthenware</title>
<style>
:root{--cream:#faf9f5;--cream-2:#f3efe6;--paper:#fff;--charcoal:#141310;--charcoal-2:#0c0b0a;--gold:#a9782f;--gold-2:#b98a3e;--wine:#5c2b2e;--ember:#a8624f;--sage:#5f6b4e;--ink-soft:#5a5443;--ink-mute:#857c6a;--line:rgba(20,19,16,0.12);}
*{box-sizing:border-box;}
body{margin:0;background:var(--cream);color:var(--charcoal);font-family:"Jost","Segoe UI",Arial,sans-serif;line-height:1.6;-webkit-font-smoothing:antialiased;}
h1,h2,h3{font-family:"Cormorant Garamond","Georgia",serif;font-weight:600;margin:0;color:var(--charcoal-2);}
a{color:var(--wine);text-decoration:none;}
a:hover{color:var(--gold);}
b,strong{color:var(--charcoal-2);}
.topbar{display:flex;justify-content:space-between;align-items:center;padding:14px 6vw;border-bottom:1px solid var(--line);position:sticky;top:0;background:rgba(250,249,245,0.94);backdrop-filter:blur(6px);z-index:10;}
.topbar a{font-size:.68rem;letter-spacing:.16em;text-transform:uppercase;color:var(--ink-soft);border:1px solid var(--line);border-radius:30px;padding:8px 15px;transition:all .2s;}
.topbar a:hover{border-color:var(--gold);color:var(--gold);}
.brand{border:none!important;padding:0!important;display:flex;align-items:center;}
.logo-mark{height:22px;width:auto;display:block;}
.hero{padding:56px 6vw 26px;background:radial-gradient(ellipse at 50% 0%,rgba(92,43,46,0.08),transparent 60%),linear-gradient(180deg,#fff,#f3efe6);}
.eyebrow{font-size:.7rem;letter-spacing:.34em;text-transform:uppercase;color:var(--gold);margin-bottom:14px;}
.hero h1{font-size:clamp(2.2rem,5.4vw,3.5rem);line-height:1.03;}
.hero p{font-size:1.02rem;color:var(--ink-soft);max-width:820px;margin:16px 0 0;}
.disc{max-width:1180px;margin:22px 6vw 0;background:var(--paper);border:1px solid var(--gold);border-left:4px solid var(--gold);border-radius:10px;padding:16px 22px;font-size:.9rem;color:var(--ink-soft);}
.disc b{color:var(--gold);}
main{max-width:1180px;margin:0 auto;padding:14px 6vw 30px;}
.vgroup{padding:26px 0 10px;}
.vgroup h2{font-size:clamp(1.3rem,2.6vw,1.8rem);margin-bottom:16px;}
.vgroup h2::before{content:"";display:inline-block;width:24px;height:1px;background:var(--gold);vertical-align:middle;margin-right:12px;}
.vgrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:18px;}
.vcard{background:var(--paper);border:1px solid var(--line);border-top:2px solid var(--gold);border-radius:12px;padding:20px 22px;box-shadow:0 12px 28px -22px rgba(60,40,20,0.4);display:flex;flex-direction:column;}
.vhead{display:flex;justify-content:space-between;align-items:baseline;gap:10px;flex-wrap:wrap;}
.vname{font-family:"Cormorant Garamond",serif;font-size:1.3rem;color:var(--charcoal-2);line-height:1.1;}
.vname .intl{font-size:.6rem;letter-spacing:.1em;background:var(--wine);color:#fff;border-radius:10px;padding:2px 7px;vertical-align:middle;}
.vcity{font-size:.7rem;letter-spacing:.12em;text-transform:uppercase;color:var(--gold);white-space:nowrap;}
.vtier{font-size:.86rem;color:var(--ink-soft);margin:10px 0 12px;}
.vcustom{font-size:.8rem;color:#3f4a2c;background:rgba(95,107,78,0.12);border-radius:6px;padding:8px 10px;line-height:1.4;}
.vcontacts{margin:14px 0;border-top:1px solid var(--line);padding-top:12px;display:flex;flex-direction:column;gap:7px;}
.crow{display:flex;gap:10px;font-size:.86rem;align-items:baseline;}
.crow .cl{flex:0 0 62px;font-size:.62rem;letter-spacing:.12em;text-transform:uppercase;color:var(--ink-mute);padding-top:2px;}
.crow .cv{color:var(--charcoal);word-break:break-word;}
.crow .cv.nf{color:var(--ember);font-style:italic;}
.crow .cnote{color:var(--ink-mute);font-size:.74rem;}
.vuse{margin-top:auto;font-size:.84rem;color:var(--ink-soft);border-top:1px solid var(--line);padding-top:12px;}
.howto{margin-top:20px;background:var(--paper);border:1px solid var(--line);border-radius:12px;padding:26px 28px;}
.howto h3{font-size:1.4rem;margin:0 0 12px;}
.howto h3::before{content:"";display:inline-block;width:22px;height:1px;background:var(--gold);vertical-align:middle;margin-right:10px;}
.howto + .howto{margin-top:16px;}
.blist{margin:6px 0 0;padding:0;list-style:none;}
.blist li{position:relative;padding:8px 0 8px 22px;font-size:.92rem;color:var(--ink-soft);border-bottom:1px solid rgba(20,19,16,0.06);}
.blist li::before{content:"◆";position:absolute;left:0;top:8px;color:var(--gold);font-size:.66rem;}
footer{text-align:center;padding:40px 6vw 60px;background:#f3efe6;border-top:1px solid var(--line);margin-top:30px;}
footer .fwm{font-size:.72rem;letter-spacing:.34em;text-transform:uppercase;color:var(--gold);}
footer .frule{width:60px;height:1px;background:var(--gold);margin:16px auto;}
footer p{color:var(--ink-mute);font-size:.8rem;max-width:820px;margin:0 auto 8px;}
.flinks{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;margin-top:20px;}
.flinks a{display:inline-block;padding:12px 24px;border:1px solid var(--gold);border-radius:30px;color:var(--gold);font-size:.74rem;letter-spacing:.14em;text-transform:uppercase;}
.flinks a.solid{background:var(--gold);color:#fff;}
</style>
</head>
<body>
<div class="topbar">
  <a href="index.html">← Back to the case</a>
  <a class="brand" href="../">${LOGO}</a>
  <a href="case.html">v1 dossier ↗</a>
</div>
<div class="hero">
  <div class="eyebrow">Aamara Capital · Idea 01 · Sourcing</div>
  <h1>Vendor Sourcing Sheet</h1>
  <p>Real, publicly-listed makers for the design-and-outsource model — anchor OEM tableware factories, the decal printers for the A–Z monogram program, and back-up options. Design stays in-house; these make to our spec.</p>
</div>
<div class="disc"><b>Verified, not invented.</b> Every phone, email and URL below was read off a live page (company site or IndiaMART/Justdial) on 13 Jul 2026. Fields we couldn't verify say <b style="color:var(--ember)">not found</b> rather than a guessed number. Indian SMEs change mobiles often — reconfirm on the first call.</div>
<main>
${GROUPS.map(group).join('\n')}
<div class="howto">
  <h3>How to initiate contact</h3>
  <p style="font-size:.92rem;color:var(--ink-soft);">Where a direct email/mobile is verified (Clay Craft, RNS, Bharat, BAFA, DNF, Hitkari, Mulder, K.B. Polychem) — <b>email direct</b>; it reaches a sales manager faster than the marketplace. Where contact only lives on IndiaMART (Fienza, India Ceramic, HandiGlobal, Surabhi) — use the <b>“Get Best Price” / “Contact Supplier”</b> button; the seller's number is revealed and your lead forwarded. Numbers starting <b>8062…</b> / <b>079 4267…</b> are IndiaMART call-tracking lines — once connected, ask for a direct WhatsApp/mobile.</p>
  <p style="font-size:.92rem;color:var(--ink-soft);margin-top:10px;">First email should state: our brand, that we <b>design in-house and need OEM/private-label production</b>, the product & quality tier, whether we need <b>custom shapes/moulds vs decal-only</b>, indicative annual volume, and ask for catalogue + price list + MOQ.</p>
</div>
<div class="howto">
  <h3>What to ask on the first call</h3>
  <ul class="blist">
    <li><b>MOQ</b> per SKU and per colour/decal design — Khurja/Jaipur handmade typically <b>~500–1,000 pcs per shape</b>; bone-china & Morbi often higher.</li>
    <li><b>Custom moulds:</b> one-time tooling cost + lead time (new shape moulds ~<b>4–8 weeks</b>) vs decorating their existing bodies with our decal (much faster).</li>
    <li><b>Samples</b> ~10–15 days; <b>bulk</b> 30–60 days after design sign-off.</li>
    <li><b>Food-safe:</b> lead-free / cadmium-free certification on decals & glazes (ask K.B. Polychem / Mulder to confirm).</li>
    <li><b>Pricing basis:</b> ex-works vs FOB, retail vs bulk packaging, payment terms (advance % + balance).</li>
    <li><b>Capacity & consistency:</b> monthly capacity, breakage/reject policy, and whether they'll hold our moulds/decals exclusively.</li>
  </ul>
</div>
</main>
<footer>
  <div class="fwm">Aamara Capital</div>
  <div class="frule"></div>
  <p>Private preview — link-only, not indexed. A working sourcing sheet for Idea 01, to be verified vendor-by-vendor before any commitment.</p>
  <div class="flinks">
    <a class="solid" href="index.html">← Back to the playable case</a>
    <a href="../">All ideas</a>
  </div>
</footer>
</body>
</html>`;
fs.writeFileSync(out,html);
console.log('vendors written',out,html.length,'bytes');
