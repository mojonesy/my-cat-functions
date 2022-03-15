const { expect } = require("chai");
const catBreeds = require("../src/cat-breeds");
const findCatById = require("../src/main");

describe("findCatById", () => {
    it("should return the cat name associated with the given id", () => {
        const expected = "Abyssinian";
        const actual = findCatById(catBreeds, "abys");
        expect(actual).to.equal(expected);
    });
});