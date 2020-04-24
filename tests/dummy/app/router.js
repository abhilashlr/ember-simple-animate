import config from './config/environment';
import AddonDocsRouter, { docsRoute } from 'ember-cli-addon-docs/router';

const Router = AddonDocsRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function() {
  docsRoute(this, function() {
    this.route('usage');

    this.route('components', function() {
      this.route('fade-in');
      this.route('slide-in');
      this.route('slide-out');
      this.route('slide-in-out');
    });
  });

  this.route('not-found', { path: '/*path' });
});

export default Router;
