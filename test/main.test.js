const { expect } = require("chai");
const { catBreeds } = require("../src/cat-breeds");
const { 
    findCatById, 
    getHeightAndWeightByName,
    getNamesByCountry,
} = require("../src/main");

describe("findCatById", () => {
    it("should return the cat name associated with the given id", () => {
        const expected = "Abyssinian";
        const actual = findCatById(catBreeds, "abys");
        expect(actual).to.equal(expected);
    });

    it ("should return 'null' if id cannot be found", () => {
        const actual = findCatById(catBreeds, "frosted");
        expect(actual).to.be.null;
    });
});

describe ("getHeightAndWeightByName", () => {
    it ("should return an object containing given cat's height and weight", () => {
        const actual = getHeightAndWeightByName(catBreeds, "Abyssinian");
        const expected = { 'height': 1445, 'weight': '7  -  10' };
        expect(actual).to.eql(expected);
    });

    it ("should convert 'name' to title case", () => {
        const actual = getHeightAndWeightByName(catBreeds, "ABYSSINIAN");
        const expected = { 'height': 1445, 'weight': '7  -  10' };
        expect(actual).to.eql(expected);
    });

    it ("should return 'No such cat.' if cat name cannot be found", () => {
        const actual = getHeightAndWeightByName(catBreeds, "Cattycat");
        expect(actual).to.equal('No such cat.');
    });
});

describe ("getNamesByCountry", () => {
    it ("should return an array of all cat names associated with a given country", () => {
        const actual = getNamesByCountry(catBreeds, "Canada");
        const expected = ["Cymric", "Sphynx", "Tonkinese"];
        expect(actual).to.eql(expected);
    });

    it ("should convert 'country' to title case", () => {
        const actual = getNamesByCountry(catBreeds, "CANADA");
        const expected = ["Cymric", "Sphynx", "Tonkinese"];
        expect(actual).to.eql(expected);
    });

//error handling//
    it ("should return 'null' if no cats can be found", () => {
        const actual = getNamesByCountry(catBreeds, "India");
        expect(actual).to.be.null;
    });

    it ("should return 'false' if no country is given", () => {
        const actual = getNamesByCountry(catBreeds);
        expect(actual).to.be.false;
    });
})