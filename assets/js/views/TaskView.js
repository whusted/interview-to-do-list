var TaskView = Backbone.View.extend({
  tagName: 'li',

  initialize: function () {
    this.template = _.template($("#task-template").html());
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.remove);
  },

  events: {
    "click .checkbox"   : "toggleDone",
    "change .datepickers" : "dateSelected",
    "dblclick .view"  : "edit"
  },

  render: function () {
    this.$el.toggleClass('completed', this.model.get('completed'));
    this.$el.html(this.template(this.model.toJSON()));
    // Need to apply datepicker each time a new task is created
    $(".datepicker").datepicker();
    return this;
  },

  dateSelected: function (e) {
    var date = $(e.target).datepicker('getDate');
    var formattedDate = $.datepicker.formatDate("mm-dd-yy", date);
    this.model.setDueDate(formattedDate);
  },

  edit: function () {
    this.$el.addClass("editing");
    console.log(this.input);
  },

  toggleDone: function () {
    this.model.toggle();
    this.model.destroy();
  }
});