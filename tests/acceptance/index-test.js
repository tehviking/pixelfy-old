var App;

module('Acceptances - Index', {
  setup: function(){
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('index renders a list of images', function(){

  visit('/').then(function(){
    equal($(".spec-gallery-image").length, 100);
  });
});
