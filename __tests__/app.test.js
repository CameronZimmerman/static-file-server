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

  it('should return html with an h1 and the word red by requesting "/red" ', async () => {
    try {
      const data = await request(app).get("/red");
      expect(data.body).toEqual(`<html>
  <body>
    <h1>Red</h1>
  </body>
</html>`);
    } catch (e) {
      console.log(e.message);
    }
  });
});
