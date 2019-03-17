# Slide out

Use a `slide-out` effect if you want the DOM element to exit with a nice slide out effect.

## Demo

{{#docs-demo class="docs-p-5" as |demo|}}

{{! BEGIN-SNIPPET slide-out.hbs }}
  <p {{slide-out start=canSlide}}>
    Slides out this element to left
  </p>
  <button class="docs-btn" onclick={{action (mut canSlide) true}}>
    Slide out
  </button>
{{! END-SNIPPET }}

{{/docs-demo}}

## Code

{{docs-snippet name='slide-out.hbs'}}

## Options

### `start`
* type: `Boolean`
* usage: Flag to decide if the animation should start immediately
* default: `false`

### `to`
* type: `String`
* usage: To which side the slide out transition should exit to
* default: `left`

### `duration`
* type: `Object`
* usage: Handles `leave`.
  * `leave` is to delay the initial start of animation.
  * `tween` is to set the animation duration for the slide out effect
* default: `leave: 0`

### `easing`
* type: `String`
* usage: Any valid CSS animation function. ('ease-in', 'ease-in-out', 'ease-out', 'cubic-bezier')
