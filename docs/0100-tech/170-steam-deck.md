# Steam Deck

## Plugins and Utilities

- [decky-loader](https://github.com/SteamDeckHomebrew/decky-loader)

### Pause Games

[Pause Games](https://github.com/popsUlfr/SDH-PauseGames) gives you the ability to suspend the game, or you can configure it to suspend it when switching between games.

### CryoUtilities

[CryoUtilities](https://github.com/CryoByte33/steam-deck-utilities) has some tuning options mostly for memory. I use it to tune the swap file size to 32GB to help with suspending games.

### Nested Desktop

[Nested Desktop](https://www.xda-developers.com/nested-desktop-is-the-best-steam-deck-feature-you-arent-using/) looks like an interesting feature. I haven't fully tested it yet.

### SSH Server

1. Set a password for the `deck` user:
   ```shell
   passwd
   ```
1. Enable `sshd`:
   ```shell
   sudo systemctl enable sshd --now
   ```

### ProtonUp-QT

Some games would are more compatible with [GE-Proton](https://github.com/GloriousEggroll/proton-ge-custom). To install and manage proton-ge versions and add the option to the steam client, I use [ProtonUp-Qt](https://davidotek.github.io/protonup-qt/).
