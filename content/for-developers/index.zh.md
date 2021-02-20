---
title: "开发者"
date: 2018-03-20T07:41:22+13:00
draft: false
type: "default"
description: "Navcoin是一个任何人都可以参与的免费开源项目。它的设计是来自世界各地的开发人员共同努力的结果。"
---
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
{{< hero_section
titleText="Navcoin开发者"
imgSrc="/images/for-developers/dev-hero.svg"
paragraphText="Navcoin是一个任何人都可以参与的免费开源项目。它的设计是来自世界各地的开发人员共同努力的结果。我们的共同目标是改进Navcoin协议及其周围的软件生态系统。不管你的技能水平如何，每个人都有潜力产生积极的影响。"
buttonText="阅读开发者宣言"
buttonLink="/en/governance/#read-manifestos"
buttonImgSrc="/images/icons/rightward-arrow.svg"
>}}

{{< zig_section
titleText="得到Navcoin网络的资助"
imgSrc="/images/for-developers/dev-get-involved.svg"
buttonText="了解更多"
buttonUrl="/社区资金"
buttonImgSrc="/images/icons/rightward-arrow.svg"
reversed="true"
>}}
Navcoin的社区基金使任何开发者都可以通过网络获得他们对Navcoin生态系统的贡献。项目由没有中央权力的分散网络资助和核准。这确保了Navcoin的方向始终坚定地保持在网络的最佳利益，并由社区自主决定。
{{< /zig_section>}}
{{< item_container_section 
    titleText="你为什么需要参与其中"
    subtitleText="Navcoin是为了社区而建的，也是由社区所创建的。"
>}}
    {{< feature 
        titleText="包容的社区"
        imgSrc="/images/for-developers/dev-community.svg"
        text="您的开发人员社区是合作的，包容的，并随时帮助您开始。"
    >}}
    {{< feature 
        titleText="积极的研究"
        imgSrc="/images/for-developers/dev-cutting-edge.svg"
        text="对Navcoin协议的改进一直在进行当中。"
    >}}
    {{< feature                 
        titleText="股权证明联盟"
        imgSrc="/images/for-developers/dev-pos-alliance.svg"
        text="我们是PoS联盟的一部分，这个联盟旨在合作研究PoS协议。"
    >}}
    {{< feature                 
        titleText="容易上手"
        imgSrc="/images/for-developers/dev-easy.svg"
        text="所有参与的资源都在你的手里，有很多方法可以参与。"
    >}}
    {{< feature                 
        titleText="可编程的钱"
        imgSrc="/images/for-developers/dev-digital-money.svg"
        text="有了一个可公开验证的交易账本，你可以很容易地在你的应用和网站上使用Navcoin。"
    >}}
    {{< feature                 
        titleText="长久开源"
        imgSrc="/images/for-developers/dev-trust.svg"
        text="Navcoin软件将永远是免费的，并且符合开源原则。"
    >}}
{{< /item_container_section >}}

{{< item_container_section 
    titleText="现在开始做贡献"
    subtitleText="不管你的技术水平如何，都有很多方法可以为Navcoin做出贡献。"
    bgPurple="true"
>}}
    {{< long_text 
        titleText="Navcoin 协议"
        imgSrc="/images/for-developers/dev-protocol.svg"
        text="Navcoin是开源的，每个人都可以参与，让它变得更好。在这里，您可以找到报告问题、修复问题或改进协商一致协议的流程。"
        buttonUrl="/get-involved/"
        buttonText="了解更多"
        buttonImgSrc="/images/icons/rightward-arrow.svg"
    >}}
    {{< long_text 
        titleText="社区项目"
        imgSrc="/images/for-developers/dev-projects.svg"
        text="Navcoin不仅仅是一个协议，它是一个连接到Navcoin协议的网站、应用程序和设备的生态系统。在这里你可以找到如何为社区项目做贡献。"
        buttonUrl="https://navhub.org"
        buttonText="了解更多"
        buttonImgSrc="/images/icons/rightward-arrow.svg"
    >}}
    {{< long_text 
        titleText="信息披露责任"
        imgSrc="/images/for-developers/dev-disclosure.svg"
        text="Navcoin是一种实验性技术，有时会发现关键的bug。如果您是一名研究人员，并且发现了一个关键的漏洞，那么以下是如何与Navcoin核心开发人员安全对话的方法。"
        buttonUrl="/responsible-disclosure/"
        buttonText="Learn more"
        buttonImgSrc="/images/icons/rightward-arrow.svg"
    >}}
{{< /item_container_section >}}

{{< contrib_list
    titleText="Navcoin协议贡献者"
    subtitleText="我们要感谢我们的贡献者，他们让这个协议变得非常棒!"
    buttonUrl="https://github.com/NAVCoin/navcoin-core/graphs/contributors"
    buttonTxt="在GitHub上查阅Navcoin"
    buttonImgSrc="/images/icons/rightward-arrow.svg"
>}}
<script>
$("a[href^='#']").click(function(e) {
	e.preventDefault();
	
	var position = $($(this).attr("href")).offset().top;

	$("body, html").animate({
		scrollTop: position
	} /* speed */ );
});
</script>
