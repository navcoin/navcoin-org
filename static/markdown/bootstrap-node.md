Bootstrapping is the process of adding a pre-synced blockchain from a trusted source to your node, thus allowing you to skip part of or all of the blockchain syncing process. A boostrap for your node can be downloaded [here](https://bootstrap.nav.community/bootstrap.tar.gz).

Once downloaded, you'll need to use a program like winzip (tar/gunzip on linux) to extract the folders of `chainstate` and `blocks`, and then let those replace the existing folders inside your Navcoin data directory. Find out how to locate your data directory [here](#locate-data).

**Note**: If you get the error of *error opening block database, do you want to rebuild the block database?*, then this indicates that either the download of the boostrap failed or the file didn't fully extract.
