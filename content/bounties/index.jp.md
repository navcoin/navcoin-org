---
title: "Bounties"
date: 2018-03-20T07:41:22+13:01
draft: false
type: "default"
description: "Navcoin is a community based project and there are multiple bounty programs abailable where you can earn NAV for contributing to various projects."
---
{{< hero_section
titleText="Navcoin Bounties"
imgSrc="/images/for-developers/dev-hero.svg"
paragraphText="Navcoin is a community based project and there are multiple bounty programs running where you can earn NAV for contributing to Navcoin projects. Not all of the bounties require the skills of a computer programmer, so even if you're non-technical check it out, there might be some way for you to&nbsp;earn&nbsp;NAV."
buttonText="Read more"
buttonLink="#active-bounties"
buttonImgSrc="/images/icons/downward-arrow.svg"
>}}

<section class="item-container-section" id="active-bounties">
    <div class="ninety-vw-container" style="max-width: 1400px;">
        <h1 class="container-title">Active Bounty Programs</h1>
        <h3 class="container-subtitle"></h3>
        <div class="grid-container" style="grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); max-width: 800px; margin: 0 auto;">
            <div class="feature-column">
                <div class="feature-card">
                    <img src="/images/homepage/hom-fast.svg" alt="" class="item-icon">
                    <h3>Navcoin Core</h3>
                    <p style="margin-bottom: 10%">If you're a C++ guru or just getting started, you can earn NAV by helping to maintain and develop the Navcoin Core software.</p>
                    <a href="#navcoin-core" class="round-btn small gradient-btn">View Bounty Program <img src="/images/icons/downward-arrow.svg" class="btn-img"> 
                    </a>
                </div>
            </div>
            <div class="feature-column">
                <div class="feature-card">
                    <img src="/images/homepage/hom-new-system.svg" alt="" class="item-icon">
                    <h3>Navcoin Websites</h3>
                    <p style="margin-bottom: 10%">Web developers, content writers and translators can earn NAV by helping to update and maintain Navcoin's websites.</p>
                    <a href="#navcoin-websites" class="round-btn small gradient-btn">View Bounty Program <img src="/images/icons/downward-arrow.svg" class="btn-img"> 
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>

{{< zig_section
  cssId="navcoin-core"
  titleText="Navcoin Core"
  imgSrc="/images/bounties/hom-fast-white.svg"
  buttonText="View GitHub Issues"
  buttonUrl="https://github.com/navcoin/navcoin-core/issues"
  buttonImgSrc="/images/icons/rightward-arrow.svg"
  bgPurple="true"
  newTab="true"
>}}
<p style="color: white;">The Navcoin Core developer bounty program is largely focused on maintenance, bug finding and bug fixing in the Navcoin Core project. Navcoin Core is written in C++ with QT as the user interface.</p>

<p style="color: white;">If you've ever wanted to become a blockchain developer then this program is a great way to get started. The Navcoin Core development community is friendly and helpful, so whether you're a seasoned pro or a beginner, take a look at the GitHub issues and see if there's anything you want to try and help out with.</p>


{{< /zig_section>}}

<div class="grey">
  <div class="article">
    <h2 class="article-title">
        Bounty Program Details
    </h2>
    <p class="paragraph-text">The Navcoin Core Developer bounty program was initiated by Navcoin Developer <a href="https://github.com/aguycalled" target="_blank">Alex V</a> to encourage the decentralisation of Navcoin Core development.</p>
    <p class="paragraph-text">There are two main ways to claim coins through the bounty program:</a>
    <h3>1. Solving GitHub Issues</h3>
    <p class="paragraph-text">The issues which can be worked to claim coins will be labelled with a special tag. Issues will be assigned to candidates on a first-come-first-served basis and the assignment should be handled on the GitHub issue. If&nbsp;you want to work on a bounty, make sure you comment on it and your claim has been&nbsp;acknowledged.</p>
    <br />
    <p class="paragraph-text">Bounties will be paid once the pull request is merged into master and the pull request must include the corresponding test units to be considered complete. The reward for the task will be based on the issue's label:</p>
    <br />
    <div style="display: flex; flex-direction: row;  justify-content: flex-start; flex-wrap: wrap">
        <div class="bounty-label"><span style="background-color: #7bd0f5;">bounty-low</span></div>
        <div class="bounty-description"><i class="fa fa-arrow-right"></i> 100 NAV</div>
        <div class="bounty-label"><span style="background-color: #6091de;">bounty-medium</span></div>
        <div class="bounty-description"><i class="fa fa-arrow-right"></i> 500 NAV</div>
        <div class="bounty-label"><span style="background-color: #6252e2;">bounty-high</span></div>
        <div class="bounty-description"><i class="fa fa-arrow-right"></i> 1,000 NAV</div>
        <div class="bounty-label"><span style="background-color: #7841b1;">bounty-xhigh</span></div>
        <div class="bounty-description"><i class="fa fa-arrow-right"></i> 2,000 NAV</div>
    </div>
    <br />
    <p class="paragraph-text">If you've noticed something that could be improved in Navcoin Core which isn't already on the issues list, you can also create an issue yourself and ask for it to be reviewed and assigned a bounty.</p>
    <h3>2. Finding Bugs</h3>
    <p class="paragraph-text">Finding bugs in Navcoin Core is another way to earn NAV. Finding bugs, especially low level ones, doesn't necessarily require any programming knowledge. If you download and install the latest version of Navcoin Core, test it on your system and find any problems then you could be eligible to claim a&nbsp;bounty.</p>
    <br />
    <p class="paragraph-text">Already reported/publicly known vulnerabilities, or critical vulnerabilities (level 5 or more) requiring physical access to the device or MITM techniques, won't be considered for the bounty. Payment will be done based on its severity:</p>
    <br />
    <div style="display: flex; flex-direction: row;  justify-content: flex-start; flex-wrap: wrap">
        <div class="bounty-label">1. Visual Glitches</div>
        <div class="bounty-description"><i class="fa fa-arrow-right"></i> 100 NAV</div>
        <div class="bounty-label">2. Minor UX Issues</div>
        <div class="bounty-description"><i class="fa fa-arrow-right"></i> 300 NAV</div>
        <div class="bounty-label">3. Major UX Issues</div>
        <div class="bounty-description"><i class="fa fa-arrow-right"></i> 600 NAV</div>
        <div class="bounty-label">4. Local Client Crashes</div>
        <div class="bounty-description"><i class="fa fa-arrow-right"></i> 1,000 NAV</div>
        <div class="bounty-label">5. DoS Attacks</div>
        <div class="bounty-description"><i class="fa fa-arrow-right"></i> 2,500 NAV</div>
        <div class="bounty-label">6. Network Isolation Attacks</div>
        <div class="bounty-description"><i class="fa fa-arrow-right"></i> 4,000 NAV</div>
        <div class="bounty-label">7. Consensus Vulnerabilities</div>
        <div class="bounty-description"><i class="fa fa-arrow-right"></i> 5,000 NAV</div>
        <div class="bounty-label">8. Generation of Coins</div>
        <div class="bounty-description"><i class="fa fa-arrow-right"></i> 10,000 NAV</div>
        <div class="bounty-label">9. Theft of Funds</div>
        <div class="bounty-description"><i class="fa fa-arrow-right"></i> 15,000 NAV</div>
    </div>
    <br />
    <p class="paragraph-text">
    If you've discovered a critical bug in Navcoin core, we would ask that you treat it with discretion and use our <a href="/responsible-disclosure/" target="e">Responsible Disclosure</a> proceedure to notify the other core developers and work with them to resolve the bug and claim your bounty.
    </p>
    <br />
    <div>
        <a href="https://www.reddit.com/r/Navcoin/comments/bd1mku/navcoincore_dev_bounty_fund/" class="round-btn gradient-btn" target="_blank">
          More Information <img src="/images/icons/rightward-arrow.svg" class="btn-img"> 
        </a>
    </div>
  </div>
</div>

{{< zig_section
  cssId="navcoin-websites"
  titleText="Navcoin Websites"
  imgSrc="/images/bounties/hom-new-system-white.svg"
  buttonText="View GitHub Project"
  buttonUrl="https://github.com/orgs/navcoin/projects/2"
  buttonImgSrc="/images/icons/rightward-arrow.svg"
  bgPurple="true"
  newTab="true"
>}}
<p style="color: white;">Because Navcoin is an open source community project which is always evolving and growing, the websites are cosntantly needing updating.</p>

<p style="color: white;">If you're a web developer, translator or content writer there are opportunities for you to earn NAV through the Navcoin Websites bounty program. Check out the program below and head on over to the GitHub project to look at the list of available bounty issues.</p>

{{< /zig_section>}}

<div class="grey">
  <div class="article">
    <h2 class="article-title">
        Bounty Program Details
    </h2>
    <p class="paragraph-text">The Navcoin Websites bounty program was initiated by Navcoin Developer <a href="https://github.com/proletesseract" target="_blank">Craig M</a> to encourage the decentralisation of reponsibility for the main open source Navcoin Websites.</p>
    <p class="paragraph-text">The issues which can be worked to claim coins will be labelled with a special tag. Issues will be assigned to candidates on a first-come-first-served basis and the assignment should be handled on the GitHub issue. If&nbsp;you want to work on a bounty, make sure you comment on it and your claim has been&nbsp;acknowledged.</p>
    <p class="paragraph-text">Webistes that are covered by this bounty program:</p>
    <h3>1. Navcoin Org</h3>
    <p class="paragraph-text">This is the main public facing site for Navcoin. It contains information about what Navcoin is, where to buy it, how to store it, where to spend it and how the protocol works.</p>
    <p class="paragraph-text"><b>Bounty Ideas:</b> New exchanges, new translations, updating existing translations, updating the roadmap, reviewing and refining content, adding pagination on list pages, improving the content management system and more.</p>
    <h3>2. NavHub</h3>
    <p class="paragraph-text">This is the website dedicated to all the layer two applications of Navcoin and the wider community beyond the core protocol.</p>
    <p class="paragraph-text"><b>Bounty Ideas:</b> Writing news articles, updating community projects, adding new community projects, adding new events, adding community assets, adding navcoin heroes, adding or updating guides, adding pagination to list pages, adding search or category filters to the projects listing and more.</p>
    <h3>3. Navcoin Knowledge Base</h3>
    <p class="paragraph-text">This is the website where guides, tutorials and troubleshooting information for Navcoin’s ecosystem of products, websites and services exist.</p>
    <p class="paragraph-text"><b>Bounty Ideas:</b> Adding knowledge base articles related to Navcoin Core, NavPay, NavPi, NavDroid, Next Wallet, NavPaper, Community Fund and more. Translating articles, improving the design, improving the user experience, adding pagination, adding category browsing and more.</p>
    <h3>Bounty Claims</h3>
    <p class="paragraph-text">The reward for the task will be based on the issue's label:</p>
    <br />
    <div style="display: flex; flex-direction: row;  justify-content: flex-start; flex-wrap: wrap">
        <div class="bounty-label"><span style="background-color: #7bd0f5;">bounty-low</span></div>
        <div class="bounty-description"><i class="fa fa-arrow-right"></i> 100 NAV</div>
        <div class="bounty-label"><span style="background-color: #6091de;">bounty-medium</span></div>
        <div class="bounty-description"><i class="fa fa-arrow-right"></i> 500 NAV</div>
        <div class="bounty-label"><span style="background-color: #6252e2;">bounty-high</span></div>
        <div class="bounty-description"><i class="fa fa-arrow-right"></i> 1,000 NAV</div>
        <div class="bounty-label"><span style="background-color: #7841b1;">bounty-xhigh</span></div>
        <div class="bounty-description"><i class="fa fa-arrow-right"></i> 2,000 NAV</div>
    </div>
    <br />
    <p class="paragraph-text">
      Some issues may exceed the bounty-xhigh rating threshold and can be assessed on a case by case basis with an agreed bounty amount flagged on the issue eg. bounty-5000.
    </p>
    <p class="paragraph-text">
      Bounties will be paid after the pull request has been tested and merged into master.
    </p>
    <p class="paragraph-text">If you've noticed something that could be improved on any of the three websites covered by this bounty program which isn't already on the issues list, you can also create an issue yourself and ask for it to be reviewed and assigned a bounty.</p>
    <br />
    <div>
        <a href="https://www.reddit.com/r/Navcoin/comments/bttld6/websites_bounty_program/" class="round-btn gradient-btn" target="_blank">
          More Information <img src="/images/icons/rightward-arrow.svg" class="btn-img"> 
        </a>
    </div>
  </div>
</div>

{{< social_grid_section
    titleText="Join Our Community"
    subtitleText="If you want to participate in any of the Navcoin Bounty Programs, the best way to get involved is to join the community channels and say hello."
    bgPurple="true"
>}}
    {{< social                 
    titleText="Discord"
    imgSrc="/images/for-beginners/beg-discord.svg"
    linkUrl="https://discordapp.com/invite/y4Vu9jw"
>}}
{{< social                 
    titleText="Reddit"
    imgSrc="/images/for-beginners/beg-reddit.svg"
    linkUrl="https://reddit.com/r/Navcoin/"
>}}
{{< social                 
    titleText="Telegram"
    imgSrc="/images/for-beginners/beg-telegram.svg"
    linkUrl="https://t.me/navcoin"
>}}
{{< social                 
    titleText="Facebook"
    imgSrc="/images/for-beginners/beg-fb.svg"
    linkUrl="https://www.facebook.com/Navcoin/"
>}}
{{< social                 
    titleText="Twitter"
    imgSrc="/images/for-beginners/beg-twitter.svg"
    linkUrl="https://twitter.com/Navcoin"
>}}
{{< social                 
    titleText="Youtube"
    imgSrc="/images/for-beginners/beg-yt.svg"
    linkUrl="https://www.youtube.com/NavcoinCore"
>}}
{{< social                 
    titleText="Medium"
    imgSrc="/images/for-beginners/beg-medium-new.svg"
    linkUrl="https://medium.com/nav-coin"
>}}

{{< /social_grid_section >}}