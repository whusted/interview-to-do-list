var TaskView = Backbone.View.extend({
  tagName: 'li',

  initialize: function () {
    this.template = _.template($("#task-template").html());
  },

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
      return this;
  },

  toggleDone: function () {
      this.model.toggle();
    }
});