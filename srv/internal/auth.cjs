const cds = require("@sap/cds");

/**
 * @type {import("express").RequestHandler}
 */
module.exports = async function auth(req, res, next) {
  req.tenant = "default"; // TODO: revisit for multi tenancy
  if (req.session.user) {
    req.user = new cds.User(req.session.user);
  } else {
    req.user = cds.User.default;
  }
  return next();
};
