const request = require("supertest");
const fs = require("fs").promises;
const app = require("../lib/app");

describe("static server get route", () => {
  it('should return a response with the contents of "dancin.txt" as the body', async () => {
    const actual = await fs.readFile("public/dancin.txt", "utf8");
    const response = await request(app).get("/dancin.txt");

    expect(response.text).toEqual(actual);
  });
});
