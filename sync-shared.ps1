<#
  sync-shared.ps1
  -----------------------------------------------------------------------------
  Propagates the shared NAV and FOOTER from partials\ into every page in
  html-pages\, so you edit the header/footer ONCE instead of in 46 files.

  Workflow:
    1. Edit partials\nav.html and/or partials\footer.html
    2. Run:  .\sync-shared.ps1
    3. git add . ; git commit -m "..." ; git push

  Notes:
    * Replaces only the <nav class="ag-nav">...</nav> and
      <footer class="ag-footer">...</footer> blocks. Page-unique content,
      <head> CSS, and scripts are never touched.
    * home.html is EXCLUDED from the nav sync (it uses an older nav structure
      that its own CSS is built for). It still receives the footer sync.
      Edit home.html's nav by hand if needed.
    * Preserves each file's original UTF-8 BOM and uses CRLF line endings.
    * Use -WhatIf to preview which files would change without writing.
#>
[CmdletBinding(SupportsShouldProcess = $true)]
param(
  [string]$Root
)

if (-not $Root) {
  $Root = if ($PSScriptRoot) { $PSScriptRoot } elseif ($MyInvocation.MyCommand.Path) { Split-Path -Parent $MyInvocation.MyCommand.Path } else { (Get-Location).Path }
}

$pagesDir   = Join-Path $Root 'html-pages'
$navPath    = Join-Path $Root 'partials\nav.html'
$footerPath = Join-Path $Root 'partials\footer.html'

# Pages excluded from the NAV sync (older/custom nav). Footer still syncs.
$navExclude = @('home.html')

function Read-FileWithBom([string]$path) {
  $bytes = [System.IO.File]::ReadAllBytes($path)
  $hasBom = ($bytes.Length -ge 3 -and $bytes[0] -eq 0xEF -and $bytes[1] -eq 0xBB -and $bytes[2] -eq 0xBF)
  if ($hasBom) {
    $text = [System.Text.Encoding]::UTF8.GetString($bytes, 3, $bytes.Length - 3)
  } else {
    $text = [System.Text.Encoding]::UTF8.GetString($bytes)
  }
  return [pscustomobject]@{ Text = $text; Bom = $hasBom }
}

function Write-FileWithBom([string]$path, [string]$text, [bool]$bom) {
  $enc = New-Object System.Text.UTF8Encoding($bom)
  [System.IO.File]::WriteAllText($path, $text, $enc)
}

function To-Lf([string]$s) { return ($s -replace "`r`n", "`n") }

if (-not (Test-Path $navPath))    { throw "Missing partial: $navPath" }
if (-not (Test-Path $footerPath)) { throw "Missing partial: $footerPath" }

# Load partials as LF base, trailing newline stripped. Per-file line endings
# are applied below so each page keeps its own style (no mixed CRLF/LF).
$navBaseLf    = To-Lf ((Read-FileWithBom $navPath).Text.TrimEnd("`r","`n"))
$footerBaseLf = To-Lf ((Read-FileWithBom $footerPath).Text.TrimEnd("`r","`n"))

$navRegex    = [regex]'(?s)<nav class="ag-nav">.*?</nav>'
$footerRegex = [regex]'(?s)<footer class="ag-footer">.*?</footer>'

# MatchEvaluators return per-file insertion strings (set inside the loop, so
# $-sequences in the content are never treated as regex group references).
$navEval    = [System.Text.RegularExpressions.MatchEvaluator]{ param($m) $script:navIns }
$footerEval = [System.Text.RegularExpressions.MatchEvaluator]{ param($m) $script:footerIns }

$changed = 0; $skipped = 0; $warned = 0
Get-ChildItem -Path $pagesDir -Filter '*.html' | Sort-Object Name | ForEach-Object {
  $file = $_
  $f = Read-FileWithBom $file.FullName
  $orig = $f.Text
  $new  = $orig

  # Match the file's own line-ending style so we don't create mixed CRLF/LF.
  $nl = if ($orig -match "`r`n") { "`r`n" } else { "`n" }
  $script:navIns    = $navBaseLf    -replace "`n", $nl
  $script:footerIns = $footerBaseLf -replace "`n", $nl

  $doNav = $navExclude -notcontains $file.Name
  if ($doNav) {
    if ($navRegex.IsMatch($new)) { $new = $navRegex.Replace($new, $navEval, 1) }
    else { Write-Warning "$($file.Name): no <nav class=`"ag-nav`"> block found (nav skipped)"; $warned++ }
  }

  if ($footerRegex.IsMatch($new)) { $new = $footerRegex.Replace($new, $footerEval, 1) }
  else { Write-Warning "$($file.Name): no <footer class=`"ag-footer`"> block found (footer skipped)"; $warned++ }

  if ($new -ne $orig) {
    if ($PSCmdlet.ShouldProcess($file.Name, 'sync nav/footer')) {
      Write-FileWithBom $file.FullName $new $f.Bom
    }
    $tag = if ($doNav) { 'nav+footer' } else { 'footer only' }
    Write-Output ("UPDATED  {0,-40} {1}" -f $file.Name, $tag)
    $changed++
  } else {
    $skipped++
  }
}

Write-Output ""
Write-Output ("Done. Updated {0}, unchanged {1}, warnings {2}." -f $changed, $skipped, $warned)
