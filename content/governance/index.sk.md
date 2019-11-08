---
title: "Spravovanie"
date: 2018-03-20T08:09:08+13:00
draft: false
type: "default"
author: ""
description: "Decentralizované digitálne meny ako NavCoin vracajú jednotlivcom ich slobodu, súkromie a finančnú moc."
---
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
{{< hero_section
titleText="Spravovanie"
imgSrc="/images/governance/gov-hero.svg"
paragraphText=" Cieľom manifestov NavCoinu je jasne sformulovať dôvody, ktoré nás ako prispievateľov NavCoinovej komunity vedú, čo robíme, ako to robíme, a prečo. Tieto dokumenty pokrývajú základné princípy, ciele, rozsah práce a operačných požiadaviek, ktoré majú zabezpečiť, že zdieľame rovnaké hodnoty a vždy konáme v najlepšom záujme siete."
buttonText="Prečítať si naše manifesty"
buttonImgSrc="/images/icons/downward-arrow.svg"
buttonLink="#read-manifestos"

>}}

{{< zig_section
titleText="Prečo je decentralizácia taká revolučná"
imgSrc="/images/governance/gov-decentralise.svg"
reversed="true"

>}}
Ako prispievatelia NavCoinovej komunity sme zároveň členmi prvej funkčnej svetovej krypto-syndikalistickej spoločnosti. Tento prevratný systém je založený na presvedčení, že ak môžu ľudia slobodne konať vo svojom najlepšom záujme, tak budú prirodzene konať to najlepšie aj v záujme spoločnosti. Iný spôsob, ako jednoducho vyjadriť anarcho-syndikalizmus, je decentralizácia.
{{< /zig_section>}}

{{< zig_section
  titleText="Urobiť svet lepším miestom"
  imgSrc="/images/governance/gov-world.svg"
  bgPurple="true"

>}}
>Decentralizované digitálne meny ako je NavCoin preberajú kontrolu nad monetárnym systémom zo strany vlád a korporátnych elít a vracajú slobodu, súkromie a finančnú moc jednotlivcov. To je dôvod, prečo NavCoin nie je len platobným protokolom, ale je v skutočnosti náznakom hlbokej zmeny spôsobu fungovania svetového ekonomického systému. Decentralizované spravovanie je jeho srdcom. Keďže pre NavCoin neexistuje žiadna centrálna autorita, kľúčová úloha pre nás ako členov tejto komunity je byť vzormi neutrality a rozhodovania založenom na všeobecnom konsenze.
>{{< /zig_section>}}

{{< zig_section
titleText="Výhody decentralizácie"
imgSrc="/images/governance/gov-benifits.svg"
reversed="true"

>}}
>Decentralizácia nás chráni pred korupciou. História nám mnohokrát ukázala, že príliš veľa moci v rukách pár jednotlivcov nevyhnutie vedie k jej zneužitiu. Decentralizácia zároveň dáva jednotlivcovi šancu urobiť vo svete nejakú reálnu zmenu. Zlepšenia protokolu prichádzajú vždy zospodu a navrhnúť ich môže ktokoľvek. NavCoin ako prosperujúca komunita je živým dôkazom toho, že ak dôverujeme ľuďom, že budú konať dobro, budú prispievať pre dobro všetkých.
>{{< /zig_section>}}

{{< zig_section
  titleText="Záleží len na tebe"
  imgSrc="/images/governance/gov-you.svg"
  bgPurple="true"

>}}
>Ak každý z navcoinovej komunity prevezme zodpovednosť za rozvoj protokolu a aktívne pôsobí pri šírení jeho myšlienky, nielenže z toho má úžitok celá komunita, ale jej benefity sa rozšíria do celej spoločnosti. A zároveň naopak, bez tvojej účasti ako oprávneného autonómneho jednotlivca nemôže existovať žiadna decentralizácia a teda ani NavCoin. Úspech NavCoinu závisí teda skutočne na tebe a ty si úplne slobodný, či a ako sa to má stať.
>{{< /zig_section>}}

{{< zig_section
titleText="Zapoj sa"
imgSrc="/images/governance/gov-get-involved.svg"
reversed="true"

>}}
>NavCoin je komunitným projektom, ktorý každému umožňuje prispievať rôznymi spôsobmi. Ekosystém NavCoinu je oveľa viac než len rozvoj jeho open-source protokolu. Vytváranie obsahu, propagácia a jeho užívanie sú rovnako dôležité ako decentralizovaná digitálna mena - a to je dôvod, prečo kľúčom k úspechu je, aby prispievatelia mali rôzne schopnosti a zručnosti.
>{{< /zig_section>}}

{{< item_container_section
    titleText="Prečítaj si naše manifesty"
    subtitleText="Hodnoty NavCoinu a inštrukcie ako prispievať"
    bgPurple="true"
    anchor="read-manifestos"

>}}
    {{< action
        titleText="Manifest pre vývojárov"
        imgSrc="/images/governance/gov-dev-manifesto.svg"
        subtext="Nevyhnutné pre každého, kto chce prispievať k rozvoju open-source kódu NavCoinu."
        linkText="Získať manifest"
        linkUrl="/assets/NavCoinDeveloperManifesto.pdf"
        linkImgSrc="/images/icons/downward-arrow.svg"
    >}}
    {{< action
        titleText="Manifest k obsahu"
        imgSrc="/images/governance/gov-content-manifesto.svg"
        subtext="Sprievodca spoločnými hodnotami a cieľmi navcoinovej komunity pre tvorcov obsahu."
        linkText="Získať manifest"
        linkUrl="/assets/NavCoinContentManifesto.pdf"
        linkImgSrc="/images/icons/downward-arrow.svg"
    >}}
    {{< action
        titleText="Príručka k značke"
        imgSrc="/images/governance/gov-brand.svg"
        subtext="Príručka na pomoc s prepájaním vášho obsahu s vizuálom a atmosférou NavCoin značky."
        linkText="Získať príručku"
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
