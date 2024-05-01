const { readFile } = require("fs");

const fs = require("fs").promises;

async function makeRatingFile(path, array) {
 fs.readFile(path, "utf8", (err, retingFile) => {
    if (err) {
        console.log(err);
        return;
    }
    const ratinfArray = JSON.parse(ratingFile)

    array.forEach((item) => {
        if (!ratingArray.find(el => el.id === item.id)) {
            let obj = {
                id: item.id,
                title: item.title,
                image: item.image,
                link: item.link,
                description: item.description,
                rating: 0,
            }
        }

    }) 
 })
}

module.exports = { makeRatingFile };
