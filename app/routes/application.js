import Ember from 'ember';

var ApplicationRoute = Ember.Route.extend({
  model: function() {
    return {foo: "bar"};
  }
});

export default ApplicationRoute;
