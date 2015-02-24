var gravatarUrlFromEmail = function(email, size) {
  var trimmedEmail = email.trim().toLowerCase();
  var md5hash = md5(trimmedEmail);
  return "http://gravatar.com/avatar/" + md5hash + "?s=" + size.toString();
};

export default gravatarUrlFromEmail;
