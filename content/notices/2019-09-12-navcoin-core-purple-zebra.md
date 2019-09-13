---
layout: notices
title: NavCoin Core 4.7.0 - Purple Zebra
author: Craig MacGregor
date: '2019-09-12T10:38:29+12:00'
feature_image: /images/uploads/navcoin-core-4.7.0.png
notice_categories:
  - General Notices
---
Purple Zebra is the culmination of the last few months of work on NavCoin Core and includes 40 closed pull requests, many new features and important security updates & stability fixes. Due to the security patches, upgrading to Purple Zebra should be considered mandatory and performed as soon as possible, especially if you are staking.
<!--more-->


### Added password prompt for CFund dialogs

<[Pull Request 474](https://github.com/navcoin/navcoin-core/pull/474)>
<[Commit aa4bbaa](https://github.com/navcoin/navcoin-core/commit/aa4bbaaf7a82600775065f6bab894f78583b9784)>

Peviously you would have to unlock the wallet via the console or debug window before it was possible to create a proposal or payment request through the graphical interface. Now there is a dialog to unlock the wallet while using the Community Fund GUI.


### Use of the CoinsDB for the Community Fund

<[Pull Request 487](https://github.com/navcoin/navcoin-core/pull/487)>
<[Commit a8f425b](https://github.com/navcoin/navcoin-core/commit/a8f425b9bd86147693c1e79427c39876425ac7cf)>

Previously the community fund data was stored in a seperate local database to the rest of the coin data. The data has now been migrated to be part of the CoinsDB which should increase performance and mitigate the data consistency issues that some users were experiencing.


### Added error log tab in debug window

<[Pull Request 466](https://github.com/navcoin/navcoin-core/pull/466)>
<[Commit bed76b9](https://github.com/navcoin/navcoin-core/commit/bed76b917b6590148a371d5a3d86d2a534ef1f3b)>

You can now see errors which are logged to the debug.log file in the debug window of navcoin-qt. Users no longer have to manually read or search the debug.log via command line to find error messages.

### Added new FIAT currencies and enabled auto price update

<[Pull Request 469](https://github.com/navcoin/navcoin-core/pull/469)>
<[Commit 5ee24af](https://github.com/navcoin/navcoin-core/commit/5ee24afd29937cd7c12d538313783671318d1c87)>

30 Fiat can now be configured as the display units through of navcoin-qt. The issue causing the sockets polling for exchange rates not to close correctly has also been resolved which prevents the wallet from eventually crashing.

### Added new progress ui for sync

<[Pull Request 526](https://github.com/navcoin/navcoin-core/pull/526)>
<[Commit 42769b2](https://github.com/navcoin/navcoin-core/commit/42769b2352f1a33e5b4f8c2971e787b22b00ecb4)>

When the wallet starts and detects it is still catching up to the latest block a progress overlay will be presented to the user. The user can close the overlay but it is now clearer that the wallet is still syncing and the balances will be incorrect until syncing finishes.

### More Information

For the full release notes please visit the [Purple Zebra Release on GitHub](https://github.com/NAVCoin/navcoin-core/releases/tag/4.7.0).

To download the NavCoin Purple Zebra please visit the [Wallet Downloads](https://navcoin.org/en/wallets/#download-core) page.
