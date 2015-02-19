App.Router.map(function() {
  this.route('component-test');
  this.route('helper-test');
  // this.resource('posts', function() {
  //   this.route('new');
  // });
});

App.ApplicationRoute = Ember.Route.extend({
  model: function() {
    return {foo: "bar"};
  }
});
