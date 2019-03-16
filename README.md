ember-simple-animate
==============================================================================

Animate your DOM with simple CSS based animations.

Installation
------------------------------------------------------------------------------

```
ember install ember-simple-animate
```


Usage
------------------------------------------------------------------------------

#### Fade in
```html
Some text goes here 
<span {{fade-in
  animate:crossFadeOnChange=true
  animate:duration=(hash enter=400 tween=600)
  animate:easing="ease-in"}}>

  {{changingPropertyValue}}

</span>

<button 
  onclick={{action (mut changingPropertyValue) true)}}>
  Change
</button>
```

* `animate:crossFadeOnChange`: `Boolean`, Whenever text change takes place, applies cross fade transition. `Default: false`
* `animate:duration`: `Object`, Takes `enter` and `tween` as 2 properties. Enter is for delaying the start of appearance initially by 'x'ms. Tween is for animation duration during a text content change.
* `animate:easing`: `String`, Takes any valid CSS animation function. ('ease-in', 'ease-in-out', 'ease-out', 'cubic-bezier')

---

NOTE: Since these are CSS based animations, while using this addon, you can define it as common CSS animations for the class applied instead of passing properties every time.

----
Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd ember-simple-animate`
* `npm install`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
