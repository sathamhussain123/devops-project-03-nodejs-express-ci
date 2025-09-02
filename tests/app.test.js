// tests/app.test.js
const request = require("supertest");   // ✅ import supertest
const app = require("../app/app");      // ✅ import your express app

test("GET / should return Hello DevOps", async () => {
  const res = await request(app).get("/");
  expect(res.statusCode).toBe(200);
  expect(res.body.message).toContain("Hello DevOps");
});
