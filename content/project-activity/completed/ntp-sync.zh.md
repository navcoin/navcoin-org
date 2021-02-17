---
layout: roadmap
title:  网络时间协议NTP同步
author: Alex Vazquez
date: '2018-06-06'
feature_image: /images/uploads/navpi-patch.jpg
status: completed
externalUrl: https://github.com/NAVCoin/navcoin-core/releases/tag/4.2.0/
---

Navcoin Core现在强制在启动时对NTP服务器进行时钟同步。这是为了防止加注者创建带有错误时间戳的区块，从而导致网络的区块间距问题。
