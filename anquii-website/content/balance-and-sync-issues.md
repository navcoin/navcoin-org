Before trying to fix your balance and sync issues, make sure that your node is running the [latest version](#update-node) of the *Navcoin Core* application, and that your node is connected to the internet.

If the *Navcoin Core* application displays a wrong balance, it's likely caused by your node not being fully synchronized with the blockchain. First, make sure to check the number of *active connections* that your node has. This is displayed at the bottom of your *Navcoin Core* application window, when you're on the home screen.

If the number of *active connections* is 0, then follow [this](#add-nodes) guide to manually add custom nodes to yours. If manually adding custom nodes to yours doesn't increase the number of *active connections*, then it's possible that the firewall of your PC or router may be blocking incoming connections from peers. To ensure that this doesn't happen, make sure that the *44440* port is *open*.

In the case that your node does have *active connections*, but appears to be stuck, while synchronizing the blockchain, you may try to [bootstrap your node](#bootstrap-node). If the above doesn't resolve the issues that you're having, feel free to reach out to the community through the *#navcoin-support* channel on [Discord](https://discord.gg/y4Vu9jw).
