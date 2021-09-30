To add custom nodes to yours, you should first [locate the Navcoin data directory](#locate-data), and then open up the file named `navcoin.conf` in a text editor. If you don't have such file in your directory, then create one and place it there (add a file named `navcoin.conf` to the data directory of `navcoin4`).

Next, go to your web browser and visit [chainz.cryptoid.info/nav/#!network](https://chainz.cryptoid.info/nav/#!network). Then find the most recent node version and tap *node list*. This should be at the top of the list, as depicted in the picture below with */NavCoin:4.5.2/*).

![support-image](images/where-is-the-node-list.png)

Now, copy all the `addnode` lines from the pop-up window, paste it into your `navcoin.conf` file and save it.

![support-image](images/node-list.png)

After adding the nodes, close and re-open your wallet. It should now try to connect to all of the nodes that you've added to your `navcoin.conf` file.
