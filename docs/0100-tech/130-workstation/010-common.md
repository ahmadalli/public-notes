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

- _TODO: Common shell configs_
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

#### Useful Extensions

- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
- [Text Power Tools](https://marketplace.visualstudio.com/items?itemName=qcz.text-power-tools)
- [indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow)
- [Local History](https://marketplace.visualstudio.com/items?itemName=xyz.local-history)
  - I also override some configurations to prevent the extension to pollute the workspace:
    ```json
    "local-history.absolute": true,
    "local-history.path": "/tmp/.vsfilehistory",
    ```
- [Markdown Snippets for MDX and Docusaurus](https://marketplace.visualstudio.com/items?itemName=MisterMunchkin.simple-markdown-snippets)
- [Rainbow CSV](https://marketplace.visualstudio.com/items?itemName=mechatroner.rainbow-csv)

#### Common Configurations

- For C# development outside on other VS Code based extensions, see [Debugging Outside of Microsoft Ecosystem](../060-oh-shit-x/40-dotnet.md#debugging-outside-of-microsoft-ecosystem)

### Mozilla Firefox

- Following [Sync custom preferences](https://support.mozilla.org/en-US/kb/sync-custom-preferences), set `services.sync.prefs.dangerously_allow_arbitrary` to true, sync, then set it back to false

#### Common Configurations

- `browser.tabs.insertAfterCurrent`: true
- `sidebar.verticalTabs`: true
  - In the sidebar settings, enable `Expand sidebar on hover`
