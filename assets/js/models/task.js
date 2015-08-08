// Task model

var Task = Backbone.Model.extend({
  defaults: {
    title: null,
    completed: false,
    date: null
  },

  initialize: function() {
    // Set date on initialization
    this.set('date', Date());
  }

});