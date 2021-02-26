# Shortcode Documentation

## Accordion

An `accordion` looks like this:

{{< accordion
  titleText="Accordion"
  subtitleText="Navcoin is an open source protocol and Navcoin wallets"
  itemOneTitle="Step 1 - Develop your ideas."
  itemOneText="Think of things that could inspire the Navcoin network. You can go it alone or discuss it with the community in <a href=\"https://reddit.com/r/navcoin\">Reddit</a> or <a href=\"https://discord.gg/dRyhDjm\">Discord</a>."

  itemTwoTitle="Step 2 - Create a project page."
  itemTwoText="It can be anywhere, but to give your project maximum visibility in the community consider using the <a href=\"\">Collab website</a>.<br>Work out the details of the project. You need to communicate why the Navcoin community should fund it, if you need to tap into other people’s skills, and how long it will take from start to finish. Your proposal might suiting being funded in stages, especially if it’s long term devising a roadmap will help."

  itemThreeTitle="Step 3 - Create your team."
  itemThreeText="Do you need other skills to bring your project to life? Use Navcoin’s social channels to find community members who can help you complete your project."
  
  itemFourTitle="Step 4 - Submit your proposal."
  itemFourText="Complete the proposal form, including a link to your project page.<br>Pay the proposal fee. The projects that pay the highest fees to the network will be accepted first. A fee is necessary to stop people spamming the Community Fund with weak proposals."
  
  itemFiveTitle="Step 5 - Promote your project to stakers."
  itemFiveText="Once you’ve submitted your proposal, promote your project using the community channels. Communicate why you think it’s worth funding what benefits will it bring? Why should the community support it?"
  
  itemSixTitle="Step 6 - Voting begins."
  itemSixText="To be eligible to vote you must be staking Navcoin.<br>Each voting period lasts 20,000 blocks.<br>The minimum number of stakers voting yes/no needs to be 50%<br>Of that 50%, a proposal must receive 75% ‘yes’ votes to be accepted<br>67.5% ‘no’ votes will result in it being rejected."
  
  itemSevenTitle="Step 7 - Begin the work."
  itemSevenText="Start work and do your best to stick to your timeline.<br>Keep the community updated with how things are progressing in your project. It’s OK to ask for help along the way."
  
  itemEightTitle="Step 8 - Apply for payment."
  itemEightText="Once your project is complete you can apply for payment from the Community Fund. If there are clear milestones in your proposal you can apply to receive payments at scheduled points in the timeline.<br>Payment is subject to a second consensus vote among Navcoin stakers. There must be a 50% minimum participation, with 50% ‘yes’ vote to be paid and 50% ‘no’ for payment to be rejected."
>}}

There are eight sections you can fill, they're optional so if you leave them out they won't render anything.

| Attribute | Purpose | Content |
|--- |:---: | ---:|
| titleText | Sets the title text. | Plain text |
| subtitleText | Sets the subtitle text. | Plain text |
| itemOneTitle | Sets the title of the first item. | Plain text |
| itemOneText  | Sets the paragraph text of the first item. | Plain text |
| itemTwoTitle | Sets the title of the second item. | Plain text |
| itemTwoText  | Sets the paragraph text of the second item. | Plain text |
| itemThreeTitle | Sets the title of the third item. | Plain text |
| itemThreeText  | Sets the paragraph text of the third item. | Plain text |
| itemFourTitle | Sets the title of the fourth item. | Plain text |
| itemFourText  | Sets the paragraph text of the fourth item. | Plain text |
| itemFiveTitle | Sets the title of the firth item. | Plain text |
| itemFiveText  | Sets the paragraph text of the firth item. | Plain text |
| itemSixTitle | Sets the title of the sixth item. | Plain text |
| itemSixText  | Sets the paragraph text of the sixth item. | Plain text |
| itemSevenTitle | Sets the title of the seventh item. | Plain text |
| itemSevenText  | Sets the paragraph text of the seventh item. | Plain text |
| itemEightTitle | Sets the title of the eighth item. | Plain text |
| itemEightText  | Sets the paragraph text of the eighth item. | Plain text |




## zig_section

A `zig_section` looks like this:

{{< zig_section
  titleText="For your store"
  imgSrc="/images/icons/house.svg"
  buttonText="See who's involved"
  buttonImgSrc="/images/icons/rightward-arrow.svg"
  bgPurple="true"
>}}
NavPay is a light wallet that works with your smartphone or desktop computer. Customers just scan your QR code and their funds transfer to your wallet almost instantly. Check out this demo that shows how easy it is
{{< /zig_section>}}
{{< zig_section
titleText="For your store"
imgSrc="/images/icons/house.svg"
buttonText="See who's involved"
buttonImgSrc="/images/icons/rightward-arrow.svg"
reversed="true"
>}}
NavPay is a light wallet that works with your smartphone or desktop computer. Customers just scan your QR code and their funds transfer to your wallet almost instantly. Check out this demo that shows how easy it is
{{< /zig_section>}}

The button attributes are optional and excluding them will not render a button.
If you set the `zig_section` to use a _purple background_ the style (font color, etc) of the rest of it will change too.
It's important that you have the `{{< /zig_section>}}` part at the end so you can insert paragraph text into the zig_section.

| Attribute | Purpose | Content |
|--- |:---: | ---:|
| titleText | Sets the title text. | Plain text |
| imgSrc | Sets the image for the action | A path e.g. `/images/logos/wallet-navpi-logo.png"` |
| buttonUrl | Sets the button URL | If it's an on-site link a simple relative link is fine, e.g. `/buy-nav`. An off-site link will need to be written in full, e.g. `https://www.navhub.org` |
| buttonText | Sets the button text  | Plain text |
| buttonImgSrc | Sets the image on the button. | A path. e.g. `/images/icons/rightward-arrow.svg` |
| bg-purple | Sets the background for the container to purple and the title/subtitle font colour to white. This is optional so only include this attribute if you want a purple bg. This will also alter the style of the `social` shortcodes inside of it.| `bg-purple="true"` |
| reversed | Flips the layout so the image is on the irght and the text on the left. This is optional so only.| `reversed="true"` |


## step_container_section

A `step_container_section` looks like this:

```
{{< step_container_section 
    titleText="Steps section"
    subtitleText="These are some of the kind sof steps"
>}}
  {{< step 
      titleText="1. Download your wallet"
      imgSrc="/images/logos/wallet-navpi-logo.png"
      text="This will allow you to send/receive transactions, take ownership of your private keys, and if you use the Navcoin core wallet you can contribute to transaction validation on the network."
      buttonText="Click me"
      buttonUrl="www.navcoin.org"
      buttonImgSrc="/images/icons/rightward-arrow.svg"
  >}}
{{< /step_container_section >}}
```

It is a container for the `social` shortcode. You can throw as many into it as you want.
The button attributes are optional and excluding them will not render a button.


| Attribute | Purpose | Content |
|--- |:---: | ---:|
| titleText | Sets the title text for the container. This is optional so only include this attribute if you're using it or you'll get weird spacing. | Plain text |
| subtitleText | Sets the subtitle text for the container. This is optional so only include this attribute if you're using it or you'll get weird spacing | Plain text |
| buttonUrl | Sets the button URL | If it's an on-site link a simple relative link is fine, e.g. `/buy-nav`. An off-site link will need to be written in full, e.g. `https://www.navhub.org` |
| buttonText | Sets the button text  | Plain text |
| buttonImgSrc | Sets the image on the button. | A path. e.g. `/images/icons/rightward-arrow.svg` |
| bg-purple | Sets the background for the container to purple and the title/subtitle font colour to white. This is optional so only include this attribute if you want a purple bg. This will also alter the style of the `social` shortcodes inside of it.| `bg-purple="true"` |


## step shortcode

The `step` shortcode looks like this:

```
{{< step 
    titleText="1. Download your wallet"
    imgSrc="/images/logos/wallet-navpi-logo.png"
    text="This will allow you to send/receive transactions, take ownership of your private keys, and if you use the Navcoin core wallet you can contribute to transaction validation on the network."
    buttonText="Click me"
    buttonUrl="www.navcoin.org"
    buttonImgSrc="/images/icons/rightward-arrow.svg"
>}}
```

It is intended to be placed inside a `step_container_section` and no where else.  
The button attributes are optional and excluding them will not render a button.


| Attribute | Purpose | Content |
|--- |:---: | ---:|
| imgSrc | Sets the image for the action | A path e.g. `/images/logos/wallet-navpi-logo.png"` |
| titleText | Sets the title text for the action | Plain text |
| text | Sets the description text for the feature. | Plain text |
| buttonText | Sets the button text  | Plain text |
| buttonUrl | Sets the button URL | If it's an on-site link a simple relative link is fine, e.g. `/buy-nav`. An off-site link will need to be written in full, e.g. `https://www.navhub.org` |
| buttonImgSrc | Sets the image on the button. | A path. e.g. `/images/icons/rightward-arrow.svg` |


## social_grid_section

A `social_grid_section` looks like this:

```
{{< social_grid_section 
    titleText="Social Channels"
    subtitleText="Dark mode!"
    bgPurple="true"
>}}
  {{< social                 
      titleText="Discord"
      imgSrc="/images/icons/line-discord.png"
      linkUrl="www.navcoin.org"
  >}}
{{< /social_grid_section >}}
```

It is a container for the `social` shortcode. You can throw as many into it as you want.

You can set the background colour to be purple using the `bg-purple` attribute.

| Attribute | Purpose | Content |
|--- |:---: | ---:|
| titleText | Sets the title text for the container. This is optional so only include this attribute if you're using it or you'll get weird spacing. | Plain text |
| subtitleText | Sets the subtitle text for the container. This is optional so only include this attribute if you're using it or you'll get weird spacing | Plain text |
| bg-purple | Sets the background for the container to purple and the title/subtitle font colour to white. This is optional so only include this attribute if you want a purple bg. This will also alter the style of the `social` shortcodes inside of it.| `bg-purple="true"` |

## social shortcode

The `social` shortcode looks like this:

```
{{< social                 
    titleText="Discord"
    imgSrc="/images/icons/line-discord.png"
    linkUrl="www.navcoin.org"
>}}
```

It is intended to be placed inside a `social_container_section` and no where else.  
You can add a button using the button attributes on the `item_container_section`.
If you set the `social_container_section` to use a _purple background_ the style (font color, etc) of the `social`'s will change too.


| Attribute | Purpose | Content |
|--- |:---: | ---:|
| linkUrl | Sets the link URL | If it's an on-site link a simple relative link is fine, e.g. `/buy-nav`. An off-site link will need to be written in full, e.g. `https://www.navhub.org` |
| imgSrc | Sets the image for the action | A path e.g. `/images/logos/wallet-navpi-logo.png"` |
| titleText | Sets the title text for the action | Plain text |


## contrib-list shortcode

The `contrib_list` shortcode looks like this:

```
{{< contrib_list
    title="Navcoin Protocol Contributors"
    subtitle="We would like to thank our contributors who have made this protocol awesome!"
    buttonUrl="https://github.com/NAVCoin/navcoin-core/graphs/contributors"
    buttonTxt="View on Github"
    buttonImgSrc="/images/icons/rightward-arrow.svg"
>}}
```

| Attribute | Purpose | Content |
|--- |:---: | ---:|
| titleText | Sets the title text | Plain text |
| subtitleText | Sets the subtitle text. | Plain text |
| buttonText | Sets the button text  | Plain text |
| buttonUrl | Sets the button URL | If it's an on-site link a simple relative link is fine, e.g. `/buy-nav`. An off-site link will need to be written in full, e.g. `https://www.navhub.org` |
| buttonImgSrc | Sets the image on the button. | A path. e.g. `/images/icons/rightward-arrow.svg` |


## social_grid_section

A `social_grid_section` looks like this:

```
{{< social_grid_section 
    titleText="Social Channels"
    subtitleText="Dark mode!"
    bgPurple="true"
>}}
  {{< social                 
      titleText="Discord"
      imgSrc="/images/icons/line-discord.png"
      linkUrl="www.navcoin.org"
  >}}
{{< /social_grid_section >}}
```

It is a container for the `social` shortcode. You can throw as many into it as you want.

You can set the background colour to be purple using the `bg-purple` attribute.

| Attribute | Purpose | Content |
|--- |:---: | ---:|
| titleText | Sets the title text for the container. This is optional so only include this attribute if you're using it or you'll get weird spacing. | Plain text |
| subtitleText | Sets the subtitle text for the container. This is optional so only include this attribute if you're using it or you'll get weird spacing | Plain text |
| bg-purple | Sets the background for the container to purple and the title/subtitle font colour to white. This is optional so only include this attribute if you want a purple bg. This will also alter the style of the `social` shortcodes inside of it.| `bg-purple="true"` |

## social shortcode

The `social` shortcode looks like this:

```
{{< social                 
    titleText="Discord"
    imgSrc="/images/icons/line-discord.png"
    linkUrl="www.navcoin.org"
>}}
```

It is intended to be placed inside a `social_container_section` and no where else.  
You can add a button using the button attributes on the `item_container_section`.
If you set the `social_container_section` to use a _purple background_ the style (font color, etc) of the `social`'s will change too.


| Attribute | Purpose | Content |
|--- |:---: | ---:|
| linkUrl | Sets the link URL | If it's an on-site link a simple relative link is fine, e.g. `/buy-nav`. An off-site link will need to be written in full, e.g. `https://www.navhub.org` |
| imgSrc | Sets the image for the action | A path e.g. `/images/logos/wallet-navpi-logo.png"` |
| titleText | Sets the title text for the action | Plain text |

## item_container_section

A `item_container_section` looks like this:

```
{{< item_container_section 
    titleText="Long text no buttons"
    subtitleText="Navcoin is an open source protocol and Navcoin Wallets are cool"
    
>}}
    {{< wallet 
        titleText="Navcoin Core Wallet v4.3.0"
        walletImgSrc="/images/logos/wallet-navcoincore-logo.png"
        text="These wallets run the blockchain & participate in validating transactions."
        buttonImgSrc="/images/icons/rightward-arrow.svg"
        buttonUrl="https://navcoin.org/en/navcoin-core/#links"
        buttonText="Download"
        platformImg1Src="/images/platforms/mac.png"
        platformImg2Src="/images/platforms/windows.png"
        platformImg3Src="/images/platforms/linux.png"
    >}}
{{< /item_container_section >}}
```

It is a container for the both the `wallet`, `feature`, `long-text`, `merchant` and `exchange` shortcodes. You can throw as many shortcodes into it as you want but **only use sortcodes of one type.**, i.e. don't mix `wallet` and `exchange` shortcodes .

You can set the background colour to be purple using the `bg-purple` attribute.

| Attribute | Purpose | Content |
|--- |:---: | ---:|
| titleText | Sets the title text for the container. This is optional so only include this attribute if you're using it or you'll get weird spacing. | Plain text |
| subtitleText | Sets the subtitle text for the container. This is optional so only include this attribute if you're using it or you'll get weird spacing | Plain text |
| bg-purple | Sets the background for the container to purple and the title/subtitle font colour to white. This is optional so only include this attribute if you want a purple bg. This may change the styling of the components inside. | `bg-purple="true"` |
| buttonText | Sets the button text | Plain text |
| buttonUrl | Sets the button URL | If it's an on-site link a simple relative link is fine, e.g. `/buy-nav`. An off-site link will need to be written in full, e.g. `https://www.navhub.org` |
| buttonImgSrc | Sets the image on the button. | A path. e.g. `/images/icons/rightward-arrow.svg` |



## action shortcode

The `action` shortcode looks like this:

```
{{< action                 
    titleText="Fast payment"
    imgSrc="/images/logos/wallet-navpi-logo.png"
    subtext="Transactions in as little as five seconds. No chargebacks or failed transactions."
    linkText="Click me"
    linkUrl="www.navcoin.org"
    linkImgSrc="/images/icons/rightward-arrow.svg"
>}}
```


It is intended to be placed inside a `item_container_section` and no where else.  
You can add a button using the button attributes on the `item_container_section`.
If you set the `item_container_section` to use a _purple background_ the style (font color, etc) of the `action`'s will change too.


| Attribute | Purpose | Content |
|--- |:---: | ---:|
| imgSrc | Sets the image for the action | A path e.g. `/images/logos/wallet-navpi-logo.png"` |
| titleText | Sets the title text for the action | Plain text |
| subtext | Sets the description text for the action. | Plain text |
| linkText | Sets the link text | Plain text |
| linkUrl | Sets the link URL | If it's an on-site link a simple relative link is fine, e.g. `/buy-nav`. An off-site link will need to be written in full, e.g. `https://www.navhub.org` |
| linkImgSrc | Sets the image on the link. | A path. e.g. `/images/icons/rightward-arrow.svg` |

## feature shortcode

The `feature` shortcode looks like this:

```
{{< feature                 
    titleText="Fast payment"
    imgSrc="/images/logos/wallet-navpi-logo.png"
    text="Transactions in as little as five seconds. No chargebacks or failed transactions."
>}}
```
It is intended to be placed inside a `item_container_section` and no where else.

| Attribute | Purpose | Content |
|--- |:---: | ---:|
| imgSrc | Sets the image for the feature | A path e.g. `/images/logos/wallet-navpi-logo.png"` |
| titleText | Sets the title text for the feature | Plain text |
| text | Sets the description text for the feature. | Plain text |

## long_text shortcode

The `long_text` shortcode looks like this:

```
{< long_text 
    titleText="Turtle Store"
    imgSrc="/images/logos/wallet-navpi-logo.png"
    text="Bitcoin when used on a mobile device allows you to pay with a simple two-step scan-and-pay. There's no need to sign up, swipe your card, type a PIN, or sign anything. All you need to receive Bitcoin payments is to display the QR code in your Bitcoin wallet app and let the other party scan your mobile, or touch the two phones together (using NFC radio technology)."
    buttonUrl="https://navcoin.org/en/navcoin-core/#links"
    buttonText="Download"
    buttonImgSrc="/images/icons/rightward-arrow.svg"
>}}
```
It is intended to be placed inside a `item_container_section` and no where else.

NOTE: You can remove all of the button attributes (`buttonUrl`,`buttonImgSrc`, `buttonText`) and no button will show.

| Attribute | Purpose | Content |
|--- |:---: | ---:|
| imgSrc | Sets the image for the long text | A path e.g. `/images/logos/wallet-navpi-logo.png"` |
| titleText | Sets the title text for the long text | Plain text |
| text | Sets the description text for the long text. | Plain text |
| buttonUrl | Sets the button URL for the wallet | If it's an on-site link a simple relative link is fine, e.g. `/buy-nav`. An off-site link will need to be written in full, e.g. `https://www.navhub.org` |
| buttonText | Sets the button text for the wallet | Plain text |
| buttonImgSrc | Sets the image on the button. | A path. e.g. `/images/icons/rightward-arrow.svg` |


## merchant shortcode

The `merchant` shortcode looks like this:

```
{{< merchant 
    titleText="Crypto Garden"
    imgSrc="/images/logos/wallet-navcoincore-logo.png"
    text="Spend your Navcoin on exotic potplants and shrubs"
    linkUrl="https://navcoin.org/en/navcoin-core/#links"
>}}
```
It is intended to be placed inside a `item_container_section` and no where else.


| Attribute | Purpose | Content |
|--- |:---: | ---:|
| linkUrl | Sets the URL for the merchant | If it's an on-site link a simple relative link is fine, e.g. `/buy-nav`. An off-site link will need to be written in full, e.g. `https://www.navhub.org` |
| imgSrc | Sets the image for the merchant | A path e.g. `/images/logos/wallet-navpi-logo.png"` |
| titleText | Sets the title text for the merchant | Plain text |
| text | Sets the description text for the merchant. | Plain text |


## exchange shortcode

The `exchange` shortcode looks like this:

```
{{< exchange 
    titleText="Bittrex"
    imgSrc="/images/logos/wallet-navcoincore-logo.png"
    text="BTC/NAV, USD/NAV, ETH/NAV"
    linkUrl="https://navcoin.org/en/navcoin-core/#links"
>}}
```
It is intended to be placed inside a `item_container_section` and no where else.


| Attribute | Purpose | Content |
|--- |:---: | ---:|
| linkUrl | Sets the URL for the exchange | If it's an on-site link a simple relative link is fine, e.g. `/buy-nav`. An off-site link will need to be written in full, e.g. `https://www.navhub.org` |
| imgSrc | Sets the image for the exchange | A path e.g. `/images/logos/wallet-navpi-logo.png"` |
| titleText | Sets the title text for the exchange | Plain text |
| text | Sets the description text for the exchange, keep this short. | Plain text |


## wallet shortcode

The `wallet` shortcode looks like this:

```
{{< wallet 
    titleText="Navcoin Core Wallet v4.3.0"
    walletImgSrc="/images/logos/wallet-navcoincore-logo.png"
    text="These wallets run the blockchain & participate in validating transactions."
    buttonUrl="https://navcoin.org/en/navcoin-core/#links"
    buttonText="Download"
    platformImg1Src="/images/platforms/mac.png"
    platformImg2Src="/images/platforms/windows.png"
    platformImg3Src="/images/platforms/linux.png"
    buttonImgSrc="/images/icons/rightward-arrow.svg"
>}}
```
It is intended to be placed inside a `item_container_shortcode` and no where else.
NOTE: You can remove all of the button attributes (`buttonUrl`,`buttonImgSrc`, `buttonText`) and no button will show.


| Attribute | Purpose | Content |
|--- |:---: | ---:|
| titleText | Sets the title text for the wallet | Plain text |
| walletImgSrc | Sets the main image for the wallet | A path e.g. `/images/logos/wallet-navpi-logo.png"` |
|platformImg_Src | Where `_` is the number of the image you are editing. Sets the platform icon for the wallet. You can add up to 6 images. so `platformImg1Src`, `platformImg2Src`, etc (up to `platformImg6Src`) | A path e.g. `/images/platforms/android.png"` |
| text | Sets the description text for the wallet | Plain text |
| buttonUrl | Sets the button URL for the wallet | If it's an on-site link a simple relative link is fine, e.g. `/buy-nav`. An off-site link will need to be written in full, e.g. `https://www.navhub.org` |
| buttonText | Sets the button text for the wallet | Plain text |
| buttonImgSrc | Sets the image on the button. | A path. e.g. `/images/icons/rightward-arrow.svg` |


## hero_section

A `hero_section` looks like this:

```
{{< hero_section
titleText="Standard hero_section"
paragraphText="Navcoin is a Navcoin is a Navcoin is a Navcoin is a Navcoin is a Navcoin is a Navcoin is a Navcoin is a Navcoin is a Navcoin is a Navcoin is a Navcoin is a Navcoin is a Navcoin is a Navcoin is a Navcoin is a Navcoin is a Navcoin is a."
imgSrc="/images/hero-icon.svg"
>}}
```

| Attribute | Purpose | Content |
|--- |:---: | ---:|
| imgSrc | Sets the image  | A path e.g. `/images/logos/wallet-navpi-logo.png"` |
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
Attributes can be left out if you don't need them. The button won't show if you don't include the button attributes.
The innerText won't show if you dont include it either.

| Attribute | Purpose | Content |
|--- |:---: | ---:|
| lightStyle | Sets the `light-style` class which changes the background and font colours to the light theme. | If you want the light theme use `true`.  If anything else is used the style won't work |
| titleText | Sets the title text | Plain text |
| innerText | Sets the paragraph text | Plain text |
| buttonText | Sets the button text | Plain text |
| buttonLink | The url for where the button links | If it's an on-site link a simple relative link is fine, e.g. `/buy-nav`. An off-site link will need to be written in full, e.g. `https://www.navhub.org` |
| buttonImgSrc | Sets the image on the button. | A path. e.g. `/images/icons/rightward-arrow.svg` |