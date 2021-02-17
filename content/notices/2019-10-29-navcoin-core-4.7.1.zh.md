---
layout: notices
title: Navcoin Core 4.7.1 - Community Fund Nullified Entry Patch
author: Craig MacGregor
date: '2019-10-29T10:38:29+12:00'
feature_image: /images/uploads/navcoin-core-4.7.1-cfund-patch.png
notice_categories:
  - General Notices
  - Patch Release
---
This patch fixes a bug where a cfund database entry that was previously deleted is still persisting, preventing future writes of the entry. This can happen in a scenario where a proposal is included in a block which is invalidated (because of a reorganization) which is then included in a new block as part of the new longest chain.
<!--more-->
This fix is the main purpose of the 4.7.1 patch release, while preparing this bugfix there were several other PR's merged which are also included in this release.

### Full List of Merged Pull Requests

- Updated some NULL -> nullptr <[Pull Request 509](https://github.com/navcoin/navcoin-core/pull/509)> <[Commit 40eac7ab](https://github.com/navcoin/navcoin-core/commit/58e38079d7d854a6b02ebb228f06244140eac7ab)> 

- Replaced all BOOST_FOREACH calls with new for() syntax (c++11) <[Pull Request 525](https://github.com/navcoin/navcoin-core/pull/525)> <[Commit 8ed8cf87](https://github.com/navcoin/navcoin-core/commit/2e6aa1b3e598d3a443343c480bdbf6b88ed8cf87)> 

-  Updated the custom 'change' address to be a persistent setting #527 <[Pull Request 527](https://github.com/navcoin/navcoin-core/pull/527)> <[Commit b2921285](https://github.com/navcoin/navcoin-core/commit/74def82624ff9bb4598762186598d2bab2921285)>

- Added new -allindex option <[Pull Request 546](https://github.com/navcoin/navcoin-core/pull/546)> <[Commit e1870814](https://github.com/navcoin/navcoin-core/commit/083e790aed0120dd271a648d87948e5ae1870814)>

- Replaced Q_FOREACH with for()> from c++11 standard <[Pull Request 554](https://github.com/navcoin/navcoin-core/pull/554)> <[Commit 82523147](https://github.com/navcoin/navcoin-core/commit/0a8c872a60169de4f6b57b83dab9b39382523147)>

- Set pindexDelete to nullptr on intialize <[Pull Request 560](https://github.com/navcoin/navcoin-core/pull/560)> <[Commit 762c3ffd](https://github.com/navcoin/navcoin-core/commit/64f8cd453f4bdda04f4a718cb026d8a8762c3ffd)> 

- Fixed some gitignore permissions and added new file to main gitignore <[Pull Request 561](https://github.com/navcoin/navcoin-core/pull/561)> <[Commit 130ddf4a](https://github.com/navcoin/navcoin-core/commit/70276dba0515a133a47c081041092efa130ddf4a)>

- Updated includes syntax based on discussion on #503 <[Pull Request 566](https://github.com/navcoin/navcoin-core/pull/566)> <[Commit 6de5f909](https://github.com/navcoin/navcoin-core/commit/556250920fef9dc3eddd28996329ba316de5f909)>

- Sort available coins for staking by coin age descending <[Pull Request 578](https://github.com/navcoin/navcoin-core/pull/578)> <[Commit c464383b](https://github.com/navcoin/navcoin-core/commit/da5377e89a25cfa54a52768393630134c464383b)>

- Add support for raw script addresses <[Pull Request 587](https://github.com/navcoin/navcoin-core/pull/587)> <[Commit ff6f543e](https://github.com/navcoin/navcoin-core/commit/49f74084cf9eed8d8e7c46707d836b82ff6f543e)>

- Updated depends to use winssl for windows and darwinssl for osx <[Pull Request 603](https://github.com/navcoin/navcoin-core/pull/603)> <[Commit f755e298](https://github.com/navcoin/navcoin-core/commit/6fe0683ba99ce912da4d9181094ab4baf755e298)>

- Staking reward setup GUI <[Pull Request 605](https://github.com/navcoin/navcoin-core/pull/605)> <[Commit 5e0af830](https://github.com/navcoin/navcoin-core/commit/0b8cb5dd81186fcd54860fe7c25f2cac5e0af830)>

- Fixed error.log loading in Debug Window (Windows) <[Pull Request 611](https://github.com/navcoin/navcoin-core/pull/611)> <[Commit 30401b32](https://github.com/navcoin/navcoin-core/commit/f7b1c6304200052418c66e8f242ddf8c30401b32)>

- Fix random RPC tests failing <[Pull Request 612](https://github.com/navcoin/navcoin-core/pull/612)> <[Commit d5cfa467](https://github.com/navcoin/navcoin-core/commit/902970adfdd5ce0e54e54bfa7545edfad5cfa467)>

- Patch for staking redirect gui <[Pull Request 614](https://github.com/navcoin/navcoin-core/pull/614)> <[Commit 80323b33](https://github.com/navcoin/navcoin-core/commit/856d57a8f944ed3382d7001a3e9a1bfd80323b33)>

- Bump version number <[Pull Request 615](https://github.com/navcoin/navcoin-core/pull/615)> <[Commit 9e84d40a](https://github.com/navcoin/navcoin-core/commit/662163ad8f73081d2d6145938571ca809e84d40a)>

### More Information

For the full release notes please visit the [Community Fund Nullified Entry Patch](https://github.com/NAVCoin/navcoin-core/releases/tag/4.7.1).

To download the Navcoin Core 4.7.1 please visit the [Wallet Downloads](https://navcoin.org/en/wallets/#download-core) page.
