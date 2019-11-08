---
title: "Pro vývojáře"
date: 2018-03-20T07:41:22+13:00
draft: false
type: "default"
description: "NavCoin je open-source projekt, který může budovat každý. Je vytvořen jako platforma pro společné působení vývojářů z celého světa."
---
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
{{< hero_section
titleText="NavCoin pro vývojáře"
imgSrc="/images/for-developers/dev-hero.svg"
paragraphText="NavCoin je open-source projekt, který může budovat každý. Je vytvořen jako platforma pro společné působení vývojářů z celého světa. Našim společným cílem je zlepšovat protokol NavCoinu a jeho příslušný softvérový ekosystém. Každý má možnost udělat reálnou pozitivní změnu, a to bez ohledu na míru vašich dovedností."
buttonText="Přečíst si manifest pro vývojáře"
buttonLink="/en/governance/#read-manifestos"
buttonImgSrc="/images/icons/rightward-arrow.svg"

>}}

{{< zig_section
titleText="Financování prostřednictvím sítě NavCoinu."
imgSrc="/images/for-developers/dev-get-involved.svg"
buttonText="Zjistit více"
buttonUrl="/community-fund"
buttonImgSrc="/images/icons/rightward-arrow.svg"
reversed="true"

>}}
>Komunitní fond NavCoinu umožňuje každému vývojáři dostat zaplaceno za jeho aktivní přínos pro navcoinový ekosystém. Projekty jsou financovány a schvalovány decentralizovanou sítí bez působení centrální autority. Tento přístup zaručuje, že směrování NavCoinu je vždy v nejlepším zájmu sítě a je nezávisle určováno rozhodnutími komunity.
>{{< /zig_section>}}
>{{< item_container_section 
>    titleText="Proč se zapojit"
>    subtitleText="NavCoin je budovaný komunitou a pro komunitu."
>}}
>    {{< feature 
>        titleText="Zahrnující komunita"
>        imgSrc="/images/for-developers/dev-community.svg"
>        text="Naše komunita vývojářů je spolupracující, zahrnující a připravena podat pomocnou ruku."
>}}
>    {{< feature 
>        titleText="Aktivní výzkum"
>        imgSrc="/images/for-developers/dev-cutting-edge.svg"
>        text="Na zlepšování protokolu NavCoinu se neustále pracuje."
>}}
>    {{< feature                 
>        titleText="Aliance Proof of Stake"
>        imgSrc="/images/for-developers/dev-pos-alliance.svg"
>        text="Jsme součástí PoS aliance, což je konsorcium zaměřené na společný výzkum PoS protokolu."
>}}
>    {{< feature                 
>        titleText="Je snadné začít"
>        imgSrc="/images/for-developers/dev-easy.svg"
>        text="Všechny prostředky, aby si mohl začít, jsou přímo k dispozici a existuje mnoho možností, jak se zapojit."
>}}
>    {{< feature                 
>        titleText="Programovatelné peníze"
>        imgSrc="/images/for-developers/dev-digital-money.svg"
>        text="Díky veřejně ověřitelnému registru transakcí lze NavCoin snadno používat ve svých aplikacích nebo webstránkách."
>}}
>    {{< feature                 
>        titleText="Vždycky open-source"
>        imgSrc="/images/for-developers/dev-trust.svg"
>        text="NavCoin softvér bude vždy volně dostupný a v souladu s open-source principy."
>}}
>{{< /item_container_section >}}

{{< item_container_section 
    titleText="Zapojte se hned"
    subtitleText="Existuje spousta možností, jak se můžete zapojit do rozvoje NavCoinu, a to bez ohledu na míru vašich dovedností."
    bgPurple="true"

>}}
>    {{< long_text 
>        titleText="Protokol NavCoinu"
>        imgSrc="/images/for-developers/dev-protocol.svg"
>        text="NavCoin je open-source projektem a každý se může účastnit jeho zlepšování. Zde můžete najít postupy na ohlášení problémů, řešení problémů nebo návrhy na zlepšení konsenzu protokolu."
>        buttonUrl="/get-involved/"
>        buttonText="Zjistit více"
>        buttonImgSrc="/images/icons/rightward-arrow.svg"
>}}
>    {{< long_text 
>        titleText="Komunitní projekty"
>        imgSrc="/images/for-developers/dev-projects.svg"
>        text="NavCoin je více než jen protokol, je to ekosystém webstránek, aplikací a zařízení, které se k tomuto protokolu připojují. Zde se můžeš dozvědět o přispívání do komunitních projektů."
>        buttonUrl="https://navhub.org"
>        buttonText="Zjistit více"
>        buttonImgSrc="/images/icons/rightward-arrow.svg"
>}}
>    {{< long_text 
>        titleText="Odpovědné oznámení"
>        imgSrc="/images/for-developers/dev-disclosure.svg"
>        text="NavCoin je experimentální technologií a občas se v něm mohou objevit kritické chyby. Pokud jste výzkumníkům a našli jste kritickou slabinu protokolu, zde se dozvíte, jak bezpečně komunikovat s hlavními vývojáři NavCoinu."
>        buttonUrl="/responsible-disclosure/"
>        buttonText="Zjistit více"
>        buttonImgSrc="/images/icons/rightward-arrow.svg"
>}}
>{{< /item_container_section >}}

{{< contrib_list
    titleText="Přispěvatelé NavCoin protokolu"
    subtitleText="Chceme poděkovat našim přispěvatelem, kteří tento protokol dělají úžasným!"
    buttonUrl="https://github.com/NAVCoin/navcoin-core/graphs/contributors"
    buttonTxt="Najít NavCoin na GitHub"
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