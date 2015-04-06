import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    return [
      {
        id: "1",
        company: "Attivo Pizzeria and Bar",
        position: "Lead Bartender",
        location: "Denver, CO.",
        dates: "Feburary 2013 to October 2014",
        description: "Set up and stocked bar, served customers.  Over a million dollars in sales.  Trained new employees."
      },
      {
        id: "2",
        company: "Murray BMW",
        position: "Coding Specialist",
        location: "Denver, CO.",
        dates: "August 2011 to May 2013",
        description: "Worked closely with every position in the service department and BMW America to process warranties."
      },
      {
        id: "3",
        company: "Landmark Theatre",
        position: "Lead Bartender",
        location: "Greenwood Village, CO.",
        dates: "June 2008 to June 2012",
        description: "Customer service. Conducted monthly inventory."
      },
      {
        id: "4",
        company: "Brickman Group",
        position: "Crew Leader",
        location: "Denver, CO.",
        dates: "March 2006 to June 2008",
        description: "Lead a crew of 6 to 8 people for the nations largest commercial landscape company."
      },
    ];
  }

});
