import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    return [
    {
      id: "1",
      name: "booklub",
      description: "A Rails app",
      url: "http://www.booklub.net/",
      github: "https://github.com/weswhitney/booklub",
      skills: ["Ruby on Rails", "Gems: Yelp API, Carrierwave, Fog, Nokogiri", "Rake Tasks", "Scraping Sites", "Forms", "User Authorization", "Bootstrap"],
      image: "booklub.png",
    },
    {
      id: "2",
      name: "markdown editor",
      description: "An ember app",
      url: "https://gentle-earth-7745.herokuapp.com/",
      github: "https://github.com/weswhitney/markdown-editor",
      skills: ["Ember app","Bootstrap"],
      image: "/markdown-editor.png",
    },
    ];
  }

});
