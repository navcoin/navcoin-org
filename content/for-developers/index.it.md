---
title: "For Developers"
date: 2018-03-20T07:41:22+13:00
draft: false
type: "default"
description: "Navcoin is a free and open-source project to which anyone can contribute. Its design is the collaborative effort of developers from all around the world."
---
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
{{< hero_section
titleText="Navcoin Per Sviluppatori"
imgSrc="/images/for-developers/dev-hero.svg"
paragraphText="Navcoin è un progetto gratuito e open source a cui chiunque può contribuire. Il suo design è lo sforzo collaborativo degli sviluppatori di tutto il mondo. Il nostro obiettivo comune è migliorare il protocollo Navcoin e il suo ecosistema software circostante. Ognuno ha il potenziale per avere un impatto positivo, indipendentemente dal tuo livello di&nbsp;abilità."
buttonText="Leggi il manifesto per sviluppatori"
buttonLink="/en/governance/#read-manifestos"
buttonImgSrc="/images/icons/rightward-arrow.svg"
>}}

{{< zig_section
titleText="Ricevi finanziamenti dalla rete&nbsp;Navcoin"
imgSrc="/images/for-developers/dev-get-involved.svg"
buttonText="Scopri di più"
buttonUrl="/community-fund"
buttonImgSrc="/images/icons/rightward-arrow.svg"
reversed="true"
>}}
l Fondo comunitario di Navcoin consente a qualsiasi sviluppatore di essere pagato dalla rete per i suoi contributi all'ecosistema Navcoin. I progetti sono finanziati e approvati dalla rete decentralizzata senza autorità centrale. Ciò garantisce che la direzione di Navcoin rimanga saldamente nel miglior interesse della rete e sia determinata autonomamente dalla&nbsp;comunità.

{{< /zig_section>}}
{{< item_container_section 
    titleText="Perchè dovresti partecipare"
    subtitleText="Navcoin è creato per la comunità, dalla comunità."
>}}
    {{< feature 
        titleText="Una comunità inclusiva"
        imgSrc="/images/for-developers/dev-community.svg"
        text="Il gruppo di sviluppatori è collaborativo, inclusivo e pronto ad aiutarti per&nbsp;iniziare."
    >}}
    {{< feature 
        titleText="Ricerca attiva"
        imgSrc="/images/for-developers/dev-cutting-edge.svg"
        text="I miglioramenti al protocollo di Navcoin vengono costantemente&nbsp;elaborati."
    >}}
    {{< feature                 
        titleText="Proof of Stake Alliance"
        imgSrc="/images/for-developers/dev-pos-alliance.svg"
        text="Siamo parte della PoS Alliance, un consorzio che ha lo scopo di ricercare collaborativamente allo sviluppo del PoS&nbsp;protocollo."
    >}}
    {{< feature                 
        titleText="Inizare è facile"
        imgSrc="/images/for-developers/dev-easy.svg"
        text="Tutte le risorse necessarie sono a portata di mano e ci sono infiniti modi per&nbsp;partecipare."
    >}}
    {{< feature                 
        titleText="Valuta programmabile"
        imgSrc="/images/for-developers/dev-digital-money.svg"
        text="Con un registro distribuito di transazioni verificabile, puoi integrare facilmente Navcoin nel tuo sito web o nelle tue&nbsp;app."
    >}}
    {{< feature                 
        titleText="Sempre open-source"
        imgSrc="/images/for-developers/dev-trust.svg"
        text="Navcoin software sarà sempre gratuito e allineato ai principi&nbsp;open-source."
    >}}
{{< /item_container_section >}}

{{< item_container_section 
    titleText="Contribuisci ora"
    subtitleText="Ci sono molti modi per contribuire a Navcoin, non importa il tuo livello di&nbsp;abilità."
    bgPurple="true"
>}}
    {{< long_text 
        titleText="Navcoin Protocollo"
        imgSrc="/images/for-developers/dev-protocol.svg"
        text="Navcoin è open source e tutti possono partecipare per migliorarlo. Ecco dove puoi trovare le procedure per segnalare un problema, risolvere un problema o suggerire un miglioramento del protocollo di&nbsp;consenso."
        buttonUrl="/get-involved/"
        buttonText="Scopri di più"
        buttonImgSrc="/images/icons/rightward-arrow.svg"
    >}}
    {{< long_text 
        titleText="Progetti Comunitario"
        imgSrc="/images/for-developers/dev-projects.svg"
        text="Navcoin è più di un semplice protocollo, è un ecosistema di siti Web, applicazioni e dispositivi che si collegano al protocollo Navcoin. Ecco dove puoi scoprire come contribuire ai progetti della&nbsp;comunità."
        buttonUrl="https://navhub.org"
        buttonText="Scopri di più"
        buttonImgSrc="/images/icons/rightward-arrow.svg"
    >}}
    {{< long_text 
        titleText="Divulgazione Responsabile"
        imgSrc="/images/for-developers/dev-disclosure.svg"
        text="Navcoin è una tecnologia sperimentale e qualche volta vengono rilevati bug critici. Se sei un ricercatore e hai trovato una vulnerabilità critica, ecco come puoi parlare in sicurezza con gli sviluppatori di Navcoin&nbsp;Core."
        buttonUrl="/responsible-disclosure/"
        buttonText="Scopri di più"
        buttonImgSrc="/images/icons/rightward-arrow.svg"
    >}}
{{< /item_container_section >}}

{{< contrib_list
    titleText="Collaboratori del protocollo Navcoin"
    subtitleText="Vogliamo ringraziare coloro i quali stanno contribuendo e che hanno reso meraviglioso questo&nbsp;protocollo!"
    buttonUrl="https://github.com/NAVCoin/navcoin-core/graphs/contributors"
    buttonTxt="Vedi Navcoin su GitHub"
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
