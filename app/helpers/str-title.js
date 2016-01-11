import Ember from 'ember';

function toTitleCase(str) {
  return str.split(' ')
    .map(function(word) {
      return Ember.String.capitalize(word);
    }).join(' ');
}

export function strTitle([str]) {
  if (typeof str !== 'string') {
    return str;
  }

  return toTitleCase(Ember.String.dasherize(str)
    .replace('-', ' '));
}

export default Ember.Helper.helper(strTitle);
