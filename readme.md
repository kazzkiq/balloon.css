<img src="logo.png" width="272" style="margin:0 auto" align="center" />

## Simple tooltips made of pure CSS
Balloon.css lets you add tooltips to elements without JavaScript and in just a few lines of CSS.

<img src="sample.gif" width="310" />

## Usage
### Positioning
For positioning, use `data-balloon-pos` attribute with one of the values: `up`, `down`, `left` or `right`:

```html
<button data-balloon="Whats up!" data-balloon-pos="up">Hover me!</button>
<button data-balloon="Whats up!" data-balloon-pos="left">Hover me!</button>
<button data-balloon="Whats up!" data-balloon-pos="right">Hover me!</button>
<button data-balloon="Whats up!" data-balloon-pos="down">Hover me!</button>
```

### Glyphs and Icon Fonts
You can also add any HTML special character to your tooltips, or even use third-party Icon fonts:

```html
<button data-balloon="HTML special characters: &#9787; &#9986; &#9820;" data-balloon-pos="up">Hover me!</button>
<button data-balloon="Emojis: 😀 😬 😁 😂 😃 😄 😅 😆" data-balloon-pos="up">Hover me!</button>
```

Example using [Font Awesome](https://fortawesome.github.io/Font-Awesome/):

```html
<button class="fa" data-balloon="Font Awesome: &#xf030; &#xf133; &#xf1fc; &#xf03e; &#xf1f8;" data-balloon-pos="up">Hover me!</button>
```

### Specify when Tooltip Appears
To have the tooltip appear in situations other than on hover, add the class 'show-balloon'. This will keep the tooltip visible. To toggle it's visibility, toggle the class 'hide-balloon'. Toggling the 'hide-balloon' class will trigger the normal appear/disappear animations.
```html
<button data-balloon="Always here!" data-balloon-pos="up" class="show-balloon">Don't need to hover me!</button>
<button data-balloon="Hidden!" data-balloon-pos="up" class="show-balloon hide-balloon">To show my tooltip, remove the hide-balloon class!</button>
```

### Contributing
Balloon.css is mantained in SASS and LESS. To contribute with bugfixes and enchancements you must follow this steps:

1. Clone repo. E.g. `git clone https://github.com/kazzkiq/balloon.css.git`
2. Run `npm install`
3. Edit SASS/LESS files and run `npm run build-all` to generate the production CSS files. (alternatively you can run `build-sass` or `build-less` for specific compiling).
4. Make sure to test the production files over the website (branch `gh-pages`) before submitting a Pull Request.

Note 1: Remember to update **both SASS and LESS** files after your changes (both must always be in sync).

Note 2: You're not obligated to use the built-in tasks from the above steps. If you're using your own build, just make sure to update production and source files before submitting a PR.


### Credits

Made by Claudio Holanda ([@kazzkiq](https://twitter.com/kazzkiq))
