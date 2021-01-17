// ** UTILITY/HELPER FUNCTIONS **
export { updateCookieWithNominations, fetchCookie, delCookie };

// takes an array of nomination(movie) objects from App state
// also needs access to the set and remove cookies func's
const updateCookieWithNominations = (
  nominations,
  setCookies
) => {
  // if nominations, update cookie to match
  if (nominations.length > 0) {
    return setCookies("nominationsCookie", nominations);
  }
};

const delCookie = (cookieName, removeCookie) => {
  removeCookie(cookieName);
};

const fetchCookie = (cookieName, cookies) => {
  return cookies[cookieName];
};
