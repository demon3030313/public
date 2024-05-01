const games = require("./games");
const endpoints = require("./config");

module.exports = {
  endpoints,
  getAllGames: games.getData,
  getRandomGame: games.getRandomGame
};
