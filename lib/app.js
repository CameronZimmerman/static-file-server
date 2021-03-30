const net = require("net");
const parseRequest = require("./utils/parseRequest");
const createResponse = require("./utils/createResponse");

const app = net.createServer((socket) => {
  socket.on("data", (data) => {
    const request = parseRequest(data.toString());
    if (request.method === "GET") {
      switch (request.path) {
        case "/":
          socket.end(
            createResponse({
              body: "hi",
              status: "200 OK",
              contentType: "text/plain",
            })
          );
          break;
      }
    } else {
      socket.end(
        createResponse({
          body: "Not Found",
          status: "404 Not Found",
          contentType: "text/plain",
        })
      );
    }
  });
});

module.exports = app;
