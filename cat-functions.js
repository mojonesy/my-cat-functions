function findCatById(id, catBreeds) {
    let catName = null;
    for (let i = 0; i < catBreeds.length; i++) {
            if (catBreeds[i].id === id) catName = catBreeds[i].name;
        }
    console.log(catName);
}

findCatById("mcoo", catBreeds);





module.exports = findCatById;