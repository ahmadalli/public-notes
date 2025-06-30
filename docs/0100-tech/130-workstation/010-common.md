# Common Configurations

## Software

- Microsoft Edge
- Visual Studio Code
- Bitwarden
- Logitech Options+
- Microsoft Office Suite
- Cascadia Code Font
- Spotify

### Development Software

- Bash
  - bash-completion
- Git
- GitHub Desktop
- Ansible
- Terraform
- Docker
- dotnet SDK
- Python 3
- Node.js
- jq
- yq
- kubectl
- helm
- k9s

### Work Software

- Slack
- Zoom
- Google Drive

## Configurations

### Software Configurations

#### Shell

- *TODO: Common shell configs*
  - Bash
  - PowerShell

#### Microsoft Edge

- Set as default browser
- Change search engine to Google
  - Change search option from `Search bar` to `Address bar` (Check out [Microsoft Edge Dark Patterns](../../0160-observations/030-dark-patterns/0010-microsoft-edge.md#default-search-engine))

#### Zoom

- Set `Stop when joining` on `Audio` and `Video` settings
- Enable `Automatically join computer audio when joining` on `Audio` settings
- Disable `Ask me to confirm when I leave a meeting`

### Visual Studio Code

- Configure `Settings Sync`
- Add `code` to PATH

### Mozilla Firefox

- Following [Sync custom preferences](https://support.mozilla.org/en-US/kb/sync-custom-preferences), set `services.sync.prefs.dangerously_allow_arbitrary` to true, sync, then set it back to false

#### Common Configurations

- `browser.tabs.insertAfterCurrent`: true
- `sidebar.verticalTabs`: true
- [Enable custom CSS loading](https://www.howtogeek.com/334716/how-to-customize-firefoxs-user-interface-with-userchrome.css/)

##### Sidebery Tab Extension

Having vertical tabs enabled in Firefox makes it easier to just hide the native tab bar and keep the other menus intact. The [`Sidebery`](https://github.com/mbnuqw/sidebery) extension is a good alternative to the native tab bar.

###### Hiding the Sidebar

Add the following to `userChrome.css`:
```css
#sidebar-box {
  display: none !important;
}
```

###### Auto Collapsing Sidebery Sidebar

:::note

You must keep firefox-csshacks up to data to keep this working.

:::

- [firefox-csshacks](https://github.com/MrOtherGuy/firefox-csshacks) inside the `chrome` folder
- Add the following to `userChrome.css`, replacing the above code:
  ```css
  @import url(firefox-csshacks/chrome/autohide_sidebar.css);

  #sidebar-main {
    display: none !important;
  }

  #sidebar-box {
    --uc-sidebar-width: 60px !important;
    --uc-sidebar-hover-width: 300px !important;
  }
  ```
- You can change the `--uc-sidebar-width` and `--uc-sidebar-hover-width` values to your liking
