import DS from 'ember-data';

export default DS.Model.extend({
  region: DS.attr('string'),
  name: DS.attr('string'),
  email: DS.attr('string'),
  startDate: DS.attr('string'),
  endDate: DS.attr('string'),
  url: DS.attr('string'),
  location: DS.attr('string'),
  description: DS.attr('string'),
  active: DS.attr('boolean'),
  featured: DS.attr('boolean'),
});
