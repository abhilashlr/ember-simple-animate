import { Modifier } from 'ember-oo-modifiers';
import { set, setProperties } from '@ember/object';
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

    setProperties(this, {
      animationDuration: (duration && duration.tween) || 400,
      animationTimingFunction: animationTimingFunction || 'ease-in',
      crossFadeOnChange,
      initialAnimationDelay: (duration && duration.enter) || 0
    });

    this._elementClassNameModifier();

    if (!crossFadeOnChange) {
      return;
    }

    let observer = new MutationObserver(() => {
      this._elementClassNameModifier();
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
  },

  _animateListener() {
    let el = this.element;
  
    el.classList.remove(FADE_IN_CSS_CLASS_NAME);

    el.style.animationDelay = '0ms';

    this._removeEventListeners();
  },

  _elementClassNameModifier() {
    this._setStyle();

    let el = this.element;
  
    el.classList.add(FADE_IN_CSS_CLASS_NAME);
  
    let animationEvent = whichAnimationEvent();

    el.addEventListener(animationEvent, this._animateListener.bind(this));
  },

  _setStyle() {
    let el = this.element;

    el.style.animationDelay = `${this.initialAnimationDelay}ms`;
    el.style.animationTimingFunction = this.animationTimingFunction;
    el.style.animationDuration = `${this.animationDuration}ms`;
  },

  _removeEventListeners() {
    let animationEvent = whichAnimationEvent();
    this.element.removeEventListener(animationEvent, this._animateListener, false);
  }
});

export default Modifier.modifier(FadeInModifier);
