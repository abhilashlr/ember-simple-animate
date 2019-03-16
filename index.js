'use strict';

module.exports = {
  name: require('./package').name,

  included: function(app) {
    app.import('addon/styles/addon.css');
  }
};
