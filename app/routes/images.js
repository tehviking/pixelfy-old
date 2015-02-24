import Ember from 'ember';

var ImagesRoute = Ember.Route.extend({
  model: function() {
    return imageData();
  }
});

export default ImagesRoute;
