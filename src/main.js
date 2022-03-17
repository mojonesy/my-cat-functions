const { catBreeds } = require("../src/cat-breeds"); //Import catBreeds array of objects from cat-breeds.js file.//



function findCatById(catBreeds, id) {
    let catName = null;
    for (let i = 0; i < catBreeds.length; i++) {
        if (catBreeds[i].id === id) catName = catBreeds[i].name;
    }
    return catName;
}


function getHeightAndWeightByName(catBreeds, name) {
    let result;
    for (let i = 0; i < catBreeds.length; i++) {
        const breedName = catBreeds[i].name;
        if (breedName !== name) result = 'No such cat.';
        if (breedName === name) {
            const height = catBreeds[i].image.height;
            const weight = catBreeds[i].weight.imperial;
            result = { height, weight };
            break;
        }
    }
    return result;
}


findCatById(catBreeds, 'mcoo');
getHeightAndWeightByName(catBreeds, 'Abyssinian');

module.exports = {
    findCatById, 
    getHeightAndWeightByName,
};

