# .NET

## .NET isn't an Open Platform

See [isdotnetopen.com](https://isdotnetopen.com/).

### Debugging Outside of Microsoft Ecosystem

1. Install [Samsung / netcoredbg](https://github.com/Samsung/netcoredbg)
1. For VSCode based IDEs, add the following to your debug config inside `launch.json`:

   This works for Windows:
   ```json
   "pipeTransport": {
      "pipeProgram": "cmd",
      "pipeArgs": ["/c"],
      "debuggerPath": "<path-to-netcoredbg>"
   }
   ```
