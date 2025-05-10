# Media Organization

I use Adobe Lightroom Classic to organize my photos and videos. Each device has its own catalog as I don't do any work that uses multiple devices and so far, I haven't had the need to have a single catalog for all devices. I use the `<Year>/<YYYY-MM-DD>/<file>` folder structure when importing files.

Lightroom doesn't support importing `.srt` (for telemetry) and `.lrf` (low resolution videos) files that DJI drones create so I use the following PowerShell script, providing `SourceDir` and `DryRun` parameters:

```powershell
# Parameters
param(
  [Parameter(Mandatory = $true)]
  [string]$SourceDir,

  [Parameter(Mandatory = $true)]
  [string]$DestDir,

  [switch]$DryRun = $false,

  [switch]$ShaCheck = $false,

  [switch]$Overwrite = $false
)

# Function to format file size in a human-readable format
function Format-FileSize {
  param([long]$Size)

  if ($Size -ge 1TB) { return "{0:N2} TB" -f ($Size / 1TB) }
  elseif ($Size -ge 1GB) { return "{0:N2} GB" -f ($Size / 1GB) }
  elseif ($Size -ge 1MB) { return "{0:N2} MB" -f ($Size / 1MB) }
  elseif ($Size -ge 1KB) { return "{0:N2} KB" -f ($Size / 1KB) }
  else { return "$Size Bytes" }
}

if ($DryRun) {
  Write-Host "DRY RUN MODE: No files will be moved" -ForegroundColor Yellow
}

Write-Host "Source directory: $SourceDir"
Write-Host "Destination directory: $DestDir"

# Verify directories exist
if (!(Test-Path -Path $SourceDir)) {
  Write-Host "Error: Source directory does not exist: $SourceDir" -ForegroundColor Red
  exit 1
}

if (!(Test-Path -Path $DestDir)) {
  if ($DryRun) {
    Write-Host "[DRY RUN] Would create destination directory: $DestDir" -ForegroundColor Cyan
  }
  else {
    Write-Host "Creating destination directory: $DestDir"
    New-Item -Path $DestDir -ItemType Directory -Force | Out-Null
  }
}

$files = Get-ChildItem -Path $SourceDir -File -Recurse
Write-Host "Found $($files.Count) files"
$files | ForEach-Object {
  $FILE = $_.FullName
  $MOD_DATE = $_.LastWriteTime.ToString("yyyy-MM-dd")
  $YEAR = $_.LastWriteTime.Year.ToString()
  $DEST_PATH = Join-Path -Path $DestDir -ChildPath "$YEAR\$MOD_DATE"

  # Create destination directory if it doesn't exist
  if (!(Test-Path -Path $DEST_PATH)) {
    if ($DryRun) {
      Write-Host "[DRY RUN] Would create directory: $DEST_PATH" -ForegroundColor Cyan
    }
    else {
      New-Item -Path $DEST_PATH -ItemType Directory -Force | Out-Null
    }
  }

  $DEST_FILE = Join-Path -Path $DEST_PATH -ChildPath $_.Name

  if (Test-Path -Path $DEST_FILE) {
    Write-Host "File $FILE already exists in $DEST_PATH\"
    Write-Host "Source:"
    # Get file information
    $sourceInfo = Get-Item -Path $FILE
    Write-Host "$($sourceInfo.FullName) $($sourceInfo.LastWriteTime) $(Format-FileSize $sourceInfo.Length)"

    Write-Host "Destination:"
    $destInfo = Get-Item -Path $DEST_FILE
    Write-Host "$($destInfo.FullName) $($destInfo.LastWriteTime) $(Format-FileSize $destInfo.Length)"

    if ($sourceInfo.Length -eq $destInfo.Length) {
      Write-Host "Files are the same size $([char]0x2705)" -ForegroundColor Green
    }
    else {
      Write-Host "Files are different sizes $([char]0x274C)" -ForegroundColor Red
    }

    if ($ShaCheck) {
      Write-Host -NoNewline "SHA1: "
      $source_sha = (Get-FileHash -Path $FILE -Algorithm SHA1).Hash
      $dest_sha = (Get-FileHash -Path $DEST_FILE -Algorithm SHA1).Hash

      if ($source_sha -eq $dest_sha) {
        Write-Host "Files are identical $([char]0x2705)" -ForegroundColor Green
      }
      else {
        Write-Host "Files are different $([char]0x274C)" -ForegroundColor Red
      }
    }

    if (!$Overwrite) {
      Write-Host "Do you want to overwrite the file? [y/N] " -NoNewline
      $key = [System.Console]::ReadKey($true)
      Write-Host $key.KeyChar
      $shouldOverwrite = $key.KeyChar -match "[Yy]"

      if (!$shouldOverwrite) {
        Write-Host "Skipping $FILE"
        return
      }
    }
    else {
      Write-Host "Overwrite is set to true, Overwriting $FILE" -ForegroundColor Yellow
    }
  }

  if (!$DryRun) {
    Move-Item -Path $FILE -Destination $DEST_PATH -Force
    Write-Host "Moved $FILE to $DEST_PATH\"
  }
  else {
    Write-Host "[DRY RUN] Would move: $FILE -> $DEST_PATH\" -ForegroundColor Cyan
  }
}
```

Alternatively, this is the bash script I used before but had to move to PowerShell since it's hard to access USB drives from WSL2:

```bash
#!/bin/bash

# Directories
SOURCE_DIR="<source>"
DEST_DIR="<destination>"

find "$SOURCE_DIR" -type f | while read -r FILE; do
  MOD_DATE=$(stat -c "%y" "$FILE" | cut -d' ' -f1)
  YEAR=$(echo "$MOD_DATE" | cut -d'-' -f1)
  DEST_PATH="$DEST_DIR/$YEAR/$MOD_DATE"
  mkdir -p "$DEST_PATH"
  if [ -f "$DEST_PATH/$(basename "$FILE")" ]; then
    echo "File $FILE already exists in $DEST_PATH/"
    echo "Source:"
    # get file created date and size
    stat -c "%n %y %z" "$FILE" # TODO: stat doesn't print size
    echo "Destination:"
    stat -c "%n %y %z" "$DEST_PATH/$(basename "$FILE")"
    read -p "Do you want to check SHA? [y/N] " -r -n 1 </dev/tty
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
      echo -n "SHA256:"
      source_sha=$(sha256sum "$FILE" | cut -d' ' -f1)
      dest_sha=$(sha256sum "$DEST_PATH/$(basename "$FILE")" | cut -d' ' -f1)
      if [ "$source_sha" == "$dest_sha" ]; then
        echo " Files are identical ✅"
      else
        echo " Files are different ❌"
      fi
    fi
    read -p "Do you want to overwrite the file? [y/N] " -r -n 1 </dev/tty
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
      echo "Skipping $FILE"
      continue
    fi
  fi
  mv "$FILE" "$DEST_PATH/"
  echo "Moved $FILE to $DEST_PATH/"
done
```
