---
layout: notices
title: 4.2.1 Soft Fork Now Locked In
author: Craig MacGregor
date: '2018-06-28T22:10:52+12:00'
feature_image: /images/uploads/2018-06-28.jpg
notice_categories:
  - Mandatory Update
---
The soft forks in version 4.2.1 have now achieved lock in with an 82% approval, and will soon activate two changes to NavCoin's consensus mechanism. All users are required to update to 4.2.1 by block 2237760 to remain connected to the network.
<!--more-->

## Community Fund Accumulation

Staking rewards will be reduced to 4% per annum and 0.25 NAV will be burned every block to the Community Fund. This fund will accrue approximately 250,000 NAV per year to be used as the NavCoin Network sees appropriate. This accumulation will begin at block 2237760.

The Community Fund isn't a regular wallet address, it has no private key and no one is able to directly control the funds. The funds can only be accessed by a two step network vote which will be implemented in a subsequent soft fork once the testing is completed. For more information on the NavCoin Community Fund see the NavHub.

<https://navhub.org/projects/community-fund>

## NTP Sync

To prevent network instability caused by inaccurate system clocks each network node will be required to sync their clock global NTP servers. If the system clock is unable to sync with an NTP server the NavCoin daemon will not connect to the network. The threshold for minting blocks with incorrect timestamps has also been reduced to a two minute window. The network will reject blocks with a greater variance than this threshold.

### TL;DR 

It is now mandatory to update to 4.2.1 before block 2237760
