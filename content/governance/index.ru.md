---
title: "Управление"
date: 2018-03-20T08:09:08+13:00
draft: false
type: "default"
author: ""
description: "Децентрализованные цифровые валюты, как Navcoin, возвращают человеку свободу, конфиденциальность и владение финансами."
---
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
{{< hero_section
titleText="Управление"
imgSrc="/images/governance/gov-hero.svg"
paragraphText="Целью Манифеста Navcoin является четкое изложение причин, по которым участники сообщества Navcoin делают то, что мы делаем, как мы это делаем и по каким причинам. Эти документы охватывают руководящие принципы, цель, объем работ и операционные требования, чтобы гарантировать, что мы разделяем одни и те же ценности и всегда работаем в наилучших интересах&nbsp;сети."
buttonText="Прочитайте наши манифесты"
buttonImgSrc="/images/icons/downward-arrow.svg"
buttonLink="#read-manifestos"
>}}

{{< zig_section
titleText="Почему децентрализация является революционной"
imgSrc="/images/governance/gov-decentralise.svg"
reversed="true"
>}}
Как участники сообщества Navcoin, мы являемся членами одного из первых в мире действующих анархо-синдикалистских обществ. Эта революционная система основана на убеждении, что если люди свободны действовать в своих собственных интересах, то они естественно работают и в интересах общества. Другой способ описать анархо-синдикализм -&nbsp;децентрализация.
{{< /zig_section>}}


{{< zig_section
  titleText="Сделать мир лучше"
  imgSrc="/images/governance/gov-world.svg"
  bgPurple="true"
>}}
Децентрализованные цифровые валюты, как Navcoin, отнимают контроль над денежной системой у правительственных и корпоративных элит и возвращают человеку свободу, конфиденциальность и управление финансами. Вот почему Navcoin - это не просто протокол платежей, это фактически вектор для основательных изменений в функционировании глобальной экономической системы. Децентрализованное управление находится в самой его основе. Поскольку у Navcoin нет центрального органа, важнейшая часть нашей роли, как участников этого сообщества - быть чемпионами в принятии решений, основываясь на нейтралитет и&nbsp;консенсус.
{{< /zig_section>}}


{{< zig_section
titleText="Преимущества децентрализации"
imgSrc="/images/governance/gov-benifits.svg"
reversed="true"
>}}
Децентрализация также обеспечивает защиту от коррупции. История показывала нам бесчисленное количество раз, что слишком большая власть в слишком малом количестве рук неизбежно вела к ее злоупотреблению. Более того, это дает человеку шанс изменить ситуацию к лучшему. Усовершенствования протокола происходят снизу вверх, и могут быть поданы кем угодно. Процветающее сообщество Navcoin является живым доказательством того, что когда людям доверяют совершать добро, то они вносят свой вклад во благо&nbsp;всех.
{{< /zig_section>}}


{{< zig_section
  titleText="Все зависит от вас"
  imgSrc="/images/governance/gov-you.svg"
  bgPurple="true"
>}}
Когда все участники сообщества Navcoin берут на себя ответственность за содействие в разработке протокола и активно распространяют его послание по всему миру, не только сообщество извлекает выгоду - она распространяется на общество в целом. И наоборот, без вашего участия в качестве уполномоченной, автономной персоны не может быть децентрализации и, следовательно, никакого Navcoin. Успех Navcoin действительно зависит от вас, и вы можете достичь&nbsp;его.
{{< /zig_section>}}


{{< zig_section
titleText="Внесите свой вклад"
imgSrc="/images/governance/gov-get-involved.svg"
reversed="true"
>}}
Navcoin является инициативой сообщества, которая позволяет любому внести свой вклад различными способами. Экосистема Navcoin - это больше, чем просто разработка с открытым исходным кодом. Создание, продвижение контента и принятие одинаково важны для развития децентрализованной цифровой валюты, поэтому ключом к успеху являются вклады людей с разными&nbsp;навыками.
{{< /zig_section>}}


{{< item_container_section
    titleText="Прочитайте наши манифесты"
    subtitleText="Основные ценности и руководящие принципы притятия участия в&nbsp;Navcoin"
    bgPurple="true"
    anchor="read-manifestos"
>}}
    {{< action
        titleText="Манифест разработчика"
        imgSrc="/images/governance/gov-dev-manifesto.svg"
        subtext="Обязательные к прочтению материалы для тех, кто хочет внести свой вклад в открытый исходный код&nbsp;Navcoin."
        linkText="Загрузить Манифест"
        linkUrl="/assets/NavcoinDeveloperManifesto.pdf"
        linkImgSrc="/images/icons/downward-arrow.svg"
    >}}
    {{< action
        titleText="Манифест содержания"
        imgSrc="/images/governance/gov-content-manifesto.svg"
        subtext="Руководство по общим ценностям и задачам авторов контента сообщества&nbsp;Navcoin."
        linkText="Загрузить Манифест"
        linkUrl="/assets/NavcoinContentManifesto.pdf"
        linkImgSrc="/images/icons/downward-arrow.svg"
    >}}
    {{< action
        titleText="Руководство по бренду"
        imgSrc="/images/governance/gov-brand.svg"
        subtext="Руководство, которое поможет вам сочетать создаваемый вами контент с внешним видом бренда&nbsp;Navcoin. "
        linkText="Загрузить руководство"
        linkUrl="/assets/NavcoinBrandGuidelines.pdf"
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
