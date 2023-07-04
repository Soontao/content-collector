const cds = require("@sap/cds");
const { extract_token } = require("./token.cjs");

/**
 * @type {import("express").RequestHandler}
 */
module.exports = async function authentication(req, res, next) {
  req.tenant = "default"; // TODO: revisit for multi tenancy

  if (req.user === undefined && req.session.user) {
    req.user = new cds.User(req.session.user);
  }

  if (
    req.user === undefined &&
    req.headers?.authorization?.startsWith?.("Bearer ")
  ) {
    const rawToken = req.headers.authorization.substring(7);
    const { valid, id } = extract_token(rawToken);
    if (valid === false) {
      res.status(401);
      return next(new Error("authenticated failed: invalid token"));
    }
    const token = await cds.run(
      SELECT.one.from("Token").where({ ID: id, value: rawToken }),
    );
    if (token === undefined) {
      res.status(401);
      return next(new Error("unable to verify token"));
    }
    const user = await cds.run(
      SELECT.one.from("LoginUser").where({ login_name: token.createdBy }),
    );
    if (user === undefined) {
      res.status(401);
      return next(new Error("cannot find user"));
    }
    req.user = new cds.User({ id: user.login_name }); // TODO: LoginUser to cds.User
  }

  if (req.user === undefined) {
    req.user = new cds.User.Anonymous();
  }
  return next();
};
