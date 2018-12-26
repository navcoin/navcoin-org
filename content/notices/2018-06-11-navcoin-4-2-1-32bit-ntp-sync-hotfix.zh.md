---
layout: 通知
title: NavCoin 4.2.1 - 32Bit NTP Sync Hotfix
author: Craig MacGregor
date: '2018-06-11T12:15:16+12:00'
feature_image: /images/uploads/2018-06-06.jpg
notice_categories:
  - Patch NavPi
---
阻碍NavPi用户成功升级到4.2.0的问题现在已经在4.2.1版本中得到了修补。如果您正在使用NavPi，并且想要支持社区基金积累软分叉，请确保您现在更新并继续使用新版本。
<!--more-->

## 版本说明

- 钱包将尝试在启动时每30秒同步一次时钟，直到成功，而不是只检查一次，如果失败就退出。
- 当从NTP服务器套接字读取数据时，强制缓冲区使用32位数据类型，修复了一些32位系统(如树莓派)的兼容性问题。
- 将NTP连接超时减少到5秒。

https://github.com/NAVCoin/navcoin-core/releases/tag/4.2.1

您的NavPi应该在24小时内自动更新到最新版本，此时您需要登录并重新启动设备。或者如果您想手动更新，请查看这里的知识库文章:

https://info.navcoin.org/knowledge-base/how-to-update-the-navpi

如果你有任何关于更新的问题，请加入我们的discord社区，寻求更多的帮助。
https://discord.gg/y4Vu9jw
