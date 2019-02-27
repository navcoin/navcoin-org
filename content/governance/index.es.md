---
title: "Gobernancia"
date: 2018-03-20T08:09:08+13:00
draft: false
type: "default"
author: ""
description: "Monedas digitales descentralizadas como NavCoin devuelven la libertad, la privacidad y el poder financiero a las personas."
---
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
{{< hero_section
titleText="Gobernancia"
imgSrc="/images/governance/gov-hero.svg"
paragraphText="El objetivo de los Manifestos de NavCoin es establecer las razones por las cuales los contribuyentes a la comunidad de NavCoin contribuimos, cómo lo hacemos y por qué. Estos documentos cubren los principios, el propósito, el alcance del trabajo y los requisitos operativos para garantizar que compartamos los mismos valores y que siempre operemos en el mejor interés de la&nbsp;red."
buttonText="Leer los manifiestos"
buttonImgSrc="/images/icons/downward-arrow.svg"
buttonLink="#read-manifestos"
>}}

{{< zig_section
titleText="¿Por qué la descentralización es revolucionaria?"
imgSrc="/images/governance/gov-decentralise.svg"
reversed="true"
>}}
Al contribuir dentro de la comunidad de NavCoin, somos miembros de una de las primeras sociedades anarco-sindicalistas que funcionan en el mundo. Este sistema revolucionario se basa en la creencia de que cuando las personas son libres de actuar en beneficio de sus propios intereses, naturalmente también trabajan en el mejor interés de la sociedad. Otra forma de describir el anarco-sindicalismo es la&nbsp;descentralización.
{{< /zig_section>}}


{{< zig_section
  titleText="Hacemos del mundo un lugar mejor"
  imgSrc="/images/governance/gov-world.svg"
  bgPurple="true"
>}}
Las monedas digitales descentralizadas como NavCoin quitan el control del sistema monetario a las élites gubernamentales y corporativas, al devolverle la libertad, la privacidad y el poder financiero a las personas. Es por eso que NavCoin no es solo un protocolo de pagos, en realidad es una alternativa para el cambio profundo en la forma en que funciona el sistema económico global. La gobernanza descentralizada está en su base. Debido a que no existe una autoridad central para NavCoin, una parte crucial de nuestro papel como miembros de esta comunidad es abogarnos a las decisiones basadas en el consenso y la&nbsp;neutralidad.
{{< /zig_section>}}


{{< zig_section
titleText="Beneficios de la descentralizacion"
imgSrc="/images/governance/gov-benifits.svg"
reversed="true"
>}}
La descentralización también ofrece protección contra la corrupción. La historia nos ha mostrado innumerables veces que demasiado poder en muy pocas manos conduce inevitablemente a su abuso. Además, le da al individuo la oportunidad de hacer una diferencia real. Las mejoras al protocolo provienen de abajo hacia arriba y pueden ser enviadas por cualquier persona. La comunidad de NavCoin es una prueba viviente de que cuando se confía en que las personas hagan el bien, contribuirán por el bien&nbsp;común.

{{< /zig_section>}}


{{< zig_section
  titleText="Todo depende de Ti"
  imgSrc="/images/governance/gov-you.svg"
  bgPurple="true"
>}}
Cuando todos los miembros de la comunidad NavCoin asumen la responsabilidad de contribuir al desarrollo del protocolo, no solo la comunidad se beneficia, sino que los beneficios se extienden a la sociedad en general. A la inversa, sin su participación como individuo autónomo con poder, no puede haber descentralización y, por lo tanto, no hay NavCoin. El éxito de NavCoin realmente depende de sus usuarios, y están en nosotros hacerlo&nbsp;posible.
{{< /zig_section>}}


{{< zig_section
titleText="Involucrarse"
imgSrc="/images/governance/gov-get-involved.svg"
reversed="true"
>}}
NavCoin es un proyecto comunitario que permite a cualquier persona contribuir de diferentes maneras. El ecosistema de NavCoin es más que un simple desarrollo de código abierto. La creación, promoción y adopción de contenido son tan importantes como una moneda digital descentralizada, por eso la clave del éxito son las contribuciones de personas con distintas&nbsp;habilidades.

{{< /zig_section>}}


{{< item_container_section
    titleText="Leer los manifiestos"
    subtitleText="Valores de NavCoin y guias para&nbsp;contribuir"
    bgPurple="true"
    anchor="read-manifestos"
>}}
    {{< action
        titleText="Manifiesto para desarrolladores"
        imgSrc="/images/governance/gov-dev-manifesto.svg"
        subtext="Lectura esencial para cualquier persona que quiera contribuir al código abierto de&nbsp;NavCoin."
        linkText="Acceder al manifesto"
        linkUrl="/assets/NavCoinDeveloperManifesto.pdf"
        linkImgSrc="/images/icons/downward-arrow.svg"
    >}}
    {{< action
        titleText="Manifiesto de contenido"
        imgSrc="/images/governance/gov-content-manifesto.svg"
        subtext="Una guía para los valores y objetivos compartidos por los colaboradores de la comunidad&nbsp;NavCoin."
        linkText="Acceder al manifiesto"
        linkUrl="/assets/NavCoinContentManifesto.pdf"
        linkImgSrc="/images/icons/downward-arrow.svg"
    >}}
    {{< action
        titleText="Guias de marca"
        imgSrc="/images/governance/gov-brand.svg"
        subtext="Un manual para ayudar a combinar el contenido a contribuir se adapte al de la marca&nbsp;NavCoin. "
        linkText="Acceder a la guía"
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
