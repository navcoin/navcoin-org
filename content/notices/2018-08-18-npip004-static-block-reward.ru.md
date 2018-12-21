---
layout: notices
title: 'NPIP004: Вознаграждение за статический блок'
author: Craig MacGregor
date: '2018-08-18T12:13:05+12:00'
feature_image: /images/uploads/npip004.png
notice_categories:
  - NPIP
---
После того, как пару месяцев назад был осуществлен софтфорк для фиксации синхронизации часов в сети, теперь NavCoin совместим с протоколом Proof of Stake v2, опубликованным Blackcoin.
<!--подробнее-->

https://blackcoin.org/blackcoin-pos-protocol-v2-whitepaper.pdf

Следующий логический шаг - совместимость с PoS v3 (3-тья версия). Спецификацию можно прочитать здесь:

https://bravenewcoin.com/assets/Whitepapers/Blackcoin-POS-3.pdf

Если коротко, то PoS v3 включает в себя возможность холодного стекинга и фиксированное вознаграждение за блок.

Мы уже презентовали холодный стекинг в NPIP002, и он получил единогласную поддержку сообщества. Он планируется развертываться сразу после того, как вступит в силу механизм требований Фонда Сообщества и как только NavCoin будет на полпути к совместимости с PoS v3.

Это подводит нас ко второй части спецификации PoS v3 - фиксированному вознаграждению за блок.

Почему мы хотели сделать фиксированное вознаграждение за блок вместо вознаграждения на основе процентов? Несмотря на то, что получение вознаграждений за стекинг хорошо для вашего баланса NAV, однако основная цель стекинга - вознаграждение за проверку и защиту сети. При текущем вознаграждении на основе процентов, монеты могут находиться в автономном режиме в течение неопределенного периода времени, не защищая сеть, а затем появляясь в сети, чтобы получить свое вознаграждение, даже если они проделали совсем небольшую работу по обеспечению безопасности сети, за исключением нескольких блоков.

Монеты, которые находятся в сети, используют свой вес для проверки блоков, отчеканенных другими стекерами, и они играют важную роль в защите сети, даже если они не единственные, кто чеканит текущий блок. Именно они защищают сеть от 51%-ных атак, и поэтому для безопасности сети важно иметь, как можно больший вес монет в сети.

Для ознакомления с полным обоснованием, пожалуйста, обратитесь к NPIP004 здесь: https://github.com/NAVCoin/npips/blob/npip-0004/npip-0004.mediawiki

Помните, что на данном этапе это черновик, и он открыт для обсуждения. В конечном счете, никто не может изменить механизм консенсуса без поддержки со стороны сети, поэтому лучший выбор будет делаться сообществом и сетью. Далее, я хочу высказать несколько дополнительных соображений, и хотел бы получить на них отзывы.

### Обзор

NPIP004 предлагает установить статическое вознаграждение за блок в 2 NAV за блок.

В год добывается примерно 1 051 200 (2 \ * 60 \ * 24 * 365) блоков, что означает, что в качестве вознаграждений proof of stake в год будет генерироваться 2 102 400 NAV.

В настоящее время в обращении находится примерно 63 млн. NAV, поэтому уровень инфляции за счет вознаграждения за стекинг остановится на уровне 3,3% в год. Другая вещь, которую следует учитывать при статическом вознаграждении, заключается в том, что со времененм в процентном отношении оно будет экспоненциально уменьшаться.

Например, если в обращении находится 100 млн. NAV, то инфляция, генерируемая вознаграждением за стекинг, будет такой же (по сумме NAV) и будет равна 2,1% от общего предложения вместо 3,3%.

### Дефляционное предложение

Существуют некоторые споры касаемо того, является ли экспоненциальное дефляционное предложение хорошей или плохой вещью. Что касается экономики спроса-предложения, то она оказалась огромным благом для Биткойна, значение которого экспоненциально увеличивается по мере того, как каждое вознаграждение за майнинг уменьшается вдвое. Контраргумент заключается в том, что это плохо для распределения, так как в этом случае больше вознаграждаются ранние пользователей, а не новых участники экосистемы.

Лично я за дефляционную модель. Я думаю, что разница в вознаграждениях за майнинг сейчас и пока у нас не будет 100 миллионов в обращении (через 10 с лишним лет), ничтожна по сравнению с принятием, когда мы говорим о вещах, которые влияют на экономику спроса-предложения. За 10 лет она будет уменьшаться на 1/3 часть, а не каждые 4 года, как в случае с биткойном.

### Неравенство

Также проходило обсуждение относительно того, как бы это сподвигло к дальнейшему разделению между стекерами с большим и меньшим количеством NAV. Следует помнить, что, хотя вознаграждение является фиксированным, количество блоков, которое вы добываете, все равно пропорционально зависит от вашего веса в сети. Это означает, что стекеры все еще увеличивают богатство в процентах относительно друг друга. Давайте запустим несколько сценариев.

Простое уравнение:

`Всего вознаграждений / Вес сети * Баланс`

Предположим, что 20 миллионов NAV находятся в процессе стекинга (как на данный момент). Так будут выглядеть вознаграждения за стекинг для некоторых разных балансов в течение 1-го года.

`2 102 400 / 20 000 000 * Баланс`

| Баланс        | После 1 года     | Процент, % |
| ------------- | ---------------- | ---------- |
| 1 000 000 NAV	| 1 105 120.00 NAV | 10.512%    |
| 100 000 NAV   | 110 512.00 NAV   | 10.512%    |
| 10 000 NAV    | 11 051.20 NAV    | 10.512%    |
| 1 000 NAV     | 110.512 NAV      | 10.512%    |

Как вы можете заметить, единственная вещь, которая происходит - это смещение запятой назад. Однако в процентах все получают пропорционально тому, какой у них вклад.

This is a slightly over simplified view, but it is largely accurate. Whether you have 10% or 0.001% of the total staking weight, you will mint blocks proportionally to your weight, so everyone's balances increase at the same percentages.

The only thing which could complicate the matter is compounding interest. A few people have been concerned that because the person with the larger balance stakes more frequently, they will effectively run away from the smaller stakers who would never get the opportunity to stake.

I wrote a small computer program to simulate the staking rewards over 1 year taking into account the network weight and the additional 2 NAV added every time someone finds a block. The assumption I've made is the worst case scenario e.g all coins staked are never spent, but compound back onto the staking weight.

You can read the program here: https://github.com/craigmacgregor/static-reward-modeller/blob/master/model.js

In laymans terms, it calculates when you'd be due for a reward based on your weight vs the rest of the network where the network starts with 20M NAV and gets 2 NAV added per 30 seconds. The output is as follows:

| Staker   | Balance Start | Balance End | Percent Gain |
| -------- | ------------- | ----------- | ------------ |
| balance1 | 1,000,000     | 1,105,120   | 10.51%       |
| balance2 | 100,000       | 110,512     | 10.51%       |
| balance3 | 10,000        | 11,052      | 10.52%       |
| balance4 | 1,000         | 1,106       | 10.6%        |
| weight   | 20,000,000    | 22,102,400  | 10.51%       |
| supply   | 63,000,000    | 65,102,400  | 3.33%        |

So, as you can see the smaller stakers still get their rewards, even though the bigger stakers balance is going up 2NAV every 20 blocks. I even modelled this for someone staking 100 NAV and they will end up with 112 NAV after 1 year (12% gain). So if anything it seems like this model marginally favours smaller stakers over bigger ones which was a surprising result actually.

The only thing this doesn't take into account is resolving orphans. I can't simulate orphans easily with a basic javascript program, it is something I will investigate when i run the NPIP on the testnet to make sure there is no problem in the real world. But i assume it will be of little consequence.

Why is it over 10% gain?

You have to remember that because the total amount generated is fixed but split proportionally. With a network weight of 20M the annual rewards per coin is 10.5%, but if 40M coins were staking the annual reward per coin would be 5.25%. if more people bring coins online to stake, the rewards decrease. Currently there are only around 25% of NAV online for staking, but typically we see around 40% NAV online for staking which would mean the annual reward is around 8.4% per coin. If 100% coins were used for staking the annual reward would be equal to 3.33% per coin.

### How does this compare to other coins?

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
