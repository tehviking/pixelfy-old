App.Router = Ember.Router.extend({
  location: "auto"
});

App.Router.map(function() {
  this.resource('images', {path: "/"}, function() {
    this.route('show', {path: "/:id"});
  });
  this.route('gravatar');
});


App.ApplicationRoute = Ember.Route.extend({
  model: function() {
    return {foo: "bar"};
  }
});
