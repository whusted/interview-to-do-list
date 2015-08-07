// Task model

var task = Backbone.Model.extend({
  defaults: {
    title: null,
    isActive: true,
    date: null // Implement last
  }
});