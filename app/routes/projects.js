import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    return [
    {
      project: "booKlub",
      // project link
    },
    {
      project: "wesisms",
    },
    {
      project: "gCamp"
    }
    ];
  }

});
