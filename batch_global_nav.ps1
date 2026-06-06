$dir = "C:\Pravaltech\Developer\OneDrive - Praval\Desktop\Sample1\html-pages"
$files = Get-ChildItem -Path $dir -Filter "*.html"

# All replacements: [old, new] pairs applied in order
$replacements = @(

  # 1. Nav logo size: 46px -> 58px
  @(
    '.ag-nav__logo img { height: 46px; width: auto; object-fit: contain; display: block; }',
    '.ag-nav__logo img { height: 58px; width: auto; object-fit: contain; display: block; }'
  ),

  # 2. Nav inner: reduce left padding to push logo left
  @(
    'display: flex; align-items: center; padding: 0 28px; gap: 20px;',
    'display: flex; align-items: center; padding: 0 28px 0 10px; gap: 16px;'
  ),

  # 3. Desktop About Us: add Fiduciary vs. Broker between Our Team and FAQs
  @(
    "          <a href=""https://tagplanning.wixstudio.com/demo/our-team"" target=""_top"">Our Team</a>`n          <a href=""https://tagplanning.wixstudio.com/demo/faqs"" target=""_top"">FAQs</a>",
    "          <a href=""https://tagplanning.wixstudio.com/demo/our-team"" target=""_top"">Our Team</a>`n          <a href=""https://tagplanning.wixstudio.com/demo/fiduciary-vs-broker"" target=""_top"">Fiduciary vs. Broker</a>`n          <a href=""https://tagplanning.wixstudio.com/demo/faqs"" target=""_top"">FAQs</a>"
  ),

  # 4. Desktop Insights: remove Fiduciary vs. Broker
  @(
    "          <a href=""https://tagplanning.wixstudio.com/demo/financial-calculators"" target=""_top"">Financial Calculators</a>`n          <a href=""https://tagplanning.wixstudio.com/demo/fiduciary-vs-broker"" target=""_top"">Fiduciary vs. Broker</a>",
    "          <a href=""https://tagplanning.wixstudio.com/demo/financial-calculators"" target=""_top"">Financial Calculators</a>"
  ),

  # 5. Desktop nav right: remove Careers link
  @(
    "<a href=""https://tagplanning.wixstudio.com/demo/careers"" class=""ag-nav__careers"" target=""_top"">Careers</a>`n      ",
    ''
  ),

  # 6. Mobile About Us: add Fiduciary vs. Broker (same pattern, different indentation context)
  @(
    "          <a href=""https://tagplanning.wixstudio.com/demo/our-team"" target=""_top"">Our Team</a>`n          <a href=""https://tagplanning.wixstudio.com/demo/faqs"" target=""_top"">FAQs</a>`n        </div>`n      </div>`n      <div class=""ag-mob__section"">",
    "          <a href=""https://tagplanning.wixstudio.com/demo/our-team"" target=""_top"">Our Team</a>`n          <a href=""https://tagplanning.wixstudio.com/demo/fiduciary-vs-broker"" target=""_top"">Fiduciary vs. Broker</a>`n          <a href=""https://tagplanning.wixstudio.com/demo/faqs"" target=""_top"">FAQs</a>`n        </div>`n      </div>`n      <div class=""ag-mob__section"">"
  ),

  # 7. Mobile Insights: remove Fiduciary vs. Broker (same as desktop pattern)
  # Already covered by pattern 4 (same link text, same indentation)

  # 8. Mobile nav: remove CAREERS link
  @(
    "      <a href=""https://tagplanning.wixstudio.com/demo/careers"" class=""ag-mob__link"" target=""_top"">CAREERS</a>`n      <div class=""ag-mob__bottom"">",
    '      <div class="ag-mob__bottom">'
  ),

  # 9. Footer sitemap: remove Careers link
  @(
    "`n          <a href=""https://tagplanning.wixstudio.com/demo/careers"" target=""_top"">Careers</a>",
    ''
  ),

  # 10. Font size: add html { font-size: 17px } after html,body rule
  @(
    'html, body { margin: 0; padding: 0; width: 100%; overflow-x: hidden; }',
    'html, body { margin: 0; padding: 0; width: 100%; overflow-x: hidden; }
html { font-size: 17px; }'
  )
)

$updated = 0; $skipped = 0
foreach ($file in $files) {
  $raw = [System.IO.File]::ReadAllText($file.FullName)
  $content = $raw -replace "`r`n", "`n"
  $changed = $false

  foreach ($pair in $replacements) {
    $old = $pair[0]; $new = $pair[1]
    if ($content.Contains($old)) {
      $content = $content.Replace($old, $new)
      $changed = $true
    }
  }

  if ($changed) {
    [System.IO.File]::WriteAllText($file.FullName, $content, [System.Text.Encoding]::UTF8)
    $updated++
    Write-Host "UPDATED: $($file.Name)"
  } else {
    $skipped++
    Write-Host "skipped: $($file.Name)"
  }
}
Write-Host "`nDone. Updated: $updated  Skipped: $skipped"
