---
title: "Community Fund"
date: 2018-05-21
draft: false
type: "default"
---
{{< left_image_section
    title="NavCoin Community Fund"
    imgSrc="/images/circle-icons/nav_purple-key.png"
    imgHeight="400px"
    imgPadding="20px"
    bgColor="#7d5ab5"
    linkBgColor="#523971"
    gradient=""
    titleColor="#FFF"     
    textColor="#FFF">}}
    <p>NavCoin is a decentralized cryptocurrency that uses peer-to-peer technology to operate with no central authority or banks; managing transactions and the issuing of NavCoin is carried out collectively by the network. <b>NavCoin is open-source; its design is public, nobody owns or controls NavCoin and everyone can take part.</b></p>
    <p>NavCoin has a range of sleek and intuitive wallets that allows you to easily manage your NavCoin and keep your funds secure.</p>
{{< /left_image_section >}}
{{< community_fund_section
    title="Proposal Details"
    bgColor="#FFF"
    linkBgColor="#523971"
    titleColor="#FFF"
    textColor="#7a7a7a"
    containerPadding="40px 0">}}
<h3>What is the NavCoin Community Fund?</h3>

<p>NavCoin is an open-source project to which anyone can contribute. It is a community initiative that ran no pre-mine or initial coin offering. NavCoin contributors do their best to find funding and build projects independently. The community fund offers a decentralised way to fund NavCoin projects and further encourage the decentralisation of the development of NavCoin.</p>

<p>The community have suggested a change in the consensus mechanism which would allow for community contributors to receive funding from the network for their efforts. The NavCoin Core developers agree that implementing community led funding will best serve the interests of this open-source project and foster it’s decentralised nature.</p>

<p>After consideration and discussion within the community, the NavCoin Core developers have proposed the following changes.</p>

<ul>
    <li>Proof of Stake rewards will be reduced from 5% to 4% per annum.</li>
    <li>Each block staked will generate 0.25 NAV per block for the NavCoin Community Fund.</li>
    <li>Anyone and everyone on the network&nbsp;will be able to propose projects, budgets and initiate network votes to schedule funds.</li>
    <li>The NavCoin Community Fund will be protected by the consensus layer – proposals to schedule funds will never be accepted without the positive vote from a majority of NavCoin stakers.</li>
    <li>Scheduled funds&nbsp;can only be&nbsp;released&nbsp;by a 2nd network vote when NavCoin stakers achieve consensus on whether the proposal was completed successfully. No funds are received until work is agreed as complete.</li>
    <li>If the work is never completed, the scheduled funds are returned to the NavCoin Community Fund.</li>
    <li>No one (not even the NavCoin Core developers) owns or can directly access, manage or curate the NAV in the Community Fund or how it is distributed.&nbsp;The fund has no private key which can spend the NAV, the only way they can ever be spent is by the dual network consensus vote.</li>
</ul>

<p>Currently approximately 40% of the 62M NAV in the network are used for staking. This means the network generates approximately 1.24M NAV per year. Therefore 1% of the proof of stake rewards approximately equals 250k NAV per year which is roughly 0.237 NAV per block with NavCoin’s 30 second block time. The NavCoin Core developers suggest using a fixed amount of 0.25 NAV per block rather than a calculation based on 1% of the amount staked to protect the network against attackers who could aim to remove coins from staking to constrain the financial capabilities of the community and to protect the fund from extreme fluctuations.</p>

<hr />

<h3>How the proposal process works</h3>

<ol class="" start="1">
    <li>Dream up the&nbsp;changes you would like to see&nbsp;within the NavCoin eco-system. These can be&nbsp;everything&nbsp;from protocol changes, new applications that run on top of the NavCoin protocol, third party services, websites, promotional activities or even non-NavCoin related things like charity donations.</li>
    <li>Document your ideas on the NavCoin Community site and&nbsp;and discuss it with other people involved in the NavCoin community.</li>
    <li>If you’re unable to complete the work involved in your proposal yourself, you will need to&nbsp;build the team&nbsp;necessary&nbsp;to make your proposal a reality.</li>
    <li>Figure out how much&nbsp;NAV you need to complete your proposal.</li>
    <li>Create and submit the Community Fund proposal to the NavCoin blockchain for voting.</li>
    <li>Promote your proposal to NavCoin stakers and convince them to accept your proposal.</li>
    <li>If the proposal gets locked in, now it’s time to do the work. You and your team need to complete whatever task you set yourselves in the proposal so you can claim the NAV scheduled for your proposal.</li>
    <li>Once you’ve done the work outlined in your proposal, a second round of voting will take place to release the funds. Present and promote your work to the NavCoin stakers to get them to agree that you have finished the work.</li>
    <li>Retrieve the funds from your proposal as payment for the work you’ve done.</li>
</ol>

<hr />

<h3>Voting to implement the Community Fund</h3>

<p>Because we are a community project, we take the democratic process especially seriously. We would never attempt to make changes to the consensus mechanism without due process. The first step in this process is to initiate a network vote to see the community’s interest in reducing the stake reward and implementing a Community Fund.</p>

<p>Since network votes are cast when a user stakes a block, a network vote on this issue gives us the capability to get consensus from those who will be directly affected by a change in the staking rewards.</p>

<p>This proposal is a work in progress and we would love to hear your feedback. If you want to make a suggestion, comment or contribution please join us on <a href="https://reddit.com/r/navcoin" target="_blank">reddit</a>.</p>

<p>In order to facilitate the voting process the NavCoin Core developers have released version 4.0.6 of the NavCoin Core wallet. Users using the graphical interface will be shown with a dialog once the voting period starts allowing them to choose their vote. Users of the headless version of the wallet may add the following line</p>

<p>votefunding=n (being n=1 for YES, n=0 for NO)</p>

<p>to the navcoin.conf file and restart the daemon to start voting. In both cases the wallet should be actively staking to cast votes, every minted block will represent 1 vote. Voting period will start at 00:00 on the 18th October 2017 (GMT) and be counted as a percentage per block period (~4 days).</p>

<p>NavPi users will need to log into their device and update the NavCoin wallet to cast their vote. More detailed instructions for NavPi users will be posted in the coming days.</p>

<p>This proposal would be considered approved when 8640 blocks signal a positive vote over a 11520 (~4 days) block period (75% acceptance).</p>

<hr />

<h3>TL;DR</h3>

<p>The NavCoin Core developers propose some changes to the NavCoin consensus protocol. In short:</p>

<ul>
    <li><span style="font-weight: 400;">Creating a decentralized NavCoin Community fund</span></li>
    <li><span style="font-weight: 400;"> Staking reward changes from 5% to 4% </span></li>
    <li><span style="font-weight: 400;"> Fixed amount of 0.25 NAV Coin/block to NavCoin Community fund</span></li>
    <li><span style="font-weight: 400;"> Anyone can make a funding proposal</span></li>
    <li><span style="font-weight: 400;"> Payout’s of NAV happen when everyone votes that the work is completed</span></li>
    <li><span style="font-weight: 400;"> The aim of this is to fund the&nbsp;decentralised development of&nbsp;NavCoin amongst the community.</span></li>
</ul>

{{< /community_fund_section >}}
