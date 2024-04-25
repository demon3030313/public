const staticFile = require("../appModules/http-utils/static-file");
const { getData, endpoints } = require("../appModules/api");
const { config, makeRatingFile } = require ("../appModules/rating");
const { PATH_TO_RATING_FILE } = require("../appModules/rating/rating-file");

async function mainRouteController(res, publicUrl, extname) {
  const data = await getData(endpoints.game)
  await makeRatingFile(config, PATH_TO_RATING_FILE, data)
    res.statusCode = 200;
    staticFile(res, publicUrl, extname);
  }
  module.exports = mainRouteController; 