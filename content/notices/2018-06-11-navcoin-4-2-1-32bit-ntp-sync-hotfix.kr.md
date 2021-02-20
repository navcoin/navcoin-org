---
layout: 공지
title: Navcoin 4.2.1 - 32Bit NTP Sync Hotfix
author: Craig MacGregor
date: '2018-06-11T12:15:16+12:00'
feature_image: /images/uploads/2018-06-06.jpg
notice_categories:
  - Patch NavPi
---
NavPi 사용자가 4.2.0으로 성공적으로 업그레이드할 수 없는 문제가 버전 4.2.1로 패치되었습니다. NavPi를 사용하고 있으며 커뮤니티 기금 축적 소프트 포크를 지원하려면 지금 업데이트하고 새 버전으로 작업을 다시 시작하세요.
<!--more-->

## 릴리즈 노트

- 지갑은 시작 시 30초마다 클락을 동기화하려고 시도합니다. 단 한 번만 확인하고 실패하면 종료하는 대신 성공합니다.
- NTP 서버 소켓에서 읽을 때 버퍼에 대해 32비트 데이터 유형을 적용하여 Raspberry Pi와 같은 32비트 시스템에서 일부 취약성 문제를 해결합니다.
- NTP 연결 시간 초과를 5초로 줄입니다.

https://github.com/NAVCoin/navcoin-core/releases/tag/4.2.1

NavPi는 로그인한 후 24시간 이내(제시작 요구)에 최신 버전으로 자동 업데이트해야 합니다. 또는 수동으로 업데이트하려면 여기에서 기술 자료 문서를 확인합니다.

https://info.navcoin.org/knowledge-base/how-to-update-the-navpi

업데이트하는 데 문제가 있으면 커뮤니티에 문의하여 추가 지원을 받으시기 바랍니다.

https://discord.gg/y4Vu9jw
