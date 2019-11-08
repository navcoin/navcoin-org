---
title: "Správa"
date: 2018-03-20T08:09:08+13:00
draft: false
type: "default"
author: ""
description: "Decentralizované digitální měny jako NavCoin vracejí jednotlivcům jejich svobodu, soukromí a finanční moc."
---
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
{{< hero_section
titleText="Správa"
imgSrc="/images/governance/gov-hero.svg"
paragraphText=" Cílem manifestů NavCoinu je jasně formulovat důvody, které nás jako přispěvatelů NavCoinovej komunity vedou, co děláme, jak to děláme, a proč. Tyto dokumenty pokrývají základní principy, cíle, rozsah práce a operačních požadavků, které mají zajistit, že sdílíme stejné hodnoty a vždy jednáme v nejlepším zájmu sítě."
buttonText="Přečíst si naše manifesty"
buttonImgSrc="/images/icons/downward-arrow.svg"
buttonLink="#read-manifestos"

>}}

{{< zig_section
titleText="Proč je decentralizace tak revoluční"
imgSrc="/images/governance/gov-decentralise.svg"
reversed="true"

>}}
Jako přispěvatelé NavCoinové komunity jsme zároveň členy první funkční světové krypto-syndikalistické společnosti. Tento převratný systém je založen na přesvědčení, že pokud mohou lidé svobodně jednat ve svém nejlepším zájmu, tak budou přirozeně jednat i v nejlepším zájmu společnosti. Jiný způsob, jak jednoduše vyjádřit anarcho-syndikalizmus, je decentralizace.
{{< /zig_section>}}

{{< zig_section
  titleText="Udělat svět lepším místem"
  imgSrc="/images/governance/gov-world.svg"
  bgPurple="true"

>}}
>Decentralizované digitální měny jako je NavCoin přebírají kontrolu nad monetárním systémem ze strany vlád a korporátních elit a vracejí svobodu, soukromí a finanční moc jednotlivcům. To je důvod, proč NavCoin není jen platebním protokolem, ale je ve skutečnosti náznakem hluboké změny způsobu fungování světového ekonomického systému. Decentralizované správa je jeho srdcem. Jelikož pro NavCoin neexistuje žádná centrální autorita, klíčová role pro nás jako členy této komunity je být vzory neutrality a rozhodování založeném na obecném konsensu.
>{{< /zig_section>}}

{{< zig_section
titleText="Výhody decentralizace"
imgSrc="/images/governance/gov-benifits.svg"
reversed="true"

>}}
>Decentralizace nás chrání před korupcí. Historie nám mnohokrát ukázala, že příliš mnoho moci v rukou pár jednotlivců nevyhnutelně vede k jejímu zneužití. Decentralizace zároveň dává jednotlivci šanci udělat ve světě nějakou reálnou změnu. Zlepšení protokolu přicházejí vždy zespodu a navrhnout je může kdokoliv. NavCoin jako prosperující komunita je živým důkazem toho, že pokud důvěřujeme lidem, že budou konat dobro, budou přispívat pro dobro všech.
>{{< /zig_section>}}

{{< zig_section
  titleText="Záleží jen na tobě"
  imgSrc="/images/governance/gov-you.svg"
  bgPurple="true"

>}}
>Pokud každý z navcoinové komunity převezme odpovědnost za rozvoj protokolu a aktivně působí při šíření jeho myšlenky, nejenže z toho má užitek celá komunita, ale její benefity se rozšíří do celé společnosti. A zároveň opačně, bez tvé účasti jako oprávněného autonomního jednotlivce nemůže existovat žádná decentralizace a tedy ani NavCoin. Úspěch NavCoinu závisí tedy skutečně na tobě a ty jsi úplně svobodný, zda a jak se to má stát.
>{{< /zig_section>}}

{{< zig_section
titleText="Zapoj se"
imgSrc="/images/governance/gov-get-involved.svg"
reversed="true"

>}}
>NavCoin je komunitním projektem, který každému umožňuje přispívat různými způsoby. Ekosystém NavCoinu je mnohem více než jen rozvoj jeho open-source protokolu. Vytváření obsahu, propagace a jeho užívání jsou stejně důležité jako decentralizovaná digitální jména - a to je důvod, proč klíčem k úspěchu je, aby přispěvatelé měli různé schopnosti a dovednosti.
>{{< /zig_section>}}

{{< item_container_section
    titleText="Přečti si naše manifesty"
    subtitleText="Hodnoty NavCoinu a instrukce jak přispívat"
    bgPurple="true"
    anchor="read-manifestos"

>}}
    {{< action
        titleText="Manifest pro vývojáře"
        imgSrc="/images/governance/gov-dev-manifesto.svg"
        subtext="Nezbytné pro každého, kdo chce přispívat k rozvoji open-source kódu NavCoinu."
        linkText="Získat manifest"
        linkUrl="/assets/NavCoinDeveloperManifesto.pdf"
        linkImgSrc="/images/icons/downward-arrow.svg"
    >}}
    {{< action
        titleText="Manifest pro obsah"
        imgSrc="/images/governance/gov-content-manifesto.svg"
        subtext="Průvodce společnými hodnotami a cíli navcoinové komunity pro tvůrce obsahu."
        linkText="Získat manifest"
        linkUrl="/assets/NavCoinContentManifesto.pdf"
        linkImgSrc="/images/icons/downward-arrow.svg"
    >}}
    {{< action
        titleText="Příručka ke značce"
        imgSrc="/images/governance/gov-brand.svg"
        subtext="Příručka na pomoc s přepojováním vašeho obsahu s vizuálem a atmosférou NavCoin značky."
        linkText="Získat příručku"
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
