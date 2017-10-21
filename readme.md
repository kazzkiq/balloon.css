[![npm version](https://badge.fury.io/js/balloon-css.svg)](https://www.npmjs.com/package/balloon-css)

<img src="logo.png" width="272" style="margin:0 auto" align="center" />

## Simple tooltips made of pure CSS
Balloon.css lets you add tooltips to elements without JavaScript and in just a few lines of CSS.

<img src="sample.gif" width="310" />

## Demo & Playground

You can play with Balloon.css here: https://jsfiddle.net/9fboea3u/

You also can check more examples at the website: http://kazzkiq.github.io/balloon.css/

## Usage

### Installation

**Using npm:**
```
npm install balloon-css
```

**CDN version (provided by [cdnjs](https://github.com/cdnjs/cdnjs) and [jsDelivr](https://www.jsdelivr.com/package/npm/balloon-css)):**
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/balloon-css/0.5.0/balloon.min.css">
<!-- or -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/balloon-css@0.5.0/balloon.min.css">
```

**Manually:**
Simply download `balloon.min.css` from this repo and add it to your HTML. e.g.

```html
<link rel="stylesheet" href="path/to/balloon.min.css">
```

### Positioning
For positioning, use `data-balloon-pos` attribute with one of the values: `up`, `down`, `left`, `right`, `up-left`, `up-right`, `down-left` or `down-right`:

```html
<button data-balloon="Whats up!" data-balloon-pos="up">Hover me!</button>
<button data-balloon="Whats up!" data-balloon-pos="left">Hover me!</button>
<button data-balloon="Whats up!" data-balloon-pos="right">Hover me!</button>
<button data-balloon="Whats up!" data-balloon-pos="down">Hover me!</button>

<button data-balloon="Whats up!" data-balloon-pos="up-left">Hover me!</button>
<button data-balloon="Whats up!" data-balloon-pos="up-right">Hover me!</button>
<button data-balloon="Whats up!" data-balloon-pos="down-left">Hover me!</button>
<button data-balloon="Whats up!" data-balloon-pos="down-right">Hover me!</button>
```

### Showing tooltips programatically
If you want to show tooltips even when user interaction isn't happening, you can simply use the `data-balloon-visible` attribute:

```html
<button data-balloon="Whats up!" data-balloon-pos="up" id="show-tip">Hover me!</button>
<script>
  const btn = document.getElementById('show-tip')
  btn.setAttribute('data-balloon-visible', '')
</script>
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
