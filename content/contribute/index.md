---
title: "Contribute to the Protocol"
date: 2018-03-20T07:41:22+13:00
draft: false
type: "default"
---
{{< hero_section
titleText="Contribute To The Protocol"
paragraphText="There are several ways to contribute to the NavCoin protocol, not all of which require a high level of programming skills. If you’d like to support the NavCoin project, here’s some of the best ways to get involved."
imgSrc="/images/contribute/con-hero.svg"
>}} 
{{< zig_section
titleText="Translations"
imgSrc="/images/contribute/con-translate.svg"
  paragraphText="NavCoin Core has been translated into over two dozen languages, with dozens more languages partially translated — but more help is always needed. NavCoin uses Transifex for translation, so you’ll need to setup an account.<br><br>To contribute a translation, go to the NavCoin project on Transifex: <br><a href=\"https://www.transifex.com/navcoin/navcoin-core\" style=\"text-decoration:underline;\">https://www.transifex.com/navcoin/navcoin-core</a><br><br>Click on the 'Join Team' button, let us know which languages you’re able to translate, and start translating!"
  buttonText="Set up a Transifex account"
  buttonUrl="https://www.transifex.com/signup/"
  buttonImgSrc="/images/icons/rightward-arrow.svg"
    reversed="true"
    newTab="true"
>}}

{{< zig_section
  titleText="Documentation"
  imgSrc="/images/contribute/con-doc.svg"
  paragraphText="We are currently working to bring online an open source developer documentation resource for NavCoin Core. If you want to help get this up and running please head over to GitHub and see how you can help out. Just make sure you follow the GitHub conventions outlined on this page and submit an issue about what documentation you’re writing to reduce duplication of effort."
  buttonText="Contribute to developer docs"
  buttonUrl="https://github.com/NAVCoin/navcoin-dev-docs"
  buttonImgSrc="/images/icons/rightward-arrow.svg"
  bgPurple="true"
  newTab="true"
>}}

{{< zig_section
titleText="Submit an issue"
imgSrc="/images/contribute/con-issue.svg"
paragraphText="For all non-critical problems with NavCoin Core please search for similar issues and if you don’t find any, submit a new issue providing the information below.<br><ul class=\"article-ul\" style=\"color: rgba(0, 0, 0, 0.55);\"><li>A clear description of the problem and steps to reproduce the problem.</li><li>What version of NavCoin Core you use or what commit you built using.</li><li>Any relevant entries from your debug.log file. Please ensure to strip out any sensitive information before publishing your debut.log entries.</li></ul><p class=\"paragraph-text\">The best strategy to get your issue fixed quickly is to make it as easy as possible for the development team to track down the problem and write a fix. Providing more information and organizing it well helps significantly.</p>" 
buttonText="Submit an issue"
buttonUrl="https://github.com/NAVCoin/navcoin-core/issues"
buttonImgSrc="/images/icons/rightward-arrow.svg"
reversed="true"
newTab="true"
>}}


{{< zig_section
  titleText="Resolve an issue"
  imgSrc="/images/contribute/con-resolve.svg"
  paragraphText="The issue tracker is the best place to find a useful way to contribute to NavCoin Core. Before starting to write any patches for issues you find, you may want to comment on the issue to make sure nobody else is already working on it. Remember that even if you’re resolving an issue you’ve found you will need to first create an issue in the issue tracker.<br>To resolve an issue follow this process:<br><ul class=\"article-ul\" style=\"color: rgba(255,255,255,0.55);\"><li>Fork NavCoin/navcoin-core to your own GitHub account.</li><li>Create a branch to work in to resolve the issue then get to work.</li><li>Write or update unit and integration tests to cover any changes you’ve made.</li><li>Make a pull request from your branch back into the main NavCoin Core repository with the issue type and number in the title (eg. Trivial: fixes spelling mistake #145).</li><li>Talk with other NavCoin Core contributors on Discord or through GitHub to alert them to the pending Pull Request and they will review it as soon as possible.</li></ul><p class=\"paragraph-text\">For the full contribution workflow details, please see the readme on GitHub.</p>"
  buttonText="See the readme"
  buttonUrl="https://github.com/navcoin/navcoin-core/blob/master/CONTRIBUTING.md"
  buttonImgSrc="/images/icons/rightward-arrow.svg"
  bgPurple="true"
  newTab="true"
>}}

{{< zig_section
titleText="Write tests"
imgSrc="/images/contribute/con-test.svg"
paragraphText="NavCoin Core is covered by many tests, but patches that improve test coverage are always welcome and are a great way to build familiarity with the codebase.<br><br>Developers are strongly encouraged to write <a href=\"https://github.com/NAVCoin/navcoin-core/blob/master/doc/unit-tests.md\" style=\"text-decoration:underline;\">unit tests</a> for new code, and to submit new unit tests for old code. Unit tests can be compiled and run (assuming they weren't disabled in configure) with: make check.<br><br>There are also <a href=\"https://github.com/NAVCoin/navcoin-core/tree/master/qa\" style=\"text-decoration:underline;\">regression and integration tests</a>, written in Python, that are run automatically on the build server." 
reversed="true"
newTab="true"
>}}

{{< zig_section
  titleText="Review the code"
  imgSrc="/images/contribute/con-bug.svg"
  paragraphText="NavCoin Core is security software that helps protect assets worth millions of dollars, so every code change needs to be reviewed by experienced developers.<br><br>It can take a long time for other developers to review your pull requests. Remember that all reviewers are taking time away from their own projects to review your pull requests, so be patient and respectful of their time.<br><br>Please also consider helping to review other people’s pull requests. You don’t need to be an expert in NavCoin, the NavCoin Core codebase, or C++ (although all these things help). There are almost always open pull requests that any programmer can review."
    buttonText="Review pull requests"
  buttonUrl="https://github.com/navcoin/navcoin-core/pulls"
  buttonImgSrc="/images/icons/rightward-arrow.svg"
  bgPurple="true"
  newTab="true"
>}}

{{< zig_section
titleText="Suggest a protocol improvement"
imgSrc="/images/contribute/con-npips.svg"
paragraphText="NavCoin Core strives to continually improve the underlying protocol of NavCoin. Our aim is always to improve security, privacy and efficiency while encouraging decentralisation, uptake and usability. If you want to help us improve the NavCoin protocol, the best place to document your suggestion is on the NPIPs (NavCoin Protocol Improvement Proposals) GitHub repository.<br><br>People wishing to submit NPIPs, first should propose their idea or document to the NavCoin Core development community through Discord or IRC (irc.freenode.net #navcoin). After discussion, please open a PR to the NPIPs repository. After copy-editing and acceptance, it will be published there.<br><br>We are fairly liberal with approving NPIPs, and try not to be too involved in decision making on behalf of the community. The exception is in very rare cases of dispute resolution when a decision is contentious and cannot be agreed upon. In those cases, the conservative option will always be preferred.<br><br>Having a NPIP here does not make it a formally accepted standard until its status becomes Final or Active.<br><br>Those proposing changes should consider that ultimately consent may rest with the consensus of the NavCoin users." 
buttonText="View NPIP's"
buttonUrl="https://github.com/NAVCoin/npips"
buttonImgSrc="/images/icons/rightward-arrow.svg"
reversed="true"
newTab="true"
>}}

{{< zig_section
  titleText="Disclose a security vulnerability"
  imgSrc="/images/contribute/con-disclosure.svg"
  paragraphText="NavCoin is experimental technology and sometimes critical bugs are found. If you’re a researcher and you’ve found a security vulnerability head over to the Responsible Disclosure page to see how you can report it."
    buttonText="Responsible disclosure"
  buttonUrl="/responsible-disclosure/"
  buttonImgSrc="/images/icons/rightward-arrow.svg"
  bgPurple="true"
  newTab="true"
>}}

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