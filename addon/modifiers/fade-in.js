import { Modifier } from 'ember-oo-modifiers';
import { set } from '@ember/object';
import deprecation from 'ember-simple-animate/utils/deprecation';
import whichAnimationEvent from 'ember-simple-animate/utils/which-animation-event';

const FADE_IN_CSS_CLASS_NAME = 'fade-in';

const FadeInModifier = Modifier.extend({
  didInsertElement([], { // eslint-disable-line
    'animate:crossFadeOnChange': deprecatedCrossFadeOnChange,
    'animate:easing': deprecatedEasing,
    'animate:duration': deprecatedDuration,
    crossFadeOnChange,
    easing: animationTimingFunction,
    duration
  }) {
    if (deprecatedCrossFadeOnChange) {
      deprecation('animate:crossFadeOnChange', 'crossFadeOnChange');

      crossFadeOnChange = deprecatedCrossFadeOnChange;
    }
    if (deprecatedEasing) {
      deprecation('animate:easing', 'easing');

      animationTimingFunction = deprecatedEasing;
    }
    if (deprecatedDuration) {
      deprecation('animate:duration', 'duration');

      duration = deprecatedDuration;
    }

    let initialAnimationDelay = (duration && duration.enter) || 0;
    let animationDuration = (duration && duration.tween) || 400;

    init(this.element, {
      initialAnimationDelay,
      animationTimingFunction,
      animationDuration
    });

    _elementClassNameModifier(this.element, animationDuration);

    if (!crossFadeOnChange) {
      return;
    }

    let observer = new MutationObserver(() => {
      this.element.style.animationDelay = '0ms';

      _elementClassNameModifier(this.element, animationDuration);
    });

    observer.observe(this.element, {
      characterData: true,
      subtree: true
    });

    set(this, 'observer', observer);
  },

  willDestroyElement() {
    this.element.classList.remove(FADE_IN_CSS_CLASS_NAME);

    this.observer && this.observer.disconnect();
  }
});

function init(el, {
  initialAnimationDelay,
  animationTimingFunction,
  animationDuration
}) {
  el.style.animationDelay = `${initialAnimationDelay}ms`;
  el.style.animationTimingFunction = animationTimingFunction || 'ease-in';
  el.style.animationDuration = `${animationDuration}ms`;
}

function _elementClassNameModifier(el, delay = 0) {
  el.classList.add(FADE_IN_CSS_CLASS_NAME);

  let animationEvent = whichAnimationEvent();
  el.addEventListener(animationEvent, () => {
    el.style.animationDuration = `${delay}ms`;

    el.classList.remove(FADE_IN_CSS_CLASS_NAME);
  });
}

export default Modifier.modifier(FadeInModifier);
