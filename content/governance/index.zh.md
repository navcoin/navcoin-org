---
title: "治理"
date: 2018-03-20T08:09:08+13:00
draft: false
type: "default"
author: ""
description: "去中心化的数字货币，如NavCoin，将自由、隐私和金融权力归还给个人。"
---
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
{{< hero_section
titleText="治理"
imgSrc="/images/governance/gov-hero.svg"
paragraphText="NavCoin宣言的目的是明确列出NavCoin社区的贡献者做我们所做的事情的原因、我们如何做以及为什么做。这些文件包括指导原则、目的、工作范围和业务要求，以确保我们拥有相同的价值观，并始终以网络的最佳利益为出发点。"
buttonText="阅读我们的宣言"
buttonImgSrc="/images/icons/downward-arrow.svg"
buttonLink="#read-manifestos"
>}}

{{< zig_section
titleText="为什么去中心化是一次新革命"
imgSrc="/images/governance/gov-decentralise.svg"
reversed="true"
>}}
作为NavCoin社区的贡献者，我们是世界上最早运作的无政府主义辛迪加社会之一的成员。这种革命制度是建立在这样一种信念之上的:当人们能够自由地为自己的最大利益而行动时，他们自然也会为社会的最大利益而工作。另一种描述无政府辛迪加主义的方式是去中心化。
{{< /zig_section>}}


{{< zig_section
  titleText="让世界变得更好"
  imgSrc="/images/governance/gov-world.svg"
  bgPurple="true"
>}}
像NavCoin这样的去中心化数字货币从政府和企业精英手中夺走了对货币体系的控制权，将自由、隐私和金融权力还给了个人。这就是为什么NavCoin不仅仅是一个支付协议，它实际上是全球经济系统运作方式发生深刻变化的一个载体。去中心啊乎的治理是其核心。由于NavCoin没有中央权威，作为这个社区的成员，我们的一个关键角色是倡导中立和基于共识的决策。
{{< /zig_section >}}


{{< zig_section
titleText="去中心化的好处"
imgSrc="/images/governance/gov-benifits.svg"
reversed="true"
>}}
去中心化还可以防止腐败。历史无数次告诉我们，过多的权力掌握在过少的人手中，不可避免地会导致权力的滥用。更重要的是，它给了个人一个机会来做出真正的不同。协议的改进是自下而上的，任何人都可以提交。NavCoin蓬勃发展的社区生动地证明，当人们被信任做好事时，他们会为所有人的利益做出贡献。
{{< /zig_section>}}


{{< zig_section
  titleText="全部取决于您个人"
  imgSrc="/images/governance/gov-you.svg"
  bgPurple="true"
>}}
当NavCoin社区的每个人都有责任为协议的发展做出贡献，并积极地将协议的信息传播给世界时，不仅社区受益，整个社会也受益。相反，没有你作为一个被授权的独立个体的参与，就不可能有分权，因此也就没有NavCoin。NavCoin的成功真正取决于你，你可以自由地实现它。
{{< /zig_section>}}


{{< zig_section
titleText="参与其中"
imgSrc="/images/governance/gov-get-involved.svg"
reversed="true"
>}}
NavCoin是一个社区倡议，允许任何人以多种不同的方式贡献。NavCoin生态系统不仅仅是开源开发。内容创造、推广和采用与去中心化的数字货币同等重要——这就是为什么成功的关键是来自不同技能人群的贡献。
{{< /zig_section>}}


{{< item_container_section
    titleText="阅读我们的宣言"
    subtitleText="NavCoin的核心价值和贡献准则"
    bgPurple="true"
    anchor="read-manifestos"
>}}
    {{< action
        titleText="开发者宣言"
        imgSrc="/images/governance/gov-dev-manifesto.svg"
        subtext="对任何一个想为NavCoin开源代码做贡献的人来说，基本的阅读是必需的"
        linkText="获取宣言"
        linkUrl="/assets/NavCoinDeveloperManifesto.pdf"
        linkImgSrc="/images/icons/downward-arrow.svg"
    >}}
    {{< action
        titleText="宣言内容"
        imgSrc="/images/governance/gov-content-manifesto.svg"
        subtext="一个关于NavCoin社区内容贡献者的共享价值和目标的指南."
        linkText="获取宣言"
        linkUrl="/assets/NavCoinContentManifesto.pdf"
        linkImgSrc="/images/icons/downward-arrow.svg"
    >}}
    {{< action
        titleText="品牌指南方针"
        imgSrc="/images/governance/gov-brand.svg"
        subtext="一本手册，帮助您匹配您创建的内容与NavCoin品牌的外观和感受。 "
        linkText="获取指南"
        linkUrl="/assets/NavCoinBrandGuidelines.pdf"
        linkImgSrc="/images/icons/downward-arrow.svg"
    >}}
{{< /item_container_section >}}

<script>
$("a[href^='#']").click(function(e) {
	e.preventDefault();

	var position = $($(this).attr("href")).offset().top;

	$("body, html").animate({
		scrollTop: position
	} /* speed */ );
});
</script>
