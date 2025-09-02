const request = require("supertest");
const app = require("../app/index");

describe("GET /", () => {
  it("should return Hello message", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("message", "Hello DevOps Project 3 🚀 - Node.js Express CI");
  });
});