import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    return [
    {
      id: "1",
      name: "booKlub.net",
      description: "A Rails app",
      url: "http://www.booklub.net/",
      github: "https://github.com/weswhitney/booklub",
      skills: ["Ruby on Rails", "Gems: Yelp API, Carrierwave, Fog, Nokogiri", "Rake Tasks", "Scraping Sites", "Forms", "User Authorization", "Bootstrap"],
      image: "booklub.png",
    },
    {
      id: "2",
      name: "Markdown Editor",
      description: "An ember app",
      url: "https://gentle-earth-7745.herokuapp.com/",
      github: "https://github.com/weswhitney/markdown-editor",
      skills: ["Ember app","Bootstrap"],
      image: "/markdown-editor.png",
    },
    {
      id: "3",
      name: "gCamp",
      description: "An Rails app",
      url: "http://thawing-tundra-4075.herokuapp.com/",
      github: "https://github.com/weswhitney/gCamp",
      skills: ["Rails app","Bootstrap","associations","user authentication","third party API","feature specs"],
      image: "/gcamp.png",
    },
    ];
  }

});
