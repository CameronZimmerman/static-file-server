const parseRequest = (rawRequest) => {
  const [method, path] = rawRequest.split("\n")[0].split(" ");
  console.log(method, path);
};

module.exports = parseRequest;
