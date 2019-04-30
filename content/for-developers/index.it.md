---
title: "For Developers"
date: 2018-03-20T07:41:22+13:00
draft: false
type: "default"
description: "NavCoin is a free and open-source project to which anyone can contribute. Its design is the collaborative effort of developers from all around the world."
---
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
{{< hero_section
titleText="NavCoin Per Sviluppatori"
imgSrc="/images/for-developers/dev-hero.svg"
paragraphText="NavCoin è un progetto free ed open-source al quale ognuno può contribuire. Il progetto frutto dello sforzo collaborativo di sviluppatori provenienti da ogni parte del mondo. Il nostro obiettivo è quelo di migliorare il protocollo di NavCoin e l'ecosistema software che gli sta attorno. Ognuno ha potenzialmente la capacità di avere un impatto positivo sul progetto, non importa con quale skill o livello di&nbsp;preparazione."
buttonText="Leggi il developer manifesto"
buttonLink="/en/governance/#read-manifestos"
buttonImgSrc="/images/icons/rightward-arrow.svg"
>}}

{{< zig_section
titleText="Fatti finanziare dal network&nbsp;NavCoin"
imgSrc="/images/for-developers/dev-get-involved.svg"
buttonText="Scopri di più"
buttonUrl="/community-fund"
buttonImgSrc="/images/icons/rightward-arrow.svg"
reversed="true"
>}}
Il Comunity Fund di NavCoin permette a qualsiasi sviluppatore di essere ricompensato dal network per il contributo all'ecosistema NavCoin. I progeti sono aprovati e finanziati dal network decentralizzato che non risonde a nessuna autorità centrale. Questo assicura che la direzione di NavCoin resti fermamente nel senso del miglior interesse del network e che sia autonomamente determinata dalla community&nbsp;stessa.
{{< /zig_section>}}
{{< item_container_section 
    titleText="Perchè dovresti partecipare"
    subtitleText="NavCoin è creato per la community, dalla community."
>}}
    {{< feature 
        titleText="Una community inclusiva"
        imgSrc="/images/for-developers/dev-community.svg"
        text="Il gruppo di sviluppatori è collaborativo, inclusivo e pronto ad aiutarti per&nbsp;iniziare."
    >}}
    {{< feature 
        titleText="Ricerca attiva"
        imgSrc="/images/for-developers/dev-cutting-edge.svg"
        text="I miglioramenti al protocollo di NavCoin sono in continua&nbsp;lavorazione."
    >}}
    {{< feature                 
        titleText="Proof of Stake Alliance"
        imgSrc="/images/for-developers/dev-pos-alliance.svg"
        text="Siamo parte della PoS Alliance, un consorzio che ha lo scopo di ricercare collaborativamente allo sviluppo del PoS&nbsp;protocol."
    >}}
    {{< feature                 
        titleText="Inizare è facile"
        imgSrc="/images/for-developers/dev-easy.svg"
        text="Tutte le risorse necessarie sono a portata di mano e ci sono infiniti modi per&nbsp;partecipare."
    >}}
    {{< feature                 
        titleText="Valuta programmabile"
        imgSrc="/images/for-developers/dev-digital-money.svg"
        text="Con un registro distribuito di transazioni verificabile, puoi integrare facilmente NavCoin nel tuo sito web o nelle tue&nbsp;app."
    >}}
    {{< feature                 
        titleText="Sempre open-source"
        imgSrc="/images/for-developers/dev-trust.svg"
        text="NavCoin software sarà sempre free e allineato ai principi&nbsp;open-source."
    >}}
{{< /item_container_section >}}

{{< item_container_section 
    titleText="Contribuisci ora"
    subtitleText="Ci sono molti modi per contribuire a NavCoin, non importa il tuo livello o le tue&nbsp;skill."
    bgPurple="true"
>}}
    {{< long_text 
        titleText="NavCoin Protocol"
        imgSrc="/images/for-developers/dev-protocol.svg"
        text="NavCoin è open-source e chiunque può partecipare nel renderlo migliore. Puoi trovare di seguito le modalità per segnalare problemi, soluzioni o suggerire miglioramenti al consensus&nbsp;protocol."
        buttonUrl="/get-involved/"
        buttonText="Scopri di più"
        buttonImgSrc="/images/icons/rightward-arrow.svg"
    >}}
    {{< long_text 
        titleText="Community Projects"
        imgSrc="/images/for-developers/dev-projects.svg"
        text="NavCoin è più che un semplice protocollo, è un ecosistema composta da sito web, applicazioni e device che ti connettono al protocollo NavCoin. Verifica come puoi contribuire ai community&nbsp;projects."
        buttonUrl="https://navhub.org"
        buttonText="Scopri di più"
        buttonImgSrc="/images/icons/rightward-arrow.svg"
    >}}
    {{< long_text 
        titleText="Distribuzione responsabile"
        imgSrc="/images/for-developers/dev-disclosure.svg"
        text="NavCoin è una tecnologia sperimentale e a volte possono essere rintracciati bug critici. Se sei un ricercatore ed hai individuato una vulnerabilità critica puoi comunicarlo in modo sicuro ai avCoin Core&nbsp;developers."
        buttonUrl="/responsible-disclosure/"
        buttonText="Scopri di più"
        buttonImgSrc="/images/icons/rightward-arrow.svg"
    >}}
{{< /item_container_section >}}

{{< contrib_list
    titleText="NavCoin Protocol Contributors"
    subtitleText="Vogliamo ringraziare coloro i quali stanno contribuendo e che hanno reso meraviglioso questo&nbsp;protocollo!"
    buttonUrl="https://github.com/NAVCoin/navcoin-core/graphs/contributors"
    buttonTxt="Vedi NavCoin su GitHub"
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
