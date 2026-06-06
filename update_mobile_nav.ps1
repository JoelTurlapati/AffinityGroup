$dir = "C:\Pravaltech\Developer\OneDrive - Praval\Desktop\Sample1\html-pages"
$files = Get-ChildItem -Path $dir -Filter "*.html"

$old = '    <button class="ag-nav__burger" aria-label="Menu">&#9776;</button>' + "`n" + '  </div>' + "`n" + '</nav>'

$new = @'
    <button class="ag-nav__burger" id="agBurger" aria-label="Open Menu" aria-expanded="false">&#9776;</button>
  </div>
  <div class="ag-mobile-nav" id="agMobileNav" aria-hidden="true">
    <div class="ag-mobile-nav__inner">
      <div class="ag-mob__section">
        <button class="ag-mob__heading" data-toggle="mob-services">SERVICES <span class="ag-mob__caret">&#9662;</span></button>
        <div class="ag-mob__sub" id="mob-services">
          <span class="ag-mob__sub-heading">For Individuals</span>
          <a href="https://tagplanning.wixstudio.com/demo/total-wealth-management" target="_top">Total Wealth Management</a>
          <a href="https://tagplanning.wixstudio.com/demo/investment-management" target="_top">Investment Management</a>
          <a href="https://tagplanning.wixstudio.com/demo/real-estate-investing" target="_top">Real Estate Investing</a>
          <a href="https://tagplanning.wixstudio.com/demo/life-disability-insurance" target="_top">Insurance Planning</a>
          <a href="https://tagplanning.wixstudio.com/demo/estate-planning" target="_top">Estate Planning</a>
          <a href="https://tagplanning.wixstudio.com/demo/tax-planning-preparation" target="_top">Tax Planning &amp; Preparation</a>
          <span class="ag-mob__sub-heading">For Businesses</span>
          <a href="https://tagplanning.wixstudio.com/demo/outsourced-cfo" target="_top">Outsourced CFO</a>
          <a href="https://tagplanning.wixstudio.com/demo/401k-retirement" target="_top">401(k) &amp; Retirement Planning</a>
          <a href="https://tagplanning.wixstudio.com/demo/business-sale-planning" target="_top">Business Sale Planning</a>
          <a href="https://tagplanning.wixstudio.com/demo/executive-benefit-planning" target="_top">Executive Benefit Planning</a>
          <a href="https://tagplanning.wixstudio.com/demo/legal-structure" target="_top">Entity Structure &amp; Legal</a>
        </div>
      </div>
      <div class="ag-mob__section">
        <button class="ag-mob__heading" data-toggle="mob-about">ABOUT US <span class="ag-mob__caret">&#9662;</span></button>
        <div class="ag-mob__sub" id="mob-about">
          <a href="https://tagplanning.wixstudio.com/demo/our-team" target="_top">Our Team</a>
          <a href="https://tagplanning.wixstudio.com/demo/faqs" target="_top">FAQs</a>
        </div>
      </div>
      <div class="ag-mob__section">
        <button class="ag-mob__heading" data-toggle="mob-insights">INSIGHTS <span class="ag-mob__caret">&#9662;</span></button>
        <div class="ag-mob__sub" id="mob-insights">
          <a href="https://tagplanning.wixstudio.com/demo/content-library" target="_top">Content Library</a>
          <a href="https://tagplanning.wixstudio.com/demo/financial-calculators" target="_top">Financial Calculators</a>
          <a href="https://tagplanning.wixstudio.com/demo/fiduciary-vs-broker" target="_top">Fiduciary vs. Broker</a>
        </div>
      </div>
      <a href="https://tagplanning.wixstudio.com/demo/careers" class="ag-mob__link" target="_top">CAREERS</a>
      <div class="ag-mob__bottom">
        <span class="ag-mob__phone">(330)&nbsp;526-8412</span>
        <a href="https://wealth.emaplan.com/ema/SignIn?ema%2fria%2ftagplanning" class="ag-mob__portal" target="_blank" rel="noopener">Total Wealth Management Portal</a>
        <a href="https://tagplanning.wixstudio.com/demo/contact" class="ag-mob__cta" target="_top">SCHEDULE CONSULTATION</a>
      </div>
    </div>
  </div>
</nav>
<style>
.ag-mobile-nav{display:none;position:absolute;top:72px;left:0;right:0;background:#fff;z-index:9998;box-shadow:0 8px 32px rgba(0,0,0,.14);border-top:3px solid #1D7080;max-height:calc(100vh - 72px);overflow-y:auto}
.ag-mobile-nav.open{display:block}
.ag-mobile-nav__inner{padding:4px 0 20px}
.ag-mob__section{border-bottom:1px solid rgba(29,112,128,.1)}
.ag-mob__heading{display:flex;align-items:center;justify-content:space-between;width:100%;padding:15px 24px;font-family:'Inter',sans-serif;font-size:12.5px;font-weight:700;letter-spacing:.09em;color:#145568;text-transform:uppercase;background:none;border:none;cursor:pointer;text-align:left}
.ag-mob__heading:active{background:#f0f8fa}
.ag-mob__caret{font-size:10px;opacity:.7;transition:transform .2s}
.ag-mob__heading.open .ag-mob__caret{transform:rotate(180deg)}
.ag-mob__sub{display:none;background:#f7fbfc;padding:0 0 8px}
.ag-mob__sub.open{display:block}
.ag-mob__sub-heading{display:block;padding:10px 28px 4px;font-family:'Inter',sans-serif;font-size:10px;font-weight:700;color:#1D7080;text-transform:uppercase;letter-spacing:.12em}
.ag-mob__sub a{display:block;padding:10px 36px;font-family:'Inter',sans-serif;font-size:13.5px;color:#2d2d2d;text-decoration:none}
.ag-mob__sub a:active{background:#E6F4F7;color:#1D7080}
.ag-mob__link{display:block;padding:15px 24px;font-family:'Inter',sans-serif;font-size:12.5px;font-weight:700;letter-spacing:.09em;color:#145568;text-transform:uppercase;text-decoration:none;border-bottom:1px solid rgba(29,112,128,.1)}
.ag-mob__link:active{color:#C9A84C}
.ag-mob__bottom{padding:20px 24px 8px;display:flex;flex-direction:column;gap:12px}
.ag-mob__phone{font-family:'Inter',sans-serif;font-size:14px;font-weight:600;color:#145568}
.ag-mob__portal{display:block;padding:11px 18px;text-align:center;background:#1D7080;color:#fff;border-radius:4px;font-family:'Inter',sans-serif;font-size:12.5px;font-weight:600;text-decoration:none;letter-spacing:.03em}
.ag-mob__cta{display:block;padding:13px 18px;text-align:center;border:2px solid #C9A84C;color:#C9A84C;border-radius:5px;font-family:'Inter',sans-serif;font-size:12.5px;font-weight:700;text-decoration:none;letter-spacing:.06em;text-transform:uppercase}
@media(max-width:900px){.ag-nav__burger{display:flex!important;align-items:center;justify-content:center;width:40px;height:40px;font-size:22px;background:none;border:none;color:#145568;cursor:pointer;border-radius:4px;margin-left:auto}.ag-nav__burger:active{background:#f0f8fa}}
</style>
<script>
(function(){
  var burger=document.getElementById('agBurger');
  var drawer=document.getElementById('agMobileNav');
  if(!burger||!drawer)return;
  burger.addEventListener('click',function(){
    var open=drawer.classList.toggle('open');
    burger.setAttribute('aria-expanded',String(open));
    burger.setAttribute('aria-label',open?'Close Menu':'Open Menu');
    burger.innerHTML=open?'&#10005;':'&#9776;';
    drawer.setAttribute('aria-hidden',String(!open));
  });
  drawer.querySelectorAll('[data-toggle]').forEach(function(btn){
    btn.addEventListener('click',function(){
      var id=btn.getAttribute('data-toggle');
      var sub=document.getElementById(id);
      if(!sub)return;
      var isOpen=sub.classList.toggle('open');
      btn.classList.toggle('open',isOpen);
    });
  });
})();
</script>
'@

$updated = 0
$skipped = 0

foreach ($file in $files) {
  $raw = [System.IO.File]::ReadAllText($file.FullName)
  # Normalize to LF for matching
  $content = $raw -replace "`r`n", "`n"

  if ($content.Contains($old)) {
    $content = $content.Replace($old, $new)
    [System.IO.File]::WriteAllText($file.FullName, $content, [System.Text.Encoding]::UTF8)
    $updated++
    Write-Host "UPDATED: $($file.Name)"
  } else {
    $skipped++
    Write-Host "SKIPPED: $($file.Name)"
  }
}

Write-Host ""
Write-Host "Done. Updated: $updated  Skipped: $skipped"
