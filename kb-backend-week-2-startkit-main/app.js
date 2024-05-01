const http = require("http");
const staticFile = require("staticFile");
const mainRouteController = require("mainRouteController");

const server = http.createServer((req) => {
  const url = req.url;
  switch (url) {
    case "/":
      mainRouteController(res, "/index.html", ".html");
      break;
      case "/game":
        gameRouteController(res);
  break;
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

