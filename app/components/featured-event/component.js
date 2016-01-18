import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  model: Ember.computed(function() {
    return this.get('store').query('event', { featured: true });
  }),
});
