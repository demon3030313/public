
const { getData, endpoints, getAllGames} = require("../appModules/api/index")
const { makeRatingFile, config } = require("../appModules/rating");



async function mainRouteController(res, publicUrl, extname) {
    const data = await getAllGames(endpoints.games)
  await makeRatingFile(config.PATH_TO_RATING_FILE, data)
  
  res.statusCode = 200;
    
}

module.exports = mainRouteController;
