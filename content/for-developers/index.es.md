---
title: "For Developers"
date: 2018-03-20T07:41:22+13:00
draft: false
type: "default"
description: "NavCoin un proyecto de fuente abierta en el cual todos pueden participar. Está diseñado como un proyecto colaborativo con usuarios de todo el mundo."
---
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
{{< hero_section
titleText="NavCoin para desarrolladores"
imgSrc="/images/for-developers/dev-hero.svg"
paragraphText="NavCoin es un proyecto de fuente abierta donde todos pueden participar. Su diseño es una colaboración entre desarrolladores de todas partes del mundo. Nuestro fin común es mejorar el protocolo de NavCoin y su ecosistema circundante. Todos tienen el potencial de impactar el proyecto de una manera&nbsp;positiva."
buttonText="Enlace al manifesto de los desarrolladores"
buttonLink="/es/governance/#read-manifestos"
buttonImgSrc="/images/icons/rightward-arrow.svg"
>}}

{{< zig_section
titleText="Conseguir fondos para el desarrollo por parte de la&nbsp;comunidad"
imgSrc="/images/for-developers/dev-get-involved.svg"
buttonText="Más información
buttonUrl="/community-fund"
buttonImgSrc="/images/icons/rightward-arrow.svg"
reversed="true"
>}}
El fondo comunitario de NAV permite a cualquier desarrollador ser remunerado por la red al contribuir al ecosistema de NavCoin. Los proyectos son aprobados y financiados por una red descentralizada sin autoridad central. Esto asegura que la red de NavCoin continue de manera firme y determinada por la visión de su&nbsp;comunidad.
{{< /zig_section>}}
{{< item_container_section 
    titleText="Razones por las cuales desarrolladores se unen a NavCoin"
    subtitleText="NavCoin es construida por su comunidad, para su comunidadi."
>}}
    {{< feature 
        titleText="Comunidad inclusivaInclusive community"
        imgSrc="/images/for-developers/dev-community.svg"
        text="Nuestra comunidad de desarrolladores es colaborativa, inclusiva y lista para&nbsp;ayudar."
    >}}
    {{< feature 
        titleText="Investigación activa"
        imgSrc="/images/for-developers/dev-cutting-edge.svg"
        text="Las mejoras al protocolo de NavCoin están siendo desarrollada&nbsp;constantemente."
    >}}
    {{< feature                 
        titleText="Alianza de "Proof of Stake"
        imgSrc="/images/for-developers/dev-pos-alliance.svg"
        text="Somos parte de la "PoS Alliance", un grupo de proyectos similares dispuestos a mejorar el protocolo PoS de manera&nbsp;colaborativa."
    >}}
    {{< feature                 
        titleText="Fácil de unirse"
        imgSrc="/images/for-developers/dev-easy.svg"
        text="Todos nuestros recursos están bien documentados y hay muchas meneras de unirse al&nbsp;proyecto."
    >}}
    {{< feature                 
        titleText="Dinero programable"
        imgSrc="/images/for-developers/dev-digital-money.svg"
        text="With a publicly verifiable transaction ledger, you can easily use NavCoin in your apps and&nbsp;websites."
    >}}
    {{< feature                 
        titleText="Always open-source"
        imgSrc="/images/for-developers/dev-trust.svg"
        text="NavCoin software will always be free and in alignment with open-source&nbsp;principles."
    >}}
{{< /item_container_section >}}

{{< item_container_section 
    titleText="Contribute Now"
    subtitleText="There are many ways you can contribute to NavCoin, no matter what your skill&nbsp;level."
    bgPurple="true"
>}}
    {{< long_text 
        titleText="NavCoin Protocol"
        imgSrc="/images/for-developers/dev-protocol.svg"
        text="NavCoin is open-source and everyone can participate in making it better. Here’s where you can find the procedures to report an issue, fix a issue or suggest an improvement to the consensus&nbsp;protocol."
        buttonUrl="/get-involved/"
        buttonText="Learn more"
        buttonImgSrc="/images/icons/rightward-arrow.svg"
    >}}
    {{< long_text 
        titleText="Community Projects"
        imgSrc="/images/for-developers/dev-projects.svg"
        text="NavCoin is more than just a protocol, it’s an ecosystem of websites, applications and devices which connect to the NavCoin protocol. Here’s where you can find out about contributing to community&nbsp;projects."
        buttonUrl="https://navhub.org"
        buttonText="Learn more"
        buttonImgSrc="/images/icons/rightward-arrow.svg"
    >}}
    {{< long_text 
        titleText="Responsible Disclosure"
        imgSrc="/images/for-developers/dev-disclosure.svg"
        text="NavCoin is experimental technology and sometimes critical bugs are found. If you’re a researcher and you’ve found a critical vulnerability here’s how you can talk securely with the NavCoin Core&nbsp;developers."
        buttonUrl="/responsible-disclosure/"
        buttonText="Learn more"
        buttonImgSrc="/images/icons/rightward-arrow.svg"
    >}}
{{< /item_container_section >}}

{{< contrib_list
    titleText="NavCoin Protocol Contributors"
    subtitleText="We would like to thank our contributors who have made this protocol&nbsp;awesome!"
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
