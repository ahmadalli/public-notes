---
sidebar_position: 20
---

# Streaming Games

To stream games from your PC to another device, like your TV or your phone.

## Requirements

- [Sunshine Requirements](https://docs.lizardbyte.dev/projects/sunshine/en/latest/about/overview.html#system-requirements)
- A reliable network connection between your PC and the device you want to stream to
  > Both devices should be connected to the same network, preferably via Ethernet
- (optional) Steam: It provides a nice UI for launching games and Sunshine can automatically add your Steam games to its library

## Setup

- [Steam](https://store.steampowered.com/about/) would be used to launch games
- [Sunshine](https://docs.lizardbyte.dev/projects/sunshine/en/latest/about/installation.html) is the streaming server. It should be installed on the PC you want to stream games from
- [Moonlight](https://moonlight-stream.org/) is the streaming client. It should be installed on the device you want to stream games to

:::info

You can manage your Sunshine applications and configurations from its web UI at [localhost:47990](https://localhost:47990/)

:::

## Challenges

### Network Bandwidth

I assumed that my relatively new TV would have a 1Gbit Ethernet port, but it only has a 100Mbit port. This is not enough to stream games at 1080p 60fps. I'm currently using lower bitrates to compensate for this.

#### Solutions

- Find a USB 3 dongle that adds a 1Gbit Ethernet port to my TV. I've tried TP-Link UE306 and ISY IAD-1010-A and they both didn't work. I'm going to try TP-Link UE300 as [<icon icon="fa-brands fa-reddit" size="lg" /> it seems to be working unlike UE306](https://www.reddit.com/r/bravia/comments/qdrgjl/usb_ethernet/)
- Use a device that has a 1Gbit Ethernet port.
  - Raspberry Pi 4 if you want to DIY the whole thing
  - Nvidia Shield TV if you want a more polished experience

### Display Resolution

I'm using a 21:9 monitor, but my TV is 16:9. This means that I have to change the resolution of my monitor to 16:9 before I can stream games to my TV.

#### Solutions

Use `Do Command` and `Undo Command` functionality of Sunshine Applications combined with a resolution management software to automate this process. You can find proper commands on [the Sunshine documentation](https://docs.lizardbyte.dev/projects/sunshine/en/latest/about/app_examples.html).

You can download QRes for Windows from [here](https://www.majorgeeks.com/files/details/qres.html).

### Controller Connectivity

The XBox wireless dongle doesn't work with Android TV. I'm using bluetooth instead which has a bit of input lag.

### Video Stuttering

Even after reducing the bitrate, I'm still getting some stuttering. I'm not sure if this is because of the network bandwidth or the TV itself. I'm going to investigate this further after I fixed the network bandwidth issue.
