# Assassin's Creed

## Assassin's Creed

### Steam Deck Configuration

To get the controls working with the `Official Layout for Assassin's Creed - Gamepad With Joystick Trackpad` layout in Steam Deck, I had to change the controller settings in the game:

1. Change the controller profile to `Xbox 360 Controller`.
1. Remap the control buttons in the game settings following [this comment](https://steamcommunity.com/app/15100/discussions/0/1639793203777493851/#c1636416951457329665)

:::tip

[EaglePatch](https://github.com/Sergeanur/EaglePatch) has some patches for AC1 that might be useful. I haven't tested them myself.

:::

## Assassin's Creed II

I used [EaglePatch](https://github.com/Sergeanur/EaglePatch) to patch the game to as recommended for better experience.

Later on I tried the same configuration as [Brotherhood](#assassins-creed-brotherhood) (in addition to EaglePatch) and it had a better controller support.

## Assassin's Creed Brotherhood

### Steam Deck Configuration

Following the recommendation in [protondb](https://www.protondb.com/app/48190?device=steamDeck), I used `GE-Proton-10-15` (using [ProtonUp-Qt](../0100-tech/170-steam-deck.md#protonup-qt)) and the following launch options:

```shell
PROTON_PREFER_SDL=1 %command%
```

## Assassin's Creed Revelations

### Steam Deck Configuration

The same configuration as [Brotherhood](#assassins-creed-brotherhood) worked for Revelations as well. I wasn't able to use controller without the `PROTON_PREFER_SDL=1` option.
