// Task model

var Task = Backbone.Model.extend({
  defaults: {
    title: null,
    completed: false,
    date: null // Implement last
  },

  initialize: function() {
    // Set date on initialization
  }

});