import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  dates: DS.attr('string'),
  url: DS.attr('string'),
  location: DS.attr('string'),
  description: DS.attr('string'),
  active: DS.attr('boolean'),
});
