const fs = require("fs/promises");
const path = require("path");
const babel = require("@babel/core");

function file_exist(file) {
  return fs
    .access(file, fs.constants.F_OK)
    .then(() => true)
    .catch(() => false);
}

/**
 *
 * @param {{path: string}} options
 */
function jsx_transform(options) {
  const cache = new Map();
  /**
   * @type {import("express").Handler}
   */
  return async function convert_jsx(req, res, next) {
    if (!req.path.endsWith(".jsx")) {
      return next();
    }
    if (!req.method === "GET") {
      return next();
    }

    const file_path = path.join(options.path, req.path);
    if (!(await file_exist(file_path))) {
      return next();
    }
    // TODO: cache
    const result = await babel.transformFileAsync(file_path, {
      presets: ["@babel/preset-react"],
      comments: false,
      sourceMaps: false,
    });

    return res.header("Content-Type", "text/javascript").send(result.code);
  };
}
module.exports = jsx_transform;
