/* buildbrief.js <slug> <out.html> — a concise, no-JS, brand-consistent brief for ideas 10 & 11. */
const fs=require('fs'),path=require('path');
const here=__dirname;
const LOGO_PATHS=fs.readFileSync(path.join(here,'aamara_paths.txt'),'utf8').trim();
const LOGO=`<svg class="logo-mark" viewBox="312 272 410 82" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Aamara">${LOGO_PATHS}</svg>`;

const BRIEFS = {
  digitaltwin: {
    num:"10", eyebrow:"Business Idea 10 · New", title:"The Digital Twin",
    thesis:"A navigable 3D twin of every building, inspectable for safety, sounds like a government mandate. It isn't one — and this brief is candid about why. The real, buildable version is an <b>owner-funded compliance twin</b> for the formal, high-occupancy stock, sold at the moment of an existing regulatory obligation.",
    verdict:{label:"Verdict", text:"The “government mandates and pays for a twin of everything” model is a mirage. A regulation-triggered, owner-funded compliance twin — riding the recurring Fire-NOC renewal and insurer incentives — is a real, wedge-able business, and the only version where payer, beneficiary and mandate line up."},
    stats:[
      {n:"S$73M", l:"Virtual Singapore — first whole-nation twin, completed 2022"},
      {n:"2035", l:"India's target for a National Digital Twin of major cities (Geospatial Policy 2022)"},
      {n:"330M", l:"structures in India — the scale a “twin everything” mandate must cover"},
      {n:"₹155cr", l:"Genesys's Mumbai city-twin (BMC) — exterior layer only"}
    ],
    sections:[
      {h:"What it actually is", cards:[
        {t:"3D scan / point cloud", d:"Raw geometry from LiDAR or photogrammetry — a shape, not knowledge. Knows a surface is there, not that it's a 2-hour fire door."},
        {t:"BIM", d:"A structured model where every element is a semantic object (fire rating, material). Authored at design, or reconstructed from a scan (“Scan-to-BIM”). A static as-built record."},
        {t:"Digital twin", d:"BIM + a live sensor layer — continuously updated. Most “city twins” today (incl. Mumbai) are really high-fidelity 3D models, not fully sensored twins."}
      ]},
      {h:"The precedents that worked — and the pattern", body:"<b>Every</b> successful government “mandate” rides <b>building-permit or public-procurement leverage on NEW construction, with the owner paying</b>. None has compelled a walkable twin of existing occupied private stock.", cards:[
        {t:"UK BIM mandate (2016)", d:"BIM Level 2 required on centrally-procured public projects. Procurement leverage on new builds. The national-twin research vehicle (CDBB) closed in 2022."},
        {t:"Dubai 3D-BIM permit (2024)", d:"Municipality only accepts permit applications with a 3D BIM for large/specialised buildings — for automated code-checking. The cleanest owner-funded template."},
        {t:"India — CPWD BIM / Geospatial Policy", d:"BIM on new large government projects; National Geospatial Policy 2022 targets city twins by 2035; Genesys already builds city-exterior twins (Mumbai, Varanasi, Ayodhya)."}
      ]},
      {h:"The challenges (the point of this brief)", cards:[
        {t:"Existing buildings", d:"New builds bake a twin in at design; existing ones must be scanned room-by-room. ~70% of cost is human modelling that doesn't fall with cheaper hardware. Occupied, private, no as-built drawings."},
        {t:"Illegal & informal stock", d:"12–20M urban households in unauthorised housing. Owners of the highest-risk stock have a negative incentive to be documented — fatal to full coverage."},
        {t:"Who pays", d:"Single-payer government = budget cycles, procurement, turnover (UK's programme closed after 5 years). Recurring value accrues to private owners, not the state."},
        {t:"Privacy & security", d:"A walkable interior map of every premises is a surveillance-grade dataset. Virtual Singapore is access-restricted for this reason; post-DPDP 2023 it's a flashpoint in India."}
      ]},
      {h:"The wedge — the version that works", body:"A <b>permit-and-compliance twin for the formal, high-value, high-risk segment</b> (malls, hospitals, high-rises, IT parks), sold at the moment of an existing regulatory transaction, with the <b>owner paying</b>:", list:[
        "Ride the recurring <b>Fire-NOC / fire-safety-certificate renewal</b> — a fee these owners already pay periodically. (The Occupancy Certificate is one-time; the fire certificate renews.)",
        "Deliver a Scan-to-BIM compliance twin that auto-checks NBC 2016 / state fire code, gives the fire department a pre-incident 3D + evacuation model, and becomes the FM system-of-record.",
        "The government <b>recognises</b> the twin as the compliance artefact (regulation) — it does not pay for it (owner pays, as in Dubai).",
        "Bundle with <b>insurers</b>: verified compliance → risk-based premium discount → owner ROI independent of government budgets.",
        "Bake twins into new large projects via existing CPWD / Smart-Cities BIM mandates (zero marginal scan cost) as reference wins."
      ]},
      {h:"Real players to know", body:"Bentley (iTwin), Dassault (3DEXPERIENCity — under Virtual Singapore), Autodesk (Revit/Tandem), Esri, Matterport (the “walk-through” capture leader), NavVis. India: <b>Genesys International</b> (listed; city twins + Survey of India partnership). Cautionary tale: <b>Cityzenith</b>, a standalone city-twin startup, collapsed — a direct warning on the model."},
      {h:"Economics & cautions", list:[
        "Scan-to-BIM (existing buildings, indicative EST.): laser scanning ~$0.20–0.70/sqft; modelling ~$0.15–0.75/sqft (up to $2–10+ for dense MEP/healthcare). A 50,000 sqft building ≈ $12,500–52,500. EST.",
        "The cost is mostly irreducible human labour — it does not fall with cheaper hardware. That is the scaling wall.",
        "A twin that isn't updated is a decaying photograph — maintenance is permanent OpEx, not one-off CapEx.",
        "Single-customer government dependency is the core fragility; the wedge deliberately shifts the payer to the owner."
      ]}
    ],
    sources:"Virtual Singapore (NRF/Dassault, S$73M, 2022); UK BIM Level 2 mandate 2016 / CDBB; Dubai Municipality 3D-BIM permit 2024; India National Geospatial Policy 2022, CPWD BIM, NBC 2016, Fire-NOC/OC regimes; Genesys International (NSE filings); Scan-to-BIM pricing (industry); digital-twin market forecasts (MarketsandMarkets, MarkNtel). Figures marked EST. are estimates."
  },
  playschool: {
    num:"11", eyebrow:"Business Idea 11 · New", title:"The First Classroom",
    thesis:"A premium Mumbai playschool in the spirit of an Arth or a Casa Bambino. Premium preschool is a <b>thin, defensible slice</b> at the very top of a deep, cheap market — and the moat is not the interiors. It's low ratios, safety, a founder you'd hand your child to, and a pathway into a top school.",
    verdict:{label:"Verdict", text:"A credibly pedagogy-led, safety-obsessed, small-batch premium house — founder-led, with a top-school pathway — can own a defensible slice. But it is slow, cohort-gated and trust-fragile: the two things that break it are a bad lease and a single safety incident."},
    stats:[
      {n:"₹3L+", l:"top of the premium Mumbai annual fee band"},
      {n:"1:6", l:"premium teacher-to-child ratio (vs 1:15–20 mass)"},
      {n:"₹58k", l:"Mumbai's median preschool fee — premium is a thin slice above it"},
      {n:"~0", l:"central regulators for standalone preschools today (NEP 2020 is changing this)"}
    ],
    sections:[
      {h:"The two names on the table", cards:[
        {t:"“Artha” → the Arth archetype", d:"No premium Mumbai preschool trading as “Artha” could be verified. The likely reference is Arth Early Learning (Salt Lake, Kolkata) — Reggio-inspired, founder an IIT engineer, 5:1 ratios, cult following, batches booked a year out. Treat it as the archetype, not a Mumbai comp."},
        {t:"“Small Wonder” → the foil", d:"A mid-market North-India franchise (est. 2011, <10 outlets, ₹2–5L to open, 15% royalty). The crowded, undifferentiated tier — a foil to avoid being confused with, not a premium comp."}
      ]},
      {h:"The premium landscape (Mumbai)", body:"The premium tier is a thin top slice; the median fee is only ~₹58k.", cards:[
        {t:"Premium chains", d:"KLAY (~₹2.3–3.2L, Reggio + daycare), Kangaroo Kids (~₹1.8–2.4L; founded 1993, sold into EuroKids/KKR)."},
        {t:"Ultra-premium boutiques", d:"Casa Bambino (Juhu Montessori, ₹2.16–2.64L), Little Palms (Malabar Hill, ₹2.4–3.0L), Toddler's Den, Circles & Cycles."},
        {t:"International early years", d:"Oberoi International, Dhirubhai Ambani, Aditya Birla — ₹3L–8L+, attached to an IB/IGCSE K-12. A more capital-heavy game."}
      ]},
      {h:"What “premium” must credibly mean", body:"The pedagogy label (“Montessori”/“Reggio”) is an <b>unprotected buzzword</b> — everyone claims it. It is the ticket to entry, not the moat. What actually justifies ₹2.5–3.5L:", list:[
        "Low teacher:child ratios (1:6–1:8) — the single clearest premium signal.",
        "Safety & safeguarding — vetted staff, live-CCTV parent access, documented protocols. The biggest unmet anxiety in Mumbai.",
        "A credible founder-educator face — the thing a chain structurally can't fake.",
        "A pathway — feeder assurance or credible prep into a sought-after K-12. Parents pay most for admission de-risking.",
        "Beautiful, safe space — table stakes, not a differentiator on its own."
      ]},
      {h:"Unit economics (a premium standalone, EST.)", body:"This is a <b>rent-and-trust business, not a franchise-kit business</b>. Illustrative single-centre figures (EST., for modelling):", list:[
        "Fee ₹2.0–2.5L/child; revenue at ~80% full (~80 kids) ≈ ₹1.6–2.0cr.",
        "Rent ₹3–6L/month (₹36–72L/yr) — the dominant cost; a great prime ground-floor lease is the biggest source of durable margin.",
        "Salaries ₹50–80L (low ratios = high headcount). Break-even ~55–75 children.",
        "Upfront fit-out + deposit ₹1.0–2.5cr; time to break-even 18–36 months (cohort-gated, ~1 intake/yr).",
        "Fees paid upfront → strong negative working capital once full. Mature EBITDA 25–40% only above ~75% occupancy."
      ]},
      {h:"White space & the biggest risks", body:"Defensible white space: a founder-led, pedagogy-authentic, small-batch house that owns <b>safety transparency</b> and a <b>top-school pathway</b>, optionally with a flexible premium-daycare format for dual-income professionals. The risks, rank-ordered:", list:[
        "Real-estate cost & availability — a bad lease kills the model. The #1 risk and the #1 lever.",
        "A single trust/safety incident — existential and reputationally uninsurable in a word-of-mouth category.",
        "Key-person / founder dependence — hard to franchise without breaking the promise (why Kangaroo Kids exited to a chain).",
        "Slow, cohort-gated scaling; and NEP-2020-driven regulation ahead (a moat for the compliant, a cost for the sloppy)."
      ]}
    ],
    sources:"Arth Early Learning (arthshaala.com); Small Wonder (FranchiseIndia); fee data (Edustoke, Kiddenz, Edufund); KLAY, Kangaroo Kids (Tracxn/YourStory); India preschool market size (IMARC/EMR/TechSci); NEP 2020 / Balvatika (education.gov.in). “Artha” could not be verified as a Mumbai preschool and is mapped to the Arth archetype, not invented. All ₹ figures for the standalone P&L are EST. triangulations."
  }
};

const slug=process.argv[2], out=process.argv[3];
const b=BRIEFS[slug];
if(!b){console.error('unknown brief',slug);process.exit(1);}

const statTile=s=>`<div class="stile"><div class="sn">${s.n}</div><div class="sl">${s.l}</div></div>`;
const cardEl=c=>`<div class="dcard"><div class="dct">${c.t}</div><div class="dcd">${c.d}</div></div>`;
const section=s=>`<section class="brief-sec">
  <h2>${s.h}</h2>
  ${s.body?`<p class="bp">${s.body}</p>`:''}
  ${s.cards?`<div class="dcards">${s.cards.map(cardEl).join('')}</div>`:''}
  ${s.list?`<ul class="blist">${s.list.map(x=>`<li>${x}</li>`).join('')}</ul>`:''}
</section>`;

const html=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="robots" content="noindex,nofollow">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${b.title} — Aamara Capital brief</title>
<style>
:root{--cream:#faf9f5;--cream-2:#f3efe6;--paper:#fff;--charcoal:#141310;--charcoal-2:#0c0b0a;--gold:#a9782f;--gold-2:#b98a3e;--wine:#5c2b2e;--ember:#a8624f;--sage:#5f6b4e;--ink-soft:#5a5443;--ink-mute:#857c6a;--line:rgba(20,19,16,0.12);}
*{box-sizing:border-box;}
body{margin:0;background:var(--cream);color:var(--charcoal);font-family:"Jost","Segoe UI",Arial,sans-serif;line-height:1.65;-webkit-font-smoothing:antialiased;}
h1,h2,h3{font-family:"Cormorant Garamond","Georgia",serif;font-weight:600;margin:0;color:var(--charcoal-2);}
a{color:var(--wine);text-decoration:none;}
em{color:var(--ember);font-style:italic;}
b,strong{color:var(--charcoal-2);}
.topbar{display:flex;justify-content:space-between;align-items:center;padding:14px 6vw;border-bottom:1px solid var(--line);position:sticky;top:0;background:rgba(250,249,245,0.94);backdrop-filter:blur(6px);z-index:10;}
.topbar a{font-size:.68rem;letter-spacing:.16em;text-transform:uppercase;color:var(--ink-soft);border:1px solid var(--line);border-radius:30px;padding:8px 15px;transition:all .2s;}
.topbar a:hover{border-color:var(--gold);color:var(--gold);}
.brand{display:flex;align-items:center;gap:0;border:none!important;padding:0!important;}
.logo-mark{height:22px;width:auto;display:block;}
.hero{padding:64px 6vw 30px;background:radial-gradient(ellipse at 50% 0%,rgba(92,43,46,0.08),transparent 60%),linear-gradient(180deg,#fff,#f3efe6);}
.eyebrow{font-size:.7rem;letter-spacing:.34em;text-transform:uppercase;color:var(--gold);margin-bottom:16px;}
.hero h1{font-size:clamp(2.4rem,6vw,4rem);line-height:1.02;}
.thesis{font-size:clamp(1.05rem,1.8vw,1.3rem);color:var(--ink-soft);max-width:820px;margin:20px 0 0;}
.verdict{max-width:1100px;margin:30px 6vw 0;background:var(--paper);border:1px solid var(--gold);border-left:4px solid var(--gold);border-radius:10px;padding:22px 26px;box-shadow:0 12px 30px -24px rgba(60,40,20,0.5);}
.verdict .vl{font-size:.66rem;letter-spacing:.2em;text-transform:uppercase;color:var(--gold);margin-bottom:8px;}
.verdict .vt{font-size:1.02rem;color:var(--charcoal);}
.stiles{max-width:1100px;margin:30px auto 0;padding:0 6vw;display:grid;grid-template-columns:repeat(4,1fr);gap:18px;}
@media(max-width:760px){.stiles{grid-template-columns:1fr 1fr;}}
.stile{background:var(--paper);border:1px solid var(--line);border-top:2px solid var(--gold);border-radius:8px;padding:20px;}
.stile .sn{font-family:"Cormorant Garamond",serif;font-size:2.2rem;color:var(--gold);line-height:1;}
.stile .sl{font-size:.78rem;color:var(--ink-soft);margin-top:10px;}
main{max-width:1100px;margin:0 auto;padding:10px 6vw 40px;}
.brief-sec{padding:34px 0;border-bottom:1px solid var(--line);}
.brief-sec h2{font-size:clamp(1.5rem,3vw,2.1rem);margin-bottom:14px;}
.brief-sec h2::before{content:"";display:inline-block;width:26px;height:1px;background:var(--gold);vertical-align:middle;margin-right:12px;}
.bp{font-size:1rem;color:var(--ink-soft);max-width:820px;}
.dcards{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:16px;margin-top:18px;}
.dcard{background:var(--paper);border:1px solid var(--line);border-radius:10px;padding:18px 20px;box-shadow:0 10px 24px -20px rgba(60,40,20,0.3);}
.dcard .dct{font-family:"Cormorant Garamond",serif;font-size:1.2rem;color:var(--charcoal-2);margin-bottom:6px;}
.dcard .dcd{font-size:.86rem;color:var(--ink-soft);line-height:1.55;}
.blist{margin:16px 0 0;padding:0;list-style:none;}
.blist li{position:relative;padding:8px 0 8px 24px;font-size:.94rem;color:var(--ink-soft);border-bottom:1px solid rgba(20,19,16,0.06);}
.blist li::before{content:"◆";position:absolute;left:0;top:8px;color:var(--gold);font-size:.7rem;}
footer{text-align:center;padding:44px 6vw 64px;background:#f3efe6;border-top:1px solid var(--line);}
footer .fwm{font-size:.72rem;letter-spacing:.34em;text-transform:uppercase;color:var(--gold);}
footer .frule{width:60px;height:1px;background:var(--gold);margin:16px auto;}
footer p{color:var(--ink-mute);font-size:.8rem;max-width:820px;margin:0 auto 10px;}
.flinks{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;margin-top:20px;}
.flinks a{display:inline-block;padding:12px 24px;border:1px solid var(--gold);border-radius:30px;color:var(--gold);font-size:.74rem;letter-spacing:.14em;text-transform:uppercase;}
.flinks a.solid{background:var(--gold);color:#fff;}
</style>
</head>
<body>
<div class="topbar">
  <a href="../">← All ideas</a>
  <a class="brand" href="../">${LOGO}</a>
  <a href="index.html">▶ Play this case</a>
</div>
<div class="hero">
  <div class="eyebrow">Aamara Capital · ${b.eyebrow}</div>
  <h1>${b.title}</h1>
  <p class="thesis">${b.thesis}</p>
</div>
<div class="verdict"><div class="vl">${b.verdict.label}</div><div class="vt">${b.verdict.text}</div></div>
<div class="stiles">${b.stats.map(statTile).join('')}</div>
<main>
${b.sections.map(section).join('\n')}
</main>
<footer>
  <div class="fwm">Aamara Capital</div>
  <div class="frule"></div>
  <p><b>Sources.</b> ${b.sources}</p>
  <p style="margin-top:12px;">Private preview — link-only, not indexed. A concise brief companion to the playable case.</p>
  <div class="flinks">
    <a class="solid" href="index.html">▶ Play the interactive case</a>
    <a href="../">← Back to all ideas</a>
  </div>
</footer>
</body>
</html>`;
fs.writeFileSync(out,html);
console.log('brief written',out,html.length,'bytes');
