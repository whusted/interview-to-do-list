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
    "dblclick .view"  : "edit",
    "keypress .editTask" : "updateTask"
  },

  render: function () {
    this.$el.toggleClass('completed', this.model.get('completed'));
    this.$el.html(this.template(this.model.toJSON()));
    this.inputBox = this.$('.editTask');
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
    this.inputBox.show();
    this.inputBox.focus();
  },

  toggleDone: function () {
    // Toggle not needed until completed tasks are saved
    this.model.toggle();
    this.model.destroy();
  },

  updateTask: function (e) {
    if (e.keyCode != 13) return;
    // Disallow changing tasks to empty tasks
    if (this.inputBox.val()) {
      var newTitle = this.inputBox.val();
      this.model.editTitle(newTitle);
    }
  }
 
});