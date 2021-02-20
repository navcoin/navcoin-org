---
title: "Для разработчиков"
date: 2018-03-20T07:41:22+13:00
draft: false
type: "default"
description: "Navcoin - это бесплатный проект с открытым исходным кодом, в который каждый может внести свой вклад. Его дизайн - это совместная работа разработчиков со всего мира."
---
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
{{< hero_section
titleText="Navcoin для разработчиков"
imgSrc="/images/for-developers/dev-hero.svg"
paragraphText="Navcoin - это свободный проект с открытым исходным кодом, в который каждый может внести свой вклад. Его дизайн - это совместная работа разработчиков со всего мира. Наша общая цель - улучшить протокол Navcoin и окружающую его программную экосистему. У любого есть потенциал оказать положительное влияние, независимо от уровня&nbsp;мастерства."
buttonText="Прочитайте манифест разработчика"
buttonLink="/en/governance/#read-manifestos"
buttonImgSrc="/images/icons/rightward-arrow.svg"
>}}

{{< zig_section
titleText="Получите финансирование Сетью&nbsp;Navcoin"
imgSrc="/images/for-developers/dev-get-involved.svg"
buttonText="Подробнее"
buttonUrl="/community-fund"
buttonImgSrc="/images/icons/rightward-arrow.svg"
reversed="true"
>}}
Фонд Сообщества Navcoin позволяет любому разработчику получать оплату от сети за их вклад в экосистему Navcoin. Проекты финансируются и утверждаются децентрализованной сетью без участия центральной власти. Это гарантирует, что направление Navcoin твердо остается в наилучших интересах сети и независимо определяется&nbsp;сообществом.
{{< /zig_section>}}
{{< item_container_section 
    titleText="Почему вы должны участвовать"
    subtitleText="Navcoin создан сообществом и для сообщества."
>}}
    {{< feature 
        titleText="Сплоченное сообщество"
        imgSrc="/images/for-developers/dev-community.svg"
        text="Наше сплоченное сообщество разработчиков готово к сотрудничеству и готово помочь вам начать&nbsp;работу."
    >}}
    {{< feature 
        titleText="Активное исследование"
        imgSrc="/images/for-developers/dev-cutting-edge.svg"
        text="Над усовершенствованием протокола Navcoin постоянно ведутся&nbsp;работы."
    >}}
    {{< feature                 
        titleText="Альянса Proof of Stake"
        imgSrc="/images/for-developers/dev-pos-alliance.svg"
        text="Мы являемся частью Альянса PoS - консорциума, целью которого является совместное исследование протокола&nbsp;PoS."
    >}}
    {{< feature                 
        titleText="Легко начать"
        imgSrc="/images/for-developers/dev-easy.svg"
        text="Все ресурсы для вашего участия лежат перед вами, и существует много способов, как вы можете быть&nbsp;вовлечены."
    >}}
    {{< feature                 
        titleText="Программируемые деньги"
        imgSrc="/images/for-developers/dev-digital-money.svg"
        text="С помощью публично проверяемого регистра транзакций вы можете легко использовать Navcoin в своих приложениях и на&nbsp;веб-сайтах."
    >}}
    {{< feature                 
        titleText="Всегда с открытым исходным кодом"
        imgSrc="/images/for-developers/dev-trust.svg"
        text="Программное обеспечение Navcoin всегда будет бесплатным и в соответствии с принципами открытого исходного&nbsp;кода."
    >}}
{{< /item_container_section >}}

{{< item_container_section 
    titleText="Внести свой вклад сейчас"
    subtitleText="Существует много способов как можно внести свой вклад в Navcoin, независимо от уровня вашего&nbsp;мастерства."
    bgPurple="true"
>}}
    {{< long_text 
        titleText="Протокол Navcoin"
        imgSrc="/images/for-developers/dev-protocol.svg"
        text="Navcoin имеет открытый исходный код, и каждый может принять участие в его улучшении. Здесь вы можете найти процедуры для сообщения о проблеме, для ее устранения или для предложения по улучшению протокола&nbsp;консенсуса."
        buttonUrl="/get-involved/"
        buttonText="Подробнее"
        buttonImgSrc="/images/icons/rightward-arrow.svg"
    >}}
    {{< long_text 
        titleText="Проекты сообщества"
        imgSrc="/images/for-developers/dev-projects.svg"
        text="Navcoin - это больше, чем просто протокол. Это экосистема веб-сайтов, приложений и устройств, которые подключаются к протоколу Navcoin. Здесь вы можете узнать о том, как внести свой вклад в проекты&nbsp;сообщества."
        buttonUrl="https://navhub.org"
        buttonText="Подробнее"
        buttonImgSrc="/images/icons/rightward-arrow.svg"
    >}}
    {{< long_text 
        titleText="Ответственное раскрытие"
        imgSrc="/images/for-developers/dev-disclosure.svg"
        text="Navcoin является экспериментальной технологией, поэтому иногда обнаруживаются опасные ошибки. Если вы являетесь исследователем и обнаружили опасную уязвимость, вы можете безопасно общаться с основными разработчиками Navcoin следующим&nbsp;образом."
        buttonUrl="/responsible-disclosure/"
        buttonText="Подробнее"
        buttonImgSrc="/images/icons/rightward-arrow.svg"
    >}}
{{< /item_container_section >}}

{{< contrib_list
    titleText="Участники протокола Navcoin"
    subtitleText="Мы хотели бы поблагодарить наших участников, которые сделали этот протокол&nbsp;потрясающим!"
    buttonUrl="https://github.com/NAVCoin/navcoin-core/graphs/contributors"
    buttonTxt="Посмотреть Navcoin на GitHub"
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
