import Ember from 'ember';
import imageData from '../utils/image-data';

var ImagesRoute = Ember.Route.extend({
  model: function() {
    return imageData();
  }
});

export default ImagesRoute;
