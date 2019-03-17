import { Modifier } from 'ember-oo-modifiers';
import deprecation from 'ember-simple-animate/utils/deprecation';

const SLIDE_IN_CSS_CLASS_NAME = 'slide-in';

const SlideInModifier = Modifier.extend({
  didInsertElement([], { // eslint-disable-line
    duration,
    easing: animationTimingFunction,
    from,
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

    let { element } = this;
    let animationDelay = (duration && duration.enter) || 0;
    let animationDuration = (duration && duration.tween) || 400;
    let animationName = from || 'left';

    element.classList.add(SLIDE_IN_CSS_CLASS_NAME);

    element.style.animationName = `slide-${animationName}`;
    element.style.animationDelay = `${animationDelay}ms`;
    element.style.animationDuration = `${animationDuration}ms`;
    element.style.animationFunction = animationTimingFunction;
  }
});

export default Modifier.modifier(SlideInModifier);
