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

### Html

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

### Javascript

Just call the plugin on the `slideshow` element.

```javascript
$(".slideshow").mySlider();
```

You can pass the classic JSON to `mySlider()` with some options.
They are quite self explanatory by looking at the defaults:

```json
{
	interval :          5000,
	speed :             1000,
	slideSelector :     '.slide',
	autoStart :         true,
	controls:           true
}
```

LICENSE
--

The files in this archive are released under the MIT license. You can find a copy of this license in LICENSE.txt.

ACKNOWLEDGEMENTS
--

Most of the code is inspired by [Twitter Bootstrap's Carousel](http://twitter.github.com/bootstrap/javascript.html#carousel)