mySlider
===

Description
---

**mySlider** is yet another jQuery slideshow plugin, designed to slide through absolutely positioned widescreen background images inside a fixed height HTML block.

Requirements
---

* jQuery 1.8.3 (it most likely works on older versions but I haven't tested it)

Usage
---

### HTML

1. Add `slideshow-container` class to the block you want to add the background to.
2. Append a child with `slideshow` class to the block.
3. Put your slides blocks ( default class is `slide` ) inside the `slideshow` block;

```html
<div class="slideshow-container">
	
	<!-- your content here -->

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

Note: you can use pretty much any tag instead of `<div>`

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

### CSS

To prevent FOUC and grant graceful degradation just set your image size using these three rules somewhere in your css. Here is an example for 2000x670 images:

```css
/* WIDTH */
.slideshow .slide img {
    width: 2000px;
    margin-left: -1000px;  /* minus half width , needed to center the image */
}

/* HEIGHT */
.slideshow-container, 
.slideshow,
.slideshow .slide,
.slideshow .slide img {
    height: 670px;
}
```

### Examples

   http://www.fudcatania.it

Copyright and license
--

Copyright 2013 Stefano Torresi

Released under the MIT license. You can find a copy of this license in LICENSE.txt or at:

   http://opensource.org/licenses/MIT

Credits
--

Most of the code is inspired by [Twitter Bootstrap's Carousel](http://twitter.github.com/bootstrap/javascript.html#carousel)
