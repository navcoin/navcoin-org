---
title: "Contribuir al protocolo"
date: 2018-03-20T07:41:22+13:00
draft: false
type: "default"
description: "Hay varias maneras de contribuir al protocolo de Navcoin. Si quieres ayudar al proyecto aquí encontrarás la ayuda necesaria"
---
{{< hero_section
titleText="Involucrarse"
paragraphText="Hay muchas maneras de contribuir a las mejoras del protocolo de Navcoin. No todas requieren conocimiento de programación. Si tienes interés en ayudar al proyecto encuentra donde hacerlo de la forma mas&nbsp;eficaz."
imgSrc="/images/get-involved/con-hero.svg"
>}}
{{< zig_section
titleText="Traducciones"
imgSrc="/images/get-involved/con-translate.svg"
  buttonText="Crear cuenta en Transifex"
  buttonUrl="https://www.transifex.com/signup/"
  buttonImgSrc="/images/icons/rightward-arrow.svg"
    reversed="true"
    newTab="true"
>}}
Navcoin Core ha sido traducido a más de 20 idionas. La ayuda en este emprendimiento será siempre bienvenida. Para agilizar el proceso, usamos el servicio de Transifex: <br><a href="https://www.transifex.com/navcoin/navcoin-core" style="text-decoration:underline;">https://www.transifex.com/navcoin/navcoin-core</a><br><br>Clikea en el proyecto y comienza a&nbsp;traducir!
{{< /zig_section>}}

{{< zig_section
  titleText="Documentación"
  imgSrc="/images/get-involved/con-doc.svg"
  buttonText="contribuir a la documentación de desarrollo"
  buttonUrl="https://github.com/NAVCoin/navcoin-dev-docs"
  buttonImgSrc="/images/icons/rightward-arrow.svg"
  bgPurple="true"
  newTab="true"
>}}
Estamos trabajando en subir de manera abierta toda la documentación y los recursos que nuestro ecosistema posee. Si quieres ayudar en este proceso, toda la información se encuentra alojada en&nbsp;Github.
{{< /zig_section>}}

{{< zig_section
titleText="Reportar un problema en el código"
imgSrc="/images/get-involved/con-issue.svg"
buttonText="Reporte de problemas"
buttonUrl="https://github.com/NAVCoin/navcoin-core/issues"
buttonImgSrc="/images/icons/rightward-arrow.svg"
reversed="true"
newTab="true"
>}}
Para inconvenientes no críticos dentro de Navcoin, por favor buscar casos similares en el buscador. Si no puedes encontrar problemas parecidos, reportar el problema con el formato&nbsp;siguiente:
<br>
<ul class="article-ul" style="color: rgba(0, 0, 0, 0.55);">
  <li>Describir de manera concisa el problema y los pasos para&nbsp;reproducirlo.</li>
  <li>Version de NAVCoin Core usada al momento de encontrar el problema.</li><li>Detalles sobre la información del archivo "debug.log". Por favor asegurarse de no mostrar información confidencial dentro del&nbsp;"debug.log".</li>
</ul>
<p class="paragraph-text">La mejor estrategia para resolver el problema lo más rápido posible, es hacer que el equipo desarrollador pueda re crear el problema de la manera más eficiente posible. Cuanta mayor sea la información y mejor esté organizada, más fácil será arreglar el&nbsp;problema.</p>
{{< /zig_section>}}

{{< zig_section
  titleText="Resolver un problema"
  imgSrc="/images/get-involved/con-resolve.svg"
  buttonText="Leer las instrucciones"
  buttonUrl="https://github.com/navcoin/navcoin-core/blob/master/CONTRIBUTING.md"
  buttonImgSrc="/images/icons/rightward-arrow.svg"
  bgPurple="true"
  newTab="true"
>}}
El rastreador de problemas es el lugar más útil para contribuir al Core de Navcoin. Antes de sugirir arreglos al encontrar problemas es necesario comentarlo asi nos aseguramos que nadie esté ya trabajando en una&nbsp;solución.
<br><br>
Pasos a seguir para la resolución de problemas:
<br>
<ul class="article-ul" style="color: rgba(255,255,255,0.55);">
  <li>Hacer una copia (Fork) de Navcoin/navcoin-core a tu cuenta persona; de&nbsp;Github.</li>
  <li>Crear una ramificación para trabajar y resolver el&nbsp;problema.</li>
  <li>Actualizar, probar la integracion sobre los cambios&nbsp;hechos.</li>
  <li>Realizar un "Pull Request" desde tu ramificación hacia el repositorio principal de Navcoin Core con el problema y el número en el título ej: ("Arreglo de problemas de traducción #145").</li>
  <li>Comunicarse con otros contribuidores al Navcoin Core en Discord o mismo en GIthub aletando sobre el "Pull Request" pendiente así lo pueden evaluar lo más pronto&nbsp;posible.</li>
</ul>
<p class="paragraph-text">Para mayor información sobre como funciona este sistema referirse a la sección de información de&nbsp;Github.</p>
{{< /zig_section>}}

{{< zig_section
titleText="Escribir las pruebas"
imgSrc="/images/get-involved/con-test.svg"
reversed="true"
newTab="true"
>}}
Navcoin Core se encuentra cubierto por un número importante de pruebas de estabilidad. "Parches" que mejoran la cobertura de estas, siempren serán bienvenidad y son una fuente de información para lograr "familiaridad" con el código base.
<br><br>
Alentamos a los desarrolladores a escribir <a href="https://github.com/NAVCoin/navcoin-core/blob/master/doc/unit-tests.md" target="e" style="text-decoration:underline;">unit tests</a> para nuevo código y que envien las nuevas pruebas unitarias para actualizar el código anterior. Pruebas de unidad pueden ser compiladas y corridas (Asumiendo que no hayan sido deshabilitadas en la configuracion inicial) con los comandos: make&nbsp;check.
<br><br>
Hay también <a href="https://github.com/NAVCoin/navcoin-core/tree/master/qa" target="e" style="text-decoration:underline;">pruebas de regresion e integración</a>, escritas en Python, corriendo automáticamente en el servidor de&nbsp;"build".
{{< /zig_section>}}

{{< zig_section
  titleText="Revisión del código"
  imgSrc="/images/get-involved/con-bug.svg"
    buttonText="Review pull requests"
  buttonUrl="https://github.com/navcoin/navcoin-core/pulls"
  buttonImgSrc="/images/icons/rightward-arrow.svg"
  bgPurple="true"
  newTab="true"
>}}
Navcoin Core es una aplicacion que ayuda a protejer activos con valores de varios millones de dólares, por esto cada cambio en nuestro código necesita ser revisado por desarolladores con mucha&nbsp;experiencia<br><br>A los desarrolladores les puede llevar algunn tiempo revisar sus solicitudes de extracción. Recuerde que todos los revisores se están alejando de sus propios proyectos para revisar sus solicitudes de extracción, rogamos ser pacientes y respetuosos con sus&nbsp;tiempos.<br><br>Por favor, también consideren ayudar a revisar las solicitudes de extracción de otras personas. No es necesario que ser experto en Navcoin, el código base de Navcoin Core o C ++ (aunque todas estas cosas ayudan). Casi siempre hay solicitudes de extracción abiertas que cualquier programador puede;revisar.
{{< /zig_section>}}

{{< zig_section
titleText="Suggest a protocol improvement"
imgSrc="/images/get-involved/con-npips.svg"
buttonText="View NPIP's"
buttonUrl="https://github.com/NAVCoin/npips"
buttonImgSrc="/images/icons/rightward-arrow.svg"
reversed="true"
newTab="true"
>}}
Navcoin Core se esfuerza por mejorar continuamente el protocolo de Navcoin. Nuestro objetivo es siempre mejorar la seguridad, la privacidad y la eficiencia al mismo tiempo que fomentamos la descentralización, la aceptación y la facilidad de uso. Si desean ayudarnos a mejorar el protocolo Navcoin, el mejor lugar para documentar su sugerencia es en los NPIP (propuestas de mejora del protocolo Navcoin) dentro del repositorio de&nbsp;GitHub.<br><br>Las personas que deseen enviar NPIP, primero deben proponer su idea o documento a la comunidad de desarrollo de Navcoin Core a través de Discord o IRC (irc.freenode.net #navcoin). Después de la discusión, abra un RP en el repositorio de NPIPs. Tras su edición y aceptación, será publicado&nbsp;allí.<br><br>Somos bastante liberales con la aprobación de los NIP e intentamos no involucrarnos demasiado en la toma de decisiones en nombre de la comunidad. La excepción es en casos muy raros de resolución de disputas cuando una decisión es polémica y no se puede acordar. En esos casos, siempre se preferirá la opción&nbsp;conservadora. <br> <br> Tener un NPIP aquí no lo convierte en un estándar aceptado formalmente hasta que su estado sea Final o&nbsp;Activo.<br><br>Al proponer cambios se debe considerar que el consentimiento final depende del consenso de los usuarios de&nbsp;Navcoin.

{{< /zig_section>}}

{{< zig_section
  titleText="Discutir una vulnerabilidad de seguridadDisclose a security vulnerability"
  imgSrc="/images/get-involved/con-disclosure.svg"
  paragraphText="Navcoin cuenta con una tecnología experimental y, a veces, se encuentran errores críticos. Si eres un investigador y has encontrado una vulnerabilidad de seguridad, dirígete a la página de Divulgación responsable para ver cómo puedes&nbsp;informarnos."
    buttonText="Divulgación responsable"
  buttonUrl="/divulgacion-responsable/"
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
