import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    saveEvent(formData) {
      let event = this.modelFor('event');
      event.setProperties(formData);
      event.save().then(() => {
        this.transitionTo('admin.event.details');
      });
    },

    deleteEvent(formData) {
      let event = this.modelFor('event');
      event.destroyRecord().then(() => {
        this.transitionTo('admin.index');
      });
    },
  },
});
