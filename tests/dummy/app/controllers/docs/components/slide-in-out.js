import Controller from '@ember/controller';
import { set } from '@ember/object';

export default Controller.extend({
  dynamicText: 'This area will be animated',

  actions: {
    changeText() {
      set(this, 'dynamicText', `The text has changed with a number: ${Math.ceil(Math.random() * 10000)}`);
    }
  }
})
