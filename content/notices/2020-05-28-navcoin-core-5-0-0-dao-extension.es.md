---
layout: notices
title: NavCoin Core 5.0.0 - DAO Extension
author: Craig MacGregor
date: '2020-05-28T16:17:48+12:00'
feature_image: /images/uploads/navcoin-core-5.0.0-dao-extension.png
notice_categories:
  - General Notices
---
This major release includes multiple soft forks which will extend the NavCoin DAO and enable the community to not only vote on the allocation of the decentralised fund, but also vote on the network consensus parameters changes as well as a non binding onchain voting mechanism called consultations.
<!--more-->

By downloading and installing this new version of software you will be automatically voting "yes" for the included soft forks. To vote "no" you can set `rejectversionbit=X` in your config file, replacing `X` with the version bit number you wish to reject.

Once a soft fork reaches consensus, it will be activated on the network 1 period after being accepted at which point everyone running navcoin core whether you're mining or not, will need to upgrade to this version.

You can keep track of the soft fork voting progress on the block explorer.

https://www.navexplorer.com/soft-forks

On top of the DAO Extensions, there are some interesting upgrades including Dandelion++ which is one of the components of NavCoin's new privacy protocol [BLS Confidential Transactions](https://medium.com/@NAVCoin/who-will-watch-the-watchmen-why-privacy-matters-to-navcoin-and-why-we-are-bringing-it-back-e4c8f2cd2cc3).

For more info, check out the release notes below;

### DAO Extension

<[Pull Request 530](https://github.com/navcoin/navcoin-core/pull/530)>

This PR includes a series of Deployment Proposals as described in https://www.reddit.com/r/NavCoin/comments/bs4pvn/proposal_for_the_extension_of_the_community_fund/:

- Adds support for abstaining in the votings. (Version Bit 19) - includes functional test

- Enables voting state cache, reducing the amount of votes which need to be broadcasted down to 1 per address. (Version Bit 22) - does not include specific functional test, but old fund tests pass having this deployment activated

- Enables DAO consultations. (Version Bit 23) - includes functional test

- Enables modification of consensus parameters through DAO consultations. (Version Bit 25) - includes functional test

- Enables voting delegation and voting from light wallets. (Version bit 27) - includes functional test

- Allows fund proposals to have a different address for signing the payment requests and for receiving the payment. This allows to use arbitrary scripts as payment addresses, like multisig addresses. When the payment address differs from the owner address, the first will be specified using the p parameter on the JSON object embedded on the strDZeel property of the transaction.

- Includes UI to manage the new DAO features.

### Dandelion++

<[Pull Request 588](https://github.com/navcoin/navcoin-core/pull/588)>

This PR adds support for Dandelion as described in https://github.com/bitcoin/bips/blob/master/bip-0156.mediawiki

### Mnemonic startup GUI

<[Pull Request 659](https://github.com/navcoin/navcoin-core/pull/659)>

This PR adds a Startup GUI which allows for the ability to restore and create wallets with Mnemonic words. Mnemonic words are like a read readable master key for BIP32 a bitcoin proposal to make key generation derived from one key or a masterkey instead of being randomly created as before hand.

### More Information

For the full release notes please visit the [Community Fund Stability Patches](https://github.com/navcoin/navcoin-core/releases/tag/5.0.0) release tag on GitHub.

To download the NavCoin Core 5.0.0 please visit the [Wallet Downloads](https://navcoin.org/en/wallets/#download-core) page.
