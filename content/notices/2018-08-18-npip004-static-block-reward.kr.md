---
layout: 공지
title: 'NPIP004: Static Block Reward'
author: Craig MacGregor
date: '2018-08-18T12:13:05+12:00'
feature_image: /images/uploads/npip004.png
notice_categories:
  - NPIP
---
몇 달 전 CocketSync 수정 사항을 네트워크에 소프트 포크로 연결한 후 Nav코인은 이제 Black코인이 게시한 Stake v2 프로토콜의 프루프 오브 스테이크 v2 프로토콜을 준수합니다.
<!--more-->

https://blackcoin.org/blackcoin-pos-protocol-v2-whitepaper.pdf

다음 논리적 단계는 PoS v3을 준수하는 것입니다. 사양은 다음과 같이 읽을 수 있습니다.

https://bravenewcoin.com/assets/Whitepapers/Blackcoin-POS-3.pdf

짧은 버전은 PoS v3에 콜드 스테이킹 기능과 고정 블록 보상이 포함되어 있다는 것입니다.

우리는 이미 NPIP002에 콜드 스테이킹을 표시했고, 그것은 커뮤니티로부터 만장일치의 지지를 받았습니다. 이는 커뮤니티 기금 청구 메커니즘이 활성화되고 Nav코인이 PoS v3를 준수하는 데 절반 정도 소요된 후에 배포될 예정입니다.

이를 통해 PoS v3 사양 중 두 번째 부분인 고정 블록 보상으로 이동합니다.

백분율 기반 보상 대신 고정 블록 보상을 원하는 이유는 무엇입니까? 주된 고려 사항은 지분 보상을 얻는 것이 NAV 균형에는 좋지만, 스테이킹의 주된 목적은 네트워크를 검증하고 보호하는 것에 대한 보상을 받는 것입니다. 현재 백분율 기반 보상으로, 코인은 네트워크를 보호하지 않고 무기한 동안 오프라인 상태가 될 수 있습니다. 그리고 나서 온라인에 나타나 보상을 청구할 수 있습니다. 비록 몇 블록을 넘는 네트워크 보안을 위해 거의 노력하지 않았음에도 불구하고 말입니다.

온라인에 있는 코인은 무게를 이용해 다른 제련업체에서 만든 블록의 유효성을 확인하고 네트워크 보안에 중요한 역할을 하고 있습니다. 비록 현재의 블록을 박하하는 동전은 아닐지라도 말입니다. 그것들은 51%의 공격으로부터 네트워크를 보호하는 것이기 때문에 네트워크 보안이 가능한 한 많은 코인 무게를 온라인에서 갖는 것이 중요합니다.

전체 근거를 읽으려면 NPIP004를 참조하시기 바랍니다.: https://github.com/NAVCoin/npips/blob/npip-0004/npip-0004.mediawiki

이 단계에서는 초안이며 토론할 수 있습니다. 궁극적으로는 네트워크의 지원 없이 누구도 합의 메커니즘을 변경할 수 없기 때문에 최선의 과정을 앞으로 결정하는 것은 커뮤니티와 네트워크에 달려 있습니다. 여기에 제가 피드백을 받고자 하는 몇 가지 생각을 덧 붙이고 싶습니다.

### 개요

NPIP004에서는 블록 보상을 블록당 2NAV로 설정할 것을 권장합니다.

매년 약 1,051,200개의 블록(2\*60\*24*365)이 채굴되고 있습니다. 이는 연간 2,102,400개의 NAV가 생성된다는 것을 의미합니다.

현재 약 63M NAV가 유통되고 있기 때문에, 이것은 지분 보상으로 인해 인플레이션율을 연간 3.3%로 설정합니다. 정적 보상으로 고려해야 할 또 다른 사항은 백분율로서 시간이 지남에 따라 기하급수적으로 감소할 것이라는 점입니다.

예를 들어, 순환금액이 100M NAV일 때, 지분 보상에 의해 발생하는 인플레이션은 3.3%가 아닌 총 공급량의 2.1%에 해당하는 NAV의 양과 동일합니다.
### 디플레이션 공금

기하급수적으로 디플레이션 공급이 좋은 것인지 나쁜 것인지를 놓고 논란이 일고 있습니다. 공급 수요 경제학과 관련해서는 채굴 보상이 반감될 때마다 그 가치가 기하급수적으로 증가하면서 비트코인에게는 엄청난 호재로 입증됐습니다. 생태계 신규 진입자보다 조기채택자에게 더 많은 보상을 해주기 때문에 유통에 나쁘다는 반론입니다.

개인적으로, 저는 디플레이션 모델의 지지자입니다. 저는 지금부터 우리가 100M를 유통시킬 때까지의 광업 보상의 차이는 우리가 공급 수요 경제에 영향을 미치는 것들에 대해 이야기할 때 채택에 비해 무시할 수 있다고 생각합니다. 비트코인처럼 4년마다 절반씩 줄이지 않고 약 10년 동안 1/3씩 감소하고 있습니다.

### 불평등

이것이 NAV가 점점 더 적은 스테이터들 사이에서 어떻게 더 많은 분열을 일으킬 수 있는지에 대한 논의가 있었습니다. 명심해야 할 점은 보상이 고정되어 있지만, 여러분이 보유한 블록의 수는 여전히 네트워크에서 고정되는 무게에 비례한다는 것입니다. 이것은 스테이커가 여전히 서로에게 비례하여 부를 증가시킨다는 것을 의미합니다. 몇 가지 시나리오를 살펴보겠습니다.

간단한 방정식은 다음과 같습니다.:

`총 보상/네트워크 가중치 * 발란스`

현재와 마찬가지로 20M NAV가 고정 작업에 기여한다고 가정합니다. 1년 동안 서로 다른 잔액에 대한 지분의 보상은 다음과 같습니다.
`2,102,400 / 20,000,000 * 밸런스`

| 밸런스          | 1년후             | 퍼센트       |
| ------------- | ---------------- | ---------- |
| 1,000,000 NAV	| 1,105,120.00 NAV | 10.512%    |
| 100,000 NAV   | 110,512.00 NAV   | 10.512%    |
| 10,000 NAV    | 11,051.20 NAV    | 10.512%    |
| 1,000 NAV     | 110.512 NAV      | 10.512%    |

보시다시피, 실제로 일어나는 유일한 일은 입력 값이 서로 다를 경우 소수 자리를 이동시키는 것입니다. 하지만 백분율로 볼 때 모든 사람이 입력하는 값에 비례하여 증가합니다.

이것은 약간 지나치게 단순화된 견해이지만 대체로 정확합니다. 여러분이 전체 체중의 10%나 0.001%를 가지고 있든지 간에, 여러분은 몸무게에 비례해서 블록을 박하하게 될 것입니다. 그래서 모든 사람들의 균형은 같은 퍼센트로 증가합니다.

그 문제를 복잡하게 만들 수 있는 유일한 것은 복합적인 관심사입니다. 몇몇 사람들은 더 큰 잔금 지분을 가진 사람이 더 자주 있기 때문에, 그들은 더 작은 스테이커들로부터 효과적으로 도망칠 수 있을 것이라고 우려했습니다. 그들은 결코 지분을 소유할 기회를 얻지 못할 것입니다.

저는 누군가가 블록을 찾을 때마다 추가된 2개의 NAV와 네트워크 무게를 고려하여 1년 동안 고정 보상을 시뮬레이션하기 위해 작은 컴퓨터 프로그램을 만들었습니다. 제가 만든 가정은 최악의 경우입니다. 예를 들어, 모든 동전은 절대 소비되지 않고, 다시 고정 무게로 혼합됩니다.

여기서 프로그램을 읽을 수 있습니다: https://github.com/craigmacgregor/static-reward-modeller/blob/master/model.js

일반 용어로, 20M NAV로 시작하고 30초마다 2개의 NAV가 추가되는 네트워크의 나머지 부분 대 사용자의 체중을 기준으로 보상해야 할 시기를 계산합니다. 출력은 다음과 같습니다.

| 스테이커   | 밸런스 시작.     | 밸런스 끝     | 이득 퍼센트.    |
| -------- | ------------- | ----------- | ------------ |
| 밸런스1    | 1,000,000     | 1,105,120   | 10.51%       |
| 밸런스2    | 100,000       | 110,512     | 10.51%       |
| 밸런스3    | 10,000        | 11,052      | 10.52%       |
| 밸런스4    | 1,000         | 1,106       | 10.6%        |
| 무계      | 20,000,000    | 22,102,400  | 10.51%       |
| 공금      | 63,000,000    | 65,102,400  | 3.33%        |

보시다시피, 작은 스테이커들은 20블록마다 2NAV씩 더 큰 스테이커 잔고가 올라가도 보상을 받습니다. 심지어 100 NAV를 보관하는 사람을 위해 이 모델을 제작했는데, 1년 후에 112 NAV(12% 상승)가 될 것입니다. 그래서 이 모델이 더 큰 모델보다 작은 스테이커를 조금 더 선호한다는 것은 사실 놀라운 결과입니다.

이 점을 고려하지 않는 것은 고아들을 해결하는 것 뿐입니다. 저는 기본적인 자바스크립트 프로그램으로 고아들을 쉽게 흉내낼 수 없습니다. 이것은 제가 실제 세상에 문제가 없는지 확인하기 위해 테스트넷에서 NPIP를 실행할 때 조사할 것입니다. 하지만 별로 중요하지 않을 것 같아요.

왜 10% 이상 상승했을까요?

생성된 총 금액이 고정되어 있지만 비례적으로 분할되기 때문에 이 점을 기억해야 합니다. 네트워크 중량이 20M인 경우, 동전당 연간 보상은 10.5%이지만, 40M 동전이 고정되어 있다면 동전당 연간 보상은 5.25%가 될 것이다. 더 많은 사람들이 동전을 온라인에 담보로 가져오면 보상이 감소합니다. 현재 온라인에서 NAV의 약 25%만이 고정되고 있지만, 일반적으로 온라인에서 약 40%의 고정 NAV를 볼 수 있습니다. 이는 연간 보상이 동전당 약 8.4%라는 것을 의미합니다. 100% 동전이 밀봉에 사용된 경우, 연간 보상은 동전당 3.33%와 동일합니다.

###. How does this compare to other coins?

| Coin | Reward |
| ---- | ------ |
| PIVX | 5-10%  |
| ARK  | 10-12% |
| LSK  | 10%    |
| NEBL | 10%    |
| NAV  | 5-10%  |

Source: https://www.investinblockchain.com/best-proof-of-stake-coins

So this move would put us in step with other PoS coins and actually still remain on the low end of the reward scale, especially if more people start staking.

I found this spreadsheet which has pretty detailed information about a bunch of coins and their inflation rates:

https://docs.google.com/spreadsheets/d/1-weHt0PiIZWyXs1Uzp7QIUKk9TX7aa15RtFc8JJpn7g/edit#gid=237137882

From this, you can see that NavCoin would still have one of the lowest inflation rates in crypto when you include PoW coins as well. Bitcoin currently inflates at around 3.68% as example.

### Isn't low inflation like we have now better?

With 4% per year and only 25% of coins staking, NavCoin currently only inflates at around 1.4% per year (including the community fund). We've seen the staking network weight roughly halve over the last 6 months, something which could be attributed the reduction of rewards when the community fund was introduced. It's possible people are switching to other, more profitable PoS coins because 4% reward is too low. At this network weight and market rate, it would only take around USD $2M worth of coins to perform a 51% attack. In reality, buying enough coins to 51% attack the network would drive the price of NAV up and therefore make it much more expensive than this to attack the network, but it's still worth noting the importance for network security to attract more people to stake.

### Summary

Changing to a static block reward of 2 NAV per block increases network security in multiple ways, the first being that it forces people to be online securing the network with their weight constantly. Secondly, it would increase potential earnings for stakers which would attract more people to stake NavCoin and increase the network weight further. Both of these factors make the network harder to 51% attack and would improve network security.

### Additional suggested changes

When we originally proposed 0.25 NAV per block for the Community Fund we calculated that as 20% of the current inflation rate. So reducing from 5% to 4% and adding 0.25 NAV was roughly equal. However this calculation was based on 40% of coins staking at 5% reward. I would suggest that if we move to a static block reward, we increase the community fund amount to 0.5 NAV per block, so it retains the 20% ratio to staking rewards as was originally intended.

This would mean that there are 2,102,400 NAV created per year for staking and 525,600 NAV per year created for the community fund totalling 2,628,000 new NAV created per year. This equals an initial inflation rate of 4.17% which is exponentially decreasing as a percentage as explained previously.

### Alternative approaches

##### Maximum Coin Age

We could introduce a maximum coin age of 1 month. If they came online after 6 months to claim reward, they would only receive 1 months of reward. This would incentivise people to remain online because otherwise they would miss out on rewards. However, for a big staker, they can cycle thorugh all their coins quite quickly, but a small staker would potentially miss out on rewards even if they stayed online the whole time. I would argue this solution is worse for small stakers than a static reward. It also doesn't address the fact that other coins have higher rewards and attracts no new users.

##### Block Validator Reward

We could keep the coinage based staking rewards for the block minter and create an additional static reward which the minter issues to people who are online and securing the network with their weight even if they aren't the block minter. It would still essentially be a lottery based on network weight, but this way we have a hybrid system where everyone gets their percentage, but people who are online staking all the time get extra. This alternative would take a reasonable amount of investigation, research and testing to accomplish and it's not been trialled before afaik. For simplicities sake, i would argue that just using a static reward is a better option.

##### Other approaches

Not sure what else, i haven't thought of any other ways to solve this problem yet. If you have any ideas, don't be afraid to post them in the thread.

### Conclusion

I'm personally in favour of changing the block reward to 2 NAV and increasing the Community Fund to 0.5 NAV per block.

I would suggest bundling these changes with NPIP002 and NPIP003 into NavCoin Core v4.5.0 (4.3.0 is Open Alias, 4.4.0 is Community Fund Claims) so we can reduce the number of versions released. Each individual protocol change will have its own version bit, so people can vote on each individually if they only want some of the updates rather than all of them.

If you have any comments or suggestions, please either post to the reddit thread or directly on the NPIP GitHub.

https://www.reddit.com/r/NavCoin/comments/980eql/npip004_static_block_reward
