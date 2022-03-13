const catBreeds = require("..src/cat-breeds"); //Import catBreeds array of objects from cat-breeds.js file.//



function findCatById(id, catBreeds) {
    let catName = null;
    for (let i = 0; i < catBreeds.length; i++) {
            if (catBreeds[i].id === id) catName = catBreeds[i].name;
        }
    console.log(catName);
}

findCatById("mcoo", catBreeds);



module.exports = findCatById;

