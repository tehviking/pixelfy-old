import Ember from 'ember';

var Router = Ember.Router.extend({
  location: "auto"
});
Router.map(function() {
  this.resource('images', {path: "/"}, function() {
    this.route('show', {path: "/:id"});
  });
  this.route('gravatar');
});

export default Router;
