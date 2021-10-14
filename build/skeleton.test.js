"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skeleton_1 = require("./skeleton");
test("sum adds two numbers", () => {
    expect(skeleton_1.sum(4, 3)).toBe(7);
});
test("count the number of words, minus the exceptions", () => {
    expect(skeleton_1.wordCount("Hello there, little user5453 374 ())$.")).toBe(4);
    expect(skeleton_1.wordCount("I’d been using my sphere as a stool. I traced counterclockwise circles on it with my fingertips and it shrank until I could palm it. My bolt had shifted while I’d been sitting. I pulled it up and yanked the pleats straight as I careered around tables, chairs, globes, and slow-moving fraas. I passed under a stone arch into the Scriptorium. The place smelled richly of ink. Maybe it was because an ancient fraa and his two fids were copying out books there. But I wondered how long it would take to stop smelling that way if no one ever used it at all; a lot of ink had been spent there, and the wet smell of it must be deep into everything.")).toBe(112);
    expect(skeleton_1.wordCount("a the on at of upon in as")).toBe(0);
});
test("Return 'like' text output for given number of names", () => {
    expect(skeleton_1.likes([]).match("No one likes this"));
    expect(skeleton_1.likes(["Peter"]).match("Peter likes this"));
    expect(skeleton_1.likes(["Jacob", "Alex"]).match("Jacob and Alex like this"));
    expect(skeleton_1.likes(["Max", "John", "Mark"]).match("Max, John and Mark like this"));
    expect(skeleton_1.likes(["Alex", "Jacob", "Mark", "Max"]).match("Alex, Jacob and 2 others like this"));
});
test("Returns a sentence with words over 5 characters reversed.", () => {
    expect(skeleton_1.spinWords("Hey fellow warriors").match("Hey wollef sroirraw"));
    expect(skeleton_1.spinWords("This is a test").match("This is a test"));
    expect(skeleton_1.spinWords("This is another test").match("This is rehtona test"));
});
test("Returns a sentence with words over 5 characters reversed.", () => {
    expect(skeleton_1.spinWordsWithMap("Hey fellow warriors").match("Hey wollef sroirraw"));
    expect(skeleton_1.spinWordsWithMap("This is a test").match("This is a test"));
    expect(skeleton_1.spinWordsWithMap("This is another test").match("This is rehtona test"));
});
test("Returns outlier from odd/even array input", () => {
    // expect(outlier([1, 3, 5, 7, 9, 10]).toBe(10));
    // expect(outlier([160, 3, 1719, 19, 11, 13, -21]).toBe(160));
    // expect(outlier([2, 4, 0, 100, 4, 11, 2602, 36]).toBe(11));
});
//# sourceMappingURL=skeleton.test.js.map