---
title: "For Developers"
date: 2018-03-20T07:41:22+13:00
draft: false
type: "default"
---
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
{{< hero_section
titleText="NavCoin For Developers"
imgSrc="/images/for-developers/dev-hero.svg"
paragraphText="NavCoin is a free and open-source project to which anyone can contribute. Its design is the collaborative effort of developers from all around the world. Our common goal is to improve the NavCoin protocol and its surrounding software ecosystem. Everyone has the potential to make a positive impact, no matter what your skill level."
buttonText="Read developer manifesto"
buttonLink="/governance/#read-manifestos"
buttonImgSrc="/images/icons/rightward-arrow.svg"
>}}

{{< zig_section
titleText="Get Funded By The NavCoin Network"
imgSrc="/images/for-developers/dev-get-involved.svg"
paragraphText="NavCoin’s Community Fund enables any developer to get paid by the network for their contributions to the NavCoin ecosystem. Projects are funded and approved by the decentralized network with no central authority. This ensures NavCoin’s direction remains firmly in the best interest of the network and is autonomously determined by the community." 
buttonText="Learn more"
buttonUrl="/community-fund"
buttonImgSrc="/images/icons/rightward-arrow.svg"
reversed="true"
>}}

{{< item_container_section 
    titleText="Why You Should Get Involved"
    subtitleText="NavCoin is built for the community, by the community."
>}}
    {{< feature 
        titleText="Inclusive community"
        imgSrc="/images/for-developers/dev-community.svg"
        text="Our developer community is collaborative, inclusive, and ready to help you get started."
    >}}
    {{< feature 
        titleText="Active research"
        imgSrc="/images/for-developers/dev-cutting-edge.svg"
        text="Improvements to the NavCoin protocol are constantly being worked on."
    >}}
    {{< feature                 
        titleText="Proof of Stake Alliance"
        imgSrc="/images/for-developers/dev-pos-alliance.svg"
        text="We’re part of the PoS Alliance, a consortium which aims to collaboratively research the PoS protocol."
    >}}
    {{< feature                 
        titleText="Easy to get started"
        imgSrc="/images/for-developers/dev-easy.svg"
        text="All the resources to get involved are at your fingertips and there are lots of ways to get involved."
    >}}
    {{< feature                 
        titleText="Programmable money"
        imgSrc="/images/for-developers/dev-digital-money.svg"
        text="With a publicly verifiable transaction ledger, you can easily use NavCoin in your apps and websites."
    >}}
    {{< feature                 
        titleText="Always open-source"
        imgSrc="/images/for-developers/dev-trust.svg"
        text="NavCoin software will always be free and in alignment with open-source principles."
    >}}
{{< /item_container_section >}}

{{< item_container_section 
    titleText="Contribute Now"
    subtitleText="There are many ways you can contribute to NavCoin, no matter what your skill level."
    bgPurple="true"
>}}
    {{< long_text 
        titleText="NavCoin Protocol"
        imgSrc="/images/for-developers/dev-protocol.svg"
        text="NavCoin is open-source and everyone can participate in making it better. Here’s where you can find the procedures to report an issue, fix a issue or suggest an improvement to the consensus protocol."
        buttonUrl="/contribute/"
        buttonText="Learn more"
        buttonImgSrc="/images/icons/rightward-arrow.svg"
    >}}
    {{< long_text 
        titleText="Community Projects"
        imgSrc="/images/for-developers/dev-projects.svg"
        text="NavCoin is more than just a protocol, it’s an ecosystem of websites, applications and devices which connect to the NavCoin protocol. Here’s where you can find out about contributing to community projects."
        buttonUrl="https://navhub.org"
        buttonText="Learn more"
        buttonImgSrc="/images/icons/rightward-arrow.svg"
    >}}
    {{< long_text 
        titleText="Responsible Disclosure"
        imgSrc="/images/for-developers/dev-disclosure.svg"
        text="NavCoin is experimental technology and sometimes critical bugs are found. If you’re a researcher and you’ve found a critical vulnerability here’s how you can talk securely with the NavCoin Core developers."
        buttonUrl="/responsible-disclosure/"
        buttonText="Learn more"
        buttonImgSrc="/images/icons/rightward-arrow.svg"
    >}}
{{< /item_container_section >}}

{{< contrib_list
    titleText="NavCoin Protocol Contributors"
    subtitleText="We would like to thank our contributors who have made this protocol awesome!"
    buttonUrl="https://github.com/NAVCoin/navcoin-core/graphs/contributors"
    buttonTxt="View NavCoin on GitHub"
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