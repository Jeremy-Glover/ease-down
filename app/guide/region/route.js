import Ember from 'ember';

export default Ember.Route.extend({
  model({ region }) {
    return this.store.query('event', { region, active: true });
  },
});
