---
uid: 2rfks3
slug: /d/2rfks3
aliases:
  - /tech/workstation/windows
---
# Windows

## Installation

- To skip Microsoft account login, when you reach to the login step, press `Shift + F12` to open a command prompt, then run `start ms-cxh:localonly` and create a local account. ([source](https://www.reddit.com/r/sysadmin/comments/1jp5vln/an_alternative_to_bypass_microsoft_account/))
  - `OOBE\BYPASSNRO` used to work for me but it no longer works, even with the `Remove requirement for an online Microsoft account` option enabled in Rufus when creating the installation media.

## Tweaking

I've been using [Windhawk](https://windhawk.net/) on Windows 11 to tweak some UI elements and behaviors. I used to use [7+ Taskbar Tweaker](https://rammichael.com/7-taskbar-tweaker) on Windows 10 and it was very saddening to see it not working on Windows 11. Windhawk is a great replacement. I'm using these mods:

- [`slick-window-arrangement`](https://windhawk.net/mods/slick-window-arrangement) to arrange windows by dragging them to the edges of the screen.
  - `Snap windows distance: 5`
- [`taskbar-icon-size`](https://windhawk.net/mods/taskbar-icon-size) to make the taskbar icons smaller.
  - `Taskbar height: 40`
  - `Icon size: 16`
- [`taskbar-on-top`](https://windhawk.net/mods/taskbar-on-top) to move the taskbar to the top of the screen.
- [`net-speed-taskbar`](https://windhawk.net/mods/net-speed-taskbar) to show network speed on the taskbar.
- [`taskbar-thumbnail-reorder`](https://windhawk.net/mods/taskbar-thumbnail-reorder) to reorder taskbar thumbnails with the left mouse button.
- [`taskbar-notification-icon-spacing`](https://windhawk.net/mods/taskbar-notification-icon-spacing) to adjust the spacing and grid of taskbar tray icons.
  - `Tray icon width: 24`
- [`taskbar-volume-control`](https://windhawk.net/mods/taskbar-volume-control) to control the system volume by scrolling over the taskbar.

## Shrinking `hiberfil.sys`

Windows uses `C:\hiberfil.sys` for Hibernate, Fast Startup, and some other features on the same space.

Since I don't use Hibernate or Sleep in my PC, I set `powercfg /h /type reduced` to keep Fast Startup working. See [powercfg options](https://learn.microsoft.com/en-us/windows-hardware/design/device-experiences/powercfg-command-line-options) for more info.

```powershell
powercfg /a                      # what this machine actually supports
powercfg /h /type reduced        # keep Fast Startup, drop Hibernate
```

:::note

With Fast Startup enabled, **"Shut down" is not a cold boot** — hardware and drivers don't fully re-initialize, only "Restart" does. Worth remembering when testing whether a hardware fault reproduces from a clean state, since a shutdown will appear to preserve the broken state.

:::

## Disabling Automatic Restarts After Updates

To disable automatic restarts after updates, you need to update its related Group Policy:

1. Open `gpedit.msc` and go to `Computer Configuration > Administrative Templates > Windows Components > Windows Update > Manage end user experience`.
1. Open `Configure Automatic Updates`, set it to `Enabled`, and pick `3 - Auto download and notify for install`. The schedule options below it only apply to option 4.
1. Run `gpupdate /force` in an elevated terminal.

:::caution

Security updates won't install until you click Install in Windows Update, so remember to do it every now and then.

:::
