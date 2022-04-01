const { catBreeds } = require("../src/cat-breeds"); //Import catBreeds array of objects from cat-breeds.js file.//


function toTitleCase(string) {
    str = string.toLowerCase().split('');
    const first = str[0].toUpperCase();
    str.shift(0);
    str.unshift(first);
    return str.join('');
}

function findCatById(catBreeds, id) {
    let catName = null;
    for (let i = 0; i < catBreeds.length; i++) {
        if (catBreeds[i].id === id) catName = catBreeds[i].name;
    }
    return catName;
}


//returns height/weight of given cat//
function getHeightAndWeightByName(catBreeds, name) {
    const catName = toTitleCase(name);
    console.log(catName);
    console.log(catBreeds);
    let result;
    for (let i = 0; i < catBreeds.length; i++) {
        const breedName = catBreeds[i].name;
        if (breedName !== catName) result = 'No such cat.';
        if (breedName === catName) {
            const height = catBreeds[i].image.height;
            const weight = catBreeds[i].weight.imperial;
            result = { height, weight };
            break;
        }
    }
    return result;
}
const data = catBreeds();
console.log(getHeightAndWeightByName(data,"Bengal"));



//returns cat names originating from given country//
function getNamesByCountry(catBreeds, country) {
    try {
        if (!country) throw Error("Please provide a country");
    } catch (error) {
        console.log(`${error}`);
        return false;
    }

    const newCountry = toTitleCase(country);
    let result = [];
    catBreeds.map((breed) => {
        if (breed.origin === newCountry) result.push(breed.name);
    });

    if (result.length === 0) return null;
    return result;
}

    







findCatById(catBreeds, 'mcoo');
getHeightAndWeightByName(catBreeds, 'Abyssinian');

module.exports = {
    findCatById, 
    getHeightAndWeightByName,
    getNamesByCountry
};

