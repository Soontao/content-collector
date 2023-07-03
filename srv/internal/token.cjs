const crypto = require("crypto");

const base64 = (data) => Buffer.from(data).toString("base64");

/**
 * @param {Number} identifier
 * @param {Date} valid_date
 */
function generate_token(
  identifier = 0,
  valid_date = new Date("9999-12-31T00:00:00.000Z"),
) {
  const id = Buffer.from(String(identifier), "utf-8");
  const date = Buffer.from(String(valid_date.toISOString()), "utf-8");
  const random_bytes = crypto.randomBytes(32);
  const hash_value = crypto
    .createHash("sha256")
    .update(id)
    .update(date)
    .update(random_bytes)
    .digest();

  return [id, date, random_bytes, hash_value].map(base64).join(".");
}

function extract_token(token = "") {
  if (typeof token !== "string") {
    return false;
  }
  const parts = token.split(".");
  if (parts.length !== 4) {
    return false;
  }
  try {
    const [id, date, random_bytes, hash_value] = parts.map((part) =>
      Buffer.from(part, "base64"),
    );
    const valid_to = new Date(date.toString("utf-8"));
    if (valid_to < Date.now()) {
      return false;
    }
    const re_hash_value = crypto
      .createHash("sha256")
      .update(id)
      .update(date)
      .update(random_bytes)
      .digest();

    if (!hash_value.equals(re_hash_value)) {
      return false;
    }

    return { id: parseFloat(id.toString("utf-8")), valid_to, random_bytes };
  } catch (error) {
    // TODO: logging
    return false;
  }
}

module.exports = {
  generate_token,
  extract_token,
};
