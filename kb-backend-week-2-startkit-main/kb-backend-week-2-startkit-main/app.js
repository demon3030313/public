const http = require("http");
const path = require("path");
const staticFile = require("./appModules/http-utils/static-file");
const mainRouteController = require("./controllers/main");
const gameRouteController = require("./controllers/game");
const voteRouteController = require("./controllers/vote");
const mimeTypes = require("./appModules/http-utils/mime-types");

const PORT = 3005;

const server = http.createServer((req, res) => {
  const url = req.url;
  switch (url) {
    case "/":
      mainRouteController(res, "/index.html", ".html");
      break;
    case "/game":
      gameRouteController(res);
      break;
    case "/vote":
      voteRouteController(res);
      brake;
    default:
      const extname = String(path.extname(url)).toLowerCase();
      if (extname in mimeTypes) {
        staticFile(res, url, extname);
      } else {
        res.statusCode = 404;
        res.end("Not Found");
      }
  }
});

server.listen(PORT)