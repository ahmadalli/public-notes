# Home Assistant

## Useful Blueprints

- [Blackshome/sensor-light](https://gist.github.com/Blackshome/6edfec0ff6a25c5da0d07b88dc908238): Automate light based on presence detection, with optional additions like brightness and color temperature control.
- [Routout/Blueprints/another_styrbar_dimmer](https://github.com/Routout/Blueprints/blob/main/another_styrbar_dimmer.yaml): IKEA Styrbar control automations supporting light groups and scenes.

## Device Integrations

### Toon

I wanted to keep my data private, so I used [Root-A-Toon](https://github.com/ToonSoftwareCollective/Root-A-Toon) to be able to access my Toon data without the need for a third party.

:::note

With Toon v1, you need to restart the Toon many times until the Toon tries to fetch the update payload from the fake server deployed on the project. It might take some time, even an hour, but it will work eventually.

Don't give up hope 😄

:::

To use Home Assistant integrations, I installed the `BoilerStatus` app from the Toon Store.

#### Reducing the Memory Usage

<!-- TODO: Update this after testing -->
:::info

Although my Toon has been more stable, I need more time to verify it works in the long run. So this solution is still a work in progress.

:::

After setting up Toon sensors and thermostat integrations in Home Assistant, my Toon was constantly rebooting. I'm forcefully disabling some components which I don't need, as I'm using Home Assistant for these functionalities:

1. SSH into Toon:
   ```shell
   ssh -o HostKeyAlgorithms=+ssh-rsa -o PubkeyAcceptedKeyTypes=+ssh-rsa root@<Toon-ip>
   ```
1. Find the binary locations:
   ```shell
   find / -name hdrv_hue
   ```
1. For me it was under `/qmf/sbin`. I had to move the binaries to "disable" them:
   ```shell
   mv /qmf/sbin/hdrv_hue /qmf/sbin/hdrv_hue.disabled
   mv /qmf/sbin/happ_smartplug /qmf/sbin/happ_smartplug.disabled
   mv /qmf/sbin/hcb_bxtproxy /qmf/sbin/hcb_bxtproxy.disabled
   # History related components are not needed as I keep the history in Home Assistant
   mv /qmf/sbin/happ_pwrusage /qmf/sbin/happ_pwrusage.disabled
   mv /qmf/sbin/hcb_rrd /qmf/sbin/hcb_rrd.disabled # this was the biggest culprit in my case
   ```
1. Restart:
   ```shell
   shutdown -r now
   ```
