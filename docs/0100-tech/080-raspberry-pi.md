# Raspberry Pi

## Pi-hole

- `connman` should be configured to not proxy DNS requests:
  ```shell
  systemctl edit --full connman.service
  # add --nodnsproxy to ExecStart
  systemctl daemon-reload
  systemctl restart connman.service
  ```
