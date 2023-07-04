const cds = require("@sap/cds");

/**
 * User Service Implemenation
 */
class UserServiceImpl extends cds.ApplicationService {
  async init() {
    await super.init();
    this.on("auth", this.doAuth);
  }
  /**
   *
   * @param {import("@sap/cds/apis/services").Request} req
   * @returns
   */
  async doAuth(req) {
    const expressReq = req.http.req;
    if (expressReq.headers.authorization?.startsWith("Basic ")) {
      const rawHeader = expressReq.headers.authorization.substring(6);
      const credentialPair = Buffer.from(rawHeader, "base64").toString("utf-8");
      const [login_name, login_secret] = credentialPair.split(":");

      if (login_secret === undefined || login_secret?.length < 1) {
        return req.reject(401, "authenticated failed: password missing");
      }

      const user = await cds.run(
        SELECT.one.from("LoginUser").where({
          login_name,
          login_secret,
        }),
      );

      if (user === undefined) {
        return req.reject(
          401,
          "authenticated failed: no such user or password wrong",
        );
      }
      expressReq.session.user = { id: user.login_name }; // TODO: roles
    }
    return expressReq.session.user;
  }
}

module.exports = UserServiceImpl;
