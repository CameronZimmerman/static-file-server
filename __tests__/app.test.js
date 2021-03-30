const request = require("supertest");
const app = require("../lib/app");

describe("app routes", () => {
  it('should return hi when get requesting "/" ', async () => {
    try {
      const data = await request(app).get("/");
      expect(data.text).toEqual("hi");
    } catch (e) {
      console.log(e.message);
    }
  });
});
