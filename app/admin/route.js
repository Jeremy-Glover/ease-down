import Ember from 'ember';
let { RSVP } = Ember;

export default Ember.Route.extend({
  sessionUser: Ember.inject.service('session-user'),

  beforeModel() {
    return new RSVP.Promise((resolve, reject) => {
      this.get('sessionUser.user').then((user) => {
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
    return this.get('sessionUser.user');
  },
});
