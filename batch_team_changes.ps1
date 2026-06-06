$dir = "C:\Pravaltech\Developer\OneDrive - Praval\Desktop\Sample1\html-pages"

# In-house team pages only (NOT external partner pages)
$inHouseTeam = @(
  'team-scott.html','team-automn.html','team-kate.html','team-brandon.html',
  'team-logan.html','team-mel.html','team-mark.html','team-tim.html','team-andy.html'
)

$updated = 0
foreach ($name in $inHouseTeam) {
  $file = Join-Path $dir $name
  if (-not (Test-Path $file)) { Write-Host "NOT FOUND: $name"; continue }

  $raw = [System.IO.File]::ReadAllText($file)
  $content = $raw -replace "`r`n", "`n"
  $original = $content

  # 1. Photo background: add white background + padding
  $content = $content.Replace(
    '.tm-profile__photo{border-radius:12px;overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,.35)}',
    '.tm-profile__photo{border-radius:14px;overflow:hidden;box-shadow:0 16px 48px rgba(0,0,0,.25);background:#fff;padding:6px}'
  )
  $content = $content.Replace(
    '.tm-profile__photo img{width:100%;height:auto;display:block}',
    '.tm-profile__photo img{width:100%;height:auto;display:block;border-radius:8px}'
  )

  # 2. Remove "Schedule a Call with [Name]" button from tm-profile__info (ag-btn-primary in profile)
  #    Pattern: <a href="..." class="ag-btn-primary" target="_blank" rel="noopener">Schedule a Call with ...</a>
  $content = [regex]::Replace($content,
    '<a\s+href="[^"]*"\s+class="ag-btn-primary"\s+target="_blank"\s+rel="noopener">Schedule a Call with[^<]*</a>',
    '')

  # 3. Remove "Schedule a Call" button from tm-cta (keep "Meet the Full Team")
  $content = [regex]::Replace($content,
    '<a\s+href="[^"]*"\s+class="ag-btn-primary"\s+target="_blank"\s+rel="noopener">Schedule a Call</a>',
    '')

  # 4. Clean up any resulting empty lines inside tm-cta__btns
  $content = [regex]::Replace($content, '(\n\s*){3,}', "`n`n")

  if ($content -ne $original) {
    [System.IO.File]::WriteAllText($file, $content, [System.Text.Encoding]::UTF8)
    $updated++
    Write-Host "UPDATED: $name"
  } else {
    Write-Host "unchanged: $name"
  }
}
Write-Host "`nDone. Updated: $updated"
