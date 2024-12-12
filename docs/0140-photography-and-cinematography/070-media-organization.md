# Media Organization

I use Adobe Lightroom Classic to organize my photos and videos. Each device has its own catalog as I don't do any work that uses multiple devices and so far, I haven't had the need to have a single catalog for all devices. I use the `<Year>/<YYYY-MM-DD>/<file>` folder structure when importing files.

Lightroom doesn't support importing `.srt` (for telemetry) and `.lrf` (low resolution videos) files that DJI drones create so I use the following shell script, putting the right values for `<source>` and `<destination>` to move these files to the correct location:

```bash
#!/bin/bash

# Directories
SOURCE_DIR="<source>"
DEST_DIR="<destination>"

# Create destination directory structure and move files
find "$SOURCE_DIR" -type f | while read -r FILE; do
  MOD_DATE=$(stat -c "%y" "$FILE" | cut -d' ' -f1)  # Get file modification date
  YEAR=$(echo "$MOD_DATE" | cut -d'-' -f1)
  DEST_PATH="$DEST_DIR/$YEAR/$MOD_DATE"
  mkdir -p "$DEST_PATH"  # Create directory structure
  mv "$FILE" "$DEST_PATH/"  # Move file, preserving the name
  echo "Moved $FILE to $DEST_PATH/"
done
```
