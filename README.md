mySlider
===

Description
---

**mySlider** is yet another jQuery slideshow plugin, initially designed to slide through absolutely positioned widescreen background images inside a fixed height HTML block, and then readapted to also fit responsive layouts.

Requirements
---

* jQuery 1.8.3 (it most likely works on older versions but I haven't tested it)

Usage
---

### HTML

1. Add `slideshow-container` class to the block you want to add the slideshow to.
2. Append a child with `slideshow` class to the block.
3. Put your slides blocks ( default class is `slide` ) inside the `slideshow` block;

```html
<div class="slideshow-container">
	<div class="slideshow">
		<div class="slide">
			<img src="slide1.jpg" alt="">
		</div>
		<div class="slide">
			<img src="slide2.jpg" alt="">
		</div>
		<div class="slide">
			<img src="slide3.jpg" alt="">
		</div>
	</div>
</div>
```

*Note: you should be able to use any tag instead of `<div>` but it depends on your reset styles*

### Javascript

Just call the plugin on the `slideshow` element.

```javascript
$(".slideshow").mySlider();
```

You can pass the classic JSON to `mySlider()` with some options.
They are quite self explanatory:

```javascript
{
    interval:           5000,
    speed:              1000,
    slideSelector:      '.slide',
    autoStart:          true,
    controls:           true,
    fadeControls:       true,
    pauseOnHover:       false,
    pager:              true
}
```

### Using the slideshow as a background

You can append/prepend any content inside the `slideshow-container` element and absolutely position it to make the `slideshow` block behave as an animated background.

### Examples

   http://jsfiddle.net/bUUmX/ 

Copyright and license
--

Copyright 2013 Stefano Torresi

Released under the MIT license. You can find a copy of this license in LICENSE.txt or at:

   http://opensource.org/licenses/MIT

Credits
--

Most of the code is inspired by [Twitter Bootstrap's Carousel](http://twitter.github.com/bootstrap/javascript.html#carousel)
