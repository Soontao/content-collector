const cds = require("@sap/cds");
const session = require("express-session");

cds.once("bootstrap", (app) => {
  app.set("trust proxy", 1);
  app.use(
    session({
      secret: process.env.SESSION_SECRET ?? cds.utils.uuid(),
      resave: false,
      saveUninitialized: true,
      cookie: { secure: process.env.NODE_ENV === "production" },
    }),
  );
});

module.exports = cds.server;
