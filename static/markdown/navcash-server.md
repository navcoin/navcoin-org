To set up your own NavCash server, you can use a rented virtual private server (VPS), so that you're not required to keep your computer on. We recommend using [Hetzner](https://console.hetzner.cloud), a German provider known for its low prices and high quality service. Start by creating an account, log in and then choose ‘Add Server’, select Ubuntu 20.04 and CX21 (2vCPU and 4GB RAM).

Once the server is created, you'll see the details needed to access it over SSH. Connect to it and execute the following command:
```bash
curl -s https://index.nav.community/setup.sh|sudo -E bash
```

It'll take around 30 minutes to complete.

Once finished, you'll be prompted to input the address of your Electrum node.

When you launch NavCash for the first time, you'll have the chance to input the information of your own server and connect to it.
