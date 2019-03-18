import Controller from '@ember/controller';
import { set } from '@ember/object';

export default Controller.extend({
  dynamicText: 'This area will be animated',
  randomNumber: 1,

  init() {
    this._super(...arguments);

    setInterval(() => {
      set(this, 'randomNumber', this.randomNumber + 1);
    }, 1000);
  },

  actions: {
    changeText() {
      set(this, 'dynamicText', `${Math.ceil(Math.random() * 10000)}`);
    }
  }
})
