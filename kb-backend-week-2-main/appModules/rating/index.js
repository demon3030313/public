const config = require("./config");
const file = require("./rating-file");
const calculations = require("./calculations");

module.exports = {
    config,
    makeRatingFile: file.makeRatingFile,
    fileJSON: file.getJSONFromFile,
    makeRating: calculations.makeRating,
    updateRating: calculations.updateRating
}