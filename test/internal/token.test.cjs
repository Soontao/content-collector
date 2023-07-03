describe("Token Test Suite", () => {
  const {
    generate_token,
    extract_token,
  } = require("../../srv/internal/token.cjs");

  it("should support generate token", () => {
    const t = generate_token(1234);
    expect(t).toHaveLength(131);
    const r = extract_token(t);
    expect(typeof r).toBe("object");
    expect(r.id).toBe(1234);
    expect(r.valid_to).toBeInstanceOf(Date);
    expect(r.random_bytes).toBeInstanceOf(Buffer);
  });

  it("should support expire token", () => {
    const t = generate_token(1234, new Date("2000-01-01"));
    expect(t).toHaveLength(131);
    const r = extract_token(t);
    expect(r).toBe(false);
  });

  it("should support reject wrong token", () => {
    const wrong_tokens = ["..", "...", "", 123, "123.3213.2.32"];
    for (const token of wrong_tokens) {
      expect(extract_token(token)).toBe(false);
    }
  });
});
