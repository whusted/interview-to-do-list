// Our only collection: a number of Tasks

var TasksList = Backbone.Collection.extend({
  model: Task,
  localStorage: new Store("backbone-todo")
});