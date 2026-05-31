// ─── Shared NAV / FOOTER (self-contained per Wix requirement) ────────────────

const NAV_HTML = `
<nav class="ag-nav">
  <div class="ag-nav__inner">
    <a href="/" class="ag-nav__logo">
      <img src="/public/assets/HomePage/TheAffinityGroupLogo.jpeg" alt="The Affinity Group" />
    </a>
    <div class="ag-nav__links">
      <div class="ag-nav__item ag-nav__item--drop">
        <span class="ag-nav__label">SERVICES <span class="ag-caret">&#9662;</span></span>
        <div class="ag-nav__drop">
          <span class="ag-nav__drop-heading">Services For Individuals</span>
          <a href="/total-wealth-management">Total Wealth Management</a>
          <a href="/investment-management">Investment Management</a>
          <a href="/real-estate-investing">Real Estate Investing</a>
          <a href="/life-disability-insurance">Life &amp; Disability Insurance</a>
          <a href="/401k-retirement">401k / Retirement</a>
          <a href="/estate-planning">Estate Planning</a>
          <a href="/tax-planning">Tax Planning</a>
          <span class="ag-nav__drop-heading">Services for Businesses</span>
          <a href="/outsourced-cfo">Outsourced CFO</a>
          <a href="/business-owners">Business Owners</a>
          <a href="/investment-management">Investment Management</a>
        </div>
      </div>
      <div class="ag-nav__item ag-nav__item--drop">
        <span class="ag-nav__label">ABOUT US <span class="ag-caret">&#9662;</span></span>
        <div class="ag-nav__drop">
          <a href="/our-team">Our Team</a>
          <a href="/faqs">FAQs</a>
        </div>
      </div>
      <div class="ag-nav__item">
        <a href="/contact" class="ag-nav__label">CONTACT</a>
      </div>
      <div class="ag-nav__item ag-nav__item--drop">
        <span class="ag-nav__label">MEDIA <span class="ag-caret">&#9662;</span></span>
        <div class="ag-nav__drop">
          <a href="/videos">Videos</a>
          <a href="/fiduciary-vs-broker">Fiduciary vs. Broker</a>
          <a href="/emoney">eMoney – Your Financial GPS</a>
        </div>
      </div>
    </div>
    <div class="ag-nav__right">
      <a href="https://wealth.emaplan.com/ema/SignIn?ema%2fria%2ftagplanning" class="ag-nav__portal" target="_blank" rel="noopener">Total Wealth Management Portal</a>
      <span class="ag-nav__phone">(330)&nbsp;526-8412</span>
      <a href="/careers" class="ag-nav__careers">Careers</a>
    </div>
    <button class="ag-nav__burger" aria-label="Menu">&#9776;</button>
  </div>
</nav>`;

const FOOTER_HTML = `
<footer class="ag-footer">
  <div class="ag-footer__inner">
    <div class="ag-footer__top">
      <div class="ag-footer__col">
        <div class="ag-footer__doc-links">
          <a href="/public/assets/HomePage/PrivacyPolicy.pdf" target="_blank">Privacy Policy</a>
          <a href="/public/assets/HomePage/CRS.pdf" target="_blank">CRS</a>
          <a href="/public/assets/HomePage/ADV.pdf" target="_blank">ADV</a>
        </div>
        <div class="ag-footer__social">
          <a href="https://www.facebook.com/TAGplanning" target="_blank" rel="noopener" aria-label="Facebook">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a href="https://www.linkedin.com/company/the-affinity-group-ltd/" target="_blank" rel="noopener" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a href="https://www.youtube.com/channel/UCEWvjYuO47uzLSznDZrn4bA" target="_blank" rel="noopener" aria-label="YouTube">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#0e3d47"/></svg>
          </a>
        </div>
        <div class="ag-footer__address">4481 Munson St NW Ste 302, Canton OH, 44718<br />(330) 526-8412</div>
      </div>
      <div class="ag-footer__col">
        <p class="ag-footer__disclaimer">Affinity Wealth LLC is a Registered Investment Advisor and provides financial-planning services. Affinity Private Tax provides tax planning and tax preparation to select clients. Affinity Insurance Strategies LLC is a licensed Insurance Agency and works closely with Affinity Wealth LLC to provide services to our clients. Affinity Wealth LLC does not directly offer legal advice.</p>
      </div>
      <div class="ag-footer__col">
        <p class="ag-footer__sitemap-heading">Site Map</p>
        <div class="ag-footer__sitemap">
          <a href="/total-wealth-management">Total Wealth Management</a>
          <a href="/real-estate-investing">Real Estate Investing</a>
          <a href="/videos">Videos</a>
          <a href="/blog">Blog Articles</a>
          <a href="/fiduciary-vs-broker">Fiduciary vs. Broker</a>
          <a href="/contact">Contact</a>
          <a href="/investment-management">Investment Management</a>
          <a href="/life-disability-insurance">Insurance</a>
          <a href="/emoney">eMoney – Your Financial GPS</a>
          <a href="/our-team">Our Team</a>
          <a href="/faqs">FAQ's</a>
          <a href="/careers">Careers</a>
        </div>
      </div>
    </div>
    <div class="ag-footer__bottom">Copyright &copy; 2025 The Affinity Group. All rights reserved.</div>
  </div>
</footer>`;

// ─── Team Data ────────────────────────────────────────────────────────────────

const INHOUSE_TEAM = [
  {
    name: 'Scott Lowe',
    title: 'Founder & Senior Wealth Advisor',
    cardImg: '/public/assets/OurTeam/Scott/ScotCardImage.jpg',
    profileImg: '/public/assets/OurTeam/Scott/ScottImage.avif',
    link: '/team/scott-lowe'
  },
  {
    name: 'Automn Lowe',
    title: 'Chief Compliance Officer & Chief Operating Officer',
    cardImg: '/public/assets/OurTeam/Automn/AutomnCardImage.jpg',
    profileImg: '/public/assets/OurTeam/Automn/AutomnImage.avif',
    link: '/team/automn-lowe'
  },
  {
    name: 'Kate Bennett',
    title: 'Director of New Business & Service',
    cardImg: '/public/assets/OurTeam/kate/KateCardImage.jpg',
    profileImg: '/public/assets/OurTeam/kate/KateImage.avif',
    link: '/team/kate-bennett'
  },
  {
    name: 'Brandon Clemens',
    title: 'Financial Planner',
    cardImg: '/public/assets/OurTeam/Brandon/BrandonCardImage.avif',
    profileImg: '/public/assets/OurTeam/Brandon/BrandonImage.avif',
    link: '/team/brandon-clemens'
  },
  {
    name: 'Logan Hill',
    title: 'Financial Planner',
    cardImg: '/public/assets/OurTeam/Logan/LoganCardImage.jpg',
    profileImg: '/public/assets/OurTeam/Logan/LoganImage.avif',
    link: '/team/logan-hill'
  }
];

const EXTERNAL_TEAM = [
  {
    name: 'Mel Lute',
    title: 'Attorney',
    firm: 'Baker, Dublikar, Beek, Wiley & Matthews',
    location: 'Canton, OH',
    cardImg: '/public/assets/OurTeam/Mel/MelCardImage.png',
    profileImg: '/public/assets/OurTeam/Mel/MelImage.avif',
    link: '/team/mel-lute'
  },
  {
    name: 'Mark Trubiano',
    title: 'Attorney',
    firm: 'Cavitch Familo & Durkin',
    location: 'Cleveland, OH',
    cardImg: '/public/assets/OurTeam/Mark/MarkCardImage.jpg',
    profileImg: '/public/assets/OurTeam/Mark/MarkImage.avif',
    link: '/team/mark-trubiano'
  },
  {
    name: 'Tim Hefty',
    title: 'CPA',
    firm: 'Hefty CPA',
    location: 'Canton, OH',
    cardImg: '/public/assets/OurTeam/Tim/TimCardImage.jpg',
    profileImg: '/public/assets/OurTeam/Tim/TimImage.avif',
    link: '/team/tim-hefty'
  },
  {
    name: 'Andy Henton',
    title: 'CPA',
    firm: 'Henton & Associates',
    location: 'Cleveland, OH',
    cardImg: '/public/assets/OurTeam/Andy/andyCardImage.jpg',
    profileImg: '/public/assets/OurTeam/Andy/AndyImage.avif',
    link: '/team/andy-henton'
  },
  {
    name: 'Schechter Wealth',
    title: 'Wealth Advisory',
    firm: 'Schechter Wealth',
    location: 'Birmingham, MI',
    cardImg: null,
    profileImg: '/public/assets/OurTeam/Schechter/SchechterImage.avif',
    link: '/team/schechter-wealth'
  },
  {
    name: 'Leugers Insurance',
    title: 'Property & Casualty Insurance',
    firm: 'Leugers Insurance',
    location: 'Maria Stein, OH',
    cardImg: '/public/assets/OurTeam/Leugers/LeugersCardImage.png',
    profileImg: '/public/assets/OurTeam/Leugers/LeugersImage.avif',
    link: '/team/leugers'
  },
  {
    name: 'The Forker Company',
    title: 'Benefits Specialist',
    firm: 'The Forker Company',
    location: 'Zanesville, OH',
    cardImg: '/public/assets/OurTeam/theForker/TheForkerCardImage.png',
    profileImg: '/public/assets/OurTeam/theForker/ForkerImage.avif',
    link: '/team/the-forker-company'
  },
  {
    name: 'Atlas Certified Payroll',
    title: 'Payroll Provider',
    firm: 'Atlas Certified Payroll',
    location: 'Akron & Canton, OH',
    cardImg: '/public/assets/OurTeam/Atlas/atlasCardImage.jpg',
    profileImg: '/public/assets/OurTeam/Atlas/AtlasImage.avif',
    link: '/team/atlas-certified-payroll'
  },
  {
    name: 'Pioneer Financial Services',
    title: 'Mortgage Financial Services Provider',
    firm: 'Pioneer Financial Services',
    location: 'Canton, OH',
    cardImg: '/public/assets/OurTeam/Pioneer/pioneerCardImage.png',
    profileImg: '/public/assets/OurTeam/Pioneer/PioneerImage.avif',
    link: '/team/pioneer-financial'
  }
];

function teamCard(member, isExternal = false) {
  const imgSrc = member.cardImg || member.profileImg;
  return `
<a href="${member.link}" class="ot-card">
  <div class="ot-card__img">
    <img src="${imgSrc}" alt="${member.name}" loading="lazy" />
    <div class="ot-card__overlay">
      <span class="ot-card__cta">View Profile &#8594;</span>
    </div>
  </div>
  <div class="ot-card__body">
    <h3 class="ot-card__name">${member.name}</h3>
    <p class="ot-card__title">${member.title}</p>
    ${isExternal && member.firm ? `<p class="ot-card__firm">${member.firm} &bull; ${member.location}</p>` : ''}
  </div>
</a>`;
}

// ─── OurTeamPage Component ────────────────────────────────────────────────────

class OurTeamPage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
our-team-page{display:block;font-family:'Inter',sans-serif;color:#1a1a1a}

/* NAV */
.ag-nav{position:fixed;top:0;left:0;right:0;height:72px;z-index:9999;background:rgba(255,255,255,0.97);backdrop-filter:blur(10px);border-bottom:1px solid rgba(29,112,128,0.12);box-shadow:0 2px 24px rgba(0,0,0,0.07)}
.ag-nav__inner{max-width:1380px;margin:0 auto;height:100%;display:flex;align-items:center;padding:0 28px;gap:20px}
.ag-nav__logo img{height:46px;width:auto;object-fit:contain;display:block}
.ag-nav__links{display:flex;align-items:center;gap:4px;flex:1;justify-content:center}
.ag-nav__item{position:relative}
.ag-nav__label{display:block;padding:10px 14px;font-family:'Inter',sans-serif;font-size:12.5px;font-weight:700;letter-spacing:.09em;color:#145568;text-decoration:none;text-transform:uppercase;cursor:pointer;white-space:nowrap;transition:color .2s;border:none;background:none}
.ag-nav__label:hover,.ag-nav__item:hover .ag-nav__label{color:#C9A84C}
.ag-caret{font-size:10px;opacity:.7}
.ag-nav__drop{display:none;position:absolute;top:100%;left:0;background:#fff;min-width:230px;box-shadow:0 12px 40px rgba(0,0,0,0.13);border-top:3px solid #1D7080;border-radius:0 0 8px 8px;padding:8px 0;z-index:10000}
.ag-nav__item--drop:hover .ag-nav__drop{display:block}
.ag-nav__drop a{display:block;padding:9px 20px;font-family:'Inter',sans-serif;font-size:13px;color:#2d2d2d;text-decoration:none;transition:background .15s,color .15s}
.ag-nav__drop a:hover{background:#E6F4F7;color:#1D7080}
.ag-nav__drop-heading{display:block;padding:10px 20px 5px;font-size:10.5px;font-weight:700;color:#1D7080;text-transform:uppercase;letter-spacing:.12em;border-top:1px solid #f0f0f0;margin-top:4px}
.ag-nav__drop-heading:first-child{border-top:none;margin-top:0}
.ag-nav__right{display:flex;align-items:center;gap:14px;flex-shrink:0}
.ag-nav__portal{display:inline-block;padding:9px 15px;background:#1D7080;color:#fff;font-family:'Inter',sans-serif;font-size:11.5px;font-weight:600;text-decoration:none;border-radius:4px;white-space:nowrap;letter-spacing:.03em;transition:background .2s}
.ag-nav__portal:hover{background:#145568}
.ag-nav__phone{font-family:'Inter',sans-serif;font-size:13px;font-weight:600;color:#145568;white-space:nowrap}
.ag-nav__careers{font-family:'Inter',sans-serif;font-size:12px;font-weight:700;color:#C9A84C;text-decoration:none;text-transform:uppercase;letter-spacing:.07em;transition:color .2s}
.ag-nav__careers:hover{color:#a8873d}
.ag-nav__burger{display:none}

/* FOOTER */
.ag-footer{background:#0c3540;color:#8fb8c0;padding:56px 28px 28px;font-family:'Inter',sans-serif}
.ag-footer__inner{max-width:1200px;margin:0 auto}
.ag-footer__top{display:grid;grid-template-columns:1fr 1.4fr 1fr;gap:48px;padding-bottom:40px;border-bottom:1px solid rgba(255,255,255,0.08)}
.ag-footer__doc-links{display:flex;gap:20px;flex-wrap:wrap;margin-bottom:20px}
.ag-footer__doc-links a{color:#C9A84C;text-decoration:none;font-size:13px;font-weight:500;transition:color .2s}
.ag-footer__doc-links a:hover{color:#e8c96e}
.ag-footer__social{display:flex;gap:12px;margin-bottom:20px}
.ag-footer__social a{width:38px;height:38px;border-radius:50%;background:rgba(255,255,255,0.07);display:flex;align-items:center;justify-content:center;color:#fff;text-decoration:none;transition:background .2s}
.ag-footer__social a:hover{background:#1D7080}
.ag-footer__address{font-size:12.5px;line-height:1.8;color:#6a9ca5}
.ag-footer__disclaimer{font-size:12px;line-height:1.9;color:#6a9ca5}
.ag-footer__sitemap-heading{font-size:11px;font-weight:700;color:#fff;text-transform:uppercase;letter-spacing:.12em;margin-bottom:12px}
.ag-footer__sitemap{display:grid;grid-template-columns:1fr 1fr;gap:6px 16px}
.ag-footer__sitemap a{color:#8fb8c0;text-decoration:none;font-size:12.5px;transition:color .2s}
.ag-footer__sitemap a:hover{color:#fff}
.ag-footer__bottom{padding-top:28px;font-size:11.5px;color:#4f7f89;text-align:center}

/* ── PAGE HERO ── */
.ot-hero {
  padding: 130px 32px 72px;
  background: linear-gradient(135deg, #145568 0%, #1D7080 55%, #2a8a9c 100%);
  text-align: center;
}
.ot-hero h1 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2rem, 4.5vw, 3rem);
  color: #fff; font-weight: 700; margin-bottom: 20px;
}
.ot-hero p {
  max-width: 700px; margin: 0 auto;
  font-size: 1.08rem; line-height: 1.9; color: rgba(255,255,255,.85);
  font-weight: 300;
}
.ot-hero__bar { width: 56px; height: 3px; background: #C9A84C; margin: 0 auto 28px; }

/* ── INTRO TEXT ── */
.ot-intro {
  padding: 72px 32px; background: #fff; text-align: center;
}
.ot-intro__inner { max-width: 840px; margin: 0 auto; }
.ot-intro p {
  font-size: 1.08rem; line-height: 1.95; color: #3a3a3a; font-weight: 300;
}
.ot-intro em {
  font-style: italic; color: #1D7080; font-weight: 500;
}

/* ── TEAM SECTIONS ── */
.ot-section {
  padding: 80px 32px;
}
.ot-section--inhouse { background: #F0F8FA; }
.ot-section--external { background: #fff; }

.ot-section__inner { max-width: 1240px; margin: 0 auto; }

.ot-section__heading {
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  color: #145568; font-weight: 700;
  text-align: center; margin-bottom: 8px;
}
.ot-section__sub {
  text-align: center; font-size: .95rem; color: #6a8a92;
  margin-bottom: 56px;
}
.ot-section__bar { width: 56px; height: 3px; background: #C9A84C; margin: 0 auto 14px; }

/* Card grid */
.ot-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 28px;
}

/* Card */
.ot-card {
  text-decoration: none; display: block;
  border-radius: 10px; overflow: hidden;
  background: #fff;
  box-shadow: 0 4px 20px rgba(0,0,0,.07);
  transition: box-shadow .25s, transform .25s;
}
.ot-card:hover {
  box-shadow: 0 12px 40px rgba(29,112,128,.18);
  transform: translateY(-4px);
}

.ot-card__img {
  position: relative; height: 260px; overflow: hidden;
}
.ot-card__img img {
  width: 100%; height: 100%; object-fit: cover;
  transition: transform .4s;
}
.ot-card:hover .ot-card__img img { transform: scale(1.06); }

.ot-card__overlay {
  position: absolute; inset: 0;
  background: rgba(20,85,104,0);
  display: flex; align-items: flex-end; justify-content: center;
  padding-bottom: 20px;
  transition: background .3s;
}
.ot-card:hover .ot-card__overlay { background: rgba(20,85,104,.6); }

.ot-card__cta {
  color: #fff; font-family: 'Inter', sans-serif;
  font-size: 13px; font-weight: 600; letter-spacing: .04em;
  opacity: 0; transform: translateY(6px);
  transition: opacity .25s, transform .25s;
}
.ot-card:hover .ot-card__cta { opacity: 1; transform: translateY(0); }

.ot-card__body { padding: 20px 20px 22px; }
.ot-card__name {
  font-family: 'Playfair Display', serif;
  font-size: 1.05rem; color: #145568;
  font-weight: 700; margin-bottom: 5px;
}
.ot-card__title {
  font-size: .85rem; color: #6a8a92; line-height: 1.5;
  margin-bottom: 4px;
}
.ot-card__firm {
  font-size: .78rem; color: #C9A84C; font-weight: 500;
  line-height: 1.4;
}

/* External team label badge */
.ot-section--external .ot-card { border-top: 3px solid transparent; }
.ot-section--external .ot-card:hover { border-top-color: #C9A84C; }

@media (max-width: 900px) {
  .ag-nav__links,.ag-nav__right{display:none}
  .ag-nav__burger{display:block;font-size:22px;background:none;border:none;color:#145568;cursor:pointer}
  .ag-footer__top{grid-template-columns:1fr;gap:28px}
  .ot-grid{grid-template-columns:repeat(auto-fill,minmax(180px,1fr))}
  .ot-card__img{height:200px}
}
</style>

${NAV_HTML}

<main style="padding-top:72px">

  <!-- Hero -->
  <section class="ot-hero">
    <div class="ot-hero__bar"></div>
    <h1>Our Team</h1>
    <p>A multi-disciplined team of experts always at your fingertips.</p>
  </section>

  <!-- Intro -->
  <section class="ot-intro">
    <div class="ot-intro__inner">
      <p>Our In-House Canton, Ohio based fiduciary team combined with our network of External Specialists provide you with a <em>"Family CFO"</em> approach to managing 360 degrees of your financial life.</p>
    </div>
  </section>

  <!-- In-House Team -->
  <section class="ot-section ot-section--inhouse">
    <div class="ot-section__inner">
      <div class="ot-section__bar"></div>
      <h2 class="ot-section__heading">Our In-House Team</h2>
      <p class="ot-section__sub">Canton, Ohio &mdash; Fiduciary Advisors & Client Service</p>
      <div class="ot-grid">
        ${INHOUSE_TEAM.map(m => teamCard(m, false)).join('')}
      </div>
    </div>
  </section>

  <!-- External Team -->
  <section class="ot-section ot-section--external">
    <div class="ot-section__inner">
      <div class="ot-section__bar"></div>
      <h2 class="ot-section__heading">Our External Specialist Network</h2>
      <p class="ot-section__sub">Best-in-class professionals integrated into your financial team</p>
      <div class="ot-grid">
        ${EXTERNAL_TEAM.map(m => teamCard(m, true)).join('')}
      </div>
    </div>
  </section>

</main>

${FOOTER_HTML}
`;
  }
}

customElements.define('our-team-page', OurTeamPage);
