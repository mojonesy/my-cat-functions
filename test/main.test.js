const { expect } = require("chai");
const { catBreeds } = require("../src/cat-breeds");
const { 
    findCatById, 
    getHeightAndWeightByName,
} = require("../src/main");

describe("findCatById", () => {
    it("should return the cat name associated with the given id", () => {
        const expected = "Abyssinian";
        const actual = findCatById(catBreeds, "abys");
        expect(actual).to.equal(expected);
    });
});

describe ("getHeightAndWeightByName", () => {
    it ("should return an object containing given cat's height and weight", () => {
        const actual = getHeightAndWeightByName(catBreeds, "Abyssinian");
        const expected = { 'height': 1445, 'weight': '7  -  10' };
        expect(actual).to.eql(expected);
    });

    it ("should return 'No such cat.' if cat name cannot be found", () => {
        const actual = getHeightAndWeightByName(catBreeds, "Cattycat");
        expect(actual).to.equal('No such cat.');
    })
})