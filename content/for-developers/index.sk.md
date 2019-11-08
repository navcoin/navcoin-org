---
title: "Pre vývojárov"
date: 2018-03-20T07:41:22+13:00
draft: false
type: "default"
description: "NavCoin je open-source projekt, ktorý môže budovať každý. Je vytvorený ako platforma pre spoločné pôsobenie vývojárov z celého sveta."
---
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
{{< hero_section
titleText="NavCoin pre vývojárov"
imgSrc="/images/for-developers/dev-hero.svg"
paragraphText="NavCoin je open-source projekt, ktorý môže budovať každý. Je vytvorený ako platforma pre spoločné pôsobenie vývojárov z celého sveta. Našim spoločným cieľom je zlepšovať protokol NavCoinu a jeho príslušný sofvérový ekosystém. Každý má potenciál urobiť reálnu pozitívnu zmenu, a to bez ohľadu na mieru vašich zručností."
buttonText="Prečítať si manifest pre vývojárov"
buttonLink="/en/governance/#read-manifestos"
buttonImgSrc="/images/icons/rightward-arrow.svg"

>}}

{{< zig_section
titleText="Financovanie prostredníctvom siete NavCoinu."
imgSrc="/images/for-developers/dev-get-involved.svg"
buttonText="Zistiť viac"
buttonUrl="/community-fund"
buttonImgSrc="/images/icons/rightward-arrow.svg"
reversed="true"

>}}
>Komunitný fond NavCoinu umožňuje každému vývojárovi dostať zaplatené za jeho aktívny prínos pre navcoinový ekosystém. Projekty sú financované a schvaľované decentralizovanou sieťou bez pôsobenia centrálnej autority. Tento prístup zaručuje, že smerovanie NavCoinu je vždy v najlepšom záujme siete a je nezávisle určované rozhodnutiami komunity.
>{{< /zig_section>}}
>{{< item_container_section 
>    titleText="Prečo sa zapojiť"
>    subtitleText="NavCoin je budovaný komunitou a pre komunitu."
>}}
>    {{< feature 
>        titleText="Zahŕňajúca komunita"
>        imgSrc="/images/for-developers/dev-community.svg"
>        text="Naša komunita vývojárov je spolupracujúca, zahŕňajúca a pripravená podať pomocnú ruku."
>}}
>    {{< feature 
>        titleText="Aktívny výskum"
>        imgSrc="/images/for-developers/dev-cutting-edge.svg"
>        text="Na zlepšovaní protokolu NavCoinu sa neustále pracuje."
>}}
>    {{< feature                 
>        titleText="Aliancia Proof of Stake"
>        imgSrc="/images/for-developers/dev-pos-alliance.svg"
>        text="Sme súčasťou PoS aliancie, čo je konzorcium zamerané na spoločný výskum PoS protokolu."
>}}
>    {{< feature                 
>        titleText="Je ľahké začať"
>        imgSrc="/images/for-developers/dev-easy.svg"
>        text="Všetky prostriedky, aby si mohol začať, sú priamo k dispozícii a existuje veľa možností, ako sa zapojiť."
>}}
>    {{< feature                 
>        titleText="Programovateľné peniaze"
>        imgSrc="/images/for-developers/dev-digital-money.svg"
>        text="Vďaka verejne overiteľnému registru transakcií môžete NavCoin ľahko používať vo svojich aplikáciách alebo webstránkach."
>}}
>    {{< feature                 
>        titleText="Vždy open-source"
>        imgSrc="/images/for-developers/dev-trust.svg"
>        text="NavCoin softvér bude vždy voľne dostupný a v súlade s open-source princípmi."
>}}
>{{< /item_container_section >}}

{{< item_container_section 
    titleText="Zapojte sa hneď"
    subtitleText="Existuje veľa možností, ako sa môžete zapojiť do rozvoja NavCoinu, a to bez ohľadu na mieru vašich zručností."
    bgPurple="true"

>}}
>    {{< long_text 
>        titleText="Protokol NavCoinu"
>        imgSrc="/images/for-developers/dev-protocol.svg"
>        text="NavCoin je open-source projektom a každý sa môže zúčastňovať na jeho zlepšovaní. Tu môžete nájsť postupy na ohlásenie problémov, riešenie problémov alebo návrhy na zlepšenie konsenzu protokolu."
>        buttonUrl="/get-involved/"
>        buttonText="Zistiť viac"
>        buttonImgSrc="/images/icons/rightward-arrow.svg"
>}}
>    {{< long_text 
>        titleText="Komunitné projekty"
>        imgSrc="/images/for-developers/dev-projects.svg"
>        text="NavCoin je viac než len protokol, je to ekosystém webstránok, aplikácií a zariadení, ktoré sa k tomuto protokolu pripájajú. Tu sa môžeš dozvedieť o prispievaní do komunitných projektov."
>        buttonUrl="https://navhub.org"
>        buttonText="Zistiť viac"
>        buttonImgSrc="/images/icons/rightward-arrow.svg"
>}}
>    {{< long_text 
>        titleText="Zodpovedné oznámenie"
>        imgSrc="/images/for-developers/dev-disclosure.svg"
>        text="NavCoin je experimentálnou technológiou a občas sa v ňom môžu objaviť kritické chyby. Ak ste výskumníkom a našli ste kritickú slabinu protokolu, tu sa dozviete, ako bezpečne komunikovať s hlavnými vývojármi NavCoinu."
>        buttonUrl="/responsible-disclosure/"
>        buttonText="Zistiť viac"
>        buttonImgSrc="/images/icons/rightward-arrow.svg"
>}}
>{{< /item_container_section >}}

{{< contrib_list
    titleText="Prispievatelia NavCoin protokolu"
    subtitleText="Chceme poďakovať našim prispievateľom, ktorí tento protokol robia úžasným!"
    buttonUrl="https://github.com/NAVCoin/navcoin-core/graphs/contributors"
    buttonTxt="Nájsť NavCoin na GitHube"
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