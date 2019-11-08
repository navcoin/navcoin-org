---
title: "Přispějte ke zlepšení protokolu"
date: 2018-03-20T07:41:22+13:00
draft: false
type: "default"
description: "Existuje více možností jak přispět ke zlepšení protokolu NavCoinu - takže pro ty, kteří by chtěli podpořit tento projekt, uvádíme několik nejvhodnějších způsobů, jak se zapojit."
---
{{< hero_section
titleText="Zapojte se"
paragraphText="Existuje více možností jak přispět ke zlepšení protokolu NavCoinu, přičemž ne všechny vyžadují odborné znalosti programování. Chcete-li podpořit projekt NavCoin, zde je několik nejvhodnějších způsobů, jak se zapojit."
imgSrc="/images/get-involved/con-hero.svg"

>}}
>{{< zig_section
>titleText="Překlady"
>imgSrc="/images/get-involved/con-translate.svg"
>  buttonText="Založit Transifex účet"
>  buttonUrl="https://www.transifex.com/signup/"
>  buttonImgSrc="/images/icons/rightward-arrow.svg"
>    reversed="true"
>    newTab="true"
>}}
>NavCoin Core byl přeložen do více než dvou tuctů jazyků a dalších desítek jazyků, do nichž byl přeložen částečně - ale další pomoc se vždycky sejde. NavCoin na překládání textů používá Transifex, kde si nejdříve musíte založit účet.<br><br>Chcete-li přispívat překlady, v rámci služby Transifex si vyhledejte projekt NavCoin: <br><a href="https://www.transifex.com/navcoin/navcoin-core" style="text-decoration:underline;">https://www.transifex.com/navcoin/navcoin-core</a><br><br>Klikněte na tlačítko 'Připojit se k týmu', dejte nám vědět, do kterého jazyku překládáte, a začněte s překladem!
>{{< /zig_section>}}

{{< zig_section
  titleText="Dokumentace"
  imgSrc="/images/get-involved/con-doc.svg"
  buttonText="Přispívat při vývojářských dokumentech"
  buttonUrl="https://github.com/NAVCoin/navcoin-dev-docs"
  buttonImgSrc="/images/icons/rightward-arrow.svg"
  bgPurple="true"
  newTab="true"

>}}
>V současnosti pracujeme na online vydání základního open-source dokumentu pro vývojáře ve vztahu k NavCoin Core. Pokud nám chcete pomoci s realizací tohoto cíle, prosím navštivte GitHub a zjistěte, co je třeba udělat. Jen si dejte pozor, abyste zbytečně nedělali duplicitní práci, a proto dodržujte postupy pro GitHub uvedené na této stránce a vždy předložte žádost ve vztahu k dokumentaci, kterou píšete.
>{{< /zig_section>}}

{{< zig_section
titleText="Předložte žádost"
imgSrc="/images/get-involved/con-issue.svg"
buttonText="Predložit žádost"
buttonUrl="https://github.com/NAVCoin/navcoin-core/issues"
buttonImgSrc="/images/icons/rightward-arrow.svg"
reversed="true"
newTab="true"

>}}
>Pro problémy s NavCoin Core nekritického charakteru prosím nejdříve prohledejte podobná témata, a pokud žádnou nenajdete, předložte novou žádost na základě níže uvedených instrukcí.
><br>
<ul class="article-ul" style="color: rgba(0, 0, 0, 0.55);">
  <li>Srozumitelný popis problému a postup na jeho zopakování.</li>
  <li>Kterou verzi NavCoin Core používáte nebo který jeho doplněk se používá.</li><li>Jakékoliv relevantní záznamy z vašeho souboru Debug.log. Prosím odstraňte jakékoli citlivé informace dříve než své Debug.log záznamy zveřejníte.</li>
</ul>
<p class="paragraph-text">Vaší nejlepší strategií, jak váš problém vyřešit rychle, je co nejvíce usnadnit vývojářům dohledání a opravu daného problému. Poskytnout co nejvíce přehledných informací v tomto směru výrazně pomůže.</p>

{{< /zig_section>}}

{{< zig_section
  titleText="Vyřešte problém"
  imgSrc="/images/get-involved/con-resolve.svg"
  buttonText="Přejít na instrukce"
  buttonUrl="https://github.com/navcoin/navcoin-core/blob/master/CONTRIBUTING.md"
  buttonImgSrc="/images/icons/rightward-arrow.svg"
  bgPurple="true"
  newTab="true"

>}}
Použití vyhledávače chyb je nejlepší způsob jak užitečně přispět při NavCoin Core. Předtím než začnete psát opravy na problémy, které najdete, zkuste nejdříve vytvořit komentář k tomuto problému, abyste se ujistili, že na něm zatím nikdo nepracuje. Pamatujte, že i když už řešíte problém, který jste našli, nejprve musíte tento problém definovat ve vyhledávači chyb.
<br><br>Chcete-li vyřešit problém, postupujte takhle:
<br>
<ul class="article-ul" style="color: rgba(255,255,255,0.55);">
  <li>Duplikujte (fork) NavCoin / navcoin-core do svého GitHub účtu.</li>
  <li>Vytvořte větev (branch), na které chcete pracovat při řešení problému a pusťte se do toho.</li>
  <li>Napište nebo aktualizujte jednotku a integrační testy, abyste pokryli všechny změny, které jste udělali.</li>
  <li> Vytvořte žádost (pull request) z vaší větve zpět na hlavní úložiště NavCoin Core s označením typu a čísla problému v názvu (např. Triviální: oprava průklepový chyby # 145).</li>
  <li>Kontaktujte ostatních přispěvatelů z NavCoin Core prostřednictvím Discord nebo GitHub kanálu a upozorněte je na vaši nevybavenou žádost, aby ji mohli co nejdříve prozkoumat.</li>
</ul>
<p class="paragraph-text">Pro plnou verzi pracovních pokynů si prosím přečtěte instrukce na GitHub.</p>

{{< /zig_section>}}

{{< zig_section
titleText="Pište testy"
imgSrc="/images/get-involved/con-test.svg"
reversed="true"
newTab="true"

>}}
NavCoin Core prošlo již mnoha testy, ale aktualizace, které zlepšují pokrytí testů, jsou vždy vítány a zároveň jsou vhodnou příležitostí postupně se seznamovat s našim kódem.
<br><br>Vývojářům se velmi doporučuje psát testy jednotek na nový kód a předkládat nové testy jednotek pro starý kód. Testy jednotek lze zkompilovat a spustit (pokud nebyly vypnuty v konfiguraci) prostřednictvím: make&nbsp;check.
<br><br>Existují také <a href="https://github.com/NAVCoin/navcoin-core/tree/master/qa" target="e" style="text-decoration:underline;">regresní and integrační testy</a> napsané v Pythonu, které se spouštějí automaticky na pracovním serveru.
{{< /zig_section>}}

{{< zig_section
  titleText="Prozkoumejte kód"
  imgSrc="/images/get-involved/con-bug.svg"
    buttonText="Prozkoumat žádosti (pull requests)"
  buttonUrl="https://github.com/navcoin/navcoin-core/pulls"
  buttonImgSrc="/images/icons/rightward-arrow.svg"
  bgPurple="true"
  newTab="true"

>}}
>NavCoin Core je bezpečnostní softvér, který chrání aktiva v hodnotě milionů dolarů, takže každá změna kódu musí být prozkoumána zkušenými vývojáři.<br><br>Jiným vývojářům může zabrat hodně času prozkoumat vaše žádosti (pull request). Mějte přitom na paměti, že všichni ověřovatelé si při zkoumání vašich žádostí ubírají z času na svých vlastních projektech, takže buďte trpěliví a respektující jejich časové možnosti.<br><br>Také zvažte poskytnout pomoc při prozkoumávání žádostí jiných lidí. Nemusíte být nutně expert na NavCoin, kód NavCoin Core nebo C ++ (ačkoli tyto znalosti určitě dobře poslouží). Skoro vždy zvyknou být nevyřízené i takové žádosti, které může prozkoumat každý programátor.
>{{< /zig_section>}}

{{< zig_section
titleText="Navrhněte zlepšení protokolu"
imgSrc="/images/get-involved/con-npips.svg"
buttonText="Prohlédnout NPIPs"
buttonUrl="https://github.com/NAVCoin/npips"
buttonImgSrc="/images/icons/rightward-arrow.svg"
reversed="true"
newTab="true"

>}}
>NavCoin Core se neustále usiluje zlepšovat základní protokol NavCoinu. Našim trvalým cílem je zlepšování bezpečnosti, soukromí a účinnosti vedle souběžné podpory decentralizace, porozumění a použitelnosti. Pokud nám chcete pomoci zlepšovat NavCoin protokol, nejvhodnějším místem na zdokumentování vašeho návrhu je GitHub úložiště NPIPs (Návrhy na zlepšení protokolu NavCoin).<br><br>Lidé, kteří si přejí předložit NPIPs, by nejdříve měli představit tuto myšlenku nebo dokument rozvojové komunitě NavCoin Core přes Discord nebo IRC (irc.freenode.net #navcoin). Po úvodní diskusi prosím předložte PR žádost v úložišti NPIPs. Po editovacích úpravách a schválení zde bude publikována.<br><br>Návrhy NPIPs schvalujeme vcelku liberálne a aniž jsme byli příliš angažovaní při rozhodování jménem komunity. Výjimkou jsou jen velmi vzácně případy řešení sporů, kdy je rozhodnutí sporné a neumíme se na něm shodnout. V takových případech má vždy přednost konzervativnější přístup.<br><br>Mít u nás otevřený NPIP nezakládá formálne akceptovaný standard, dokud se jeho status nezmění na Finální nebo Aktivní.<br><br>Také je třeba mít na paměti, že přijetí navrhovaných změn může podléhat konečnému souhlasu uživatelů NavCoinu.
>{{< /zig_section>}}

{{< zig_section
  titleText="Nahlaste bezpečnostní riziko"
  imgSrc="/images/get-involved/con-disclosure.svg"
  paragraphText="NavCoin je experimentální technologií a občas se v něm mohou objevit kritické chyby. Pokud jste výzkumníkem a našli jste bezpežnostní riziko, přejděte na stránku Odpovědné oznámení a zjistěte, jak to můžete nahlásit."
    buttonText="Odpovědné oznámení"
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
