---
layout: notices
title: NavCoin 4.2.1 - 32Bit NTP Sync Hotfix
author: Craig MacGregor
date: '2018-06-11T12:15:16+12:00'
feature_image: /images/uploads/2018-06-06.jpg
notice_categories:
  - Patch NavPi
---
The issue preventing NavPi users from successfully upgrading to 4.2.0 has now been patched with version 4.2.1. If you are using the NavPi and want to support the community fund accumulation soft fork make sure you update now and resume staking with the new version.
<!--more-->

## Release Notes

- The wallet will try to synchronize clock every 30 seconds on launch until it succeds instead of just checking once and exiting if it fails.
- Enforces 32-bit data type for the buffer when reading from the NTP Server socket, fixing some compatibiity issues with 32-bit systems like Raspberry Pi.
- Reduce NTP connection timeout to 5 seconds.

https://github.com/NAVCoin/navcoin-core/releases/tag/4.2.1

Your NavPi should auto update to the latest version within 24 hours at which point you need to login and restart the device. Or if you want to manually update, check the knowledge base article here:

https://info.navcoin.org/knowledge-base/how-to-update-the-navpi

If you have any problems updating please join the community on discord for further assistance.

https://discord.gg/y4Vu9jw
