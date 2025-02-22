# 3D Printing

## Device

I'm happy with my Bambulab A1. Compared to other entry level 3D printers like Ender 3, it's more reliable and requires less maintenance work to get good prints. Here are the things that I like about it:

- Auto Bed Leveling
- Fast Printing Speed
- Multi Material Printing with AMS

:::warning

Bambulab has made changes to their services for security reasons, which suggests they might limit the device's capabilities in the future. Read more about it [here](https://www.reddit.com/r/BambuLab/comments/1i3gq1t/why_you_should_care_about_bambu_labs_removing/) ([archived](https://archive.is/CymOC)).

At the moment there are no indications that Bambulab will limit more functionalities in the future, like the ability to use third party filaments, but it's something to keep in mind given the history of other companies in similar industries.

I understand the security concern for the printers, as the hardware is capable of causing fire damage and having the printer exposed to the internet increases the security risks. But their solution doesn't seem to only be focused on security. You can switch to [LAN only mode](#lan-only-mode) to mitigate this risk, but you'll lose some functionalities.

:::

### Bambulab

#### LAN Only Mode

LAN only mode disconnects the printer from your Bambulab account and disables the cloud printing functionalities. Loosing cloud connectivity means loosing a few features:

- Bambu Handy app: The app connects to the printer through cloud and doesn't support LAN only mode
  - Cloud printing
  - Printer monitoring
  - Printer control
- Skip object

##### LAN Only Mode and Printer on a Separate Network

Printer discovery only works when the printer and the computer are on the same network. BambuStudio (or OrcaSlicer) can't find the printer if they're on a separate networks even if these networks are connected to each other.

To solve this, I use [this python code snippet](https://gist.github.com/Alex-Schaefer/72a9e2491a42da2ef99fb87601955cc3) to send the printer IP to the slicer.

## Slicer

I used to use [BambuStudio](https://github.com/bambulab/BambuStudio/releases) that's a fork of PrusaSlicer, not I've switched to [OrcaSlicer](https://github.com/SoftFever/OrcaSlicer) as a precaution regarding potential changes that Bambulab might make to their software and enforcement of their ecosystem.

## Filament

So far, I've only printed with basic PLA and PETG used the following brands and I've been happy with all of them:

- Bambulab: PLA, PETG
- Sunlu: PLA
- eSun: PLA

## Food Safety

3D printed objects aren't food safe due to two main reasons:

- Layer lines leave gaps where bacteria can grow
- Filament and the printing process isn't food safe and can contain harmful chemicals and heavy metals

You can mitigate this by coating the object with food safe epoxy resin.

## Cool Projects

- [3D Print of a Brain from MRI Scan](https://www.reddit.com/r/neuro/comments/1amvsim/comment/kppe4q3/)
- [Rocinante from The Expanse TV Series](https://makerworld.com/en/models/20204#profileId-38738)
- [Home Assistant Integration](https://github.com/greghesp/ha-bambulab)

## Device Maintenance

There's a good maintenance guide on the [Bambulab website](https://wiki.bambulab.com/en/a1/maintenance). For oiling, I found [household oil](https://www.hornbach.nl/p/connex-huishoudolie-100-ml/914841/).

## Troubleshooting

### Support Removal

To improve the support removal experience, I use another filament type for support. I use the following settings:

- **Support Material**: Original material
- **Support Interface Material**: The other filament type
- **Top Z Distance**: 0.0mm

If these settings wasn't helpful, you can check out [here](https://www.reddit.com/r/BambuLab/comments/1ecbq32/comment/leyun58/) for more related settings.

### Bambulab Gold/Siver/Bronze PLA Filament

Similar to [this discussion](https://www.reddit.com/r/BambuLab/comments/1dcaqad/comment/l7wxvr0/), I had issues printing with the Bambulab silver PLA. I made a mistake of buying this instead of gray PLA for Rocinante and noticed that the print quality isn't good with the silver filament.

The solution is to use silk filament profile for this color.

## Useful Resources

- [Proper Handling of UV Curable 3D Printing Resins](https://radtech.org/safe-handling-of-3d-printing-resins/): I'm not planning to get into resin printing but this is a good read to know more about the safety precautions and possible challenges.
