var gravatarUrlFromEmail = function(email, size) {
  trimmedEmail = email.trim().toLowerCase();
  md5hash = md5(trimmedEmail);
  return "http://gravatar.com/avatar/" + md5hash + "?s=" + size.toString();
};

export default gravatarUrlFromEmail;
