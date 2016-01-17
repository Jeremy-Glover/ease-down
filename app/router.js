import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function() {
  this.route('guide', { path: '/' }, function() {
    this.route('submit');
    this.route('see-all');
    this.route('regions');
    this.route('region', { path: '/:region' });
    this.route('category', { path: '/:category' });
  });

  this.route('admin', function() {
    this.route('event', function() {
      this.route('new');
      this.route('edit', { path: '/:event_id' });
    });
  });

  this.route('register');
  this.route('login');
});

export default Router;
