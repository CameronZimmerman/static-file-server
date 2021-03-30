const request = require("supertest");
const fs = require("fs");
const app = require("../lib/app");

describe("static server get route", () => {
  it('should return a response with the contents of "dancin.txt" as the body', async () => {
    const response = await request(app).get("localhost:1111/dancin.txt");
    const actual = await fs.readFile("../public/dancin.txt");

    expect(response.text).toEqual(actual);
  });
});
