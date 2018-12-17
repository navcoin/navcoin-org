---
layout: notices
title: NavCoin 4.5.1 Hard Fork
author: Craig MacGregor
date: '2018-12-17T14:12:23+13:00'
feature_image: /images/uploads/navcoin-4.5.1-hardfork.png
notice_categories:
  - Mandatory Update
---
NavCoin is hard forking at block **2722100** to mitigate an issue with the Community Fund expired proposal states. It is mandatory to update to NavCoin Core 4.5.1 before **Friday 21 December at 00:00AM GMT** to avoid network disruption. 
<!--more-->

NavCoin Core have discovered a bug with the Community Fund proposal system which could cause the network to fork once the first funding proposal enters the expired state. A node which reindexes will end up with the expired proposal in a different state and potentially reject blocks containing payment requests causing some users to end up on their own fork of the blockchain.

The issue has been successfully patched and the unit tests have been updated to confirm the issue is resolved.

NavCoin Core 4.5.1 contains a hard fork which explicitly rejects blocks from obsolete versions (4.5.0 and below) signalled by version bit 20. Upgrading to 4.5.1 will avoid the potential fork issue and ensure you remain on the same blockchain as the rest of the network.

### Update to 4.5.1 before Friday 21 December

The hard fork is scheduled to occur at block 2722100 which is approximately Friday 21 December at 00:00AM GMT. All users and exchanges must upgrade to 4.5.1 before Friday 21 December 00:00AM GMT or they will risk forking from the network. All stakers must also upgrade or their blocks will be rejected by the rest of the network.

As an extra precaution we have recommended that exchanges disable deposits and withdrawals of NAV from Friday 21 December 00:00AM GMT until after the hard fork has occurred and we have confirmed that the expired proposal did not cause any network disruption.

To read the full changelog please read the NavCoin Core GitHub release notes.

<https://github.com/NAVCoin/navcoin-core/blob/4.5.0/doc/release-notes/release-notes-4.5.1.md>

You can download version 4.5.1 from the downloads section of navcoin.org or directly from the NavCoin Core GitHub release.

<https://navcoin.org/en/wallets/#download-core>

<https://github.com/NAVCoin/navcoin-core/releases/tag/4.5.1>
