// Task model

var Task = Backbone.Model.extend({
  defaults: {
    title: null,
    completed: false,
    dueDate: null
  },

  setDueDate: function (dueDate) {
    this.save({dueDate: dueDate});
  },

  toggle: function () {
    // Checks completed field's value, toggles it
    // Save structure: model.save([attributes], [options])
    this.save({completed: !this.get("completed")});
  },

  initialize: function () {
    
  }

});