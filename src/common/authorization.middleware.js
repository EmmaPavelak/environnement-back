const { MISSING_AUTHORIZATION } = require('./error/error-type');

const authorizationMiddleware = role => (request, response, next) => {
  if (request.user.role === role) {
    next();
  } else {
    next({ type: MISSING_AUTHORIZATION })
  }
};

module.exports = authorizationMiddleware;
