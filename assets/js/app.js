var Geneva = new Marionette.Application();

Geneva.addRegions({
  mainRegion: "#main-region"
});

Geneva.on("start", function() {
  Backbone.history.start();

  Geneva.mainRegion.show(new Geneva.TestView())
});


Geneva.TestView = Marionette.LayoutView.extend({
  template: "#test-view",
  initialize: function(options) {
    console.log("Hi there! I'm the initialize. No html has been rendered yet")
  },
  onRender: function() {
    console.log("Hi there! I'm the render. All the html has been rendered")
  },
  templateHelpers: function() {
    return {
      tempVariable1: "This is how you pass variables to the template",
      tempVariable2: "Another variable passing test"
    };
  }
});
