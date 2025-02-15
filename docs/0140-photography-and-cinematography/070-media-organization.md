# Media Organization

I use Adobe Lightroom Classic to organize my photos and videos. Each device has its own catalog as I don't do any work that uses multiple devices and so far, I haven't had the need to have a single catalog for all devices. I use the `<Year>/<YYYY-MM-DD>/<file>` folder structure when importing files.

Lightroom doesn't support importing `.srt` (for telemetry) and `.lrf` (low resolution videos) files that DJI drones create so I use the following shell script, putting the right values for `<source>` and `<destination>` to move these files to the correct location:

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
