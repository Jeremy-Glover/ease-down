import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    saveEvent(formValues) {
      let event = this.modelFor(this.routeName);

      event.setProperties(formValues);
      event.save().then(() => {
        this.transitionTo('admin.event');
      });
    },

    deleteEvent(formValues) {
      let event = this.modelFor(this.routeName);
      event.destroyRecord().then(() => {
        this.transitionTo('admin.event');
      });
    },
  },
});
