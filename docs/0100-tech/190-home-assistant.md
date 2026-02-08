# Home Assistant

## Useful Blueprints

- [Blackshome/sensor-light](https://gist.github.com/Blackshome/6edfec0ff6a25c5da0d07b88dc908238): Automate light based on presence detection, with optional additions like brightness and color temperature control.
- [Routout/Blueprints/another_styrbar_dimmer](https://github.com/Routout/Blueprints/blob/main/another_styrbar_dimmer.yaml): IKEA Styrbar control automations supporting light groups and scenes.

## Device Integrations

### Toon

I wanted to keep my data private, so I used [Root-A-Toon](https://github.com/ToonSoftwareCollective/Root-A-Toon) to be able to access my Toon data without the need for a third party.

:::note

With Toon v1, you need to restart the toon many times until the toon tries to fetch the update payload from the fake server deployed on the project. It might take some time, even an hour, but it will work eventually.

Don't give up hope 😄

:::
