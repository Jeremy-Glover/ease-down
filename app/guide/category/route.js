import Ember from 'ember';

export default Ember.Route.extend({
  model({ category }) {
    return this.store.query('event', { category, active: true });
  },
});
