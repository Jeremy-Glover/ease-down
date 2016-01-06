import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  phone: DS.attr('number'),
  dates: DS.attr('number'),
  url: DS.attr('string'),
  location: DS.attr('string'),
  description: DS.attr('string'),
  active: DS.attr('boolean'),
});
