import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    return [
      {
        id: "1",
        company: "Attivo",
        position: "Bartender",
        location: "Denver",
        dates: "Janurary 1999 to September 2014",
        description: "Set up and stocked bar, served customers.  Over a million dollars in sales.  Trained new employees."
      },
      {
        id: "2",
        company: "2",
        position: "Bartender",
        location: "Denver",
        dates: "Janurary 1999 to September 2014",
        description: "Set up and stocked bar, served customers.  Over a million dollars in sales.  Trained new employees."
      },
      {
        id: "3",
        company: "3",
        position: "Bartender",
        location: "Denver",
        dates: "Janurary 1999 to September 2014",
        description: "Set up and stocked bar, served customers.  Over a million dollars in sales.  Trained new employees."
      },
    ];
  }

});
