/* eslint-disable no-unused-vars */
// TODO: session store
const { Store } = require("express-session");

class CDSSessionStore extends Store {
  get(sid, session, cb) {}
  set(sid, session, cb) {}
  touch(sid, session, cb) {}
  destroy(sid, cb) {}
}

module.exports = CDSSessionStore;
