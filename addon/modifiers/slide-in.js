import { Modifier } from 'ember-oo-modifiers';

const SLIDE_IN_CSS_CLASS_NAME = 'slide-in';

const SlideInModifier = Modifier.extend({
  didInsertElement([], { // eslint-disable-line
    'animate:duration': duration,
    'animate:easing': animationTimingFunction,
    'animate:from': from
  }) {
    let { element } = this;
    let animationDelay = (duration && duration.enter) || 0;
    let animationDuration = (duration && duration.tween) || 400;
    let animationName = from || 'left';

    element.classList.add(SLIDE_IN_CSS_CLASS_NAME);

    element.style.animationName = `slide-in-${animationName}`;
    element.style.animationDelay = `${animationDelay}ms`;
    element.style.animationDuration = `${animationDuration}ms`;
    element.style.animationFunction = animationTimingFunction;
  }
});

export default Modifier.modifier(SlideInModifier);
