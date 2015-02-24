import gravatarUrlFromEmail from '../../../utils/gravatar-url-from-email';
import { module, test } from 'qunit';

module('gravatarUrlFromEmail');

// Replace this with your real tests.
test('it works', function(assert) {
  var email = "bob.dobalina@example.com";
  var result = gravatarUrlFromEmail(email, 200);
  assert.equal(result, "http://gravatar.com/avatar/7b71c9ead16dd9e56dec771084345649?s=200");
});
