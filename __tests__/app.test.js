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
      console.log(data.text);
      expect(data.text).toEqual(`<html>
  <body>
    <h1>Red</h1>
  </body>
</html>`);
    } catch (e) {
      console.log(e.message);
    }
  });

  it('should return html with an h1 and the word blue by requesting "/blue" ', async () => {
    try {
      const data = await request(app).get("/red");
      console.log(data.text);
      expect(data.text).toEqual(`<html>
  <body>
    <h1>Blue</h1>
  </body>
</html>`);
    } catch (e) {
      console.log(e.message);
    }
  });

  it('should return html with an h1 and the word green by requesting "/green" ', async () => {
    try {
      const data = await request(app).get("/green");
      console.log(data.text);
      expect(data.text).toEqual(`<html>
  <body>
    <h1>Green</h1>
  </body>
</html>`);
    } catch (e) {
      console.log(e.message);
    }
  });
});
