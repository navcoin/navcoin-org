---
title: "Prispejte k zlepšeniu protokolu"
date: 2018-03-20T07:41:22+13:00
draft: false
type: "default"
description: "Existuje viac možností ako prispieť k zlepšeniu protokolu NavCoinu - takže pre tých, ktorí by chceli podporiť tento projekt, uvádzame niekoľko najvhodnejších spôsobov, ako sa zapojiť."
---
{{< hero_section
titleText="Zapojte sa"
paragraphText="Existuje viac možností ako prispieť k zlepšeniu protokolu NavCoinu, pričom nie všetky vyžadujú odborné znalosti programovania. Ak chcete podporiť projekt NavCoin, tu je niekoľko najvhodnejších spôsobov, ako sa zapojiť."
imgSrc="/images/get-involved/con-hero.svg"

>}}
>{{< zig_section
>titleText="Preklady"
>imgSrc="/images/get-involved/con-translate.svg"
>  buttonText="Založiť Transifex účet"
>  buttonUrl="https://www.transifex.com/signup/"
>  buttonImgSrc="/images/icons/rightward-arrow.svg"
>    reversed="true"
>    newTab="true"
>}}
>NavCoin Core bol preložený do viac než dvoch tuctov jazykov a ďalších desiatok jazykov, do ktorých boli preložené čiastočne - ale ďalšia pomoc sa vždy zíde. NavCoin na prekladanie textov používa Transifex, kde si najskôr musíte založiť účet.<br><br>Ak chcete prispievať prekladmi, v rámci služby Transifex si vyhľadajte projekt NavCoin: <br><a href="https://www.transifex.com/navcoin/navcoin-core" style="text-decoration:underline;">https://www.transifex.com/navcoin/navcoin-core</a><br><br>Kliknite na tlačidlo 'Pripojiť sa k tímu', dajte nám vedieť, do ktorého jazyka prekladáte, a začnite s prekladom!
>{{< /zig_section>}}

{{< zig_section
  titleText="Dokumentácia"
  imgSrc="/images/get-involved/con-doc.svg"
  buttonText="Prispievať pri vývojárskych dokumentoch"
  buttonUrl="https://github.com/NAVCoin/navcoin-dev-docs"
  buttonImgSrc="/images/icons/rightward-arrow.svg"
  bgPurple="true"
  newTab="true"

>}}
>V súčasnosti pracujeme na online vydaní základného open-source dokumentu pre vývojárov vo vzťahu k NavCoin Core. Ak nám chcete pomôcť s realizáciou tohto cieľa, prosím navštívte GitHub a zistite, čo je potrebné urobiť. Len si dajte pozor, aby ste zbytočne nerobili duplicitnú prácu, a preto dodržiavajte postupy pre GitHub uvedené na tejto stránke a vždy predložte žiadosť vo vzťahu k dokumentácii, ktorú píšete.
>{{< /zig_section>}}

{{< zig_section
titleText="Predložte žiadosť"
imgSrc="/images/get-involved/con-issue.svg"
buttonText="Predložiť žiadosť"
buttonUrl="https://github.com/NAVCoin/navcoin-core/issues"
buttonImgSrc="/images/icons/rightward-arrow.svg"
reversed="true"
newTab="true"

>}}
>Pre problémy s NavCoin Core nekritického charakteru prosím najskôr prehľadajte podobné témy, a ak žiadnu nenájdete, predložte novú žiadosť na základe nižšie uvedených inštrukcií.
><br>
<ul class="article-ul" style="color: rgba(0, 0, 0, 0.55);">
  <li>Zrozumiteľný opis problému a kroky na jeho zopakovanie.</li>
  <li>Ktorú verziu NavCoin Core používate, alebo ktorý jeho doplnok sa používa.</li><li>Akékoľvek relevantné záznamy z vášho súboru debug.log. Prosím odstráňte akékoľvek citlivé informácie skôr než svoje debug.log záznamy zverejníte.</li>
</ul>
<p class="paragraph-text">Vašou najlepšou stratégiou, ako váš problém vyriešiť rýchlo, je čo najviac uľahčiť vývojárom dohľadanie a opravu daného problému. Poskytnúť čo najviac prehľadných informácií v tomto smere výrazne pomôže.</p>
{{< /zig_section>}}

{{< zig_section
  titleText="Vyriešte problém"
  imgSrc="/images/get-involved/con-resolve.svg"
  buttonText="Prejsť na inštrukcie"
  buttonUrl="https://github.com/navcoin/navcoin-core/blob/master/CONTRIBUTING.md"
  buttonImgSrc="/images/icons/rightward-arrow.svg"
  bgPurple="true"
  newTab="true"

>}}
Použitie vyhľadávača chýb je nejlepší spôsob ako užitočne prispieť pri NavCoin Core. Predtým než začnete písať opravy na problémy, ktoré nájdete, skúste najskôr vytvoriť komentár k tomuto problému, aby ste sa uistili, že na ňom zatiaľ nik nepracuje. Pamätajte, že aj keď už riešite problém, ktorý ste našli, najskôr musíte tento problém zadefinovať vo vyhľadávači chýb.
<br><br>
Ak chcete vyriešiť problém, postupujte takto:
<br>
<ul class="article-ul" style="color: rgba(255,255,255,0.55);">
  <li>Duplikujte (fork) NavCoin/navcoin-core do svojho GitHub účtu.</li>
  <li>Vytvorte vetvu (branch), na ktorej chcete pracovať pri riešení problému a pustite sa do toho.</li>
  <li>Napíšte alebo aktualizujte jednotku a integračné testy, aby ste pokryli všetky zmeny, ktoré ste urobili.</li>
  <li> Vytvorte žiadosť (pull request) z vašej vetvy späť na hlavné úložisko NavCoin Core s označením typu a čísla problému v názve (napr. Triviálne: oprava preklepovej chyby #145).</li>
  <li>Kontaktujte ostatných prispievateľov z NavCoin Core prostredníctvom Discord alebo GitHub kanálu a upozornite ich na vašu nevybavenú žiadosť, aby ju mohli čo najskôr preskúmať.</li>
</ul>
<p class="paragraph-text">Pre plnú verziu pracovných pokynov si prosím prečítajte inštrukcie na GitHub.</p>
{{< /zig_section>}}

{{< zig_section
titleText="Píšte testy"
imgSrc="/images/get-involved/con-test.svg"
reversed="true"
newTab="true"

>}}
NavCoin Core prešlo už mnohými testami, ale aktualizácie, ktoré zlepšujú pokrytie testov, sú vždy vítané a zároveň sú vhodnou príležitosťou postupne sa zoznamovať sa našim kódom.
<br><br>Vývojárom sa veľmi odporúča písať testy jednotiek na nový kód a predkladať nové testy jednotiek pre starý kód. Testy jednotiek možno skompilovať a spustiť (ak neboli vypnuté v konfigurácii) prostredníctvom: make&nbsp;check.
<br><br>Existujú tiež <a href="https://github.com/NAVCoin/navcoin-core/tree/master/qa" target="e" style="text-decoration:underline;">regresné and integračné testy</a> napísané v Pythone, ktoré sa spúšťajú automaticky na pracovnom serveri.
{{< /zig_section>}}

{{< zig_section
  titleText="Preskúmajte kód"
  imgSrc="/images/get-involved/con-bug.svg"
    buttonText="Preskúmať žiadosti (pull requests)"
  buttonUrl="https://github.com/navcoin/navcoin-core/pulls"
  buttonImgSrc="/images/icons/rightward-arrow.svg"
  bgPurple="true"
  newTab="true"

>}}
>NavCoin Core je bezpečnostný softvér, ktorý chráni aktíva v hodnote miliónov dolárov, takže každá zmena kódu musí byť preskúmaná skúsenými vývojármi.<br><br>Iným vývojárom môže zabrať veľa času preskúmať vaše žiadosti (pull request). Majte pritom na pamäti, že všetci overovatelia si pri skúmaní vašich žiadostí uberajú z času na svojich vlastných projektoch, takže buďte trpezliví a rešpektujúci ich časové možnosti.<br><br>Tiež zvážte poskytnúť pomoc pri preskúmavaní žiadostí iných ľudí. Nemusíte byť nevyhnutne expert na NavCoin, kód NavCoin Core alebo C++ (hoci tieto znalosti určite dobre poslúžia). Skoro vždy zvyknú bývať nevybavené aj také žiadosti, ktoré môže preskúmať každý programátor.
>{{< /zig_section>}}

{{< zig_section
titleText="Navrhnite zlepšenie protokolu"
imgSrc="/images/get-involved/con-npips.svg"
buttonText="Prezrieť NPIPs"
buttonUrl="https://github.com/NAVCoin/npips"
buttonImgSrc="/images/icons/rightward-arrow.svg"
reversed="true"
newTab="true"

>}}
>NavCoin Core sa neustále usiluje zlepšovať základný protokol NavCoinu. Našim trvalým cieľom je zlepšovanie bezpečnosti, súkromia a účinnosti popri súbežnej podpore decentralizácie, porozumenia a použiteľnosti. Ak nám chcete pomôcť zlepšovať NavCoin protokol, najvhodnejším miestom na zdokumentovanie vášho návrhu je GitHub úložisko NPIPs (Návrhy na zlepšenie protokolu NavCoin).<br><br>Ľudia, ktorí si želajú predložiť NPIPs, by najskôr mali predstaviť túto myšlienku alebo dokument rozvojovej komunite NavCoin Core cez Discord alebo IRC (irc.freenode.net #navcoin). Po úvodnej diskusii prosím predložte PR žiadosť v úložisku NPIPs. Po editorských úpravách a schválení tu bude publikovaná.<br><br>Návrhy NPIPs schvaľujeme vcelku liberálne a bez toho, aby sme boli príliš  angažovaní pri rozhodovaní v mene komunity. Výnimkou sú len veľmi vzácne prípady riešenia sporov, kedy je rozhodnutie sporné a nevieme sa na ňom zhodnúť. V takých prípadoch má vždy prednosť konzervatívnejší prístup.<br><br>Mať u nás otvorený NPIP nezakladá formálne akceptovaný štandard, kým sa jeho status nezmení na Finálny alebo Aktívny.<br><br>Tiež treba mať na pamäti, že prijatie navrhovaných zmien môže podliehať konečnému súhlasu užívateľov NavCoinu.
>{{< /zig_section>}}

{{< zig_section
  titleText="Nahláste bezpečnostné riziko"
  imgSrc="/images/get-involved/con-disclosure.svg"
  paragraphText="NavCoin je experimentálnou technológiou a občas sa v ňom môžu objaviť kritické chyby. Ak ste výskumníkom a našli ste bezpežnostné riziko, prejdite na stránku Zodpovedné oznámenie a zistite, ako to môžete nahlásiť."
    buttonText="Zodpovedné oznámenie"
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
