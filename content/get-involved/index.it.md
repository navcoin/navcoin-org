---
title: "Contribute to the Protocol"
date: 2018-03-20T07:41:22+13:00
draft: false
type: "default"
description: "There are several ways to contribute to the NavCoin protocol - so if you’d like to support the project, here’s some of the best ways to get involved"
---
{{< hero_section
titleText="Mettersi in gioco"
paragraphText="Esistono diversi modi per contribuire al protocollo NavCoin, e non tutti richiedono un alto livello di capacità di programmazione. Se desideri supportare il progetto NavCoin, ecco alcuni dei modi migliori per essere coinvolto."
imgSrc="/images/get-involved/con-hero.svg"
>}}
{{< zig_section
titleText="Traduzioni"
imgSrc="/images/get-involved/con-translate.svg"
  buttonText="Configura un account Transifex"
  buttonUrl="https://www.transifex.com/signup/"
  buttonImgSrc="/images/icons/rightward-arrow.svg"
    reversed="true"
    newTab="true"
>}}
NavCoin Core è stato tradotto in oltre due dozzine di lingue, con dozzine di altre lingue parzialmente tradotte, ma è sempre necessario ulteriore aiuto. NavCoin utilizza Transifex per la traduzione, quindi è necessario impostare un account. <br> <br> Per contribuire con una traduzione, vai al progetto NavCoin su Transifex: <br> <a href = "https: //www.transifex .com / navcoin / navcoin-core "style =" text-decoration: underline; "> https://www.transifex.com/navcoin/navcoin-core </a> <br> <br> Fai clic sul pulsante "Join Team", facci sapere quali lingue puoi tradurre e inizia a tradurre!
{{< /zig_section>}}

{{< zig_section
  titleText="Documentazione"
  imgSrc="/images/get-involved/con-doc.svg"
  buttonText="Contribuisci ai documenti per gli sviluppatori"
  buttonUrl="https://github.com/NAVCoin/navcoin-dev-docs"
  buttonImgSrc="/images/icons/rightward-arrow.svg"
  bgPurple="true"
  newTab="true"
>}}
Attualmente stiamo lavorando per portare online una risorsa di documentazione per sviluppatori open source per NavCoin Core. Se vuoi aiutare a farlo funzionare, vai su GitHub e vedi come puoi dare una mano. Assicurati solo di seguire le convenzioni di GitHub descritte in questa pagina e di inviare un problema sulla documentazione che stai scrivendo per ridurre la duplicazione degli sforzi.
{{< /zig_section>}}

{{< zig_section
titleText="Invia un problema"
imgSrc="/images/get-involved/con-issue.svg"
buttonText="Invia un problema"
buttonUrl="https://github.com/NAVCoin/navcoin-core/issues"
buttonImgSrc="/images/icons/rightward-arrow.svg"
reversed="true"
newTab="true"
>}}
Per tutti i problemi non critici con NavCoin Core, cerca problemi simili e, se non li trovi, invia un nuovo problema fornendo le informazioni di seguito.
<br>
<ul class="article-ul" style="color: rgba(0, 0, 0, 0.55);">
  <li>Una chiara descrizione del problema e passaggi per riprodurre il problema.</li>
  <li>Quale versione di NavCoin Core usi o quale impegno hai creato usando. </li> <li> Qualsiasi voce rilevante dal tuo file debug.log. Assicurati di eliminare tutte le informazioni sensibili prima di pubblicare le voci debug.log.</li>
</ul>
<p class="paragraph-text">La migliore strategia per risolvere rapidamente il problema è rendere la squadra di sviluppo il più semplice possibile per rintracciare il problema e scrivere una soluzione. Fornire ulteriori informazioni e organizzarle bene aiuta in modo significativo.</p>
{{< /zig_section>}}

{{< zig_section
  titleText="Risolvi un problema"
  imgSrc="/images/get-involved/con-resolve.svg"
  buttonText="Vedi il file Leggimi"
  buttonUrl="https://github.com/navcoin/navcoin-core/blob/master/CONTRIBUTING.md"
  buttonImgSrc="/images/icons/rightward-arrow.svg"
  bgPurple="true"
  newTab="true"
>}}
Il tracker dei problemi è il posto migliore per trovare un modo utile per contribuire a NavCoin Core. Prima di iniziare a scrivere eventuali patch per i problemi riscontrati, potresti voler commentare il problema per assicurarti che nessun altro ci stia già lavorando. Ricorda che anche se stai risolvendo un problema che hai riscontrato, dovrai prima creare un problema nel tracker dei problemi.
<br><br>
Per risolvere un problema, attenersi alla seguente procedura:
<br>
<ul class="article-ul" style="color: rgba(255,255,255,0.55);">
   <li> Fork NavCoin / navcoin-core sul tuo account GitHub. </li>
   <li> Crea un ramo su cui lavorare per risolvere il problema, quindi mettiti al lavoro. </li>
   <li> Scrivi o aggiorna i test di unità e integrazione per coprire eventuali modifiche che hai apportato. </li>
   <li> Invia una richiesta pull dalla tua filiale al repository principale di NavCoin Core con il tipo e il numero del problema nel titolo (es. Trivial: corregge l'errore di ortografia). </li>
   <li> Parla con altri collaboratori di NavCoin Core su Discord o tramite GitHub per avvisarli della richiesta pull in sospeso e la esamineranno al più presto. </li>
</ul>
<p class="paragraph-text">Per i dettagli completi sul flusso di lavoro del contributo, consultare il file Leggimi su GitHub.</p>
{{< /zig_section>}}

{{< zig_section
titleText="Scrivi test"
imgSrc="/images/get-involved/con-test.svg"
reversed="true"
newTab="true"
>}}
NavCoin Core è coperto da numerosi test, ma le patch che migliorano la copertura dei test sono sempre benvenute e sono un ottimo modo per acquisire familiarità con la base di codice.
<br><br>
Gli sviluppatori sono fortemente incoraggiati a scrivere <a href = "https://github.com/NAVCoin/navcoin-core/blob/master/doc/unit-tests.md" target = "e" style = "text-decoration: underline ; "> test unitari </a> per il nuovo codice e per inviare nuovi test unitari per il vecchio codice. I test unitari possono essere compilati ed eseguiti (supponendo che non siano stati disabilitati nella configurazione) con: make check.
<br>
Esistono anche <a href="https://github.com/NAVCoin/navcoin-core/tree/master/qa" target="e" style="text-decoration:underline;"> test di regressione e integrazione </ a>, scritto in Python, che viene eseguito automaticamente sul server di compilazione.
{{< /zig_section>}}

{{< zig_section
  titleText="Rivedi il codice"
  imgSrc="/images/get-involved/con-bug.svg"
    buttonText="Rivedi le richieste pull"
  buttonUrl="https://github.com/navcoin/navcoin-core/pulls"
  buttonImgSrc="/images/icons/rightward-arrow.svg"
  bgPurple="true"
  newTab="true"
>}}
NavCoin Core è un software di sicurezza che consente di proteggere risorse per un valore di milioni di dollari, pertanto ogni modifica del codice deve essere esaminata da sviluppatori esperti. <br> <br> Per gli altri sviluppatori può essere necessario molto tempo per rivedere le tue richieste pull. Ricorda che tutti i revisori si stanno prendendo un po 'di tempo dai loro progetti per rivedere le tue richieste pull, quindi sii paziente e rispettoso del loro tempo. <br> <br> Ti preghiamo di considerare anche di aiutare a rivedere le richieste pull di altre persone. Non è necessario essere un esperto di NavCoin, la base di codice NavCoin Core o C ++ (anche se tutto ciò aiuta). Ci sono quasi sempre richieste pull aperte che qualsiasi programmatore può rivedere.
{{< /zig_section>}}

{{< zig_section
titleText="Suggerisci un miglioramento del protocollo"
imgSrc="/images/get-involved/con-npips.svg"
buttonText="Visualizza NPIP"
buttonUrl="https://github.com/NAVCoin/npips"
buttonImgSrc="/images/icons/rightward-arrow.svg"
reversed="true"
newTab="true"
>}}
NavCoin Core si impegna a migliorare continuamente il protocollo sottostante di NavCoin. Il nostro obiettivo è sempre quello di migliorare la sicurezza, la vita privata e l'efficienza, incoraggiando al contempo il decentramento, la diffusione e l'usabilità. Se vuoi aiutarci a migliorare il protocollo NavCoin, il posto migliore per documentare il tuo suggerimento è nel repository GitHub di NPIP (proposte di miglioramento del protocollo NavCoin). <br> <br> Le persone che desiderano presentare NPIP devono prima proporre la propria idea o documento alla comunità di sviluppo di NavCoin Core tramite Discord o IRC (irc.freenode.net #navcoin). Dopo la discussione, si prega di aprire un PR nel repository NPIPs. Dopo la modifica e l'accettazione della copia, sarà pubblicato lì. <br> <br> Siamo abbastanza liberali con l'approvazione dei NPIP e cerchiamo di non essere troppo coinvolti nel processo decisionale a nome della comunità. L'eccezione è in casi molto rari di risoluzione delle controversie quando una decisione è controversa e non può essere concordata. In quei casi, l'opzione conservativa sarà sempre preferita. <br> <br> Avere un NPIP qui non lo rende uno standard formalmente accettato fino a quando il suo status non diventa Finale o Attivo. <br> <br> Quelli che propongono modifiche dovrebbero considerare che in ultima analisi, il consenso può basarsi sul consenso degli utenti di NavCoin.
{{< /zig_section>}}

{{< zig_section
  titleText="Divulgare una vulnerabilità di sicurezza"
  imgSrc="/images/get-involved/con-disclosure.svg"
  paragraphText="NavCoin è una tecnologia sperimentale e talvolta vengono rilevati bug critici. Se sei un ricercatore e hai trovato una vulnerabilità di sicurezza, vai alla pagina Divulgazione responsabile per vedere come puoi segnalarla."
    buttonText="Divulgazione responsabile"
  buttonUrl="/responsible-disclosure/"
  buttonImgSrc="/images/icons/rightward-arrow.svg"
  bgPurple="true"
  newTab="true"
>}}
{{< /zig_section>}}

<style>
.article-ul>li{
    margin-bottom: 8px;
    font-size: 16px;
    font-family: roboto;
    line-height: 25px;
    text-align: justify;
    margin-top: 0;
    margin-bottom: 10px;
}
</style>
