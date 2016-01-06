import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthenticatedRouteMixin, {
  session: Ember.inject.service(),

  actions: {
    loginUser({ email, password }) {
      this.get('session').authenticate('authenticator:application', email, password)
        .catch((reason) => {
          console.log(reason);
        });
    },
  },
});
