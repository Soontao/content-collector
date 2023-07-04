const cds = require("@sap/cds");
const path = require("path");

describe("User Service Test", () => {
  const { axios } = cds.test(path.join(__dirname, "../"));

  axios.defaults.validateStatus = () => true;

  it("should do auth successful", async () => {
    const res = await axios.post(
      "/rest/user/auth",
      {},
      {
        auth: {
          username: "test_user",
          password:
            "c743454a8a46cf9c644c7b583f018952a686f7f52cd94bd15fa44d1739aeff02",
        },
      },
    );
    expect(res.status).toBe(200);
    expect(res.data.id).toBe("test_user");
  });

  it("should do auth failed (empty)", async () => {
    const res = await axios.post(
      "/rest/user/auth",
      {},
      {
        auth: {
          username: "test_user",
          password: "",
        },
      },
    );
    expect(res.status).toBe(401);
  });

  it("should do auth failed (wrong)", async () => {
    const res = await axios.post(
      "/rest/user/auth",
      {},
      {
        auth: {
          username: "test_user",
          password: "asb",
        },
      },
    );
    expect(res.status).toBe(401);
  });
});
