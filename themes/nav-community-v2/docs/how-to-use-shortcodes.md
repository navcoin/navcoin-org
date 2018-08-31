# Shortcode Documentation

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