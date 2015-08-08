// Task model

var Task = Backbone.Model.extend({
  defaults: {
    title: null,
    completed: false,
    date: null
  },

  toggle: function() {
    // Checks completed field's value, toggles it
    // Save structure: model.save([attributes], [options])
    this.save({completed: !this.get("completed")});
  },

  initialize: function() {
    this.set('date', Date());
  }

});