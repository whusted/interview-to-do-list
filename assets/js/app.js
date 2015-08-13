var Geneva = new Marionette.Application();
var Tasks;

Geneva.on("start", function() {
  Backbone.history.start();
  Tasks = new TasksList;
  var appView = new Geneva.AppView;
});


Geneva.AppView = Backbone.View.extend({

  el: $("#task-app"),
  

  // respond to events - first one is to create a new task on enter key input
  events: {
      "keypress #new-task":  "createTaskOnEnter"
  },

  initialize: function () {
    this.input = this.$("#new-task");
    this.allCheckbox = this.$("#toggle-all")[0];
    this.listenTo(Tasks, "add", this.addOne);
    this.listenTo(Tasks, "all", this.render);

    Tasks.fetch();
  },

  render: function () {
    console.log(!Tasks.length);
    if (!Tasks.length) {
      $("#edit_instructions").addClass("hidden");
    } else {
      $("#edit_instructions").removeClass("hidden");
    }
  },

  addOne: function (task) {
    var view = new TaskView({model: task});
    this.$("#task-list").append(view.render().el);
  },

  createTaskOnEnter: function(e) {
    // Only respond to enter keypress
    if (e.keyCode != 13) return;
    // Disallow creating empty tasks
    if (this.input.val()) {
      Tasks.create({title: this.input.val()});
        this.input.val("");
      }
    }

});