import { Modifier } from 'ember-oo-modifiers';
import { set, setProperties } from '@ember/object';
import whichAnimationEvent from 'ember-simple-animate/utils/which-animation-event';

const SLIDE_IN_CSS_CLASS_NAME = 'slide-in';

const SlideInOutModifier = Modifier.extend({
  didInsertElement([], { // eslint-disable-line
    duration,
    easing: animationTimingFunction,
    from
  }) {
    setProperties(this, {
      animationDelay: (duration && duration.leave) || 0,
      animationDuration: (duration && duration.tween) || 400,
      animationName: from || 'left',
      animationTimingFunction: animationTimingFunction || 'ease-in'
    });

    _elementClassNameModifier(this, SLIDE_IN_CSS_CLASS_NAME);

    let observer = new MutationObserver(() => {
      _elementClassNameModifier(this, SLIDE_IN_CSS_CLASS_NAME);
    });

    observer.observe(this.element, {
      characterData: true,
      subtree: true
    });

    set(this, 'observer', observer);
  }
});

function _init(scope) {
  let el = scope.element;

  el.style.animationName = `slide-${scope.animationName}`;
  el.style.animationDelay = `${scope.animationDelay}ms`;
  el.style.animationDuration = `${scope.animationDuration}ms`;
  el.style.animationFunction = scope.animationTimingFunction;
}

function _elementClassNameModifier(scope, klass) {
  let el = scope.element;

  _init(scope);

  el.classList.add(klass);

  let animationEvent = whichAnimationEvent();
  el.addEventListener(animationEvent, () => {
    _tearDown(el, klass)
  });
}

function _tearDown(el, klass) {
  el.classList.remove(klass);
  el.style.animationName = 'none';
}

export default Modifier.modifier(SlideInOutModifier);
