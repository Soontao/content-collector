const cds = require("@sap/cds");
const session = require("express-session");
const jsx_transform = require("./internal/jsx.cjs");
const path = require("path");

cds.once("bootstrap", (app) => {
  app.set("trust proxy", 1);
  app.use(jsx_transform({ path: path.join(__dirname, "../app") }));
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
