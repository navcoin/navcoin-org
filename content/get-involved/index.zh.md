---
title: "为协议做贡献"
date: 2018-03-20T07:41:22+13:00
draft: false
type: "default"
description: "有几种方法可以为NavCoin协议做出贡献——所以如果你想支持这个项目，这里有一些最好的方法"
---
{{< hero_section
titleText="参与其中"
paragraphText="以下是几种有助于NavCoin协议的方法，并非所有方法都需要高水平的编程技能。如果你想支持NavCoin项目，这里有一些最好的&nbsp;方法。"
imgSrc="/images/get-involved/con-hero.svg"
>}}
{{< zig_section
titleText="翻译"
imgSrc="/images/get-involved/con-translate.svg"
  buttonText="建立一个Transifex账户"
  buttonUrl="https://www.transifex.com/signup/"
  buttonImgSrc="/images/icons/rightward-arrow.svg"
    reversed="true"
    newTab="true"
>}}
NavCoin Core已经被翻译成二十多种语言，还有几十种语言是部分翻译的，但是总是需要更多的帮助。NavCoin使用Transifex进行翻译，所以你需要建立一个账户。<br><br>要投稿翻译，请到Transifex上的NavCoin项目&nbsp;:<br><a href="https://www.transifex.com/navcoin/navcoin-core" style="text-decoration:underline";
{{< /zig_section>}}

{{< zig_section
  titleText="Documentation"
  imgSrc="/images/get-involved/con-doc.svg"
  buttonText="贡献给开发人员文档"
  buttonUrl="https://github.com/NAVCoin/navcoin-dev-docs"
  buttonImgSrc="/images/icons/rightward-arrow.svg"
  bgPurple="true"
  newTab="true"
>}}
我们目前正致力于为NavCoin Core提供一个开源的开发者文档资源。如果您想要帮助启动并运行这个程序，请前往GitHub，看看您如何提供帮助。只要确保您遵循本页概述的GitHub约定，并提交关于您正在编写哪些文档以减少重复工作的&nbsp;问题。
{{< /zig_section>}}

{{< zig_section
titleText="提交问题"
imgSrc="/images/get-involved/con-issue.svg"
buttonText="提交一个问题"
buttonUrl="https://github.com/NAVCoin/navcoin-core/issues"
buttonImgSrc="/images/icons/rightward-arrow.svg"
reversed="true"
newTab="true"
>}}
对于NavCoin Core的所有非关键问题，请搜索类似的问题，如果没有发现，请提交一个新问题，提供以下&nbsp;信息。
<br>
<ul class="article-ul" style="color: rgba(0, 0, 0, 0.55);">
  <li>对问题的清晰描述以及重现问题的&nbsp;步骤。</li>
  <li>您使用的是什么版本的NavCoin Core，或者您使用什么提交构建的.</li><li>从您的debug.log 文件中来的任何相关条目。请确保在发布您的debug.log之前已经删除任何敏感 &nbsp;信息。</li>
</ul>
<p class="paragraph-text">解决您所关心的问题的最佳和最快策略是让开发团队尽可能轻松地跟踪到问题并编写修复程序。如果您可以提供尽可能详实的信息并清晰的呈现问题，这将能最大程度的帮助我们的开发&nbsp;团队。</p>
{{< /zig_section>}}

{{< zig_section
  titleText="解决一个问题"
  imgSrc="/images/get-involved/con-resolve.svg"
  buttonText="查看自述文件"
  buttonUrl="https://github.com/navcoin/navcoin-core/blob/master/CONTRIBUTING.md"
  buttonImgSrc="/images/icons/rightward-arrow.svg"
  bgPurple="true"
  newTab="true"
>}}
问题跟踪器是找到对navcoin&core有用的方法的最佳场所。在开始为您发现的问题编写补丁之前，您可能希望对这个问题进行评论，以确保没有其他人已经在处理它。请记住，即使您正在解决已经发现的问题，也需要首先在问题跟踪器中创建一个&nbsp;问题。
<br><br>
要解决问题，请遵循以下流程:
<br>
<ul class="article-ul" style="color: rgba(255,255,255,0.55);">
  <li>建立NavCoin/ NavCoin -core到你自己的github&nbsp;账户。</li>
  <li>创建一个分支来解决问题，然后开始&nbsp;工作。</li>
  <li>编写或更新单元和集成测试，以覆盖您所做的任何&nbsp;更改。</li>
  <li>从分支向主NavCoin核心存储库发出pull请求，标题中包含问题类型和&nbsp;编号(例如. 修正了145的拼写错误)。</li>
  <li>与其他NavCoin核心贡献者讨论不一致的地方，或者通过GitHub提醒他们正在等待的Pull请求，他们会尽快审查&nbsp;它。</li>
</ul>
<p class="paragraph-text">有关完整贡献工作流程的详细信息，请参阅GitHub上的&nbsp;自述。</p>
{{< /zig_section>}}

{{< zig_section
titleText="编写测试"
imgSrc="/images/get-involved/con-test.svg"
reversed="true"
newTab="true"
>}}
NavCoin Core包含了许多测试，但是改进测试覆盖率的补丁总是备受欢迎，并且是熟悉代码库的好方法。
<br><br>
强烈建议开发人员编写 <a href="https://github.com/NAVCoin/navcoin-core/blob/master/doc/unit-tests.md" target="e" style="text-decoration:underline;">unit tests</a> for new code, 并为旧代码提交新的单元测试。单元测试可以编译并使用make check&nbsp;运行。 (假设在configure中没有禁用它们) 
<br><br>
还有 <a href="https://github.com/NAVCoin/navcoin-core/tree/master/qa" target="e" style="text-decoration:underline;">回归与集成测试</a>, 使用Python编写，在构建服务器上自动&nbsp;运行。
{{< /zig_section>}}

{{< zig_section
  titleText="检查代码"
  imgSrc="/images/get-involved/con-bug.svg"
    buttonText="审查的请求"
  buttonUrl="https://github.com/navcoin/navcoin-core/pulls"
  buttonImgSrc="/images/icons/rightward-arrow.svg"
  bgPurple="true"
  newTab="true"
>}}
NavCoin Core是一款安全软件，它可以帮助保护价值数百万美元的资产，因此每一个代码更改都需要由经验丰富的开发人员进行&nbsp;评审。<br><br>其他开发人员可能需要很长时间来审查您的pull请求。记住，所有的评审人员都是从他们自己的项目中抽出时间来评审您的pull请求的，所以要耐心和尊重他们的&nbsp;时间。<br><br>也请考虑帮助审查其他人的pull请求。你不需要成为NavCoin，NavCoin的核心代码库， 或者C++的专家， (尽管所有这些都有帮助)。T几乎所有程序员都可以查看open pull&nbsp;请求。
{{< /zig_section>}}

{{< zig_section
titleText="建议改进协议"
imgSrc="/images/get-involved/con-npips.svg"
buttonText="查看NPIP's"
buttonUrl="https://github.com/NAVCoin/npips"
buttonImgSrc="/images/icons/rightward-arrow.svg"
reversed="true"
newTab="true"
>}}
NavCoin Core致力于不断完善NavCoin的底层协议。我们的目标始终是提高安全性、隐私性和效率，同时鼓励去中心化、吸收和可用性。如果您希望帮助我们改进NavCoin协议，那么记录您的su问题的最佳位置是在NPIPs GitHub存储库&nbsp;上<br><br>希望提交NPIPs的人，首先应该通过Discord或IRC向NavCoin核心开发社区提出他们的想法或文档(irc.freenode.net #navcoin)。讨论之后，请向NPIPs存储库打开PR。经过编辑和验收，将在那里&nbsp;出版。<br><br>我们在批准核项目执行计划方面相当开明，尽量不代表社会过多地参与决策。只有在非常罕见的情况下，争议解决的决定是有争议的，不能达成一致意见。在这些情况下，保守的选择将永远是&nbsp;首选。<br><br>在这里有一个NPIP并不能使它成为正式接受的标准，直到它的状态变为Final或&nbsp;Active。<br><br>那些提议修改的人应该考虑到，最终的同意可能取决于NavCoin用户的一致&nbsp;意见。
{{< /zig_section>}}

{{< zig_section
  titleText="披露安全漏洞"
  imgSrc="/images/get-involved/con-disclosure.svg"
  paragraphText="NavCoin是一种实验性技术，有时会发现关键的bug。如果您是一名研究人员，并且您发现了一个安全漏洞，请访问“责任披露”页面，查看如何报告该&nbsp;漏洞."
    buttonText="信息披露责任"
  buttonUrl="/responsible-disclosure/"
  buttonImgSrc="/images/icons/rightward-arrow.svg"
  bgPurple="true"
  newTab="true"
>}}
{{< /zig_section>}}

<style>
.article-ul>li{
    margin-bottom: 8px;
    font-size: 16px;
    font-family: roboto;
    line-height: 25px;
    text-align: justify;
    margin-top: 0;
    margin-bottom: 10px;
}
</style>
