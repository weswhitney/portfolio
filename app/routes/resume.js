import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    return [
      {
        id: "1",
        url: "https://resume.creddle.io/embed/6rp4cfk9emr",
        image: "resume-screenshot.png",
      },
    ];
  }

});
