---
title: "Responsible Disclosure"
date: 2018-03-20T07:41:22+13:00
draft: false
type: "default"
---
{{< hero_section
titleText="Responsible Disclosure"
paragraphText="NavCoin is experimental technology and sometimes critical bugs are found. If you’re a researcher and you’ve found a critical vulnerability here’s how you can talk securely with the NavCoin Core developers."
imgSrc="/images/responsible-disclosure/dis-hero.svg"
>}}


<div class="grey">
<div class="article">
  <h2 class="article-title">
    Disclosure Procedure
  </h2>
    <p>If you think you’ve found a critical vulnerability in NavCoin’s protocol, please don’t hesitate to contact the NavCoin Core developers. We are committed to coordinating with you and any other affected parties to ensure any disclosure is handled discreetly and in a timely manner.</p>
  <p>The best place to report the vulnerability is to <a href="#">disclosure@navcoin.org</a>. You can encrypt your message with the GPG key found on the NavCoin GitHub.</p>
    <h3 class="article-sml-title">Disclosure GPG Key</h3>
    <p>
      <a href="https://github.com/NAVCoin/public-keys/blob/master/org.navcoin.disclosure.pub">
        https://github.com/NAVCoin/public-keys/blob/master/org.navcoin.disclosure.pub
      </a>
     </p>
    <h3>Ideally the disclosure would include</h3>
    <ul>
      <li>A docker image with python tests showing the vulnerability</li>
      <li>Detailed notes about the vulnerability and affected parts of the code</li>
      <li>Suggested mitigation strategies.</li>
      <li>Your GPG public key so we can securely reply to you.</li>
    </ul>
    <p>If you’re unable to communicate with this way please reach out any of the admins on the NavCoin Discord channel and we will setup a secure private channel with you.</p>
</div>
</div>

<style>
    .grey{
  margin:0;
  background-color: #FAFAFA;
}

.article{
    margin: 0;
    padding: 0;
    max-width: 800px;
    margin: 0 auto;
    padding: 80px 20px;
}

.article .article-title{
    color: #7D5AB5;
    font-family: raleway;
    font-size: 40px;
    margin-bottom: 26px;
    text-align: center;
    font-weight: 600;
    margin-top: 0;
}

@media (max-width:500px){
  .article .article-title{
    font-size: 27px;
  }
  
  .article{
    padding: 50px 10px;
  }

}

.article p{
  font-size: 16px;
  color: #404040;
  font-family: roboto;
  line-height: 25px;
  text-align: justify;
  margin-top: 0;
  margin-bottom: 10px;
}

@media (min-width: 768px)
.article h3 {
    margin-top: 32px;
}

@media (min-width: 1012px)
.article h3 {
    font-size: 22px;
}
@media (min-width: 768px)
.article h3 {
    font-size: 20px;
}
.article h3 {
    font-family: roboto;
    font-size: 22px;
    font-weight: 300;
    margin-top: 30px;
    margin-bottom: 20px;
    color: black;
}

@media (min-width: 768px){
  .article ul {
    padding-left: 2em;
  }
}

.article ul{
    padding-left: 1em;
    margin-bottom: 16px;
}

.article ul li {
    margin-bottom: 8px;
    font-size: 16px;
    color: #404040;
    font-family: roboto;
    line-height: 25px;
    text-align: justify;
    margin-top: 0;
    margin-bottom: 10px;
}

    </style>