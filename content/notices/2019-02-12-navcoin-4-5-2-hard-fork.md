---
layout: notices
title: NavCoin 4.5.2 Hard Fork
author: Craig MacGregor
date: '2019-02-12T11:34:44+13:00'
feature_image: /images/uploads/navcoin-4.5.2.png
notice_categories:
  - General Notices
---
NavCoin is hard forking at block **2882875** to mitigate an issue with the Community Fund payment requests. Please update to NavCoin Core 4.5.2 before **Saturday 16 February at 18:30 GMT** to avoid network disruption.
<!--more-->

With such a major change to the consensus as the addition of the Community Fund, it was always expected that there would be some teething issues. In December NavCoin Core successfully released a hard fork to resolve an issue with the calculation of a proposal's expiration date.

Another issue has since been discovered, this time with the payment request mechanism. The issue has caused a very small number of stakers to have a payment request dropped from their community fund database and attempt to generate the payment request again.

These duplicate payments made in error by the staker have been accepted by the network as valid and paid out to the proposal creator. There have been in total X duplicate payments which have paid out and additional Y NAV from the Community Fund. The majority of the erroneously created NAV (Z NAV) have been donated back to the community fund by the proposal creators. If you've received a duplicate payment we encourage you to also donate it back to the Community Fund to be burned.

This issue has been successfully patched in version 4.5.2 and blocks containing duplicate payment request payouts will be rejected by the wider network.

It is unfortunate that another issue has been discovered which requires a hard fork to fix. NavCoin Core remains committed to their manifesto's goals of minimising the use of hard forks. In this instance it is again only being used to patch an implementation bug and not enforce new consensus rules.

We apologise for the short notice to update. Since this issue can be exploited for financial gain we are considering it high priority and have scheduled the hard fork to take place before the end of the next voting cycle.

### Update before Saturday 16 February at 18:30 GMT

If you don't update to 4.5.2 before block 2882875 you will risk forking from the rest of the network. All blocks after the fork height must contain version bit 21 or they will be rejected by the rest of the network so if you're a staker it's especially important that you update or your stakes will be orphaned.

As an extra precaution we have recommended that exchanges disable deposits and withdrawals of NAV during the fork until it is confirmed the network is operating normally.

To read the full changelog please read the NavCoin Core GitHub release notes.

<https://github.com/NAVCoin/navcoin-core/blob/master/doc/release-notes/release-notes-4.5.2.md>

You can download version 4.5.1 from the downloads section of navcoin.org or directly from the NavCoin Core GitHub release.

<https://navcoin.org/en/wallets/#download-core>

<https://github.com/NAVCoin/navcoin-core/releases/tag/4.5.2>
