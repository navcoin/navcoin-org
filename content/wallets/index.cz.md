---
title: "Peněženky"
date: 2018-03-20T08:09:08+13:00
draft: false
type: "default"
author: ""
description: "NavCoin je open-source protocol, což znamená, že peněženky jsou udržovány několika organizacemi a jednotlivci."
---

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
{{< hero_section
titleText="Peněženky"
imgSrc="/images/wallets/wal-hero.svg"
paragraphText="NavCoin je open-source protocol, což znamená, že peněženky jsou udržovány několika organizacemi a jednotlivci. Existují různé druhy peněženek - od komplexních (full) peněženek až po 'lehké' peněženky, které se snadněji ovládají. Mějte vždy na paměti, že je na vaší vlastní zodpovědnosti vybrat si peněženku pečlivě a používat přiměřené zásady na ochranu svých peněz."
buttonText="Požádat komunitu o pomoc"
buttonImgSrc="/images/icons/rightward-arrow.svg"
buttonLink="https://discord.gg/y4Vu9jw"
newTab="true"

>}}

{{< item_container_section
    titleText="NavCoin peněženky"
    subtitleText="Udělejte si také vlastní průzkum nebo požádejte komunitu o pomoc."
    >}}
    {{< wallet
        titleText="NavCoin Core"
        walletImgSrc="/images/wallets/wal-core.png"
        text="NavCoin Core peněženka je plným NavCoin klientem, který uživatelům umožňuje podílet se na síti (staking). Toto je oficiální doporučení k použití publikované vývojáři NavCoin Core."
        buttonUrl="#download-core"
        buttonText="Stáhnout"
        buttonImgSrc="/images/icons/downward-arrow.svg"
        platformImg1Src="/images/platforms/mac.png"
        platformImg2Src="/images/platforms/windows.png"
        platformImg3Src="/images/platforms/linux.png"
    >}}
    {{< wallet
        titleText="NavPay"
        walletImgSrc="/images/wallets/wal-navpay.png"
        text="NavPay je lehká peněženka s jednoduchým ovládáním, která vám umožní bezpečně si uložit vaše NAV. Je dostupná od desktopu až po mobil a nevyžaduje gigabajty úložného prostoru."
        buttonUrl="https://navhub.org/projects/nav-pay/"
        buttonText="Stáhnout"
        buttonImgSrc="/images/icons/rightward-arrow.svg"
        platformImg1Src="/images/platforms/android.png"
        platformImg2Src="/images/platforms/mac.png"
        platformImg3Src="/images/platforms/windows.png"
        platformImg4Src="/images/platforms/linux.png"
        platformImg5Src="/images/platforms/pwa.png"
        platformImg6Src="/images/platforms/web.png"
        newTab="true"
    >}}
    {{< wallet
        titleText="NEXT"
        walletImgSrc="/images/wallets/wal-next.png"
        text="Moderní a stylová peněženka nové generace pro NavCoin. Nabízí nejen možnost podílet se na síti (staking), ale také jednoduché rozhraní pro vytváření návrhů do komunitního fondu a hlasování o nich."
        buttonUrl="http://next.navcommunity.net/"
        buttonText="Stáhnout"
        buttonImgSrc="/images/icons/rightward-arrow.svg"
        platformImg1Src="/images/platforms/mac.png"
        platformImg2Src="/images/platforms/windows.png"
        platformImg3Src="/images/platforms/linux.png"
        newTab="true"
    >}}
    {{< wallet
        titleText="Magnum peněženka"
        walletImgSrc="/images/wallets/MagnumWallet_400x400.jpg"
        text="Lehká a univerzální peněženka s vlastním privátním klíčem pro správu více než 1000 kryptoaktiv."
        buttonUrl="https://magnumwallet.co/"
        buttonText="Více informací"
        buttonImgSrc="/images/icons/rightward-arrow.svg"
        platformImg6Src="/images/platforms/web.png"
        newTab="true"
    >}}
    {{< wallet
        titleText="Coinomi"
        walletImgSrc="/images/wallets/wal-coinomi.png"
        text="Coinomi je peněženka zaměřena především na bezpečnost a správu mnoha digitálních aktiv pro Bitcoin, altcoiny a tokeny."
        buttonUrl="https://www.coinomi.com/"
        buttonText="Stáhnout"
        buttonImgSrc="/images/icons/rightward-arrow.svg"
        platformImg1Src="/images/platforms/mac.png"
        platformImg2Src="/images/platforms/android.png"
        newTab="true"
    >}}
    {{< wallet
        titleText="NavPi StakeBox"
        walletImgSrc="/images/wallets/wal-pi.png"
        text="Plná NavCoin peněženka s nízkou spotřebou energie fungující na plarforme Raspberry-Pi."
        buttonUrl="https://navhub.org/projects/nav-pi/"
        buttonText="Stáhnout"
        platformImg1Src="/images/platforms/pi.png"
        buttonImgSrc="/images/icons/rightward-arrow.svg"
        newTab="true"
    >}}
    {{< wallet
        titleText="NavCoin M8"
        walletImgSrc="/images/wallets/wal-m8.png"
        text="Výkonná NavCoin peněženka pro účely sdílení na síti (staking) zahrnující NEXT peněženku s možnostmi vlastních úprav."
        buttonUrl="https://navcoinm8.com/"
        buttonText="Zjistit více"
        buttonImgSrc="/images/icons/rightward-arrow.svg"
        platformImg1Src="/images/platforms/linux.png"
        newTab="true"
    >}}
    {{< wallet
        titleText="NavPaper"
        walletImgSrc="/images/wallets/wal-paper.png"
        text="Vygeneruje klíče na jejich vytištění a odložení offline pro zvýšení bezpečnosti."
        buttonUrl="https://paper.navcoin.org/"
        buttonText="Stáhnout"
        buttonImgSrc="/images/icons/rightward-arrow.svg"
        platformImg1Src="/images/platforms/mac.png"
        platformImg2Src="/images/platforms/windows.png"
        platformImg3Src="/images/platforms/web.png"
        newTab="true"
    >}}
{{< /item_container_section >}}

{{< item_container_section
    titleText="Stáhnout NavCoin Core 4.7.1"
    subtitleText="NavCoin Core peněženka byla pečlivě vyladěna, aby byla intuitivní a snadná k používání. Obsahuje také průvodce instalací a vše potřebné k tomu, abyste si mohli stáhnout blockchain a začít realizovat transakce v bezpečném prostředí."
    bgPurple="true"
    anchor="download-core"
    buttonUrl="https://github.com/NAVCoin/navcoin-core/releases/latest"
    buttonText="Pokročilé stahování"
    buttonImgSrc="/images/icons/rightward-arrow.svg"
    newTab="true"

>}}
    {{< action
        titleText="Windows"
        imgSrc="/images/wallets/wal-windows.svg"
        subtext=""
        linkText="Stáhnout"
        linkUrl="https://github.com/NAVCoin/navcoin-core/releases/download/4.6.0/navcoin-4.6.0-win64-setup.exe"
        linkImgSrc="/images/icons/downward-arrow.svg"
    >}}
    {{< action
        titleText="Mac"
        imgSrc="/images/wallets/wal-mac.svg"
        subtext=""
        linkText="Stáhnout"
        linkUrl="https://github.com/NAVCoin/navcoin-core/releases/download/4.6.0/navcoin-4.6.0-osx.dmg"
        linkImgSrc="/images/icons/downward-arrow.svg"
    >}}
    {{< action                 
        titleText="Linux"
        imgSrc="/images/wallets/wal-linux.svg"
        subtext=""
        linkText="Stáhnout"
        linkUrl="https://github.com/NAVCoin/navcoin-core/releases/download/4.6.0/navcoin-4.6.0-x86_64-linux-gnu.tar.gz"
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
