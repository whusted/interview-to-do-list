// Our only collection: a number of tasks

var TasksList = Backbone.Collection.extend({
  model: Task,
  localStorage: new Store("backbone-todo")
});