import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    saveEvent(formData) {
      let event = this.modelFor(this.routeName);
      event.setProperties(formData);
      event.save().then(() => {
        this.transitionTo('admin.event.details');
      });
    },

    deleteEvent(formData) {
      let event = this.modelFor(this.routeName);
      event.destroyRecord().then(() => {
        this.transitionTo('admin.index');
      });
    },
  },
});
