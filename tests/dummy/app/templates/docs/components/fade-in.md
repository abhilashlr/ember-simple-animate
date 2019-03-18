# Fade in

Use a `fade-in` effect if you want the DOM element to appear with a nice fade in effect.

## Demo

{{#docs-demo class="docs-p-5" as |demo|}}

{{! BEGIN-SNIPPET fade-in.hbs }}
  <span {{fade-in}}>
    Random number: 
  </span>
  <span
    {{fade-in 
      crossFadeOnChange=true
      duration=(hash enter=400 tween=600)
      easing="ease-in"}}>
    {{dynamicText}}
  </span>
  <div>
    <button class="docs-btn" onclick={{action "changeText"}}>
      Change value
    </button>
  </div>
{{! END-SNIPPET }}

{{/docs-demo}}

## Code

{{docs-snippet name='fade-in.hbs'}}

## Demo 2

{{#docs-demo class="docs-p-5" as |demo|}}

{{! BEGIN-SNIPPET fade-in-2.hbs }}
  <span {{fade-in}}>
    Random number: 
  </span>
  <span
    {{fade-in 
      crossFadeOnChange=true
      duration=(hash tween=800)
      easing="ease-in"}}>
    {{randomNumber}}
  </span>
{{! END-SNIPPET }}

{{/docs-demo}}

## Code

{{docs-snippet name='fade-in-2.hbs'}}
## Options

### `crossFadeOnChange`
* type: `Boolean`
* usage: whenever textContent change happens, enabling this property applies cross fade transition.
* default: `false`

### `duration`
* type: `Object`
* usage: Handles `enter` and `tween` as 2 properties.
  * `enter` is to delay the initial start of appearance.
  * `tween` is to set the animation duration during a text content change.
* default: `enter: 0, tween: 400`

### `easing`
* type: `String`
* usage: Any valid CSS animation function. ('ease-in', 'ease-in-out', 'ease-out', 'cubic-bezier')
