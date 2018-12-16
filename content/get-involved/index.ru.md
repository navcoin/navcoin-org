---
title: "Внесите свой вклад в протокол"
date: 2018-03-20T07:41:22+13:00
draft: false
type: "default"
description: "Существует несколько способов, как можно внести свой вклад в протокол NavCoin. Поэтому, если вы хотите поддержать проект, вот несколько наилучших способов, как можно принять участие"
---
{{< hero_section
titleText="Get Involved"
paragraphText="Существует несколько способов, как можно внести свой вклад в протокол NavCoin, ведь не все требует высокого уровня навыков программирования. Если вы хотите поддержать проект NavCoin, вот несколько наилучших способов, как можно принять&nbsp;участие."
imgSrc="/images/get-involved/con-hero.svg"
>}}
{{< zig_section
titleText="Переводы"
imgSrc="/images/get-involved/con-translate.svg"
  buttonText="Создайте учетную запись Transifex"
  buttonUrl="https://www.transifex.com/signup/"
  buttonImgSrc="/images/icons/rightward-arrow.svg"
    reversed="true"
    newTab="true"
>}}
NavCoin Core был переведен более чем на два десятка языков, при этом часть была переведена еще на несколько десятков языков. Но дополнительная помощь всегда необходима. Для переводов NavCoin использует Transifex, поэтому вам нужно будет создать учетную&nbsp;запись.<br><br>Чтобы помочь с переводом, перейдите в проект NavCoin на Transifex: <br><a href="https://www.transifex.com/navcoin/navcoin-core" style="text-decoration:underline;">https://www.transifex.com/navcoin/navcoin-core</a><br><br>Кликните на кнопку «Join Team», сообщите нам, какие языки вы можете перевести и начните&nbsp;переводить!
{{< /zig_section>}}

{{< zig_section
  titleText="Документация"
  imgSrc="/images/get-involved/con-doc.svg"
  buttonText="Внесите свой вклад в документы разработчиков"
  buttonUrl="https://github.com/NAVCoin/navcoin-dev-docs"
  buttonImgSrc="/images/icons/rightward-arrow.svg"
  bgPurple="true"
  newTab="true"
>}}
В настоящее время, мы работаем над тем, чтобы опубликовать в интернете ресурс документации разработчиков с открытым исходным кодом для NavCoin Core. Если вы хотите с этим помочь, то перейдите на GitHub и посмотрите, как вы можете это сделать. Однако убедитесь в том, что вы следуете конвенциям GitHub, изложенным на этой странице, и убедитесь в том, что подаете запрос о том, какую документацию вы пишете, чтобы уменьшить дублирование нашей общей&nbsp;работы.
{{< /zig_section>}}

{{< zig_section
titleText="Подать запрос на проблему"
imgSrc="/images/get-involved/con-issue.svg"
buttonText="Подать запрос"
buttonUrl="https://github.com/NAVCoin/navcoin-core/issues"
buttonImgSrc="/images/icons/rightward-arrow.svg"
reversed="true"
newTab="true"
>}}
Для всех некритичных проблем, связанных с NavCoin Core, ищите похожие проблемы. Если вы их не найдете, подайте новую проблему, предоставив информацию&nbsp;ниже.
<br>
<ul class="article-ul" style="color: rgba(0, 0, 0, 0.55);">
  <li>Четкое описание проблемы и шаги по ее&nbsp;решению.</li>
  <li>Какую версию NavCoin Core вы используете или какое действие вы создали используя его.</li><li>Любые соответствующие записи из вашего файла debug.log. Пожалуйста, не забудьте удалить любую конфиденциальную информацию перед публикацией записей в&nbsp;debug.log.</li>
</ul>
<p class="paragraph-text">Лучшая стратегия для быстрого решения вашей проблемы - сделать так, чтобы команда разработчиков, как можно проще обнаружила проблему и исправила ее. Предоставление дополнительной информации и ее правильная организация значительно облегчат&nbsp;процесс.</p>
{{< /zig_section>}}

{{< zig_section
  titleText="Решение проблемы"
  imgSrc="/images/get-involved/con-resolve.svg"
  buttonText="Смотрите файл readme"
  buttonUrl="https://github.com/navcoin/navcoin-core/blob/master/CONTRIBUTING.md"
  buttonImgSrc="/images/icons/rightward-arrow.svg"
  bgPurple="true"
  newTab="true"
>}}
Система отслеживания проблем является лучшим местом, где можно найти полезный способ внести свой вклад в NavCoin&nbsp;Core. Прежде чем начать писать какие-либо исправления для обнаруженных проблем, вы можете прокомментировать проблему, чтобы убедиться, что никто больше не работает над решением этой проблемы. Помните, что даже если вы решаете проблему, которую обнаружили, сначала вам нужно создать эту проблему в системе отслеживания&nbsp;проблем.
<br><br>
Для решения проблемы, следуйте этому процессу:
<br>
<ul class="article-ul" style="color: rgba(255,255,255,0.55);">
  <li>Сделайте форк NavCoin/navcoin-core в ваш собственный аккаунт в&nbsp;GitHub.</li>
  <li>Создайте ветку для решения проблемы и приступайте к&nbsp;работе.</li>
  <li>Напишите или обновите раздел и интеграцию, чтобы охватывать все внесенные вами&nbsp;изменения.</li>
  <li>Сделайте запрос на извлечение исправлений из вашей ветки обратно в основной репозиторий NavCoin Core, указав в заголовке тип и номер проблемы (например, Trivial: исправление орфографической ошибки # 145).</li>
  <li>Talk with other NavCoin Core contributors on Discord or through GitHub to alert them to the pending Pull Request and they will review it as soon as&nbsp;possible.</li>
</ul>
<p class="paragraph-text">For the full contribution workflow details, please see the readme on&nbsp;GitHub.</p>
{{< /zig_section>}}

{{< zig_section
titleText="Write tests"
imgSrc="/images/get-involved/con-test.svg"
reversed="true"
newTab="true"
>}}
NavCoin Core is covered by many tests, but patches that improve test coverage are always welcome and are a great way to build familiarity with the codebase.
<br><br>
Developers are strongly encouraged to write <a href="https://github.com/NAVCoin/navcoin-core/blob/master/doc/unit-tests.md" target="e" style="text-decoration:underline;">unit tests</a> for new code, and to submit new unit tests for old code. Unit tests can be compiled and run (assuming they weren't disabled in configure) with: make&nbsp;check.
<br><br>
There are also <a href="https://github.com/NAVCoin/navcoin-core/tree/master/qa" target="e" style="text-decoration:underline;">regression and integration tests</a>, written in Python, that are run automatically on the build&nbsp;server.
{{< /zig_section>}}

{{< zig_section
  titleText="Review the code"
  imgSrc="/images/get-involved/con-bug.svg"
    buttonText="Review pull requests"
  buttonUrl="https://github.com/navcoin/navcoin-core/pulls"
  buttonImgSrc="/images/icons/rightward-arrow.svg"
  bgPurple="true"
  newTab="true"
>}}
NavCoin Core is security software that helps protect assets worth millions of dollars, so every code change needs to be reviewed by experienced&nbsp;developers.<br><br>It can take a long time for other developers to review your pull requests. Remember that all reviewers are taking time away from their own projects to review your pull requests, so be patient and respectful of their&nbsp;time.<br><br>Please also consider helping to review other people’s pull requests. You don’t need to be an expert in NavCoin, the NavCoin Core codebase, or C++ (although all these things help). There are almost always open pull requests that any programmer can&nbsp;review.
{{< /zig_section>}}

{{< zig_section
titleText="Suggest a protocol improvement"
imgSrc="/images/get-involved/con-npips.svg"
buttonText="View NPIP's"
buttonUrl="https://github.com/NAVCoin/npips"
buttonImgSrc="/images/icons/rightward-arrow.svg"
reversed="true"
newTab="true"
>}}
NavCoin Core strives to continually improve the underlying protocol of NavCoin. Our aim is always to improve security, privacy and efficiency while encouraging decentralisation, uptake and usability. If you want to help us improve the NavCoin protocol, the best place to document your suggestion is on the NPIPs (NavCoin Protocol Improvement Proposals) GitHub&nbsp;repository.<br><br>People wishing to submit NPIPs, first should propose their idea or document to the NavCoin Core development community through Discord or IRC (irc.freenode.net #navcoin). After discussion, please open a PR to the NPIPs repository. After copy-editing and acceptance, it will be published&nbsp;there.<br><br>We are fairly liberal with approving NPIPs, and try not to be too involved in decision making on behalf of the community. The exception is in very rare cases of dispute resolution when a decision is contentious and cannot be agreed upon. In those cases, the conservative option will always be&nbsp;preferred.<br><br>Having a NPIP here does not make it a formally accepted standard until its status becomes Final or Active.<br><br>Those proposing changes should consider that ultimately consent may rest with the consensus of the NavCoin&nbsp;users.
{{< /zig_section>}}

{{< zig_section
  titleText="Disclose a security vulnerability"
  imgSrc="/images/get-involved/con-disclosure.svg"
  paragraphText="NavCoin is experimental technology and sometimes critical bugs are found. If you’re a researcher and you’ve found a security vulnerability head over to the Responsible Disclosure page to see how you can report&nbsp;it."
    buttonText="Responsible disclosure"
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
