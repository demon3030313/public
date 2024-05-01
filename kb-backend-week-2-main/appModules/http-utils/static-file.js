const mymeTypes = require("./mime-types");
const fs = require("fs");

function staticFile(res, filePath, ext) {
  res.setHeader("Content-Type", mymeTypes[ext]);
  fs.readFile("./public" + filePath, (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.end("Not Found");
    }
    res.end(data);
  });
}

module.exports = staticFile;
