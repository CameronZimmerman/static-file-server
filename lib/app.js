const net = require("net");
const fs = require("fs").promises;
const parseRequest = require("./utils/parseRequest");
const createResponse = require("./utils/createResponse");

const app = net.createServer((socket) => {
  socket.on("data", (data) => {
    const request = parseRequest(data.toString());
    if (request.method === "GET") {
      fs.readFile(`public${request.path}`)
        .then((data) => {
          const contentType = (/<\/?[a-z][\s\S]*>/).test(data) ? 'text/html' : 'text/plain';
          socket.end(
            createResponse({
              body: data,
              status: "200 OK",
              contentType,
            })
          );
        })
        .catch((error) => 
          socket.end(
            createResponse({
              body: 'File not found ' + error.message,
              status: "404 Not Found",
              contentType: "text/plain",
            })
          )
        );
    }
  });
});

module.exports = app;
