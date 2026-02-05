# Android

## Samsung OS Flashing

Follow [this guide](https://repair.wiki/w/How_to_use_ODIN_to_flash_firmware_on_Samsung_devices) with the following tweaks:

- You don't need `SamKey` to find the device details. You can find the needed information from the device itself by going to `Settings` > `About phone` > `Software information` and use the `Baseband version`. It contains the device model, version, and carrier/csc code.
- Even if you want to use `HOME_CSC` and keep your files, make a backup of your data just in case.
- If you're using `HOME_CSC`, **do not check the `Nand Erase All` option**. Nand erase will wipe the encryption keys that are needed to read your data.
- In my experience (and with my limited knowledge), `Re-partitioning` options resulted in failed flash attempts.
