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
  });

  this.route('admin', function() {
    this.route('event', function() {
      this.route('new');
      this.route('edit');
      this.route('index');
    });
  });

  this.route('register');
  this.route('login');
});

export default Router;
