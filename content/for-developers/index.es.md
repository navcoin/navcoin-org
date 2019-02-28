---
title: "Para desarrolladores"
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
buttonText="Más información"
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
        titleText="Comunidad inclusiva"
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
        text="Nav posee una cadena de bloques pública y auditable, haciendola fácil de integrar en aplicaciones y páginas de&nbsp;internet."
    >}}
    {{< feature                 
        titleText="Fuente abierta"
        imgSrc="/images/for-developers/dev-trust.svg"
        text="NavCoin siempre será gratis y de libre acceso, alineado con nuestros&nbsp;principios."
    >}}
{{< /item_container_section >}}

{{< item_container_section 
    titleText="Contribuis"
    subtitleText="Hay varias maneras de contribuir al ecosistema de NavCoin, sin importar el grado de conocimientos que se&nbsp;tenga."
    bgPurple="true"
>}}
    {{< long_text 
        titleText="Protocolo de NavCoin"
        imgSrc="/images/for-developers/dev-protocol.svg"
        text="NavCoin es un proyecto de fuente abierta donde todos están invitados a mejorarlo. Aquí podran sugerir cambios, reportar fallas e incluso arreglarlas siempre preservando el consenso dentro del&nbsp;protocolo."
        buttonUrl="/get-involved/"
        buttonText="Más información"
        buttonImgSrc="/images/icons/rightward-arrow.svg"
    >}}
    {{< long_text 
        titleText="Proyectos comunitarios"
        imgSrc="/images/for-developers/dev-projects.svg"
        text="NavCoin es más que un simple protocolo, es un ecosistema de aplicaciones, dispositivos y páginas de internet que se conectan a la red de NavCoin. Desde aquí usuarios pueden encontrar informacción sobre como contribuir con los proyectos de nuestra&nbsp;comunidad ."
        buttonUrl="https://navhub.org"
        buttonText="Más información"
        buttonImgSrc="/images/icons/rightward-arrow.svg"
    >}}
    {{< long_text 
        titleText="Responsabilidad sobre la seguridad"
        imgSrc="/images/for-developers/dev-disclosure.svg"
        text="NavCoin es una tecnología experimiental y en ocasiones encontramos fallas en el sistema. Si encuentras alguna vunabilidad en nuestro código, aquí es donde puedes conectarte de manerda segura con nuestros&nbsp;desarrolladores"
        buttonUrl="/responsabilidad-sobre-seguridad/"
        buttonText="Seguridad"
        buttonImgSrc="/images/icons/rightward-arrow.svg"
    >}}
{{< /item_container_section >}}

{{< contrib_list
    titleText="Contribuir al protocolo de NavCoin"
    subtitleText="We would like to thank our contributors who have made this protocol&nbsp;awesome!"
    buttonUrl="https://github.com/NAVCoin/navcoin-core/graphs/contributors"
    buttonTxt="Ver NavCoin en GitHub"
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
