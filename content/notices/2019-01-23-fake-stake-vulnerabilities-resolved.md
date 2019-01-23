---
layout: notices
title: “Fake Stake” Vulnerabilities Resolved
author: Craig MacGregor
date: '2019-01-23T12:28:15+13:00'
feature_image: /images/uploads/fake-stake-resolved.png
notice_categories:
  - General Notices
---
NavCoin Core have successfully resolved the "Fake Stake" resource exhaustion vulnerabilities as described by Andrew Miller and his team of students based out of the University of Illinois.
<!--more-->

On the 22nd of September 2018 NavCoin Core were notified of a resource exhaustion vulnerability which was present in NavCoin and several other Proof of Stake cryptocurrencies. The vulnerability was discovered by [Andrew Miller](https://ece.illinois.edu/directory/profile/soc1024), Researcher and Assistant Professor of Electrical & Computer Engineering at the University of Illinois.

Professor Miller provided NavCoin Core with detailed information about the vulnerability and a test suite demonstrating the vulnerability.

In Professor Millers words, the resource exhaustion vulnerability can be described as:

“An attacker that connects to a victim node as a peer can send invalid blocks and/or headers, which are stored in RAM or on disk without being validated. The consequence is that an attacker can connect to a victim node and fill its disk or RAM, until the node crashes or slows.”

The attack risk is considered high because there is virtually no cost to executing this type of attack.

“The attack is easy to carry out, since it does not actually require the attacker to make valid stake transactions. It can be made faster by making multiple socket connections to the victim. In our benchmarks targeting our own node running on the testnet of one affected currency, we were able to fill RAM at the rate of 2MB per second, and disk at a rate of 6MB per second.”

While this type of attack doesn’t target user funds directly, it makes it possible to crash staking nodes reducing the overall network weight and making a 51% attack more plausible.

Professor Miller advised NavCoin Core of the timeline for public disclosure of what he had discovered, giving NavCoin Core and the other affected cryptocurrency engineers the opportunity to implement fixes prior to the publishing of his findings.

NavCoin Core experimented with various mitigation strategies since there was no definitive fix immediately found by Professor Miller or any of the other affected dev teams. After trialling a few different approaches we decided to go with the mitigation which was designed by the [Qtum](https://qtum.org) team.

This mitigation involves detecting when a node is spamming headers and then refusing to accept more headers from the misbehaving node. The mitigation was proven as successful by running the tests originally provided by Professor Miller against the updated NavCoin Core daemon and confirming the amount of headers received from the spamming node were significantly reduced.

The mitigation can be found in [Pull Request #335](https://github.com/NAVCoin/navcoin-core/pull/335) which was merged into NavCoin Core’s master branch on 7 December 2018. This means the mitigation was included in NavCoin Core 4.5.0 on 13 December 2018 and the resource exhaustion vulnerability has been effectively patched since this date.

Since the mitigation only affects the peer to peer layer of the network, no changes to the consensus mechanism were necessary.

Professor Miller has now publicly disclosed the vulnerability and his [article on Medium](https://medium.com/@dsl_uiuc/fake-stake-attacks-on-chain-based-proof-of-stake-cryptocurrencies-b8b05723f806) which is why we're making this public statement today.

You can see in the chart at the end of the article that NavCoin is one of only a handful of notified coins which have fixed the vulnerability.

We would like to thank Professor Miller for his research and for responsibly disclosing this vulnerability to all affected parties, the affected parties for working together to find a solution and everyone involved for not attempting to use the information maliciously in any way.

We would also like to acknowledge NavCoin Core’s adherence to the [NavCoin Core Developer Manifesto](https://navcoin.org/en/governance/#read-manifestos) by not using this information to participate in hostile actions (1.1.5) and to handle critical live bugs with discretion until a patch is available (1.4.5).

We hope that you can understand the need to handle this vulnerability with discretion even after it was patched on the NavCoin network to provide all projects with ample opportunity to resolve the issue without experiencing network disruptions.

## TL;DR

A vulnerability was found in Proof of Stake which if exploited would crash nodes on the network which increases the plausibility of performing a 51% attack. The vulnerability was privately disclosed to NavCoin Core and other affected parties last year. The vulnerability has already been resolved in NavCoin Core 4.5.0 and above. The researcher who discovered the vulnerability has made his findings public, so we are now able to inform the wider NavCoin Community about the vulnerability and reassure everyone that the NavCoin network is already protected from this type of attack.
