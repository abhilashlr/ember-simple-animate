import Controller from '@ember/controller';
import { set } from '@ember/object';

export default Controller.extend({
  dynamicText: 'This area will be animated',

  actions: {
    changeText() {
      set(this, 'dynamicText', `${Math.ceil(Math.random() * 10000)}`);
    }
  }
})
