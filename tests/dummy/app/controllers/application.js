import Controller from '@ember/controller';
import { set } from '@ember/object';

export default Controller.extend({
  text1: 'This area will be animated',

  actions: {
    changeText() {
      set(this, 'text1', `${Math.ceil(Math.random() * 10000)}`);
    }
  }
})
