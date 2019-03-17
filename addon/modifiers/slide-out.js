import { Modifier } from 'ember-oo-modifiers';

const SLIDE_IN_CSS_CLASS_NAME = 'slide-out';

const SlideInModifier = Modifier.extend({
  didUpdateArguments([], { // eslint-disable-line
    duration,
    easing: animationTimingFunction,
    start,
    to
  }) {
    if (!start) {
      return;
    }

    let { element } = this;
    let animationDelay = (duration && duration.leave) || 0;
    let animationDuration = (duration && duration.tween) || 400;
    let animationName = to || 'left';

    element.classList.add(SLIDE_IN_CSS_CLASS_NAME);

    element.style.animationName = `slide-${animationName}`;
    element.style.animationDelay = `${animationDelay}ms`;
    element.style.animationDuration = `${animationDuration}ms`;
    element.style.animationFunction = animationTimingFunction;
  }
});

export default Modifier.modifier(SlideInModifier);
