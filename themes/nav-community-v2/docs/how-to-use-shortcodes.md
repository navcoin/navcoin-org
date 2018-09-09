# Shortcode Documentation

## item_container_section

A `item_container_section` looks like this:

```
{{< item_container_section 
    titleText="Long text no buttons"
    subtitleText="NavCoin is an open source protocol and NavCoin Wallets are cool"
>}}
    {{< wallet 
        titleText="NavCoin Core Wallet v4.3.0"
        walletImgSrc="/images/logos/wallet-navcoincore-logo.png"
        text="These wallets run the blockchain & participate in validating transactions."
        buttonImgSrc="/images/icons/rightward-arrow.svg"
        buttonUrl="https://navcoin.org/navcoin-core/#links"
        buttonText="Download"
        platformImg1Src="/images/platforms/mac.png"
        platformImg2Src="/images/platforms/windows.png"
        platformImg3Src="/images/platforms/linux.png"
    >}}
{{< /item_container_section >}}
```

It is a container for the both the `wallet` shortcode and `exchange` shortcode. You can throw as many shortcodes into it as you want but **only use sortcodes of one type.**, i.e. don't mix `wallet` and `exchange` shortcodes .

You can set the background colour to be purple using the 'bg-purple` attribute.

| Attribute | Purpose | Content |
|: - |:- |
| titleText | Sets the title text for the container. This is optional so only include this attribute if you're using it or you'll get weird spacing. | Plain text |
| subtitleText | Sets the subtitle text for the container. This is optional so only include this attribute if you're using it or you'll get weird spacing | Plain text |
| bg-purple | Sets the background for the container to purple and the title/subtitle font colour to white. This is optional so only include this attribute if you want a purple bg| `bg-purple="true"` |

## long text shortcode

The `long text` shortcode looks like this:

```
{< long_text 
    titleText="Turtle Store"
    imgSrc="/images/logos/wallet-navpi-logo.png"
    text="Bitcoin when used on a mobile device allows you to pay with a simple two-step scan-and-pay. There's no need to sign up, swipe your card, type a PIN, or sign anything. All you need to receive Bitcoin payments is to display the QR code in your Bitcoin wallet app and let the other party scan your mobile, or touch the two phones together (using NFC radio technology)."
    buttonUrl="https://navcoin.org/navcoin-core/#links"
    buttonText="Download"
    buttonImgSrc="/images/icons/rightward-arrow.svg"
>}}
```
It is intended to be placed inside a `item_container_section` and no where else.

NOTE: You can remove all of the button attributes (`buttonUrl`,`buttonImgSrc`, `buttonText`) and no button will show.

| Attribute | Purpose | Content |
|: - |:- |
| titleText | Sets the title text for the long text | Plain text |
| text | Sets the description text for the long text. | Plain text |
| imgSrc | Sets the image for the long text | A path e.g. `/images/logos/wallet-navpi-logo.png"` |
| buttonText | Sets the button text for the wallet | Plain text |
| buttonUrl | Sets the button URL for the wallet | If it's an on-site link a simple relative link is fine, e.g. `/buy-nav`. An off-site link will need to be written in full, e.g. `https://www.navhub.org` |
| buttonImgSrc | Sets the image on the button. | A path. e.g. `/images/icons/rightward-arrow.svg` |


## merchant shortcode

The `merchant` shortcode looks like this:

```
{{< merchant 
    titleText="Crypto Garden"
    imgSrc="/images/logos/wallet-navcoincore-logo.png"
    text="Spend your NavCoin on exotic potplants and shrubs"
    linkUrl="https://navcoin.org/navcoin-core/#links"
>}}
```
It is intended to be placed inside a `item_container_section` and no where else.


| Attribute | Purpose | Content |
|: - |:- |
| titleText | Sets the title text for the merchant | Plain text |
| text | Sets the description text for the merchant. | Plain text |
| imgSrc | Sets the image for the merchant | A path e.g. `/images/logos/wallet-navpi-logo.png"` |
| linkUrl | Sets the URL for the merchant | If it's an on-site link a simple relative link is fine, e.g. `/buy-nav`. An off-site link will need to be written in full, e.g. `https://www.navhub.org` |


## exchange shortcode

The `exchange` shortcode looks like this:

```
{{< exchange 
    titleText="Bittrex"
    imgSrc="/images/logos/wallet-navcoincore-logo.png"
    text="BTC/NAV, USD/NAV, ETH/NAV"
    linkUrl="https://navcoin.org/navcoin-core/#links"
>}}
```
It is intended to be placed inside a `item_container_section` and no where else.


| Attribute | Purpose | Content |
|: - |:- |
| titleText | Sets the title text for the exchange | Plain text |
| text | Sets the description text for the exchange, keep this short. | Plain text |
| imgSrc | Sets the image for the exchange | A path e.g. `/images/logos/wallet-navpi-logo.png"` |
| linkUrl | Sets the URL for the exchange | If it's an on-site link a simple relative link is fine, e.g. `/buy-nav`. An off-site link will need to be written in full, e.g. `https://www.navhub.org` |


## wallet shortcode

The `wallet` shortcode looks like this:

```
{{< wallet 
    titleText="NavCoin Core Wallet v4.3.0"
    walletImgSrc="/images/logos/wallet-navcoincore-logo.png"
    text="These wallets run the blockchain & participate in validating transactions."
    buttonUrl="https://navcoin.org/navcoin-core/#links"
    buttonText="Download"
    platformImg1Src="/images/platforms/mac.png"
    platformImg2Src="/images/platforms/windows.png"
    platformImg3Src="/images/platforms/linux.png"
    buttonImgSrc="/images/icons/rightward-arrow.svg"
>}}
```
It is intended to be placed inside a `wallet_container` and no where else.


| Attribute | Purpose | Content |
|: - |:- |
| titleText | Sets the title text for the wallet | Plain text |
| text | Sets the description text for the wallet | Plain text |
| walletImgSrc | Sets the main image for the wallet | A path e.g. `/images/logos/wallet-navpi-logo.png"` |
| buttonText | Sets the button text for the wallet | Plain text |
| buttonUrl | Sets the button URL for the wallet | If it's an on-site link a simple relative link is fine, e.g. `/buy-nav`. An off-site link will need to be written in full, e.g. `https://www.navhub.org` |
|platformImgXSrc | Where `X` is the number of the image you are editing. Sets the platform icon for the wallet. You can add up to 6 images | A path e.g. `/images/platforms/android.png"` |
| buttonImgSrc | Sets the image on the button. | A path. e.g. `/images/icons/rightward-arrow.svg` |


## hero_section

A `hero_section` looks like this:

```
{{< hero_section
titleText="Standard hero_section"
paragraphText="NavCoin is a NavCoin is a NavCoin is a NavCoin is a NavCoin is a NavCoin is a NavCoin is a NavCoin is a NavCoin is a NavCoin is a NavCoin is a NavCoin is a NavCoin is a NavCoin is a NavCoin is a NavCoin is a NavCoin is a NavCoin is a."
imgSrc="/images/hero-icon.svg"
>}}
```

| Attribute | Purpose | Content |
|: - |:- |
| titleText | Sets the title text | Plain text |
|paragraphText| Sets the paragraph text | Plain text |
| buttonText | Sets the button text | Plain text |
| buttonLink | The url for where the button links | If it's an on-site link a simple relative link is fine, e.g. `/buy-nav`. An off-site link will need to be written in full, e.g. `https://www.navhub.org` |
| buttonImgSrc | Sets the image on the button. | A path. e.g. `/images/icons/rightward-arrow.svg` |



## center_text_cta

A `center_text_cta` looks like this:

```
{{< center_text_cta
    titleText="This is an amazing title️"
    buttonText="This is some stylish button text"
    buttonImgSrc="/images/icons/rightward-arrow.svg"
    buttonLink="/shortcodes/"
    innerText="This is some inner text, pretty cool huh?"
  >}}
  ```

There are a few attributes that you can add to it to change the content it displays.  
Attributes can be left out if you don't need them.

| Attribute | Purpose | Content |
|: - |:- |
| lightStyle | Sets the `light-style` class which changes the background and font colours to the light theme. | If you want the light theme use `true`.  If anything else is used the style won't work |
| titleText | Sets the title text | Plain text |
| innerText | Sets the paragraph text | Plain text |
| buttonText | Sets the button text | Plain text |
| buttonLink | The url for where the button links | If it's an on-site link a simple relative link is fine, e.g. `/buy-nav`. An off-site link will need to be written in full, e.g. `https://www.navhub.org` |
| buttonImgSrc | Sets the image on the button. | A path. e.g. `/images/icons/rightward-arrow.svg` |