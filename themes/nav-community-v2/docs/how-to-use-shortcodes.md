# Shortcode Documentation

## wallet_section

A `wallet_section` looks like this:

{{< wallet_section    
    buttonImgSrc="/images/icons/rightward-arrow.svg"

    item1TitleText="NavCoin Core Wallet v4.3.0"
    item1WalletImgSrc="/images/logos/wallet-navcoincore-logo.png"
    item1Text="These wallets run the blockchain & participate in validating transactions."
    item1BtnUrl="https://navcoin.org/navcoin-core/#links"
    item1BtnText="Download"
    item1PlatformImg1Src="/images/platforms/mac.png"
    item1PlatformImg2Src="/images/platforms/windows.png"
    item1PlatformImg3Src="/images/platforms/linux.png"
    
    item2TitleText="NavPay Light Wallet v4.2.0"
    item2WalletImgSrc="/images/logos/wallet-navpay-logo.png"
    item2Text="NavPay is an easy to use light wallet, that allows you to securely store your NAV."
    item2BtnUrl="https://navhub.org/projects/nav-pay/#links"
    item2BtnText="Download"
    item2PlatformImg1Src="/images/platforms/mac.png"
    item2PlatformImg2Src="/images/platforms/windows.png"
    item2PlatformImg3Src="/images/platforms/linux.png"
    item2PlatformImg4Src="/images/platforms/android.png"
    item2PlatformImg5Src="/images/platforms/web.png"
    item2PlatformImg6Src="/images/platforms/pwa.png"
    
    item3TitleText="NavPi Stakebox v1.0.9"
    item3WalletImgSrc="/images/logos/wallet-navpi-logo.png"
    item3Text="A low-energy NavCoin staking solution based on the Raspberry-Pi platform."
    item3BtnUrl="https://navhub.org/projects/nav-pi/#links"
    item3BtnText="Download"
    item3PlatformImg1Src="/images/platforms/pi.png">}}

| Attribute | Purpose | Content |
|: - |:- |
| itemXTitleText | Sets the title text for the wallet, where `X` is the number of the wallet you are editing (1, 2, or 3) | Plain text |
| itemXText | Sets the description text for the wallet, where `X` is the number of the wallet you are editing (1, 2, or 3) | Plain text |
| itemXWalletImgSrc | Sets the main image for the wallet, where `X` is the number of the wallet you are editing (1, 2, or 3) | A path e.g. `/images/logos/wallet-navpi-logo.png"` |
| itemXBtnText | Sets the button text for the wallet, where `X` is the number of the wallet you are editing (1, 2, or 3) | Plain text |
| itemXBtnUrl | Sets the button URL for the wallet, where `X` is the number of the wallet you are editing (1, 2, or 3) | If it's an on-site link a simple relative link is fine, e.g. `/buy-nav`. An off-site link will need to be written in full, e.g. `https://www.navhub.org` |
|itemXPlatformImgYSrc| Where `X` is the number of the wallet you are editing (1, 2, or 3) and `Y` is the number of image of the item you are editing. Sets the platform icon for the wallet.| A path e.g. `/images/platforms/android.png"` |
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