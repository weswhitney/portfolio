import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    return [
    {
      id: "1",
      name: "booKlub.net",
      description: "A live book club web app using Ruby on Rails with Twitter and Google OAuth integrations, where users can create and manage online book clubs.",
      url: "http://www.booklub.net/",
      image: "booklub.png",
    },
    {
      id: "2",
      name: "Markdown Editor",
      description: "An Ember app that is a live markdown editor that renders markdown based on user input.",
      url: "https://gentle-earth-7745.herokuapp.com/",
      image: "/markdown-editor.png",
    },
    {
      id: "3",
      name: "gCamp",
      description: "A Ruby on Rails web app similar to basecamp with hand-rolled user auth, Pivotal Tracker integration and high test coverage.   Also, users will be able to track comments that you and others make.",
      url: "http://thawing-tundra-4075.herokuapp.com/",
      image: "/gcamp.png",
    },
    ];
  }

});
