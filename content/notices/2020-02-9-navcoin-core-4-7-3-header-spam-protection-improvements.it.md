---
layout: notices
title: NavCoin Core 4.7.3 - Header Spam Protection Improvements
author: Craig MacGregor
date: '2020-02-09T09:00:00+13:00'
feature_image: /images/uploads/navcoin-core-4.7.3.png
notice_categories:
  - General Notices
---
This release only features one merged pull request, but it is an important security patch. It is recommended for all stakers and economic nodes to update immediately to ensure network stability. Everyone else running NavCoin Core is recommended to upgrade as soon as possible, even if you're not staking.
<!--more-->
## Anti Header Spam v2

<[Pull Request 656](https://github.com/navcoin/navcoin-core/pull/656)>
<[Commit 5f11875](https://github.com/navcoin/navcoin-core/commit/5f118753a1900241e9cf8ea38281e4fe75cfeae8)>


Introduces a new anti header spam system which improves the previous implementation and addresses the art-of-bug reports.

Features:

- Every time a header or block is received from another peer, its hash is added to a `points` list associated with the peer. 
- Peers are discerned by their ip address, this means peers sharing ip address will also share the same `points` list. This can be changed with `-headerspamfilterignoreport` (default: `true`).
- Before proceeding with the block or headers validation, the `points` list will be cleared removing all the hashes of blocks whose scripts have already been correctly validated.
- The peer is banned if the size of the `points` list is greater than `MAX_HEADERS_RESULTS*2` once cleared of already validated blocks.
- The maximum allowed size of the `points` list can be changed using the `-headerspamfiltermaxsize` parameter.
- The log category `headerspam` has been added, which prints to the log the current size of a peers `points` list.
- When `-debug=bench` is specified, execution time for the `updateState` function is logged.

#### Considerations

- The maximum size of the `points` list by default is 4,000. With a block time of 30 seconds, NavCoin sees an average of 2,880 blocks per day. A maximum value of 4000 is roughly one and a half times more than the count of blocks a peer needs to be behind the chain tip to be in Initial Block Download mode. When on IBD, the header spam filter is turned off. This ensures that normal synchronisation is not affected by this filter.

- An attacker would be able to exhaust 32 bytes from the hash inserted in the `points` list + 181 bytes from the `CBlockIndex` inserted in `mapBlockIndex` for every invalid header/block before being banned. The `points` list is cleared when the attacker is banned, but those headers are not removed from `mapBlockIndex` or the hard disk in the current implementation. The size of CBlockIndex has been measured with:

```c++
    CBlockIndex* pindex = new CBlockIndex();
    CDataStream ssPeers(SER_DISK, CLIENT_VERSION);
    ss << CDiskBlockIndex(pindex);
    std::vector<unsigned char>vch(ss.begin(), ss.end());
    std::cout << to_string(vch.size()) << std::endl;
```

- The default maximum value means that a single malicious peer with a unique IP can exhaust at max `3,999*213=831 kilobytes` without being banned or `4,000*181=707 kilobytes` being banned.

### More Information

For the full release notes please visit the [Header Spam Protection Improvements](https://github.com/navcoin/navcoin-core/releases/tag/4.7.3) release tag on GitHub.

To download the NavCoin Core 4.7.3 please visit the [Wallet Downloads](https://navcoin.org/en/wallets/#download-core) page.
