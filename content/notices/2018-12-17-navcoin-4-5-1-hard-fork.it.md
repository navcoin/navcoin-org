---
layout: notices
title: Navcoin 4.5.1 Hard Fork
author: Craig MacGregor
date: '2018-12-17T14:12:23+13:00'
feature_image: /images/uploads/navcoin-4.5.1-hardfork.png
notice_categories:
  - Mandatory Update
---
Navcoin is hard forking at block **2722100** to mitigate an issue with the Community Fund expired proposal states. It is mandatory to update to Navcoin Core 4.5.1 before **Friday 21 December at 00:00AM GMT** to avoid network disruption. 
<!--more-->

Currently if a node reindexes their chainstate db, the node will recalculate the deadline of expired proposals and rewrite such proposals as accepted. A node which reindexes will end up with a different state and potentially reject blocks containing payment requests causing some users to end up on their own fork of the blockchain.

This bug was discovered by Navcoin Community member Prodpeak who operates [navexplorer.com](https://navexplorer.com). Helping the Navcoin Core developers identify and rectify potential issues before they impact the network is a vital role of the Navcoin Community and we are grateful for Prodpeaks assistance and encourage everyone to get involved in our beta and release candidate testing programmes.

The issue has been successfully patched and the unit tests have been updated to confirm the issue is resolved.

4.5.1 contains a hard fork which explicitly rejects blocks from obsolete versions (4.5.0 and below) signalled by version bit 20. Upgrading to 4.5.1 will avoid a potential network fork and ensure you remain on the same blockchain as the rest of the network.

It's worth noting that upgrading to 4.5.1 does not enforce the Cold Staking and Static Reward consensus changes currently being voted on by the network. The soft fork votes for these changes will continue as normal.

### Update to 4.5.1 before Friday 21 December

The hard fork is scheduled to occur at block 2722100 which is approximately Friday 21 December at 00:00AM GMT. All users and exchanges must upgrade to 4.5.1 before Friday 21 December 00:00AM GMT or they will risk forking from the network. All stakers must also upgrade or their blocks will be rejected by the rest of the network.

As an extra precaution we have recommended that exchanges disable deposits and withdrawals of NAV from Friday 21 December 00:00AM GMT until after the hard fork has occurred and we have confirmed that the expired proposal did not cause any network disruption.

To read the full changelog please read the Navcoin Core GitHub release notes.

<https://github.com/NAVCoin/navcoin-core/blob/master/doc/release-notes/release-notes-4.5.1.md>

You can download version 4.5.1 from the downloads section of navcoin.org or directly from the Navcoin Core GitHub release.

<https://navcoin.org/en/wallets/#download-core>

<https://github.com/NAVCoin/navcoin-core/releases/tag/4.5.1>
