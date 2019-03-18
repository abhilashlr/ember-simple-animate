import { Modifier } from 'ember-oo-modifiers';
import { set, setProperties } from '@ember/object';
import deprecation from 'ember-simple-animate/utils/deprecation';
import whichAnimationEvent from 'ember-simple-animate/utils/which-animation-event';

const SLIDE_IN_CSS_CLASS_NAME = 'slide-in';

const SlideInModifier = Modifier.extend({
  didInsertElement([], { // eslint-disable-line
    duration,
    easing: animationTimingFunction,
    from,
    crossSlideInOnChange,
    'animate:from': deprecatedFrom,
    'animate:easing': deprecatedEasing,
    'animate:duration': deprecatedDuration
  }) {
    if (deprecatedFrom) {
      deprecation('animate:from', 'from');

      from = deprecatedFrom;
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
      animationDelay: (duration && duration.enter) || 0,
      animationDuration: (duration && duration.tween) || 400,
      animationName: `slide-${from || 'left'}`,
      animationTimingFunction: animationTimingFunction || 'ease-in'
    });

    this._elementClassNameModifier();

    if (!crossSlideInOnChange) {
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

  _animateListener() {
    let el = this.element;
  
    el.classList.remove(SLIDE_IN_CSS_CLASS_NAME);

    el.style.animationName = 'none';
    el.style.animationDelay = '0ms';

    this._removeEventListeners();
  },

  _elementClassNameModifier() {
    this._setStyle();

    let el = this.element;
  
    el.classList.add(SLIDE_IN_CSS_CLASS_NAME);
  
    let animationEvent = whichAnimationEvent();

    el.addEventListener(animationEvent, this._animateListener.bind(this));
  },

  _setStyle() {
    let el = this.element;

    el.style.animationName = this.animationName;
    el.style.animationDelay = `${this.animationDelay}ms`;
    el.style.animationDuration = `${this.animationDuration}ms`;
    el.style.animationFunction = this.animationTimingFunction;
  },

  _removeEventListeners() {
    let animationEvent = whichAnimationEvent();
    this.element.removeEventListener(animationEvent, this._animateListener, false);
  }
});

export default Modifier.modifier(SlideInModifier);
