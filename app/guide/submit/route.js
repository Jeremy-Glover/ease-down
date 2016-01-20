import sameEndDate from 'final-project/utils/same-end-date';
import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    submitEvent(formValues) {
      formValues = sameEndDate(formValues);

      // Do stuff to create event model, set properties, and save
      let event = this.store.createRecord('event', formValues);

      event.save().then(() => {
        this.transitionTo('guide');
      });
    },
  },
});
