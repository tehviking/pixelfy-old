App.ImagesRoute = Ember.Route.extend({
  model: function() {
    return App.imageData();
  }
});
