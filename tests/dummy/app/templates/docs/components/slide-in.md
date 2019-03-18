# Slide in

Use a `slide-in` effect if you want the DOM element to appear with a nice slide in effect.

## Demo

{{#docs-demo class="docs-p-5" as |demo|}}

{{! BEGIN-SNIPPET slide-in.hbs }}
  <p {{slide-in 
    from="bottom" 
    duration=(hash enter=300)}}>
    Why do we use it?
    <div {{slide-in 
      from="bottom" 
      duration=(hash enter=800)}}>
      Lorem ipsum dolor sit amet, eum an diam recteque necessitatibus, no eum euismod repudiare. Cum ei purto eros paulo, in ignota offendit vel. 
    </div>
  </p>

  <p {{slide-in 
    from="top" 
    duration=(hash enter=1200)}}>
    Lorem ipsum dolor sit amet, eum an diam recteque necessitatibus, no eum euismod repudiare. Cum ei purto eros paulo, in ignota offendit vel. 
  </p>

  <p {{slide-in 
    from="right" 
    duration=(hash enter=1600)}}>
    Lorem ipsum dolor sit amet, eum an diam recteque necessitatibus, no eum euismod repudiare. Cum ei purto eros paulo, in ignota offendit vel. 
  </p>

  <p>
    <h3 {{slide-in duration=(hash enter=300)}}>What is Lorem Ipsum?</h3>
    <div>
      Lorem Ipsum is simply dummy
      <span style="display:inline-block"
        {{slide-in from='right' crossSlideInOnChange=true}}>
        {{dynamicText}}
      </span>
      of the printing and typesetting industry.
    </div>
    <button class="docs-btn" onclick={{action "changeText"}} {{slide-in from="bottom" duration=(hash enter=1200)}}>
      Change value
    </button>
  </p>
{{! END-SNIPPET }}

{{/docs-demo}}

## Code

{{docs-snippet name='slide-in.hbs'}}

## Options

### `from`
* type: `String`
* usage: From which side the slide in transition should begin
* default: `left`

### `duration`
* type: `Object`
* usage: Handles `enter`.
  * `enter` is to delay the initial start of appearance.
  * `tween` is to set the animation duration for the slide in effect
* default: `enter: 0`

### `easing`
* type: `String`
* usage: Any valid CSS animation function. ('ease-in', 'ease-in-out', 'ease-out', 'cubic-bezier')
