import Ember from 'ember';

export default Ember.Component.extend({
  groups: [],

  didReceiveAttrs() {
    let items = this.getAttr('items');

    var now = moment();
    let grouped = items.filter((curr) => {
      return now.isBefore(curr.get('startDate'));
    }).reduce((carry, curr) => {
      const month = curr.get('startDate').format('MMMM');

      let alreadyExising = carry.find((monthGroup) => {
        return monthGroup.label === month;
      });

      if (alreadyExising) {
        alreadyExising.items.push(curr);
      } else {
        carry.push({
          label: month,
          items: [curr],
        });
      }

      return carry;
    }, []);

    console.log(grouped);

    this.set('groups', grouped);
  },
});
