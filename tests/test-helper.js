document.write('<div id="ember-testing-container"><div id="ember-testing"></div></div>');

function exists(selector, context) {
  return !!find(selector, context).length;
}

function getAssertionMessage(actual, expected, message) {
  return message || QUnit.jsDump.parse(expected) + " expected but was " + QUnit.jsDump.parse(actual);
}

function equal(actual, expected, message) {
  message = getAssertionMessage(actual, expected, message);
  QUnit.equal.call(this, actual, expected, message);
}

function strictEqual(actual, expected, message) {
  message = getAssertionMessage(actual, expected, message);
  QUnit.strictEqual.call(this, actual, expected, message);
}

window.exists = exists;
window.equal = equal;
window.strictEqual = strictEqual;

window.startApp = function(attrs) {
  var attributes = Ember.merge({
    // useful Test defaults
    rootElement: '#ember-testing-container',
    LOG_ACTIVE_GENERATION:false,
    LOG_VIEW_LOOKUPS: false,
    Resolver: testResolver()
  }, attrs); // but you can override;

  Ember.Router.reopen({
    location: 'none'
  });

  Ember.run(function(){
    window.App = Ember.Application.create(attributes);
    App.setupForTesting();
    App.injectTestHelpers();
  });

  App.reset(); // this shouldn't be needed, i want to be able to "start an app at a specific URL"

  return App;
}
