import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    submitEvent(formValues) {
      // Do stuff to create event model, set properties, and save
      let event = this.store.createRecord('event', formValues);

      event.save().then(() => {
        this.transitionTo('guide.submit');
      });
    },
  },
});
