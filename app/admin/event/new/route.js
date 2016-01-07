import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    addEvent(formValues) {
      let event = this.store.createRecord('event', formValues);

      event.save().then(() => {
        this.transitionTo('admin.event.detail');
      });
    },
  },
});
