import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

let { RSVP } = Ember;

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  currentUser: Ember.inject.service('current-user'),

  beforeModel() {
    this._super(...arguments);

    return new RSVP.Promise((resolve, reject) => {
      this.get('currentUser.user').then((user) => {
        if (Ember.get(user, 'isAdmin')) {
          return resolve();
        }

        // Make the user go to the login screen
        this.transitionTo('login');
        return reject();
      });
    });
  },

  model() {
    // Sets model as the current logged in user
    return this.get('currentUser.user');
  },
});
