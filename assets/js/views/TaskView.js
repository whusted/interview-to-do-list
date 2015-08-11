var TaskView = Backbone.View.extend({
  tagName: 'li',

  initialize: function () {
    this.template = _.template($("#task-template").html());
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.remove);
  },

  events: {
    "click .checkbox"   : "toggleDone"
  },

  render: function () {
    this.$el.toggleClass('completed', this.model.get('completed'));
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },

  toggleDone: function () {
      this.model.toggle();
      this.model.destroy();
    }
});