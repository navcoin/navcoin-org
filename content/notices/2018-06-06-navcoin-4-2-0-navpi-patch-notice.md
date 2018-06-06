---
layout: notices
title: NavCoin 4.2.0 NavPi Patch Notice
author: Craig MacGregor
date: '2018-06-06T17:07:30+12:00'
feature_image: /images/uploads/navpi-patch.jpg
notice_categories:
  - NavPi
---
NavCoin Core 4.2.0 was released today which includes the NTP server check to make sure every device has their system clock synced correctly when minting blocks. An unforeseen issue has been found when updating the NavPi using the updater script.
<!--more-->

## The Bug

The NavPi uses a cron job to start the NavCoin daemon on reboot. When the device first boots the network port for the NTP server check is unavailable. This causes the NavCoin daemon to exit and the NavPi interface will report that it can not connect to the NavCoin daemon.

## Intermediate Solution

We have removed the specific daemon for the NavPi from the GitHub release. This will mean that when the autoupdater runs it will not be able to find the download and it will not update.

If you're running the NavPi and the updater has triggered, you will see the notice saying there is a new version available. It will prompt you to reboot your device to install the new version.

** You can ignore this notice and your NavPi device should continue to stake. **

Alternatively, you can reboot your device at this point to dismiss the notice. When you reboot you will get a error message saying that the update was not applied.

Please note that you do reboot you will need to unlock your device for staking again to continue minting blocks until the patch is available to fix this issue.

In either case, please make sure your wallet remains **unlocked for staking** to support the network until the 4.2.1 patch is available.

## NavCoin Core Patch 4.2.1

We are already working on a patch to fix this issue. Instead of addressing it only for the NavPi, we are adding some checks into the NavCoin daemon so that this issue is averted for any system that is setup to auto start the NavCoin daemon on boot. We will be pushing this patch out as soon as possible.

## Unaffected Users

This issue only effects users who are automatically starting their NavCoin daemon before the network adapter is ready which is predominately NavPi users. Everyone else should continue with the update and upgrade to NavCoin 4.2.0 as planned.

If you're unsure what to do, please join the community on Discord for further assistance.

<https://discord.gg/y4Vu9jw>
