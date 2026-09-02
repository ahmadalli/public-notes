# Windows

## Installation

- To skip Microsoft account login, when you reach to the login step, press `Shift + F12` to open a command prompt, then run `start ms-cxh:localonly` and create a local account. ([source](https://www.reddit.com/r/sysadmin/comments/1jp5vln/an_alternative_to_bypass_microsoft_account/))
  - `OOBE\BYPASSNRO` used to work for me but it no longer works, even with the `Remove requirement for an online Microsoft account` option enabled in Rufus when creating the installation media.

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
