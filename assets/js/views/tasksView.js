var tasksView = Backbone.View.extend({
  tagName: 'ul',
  template: _.template($("#task-template").html()),

  initialize: function() {
    
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
      return this;
  },

  toggleDone: function() {
      this.model.toggle();
    }
});