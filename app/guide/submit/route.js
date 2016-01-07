import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    submitEvent(formValues) {
      // Do stuff to create event model, set properties, and save
      let newEvent = this.modelFor('event');
      newEvent.setProperties(formValues);
      newEvent.save().then(() => {
        this.transitionTo('guide');
      });
    },
  },
});
