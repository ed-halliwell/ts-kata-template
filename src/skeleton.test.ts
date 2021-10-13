import { sum, wordCount, likes, spinWords, spinWordsWithMap } from "./skeleton";

test("sum adds two numbers", () => {
  expect(sum(4, 3)).toBe(7);
});

test("count the number of words, minus the exceptions", () => {
  expect(wordCount("Hello there, little user5453 374 ())$.")).toBe(4);
  expect(
    wordCount(
      "I’d been using my sphere as a stool. I traced counterclockwise circles on it with my fingertips and it shrank until I could palm it. My bolt had shifted while I’d been sitting. I pulled it up and yanked the pleats straight as I careered around tables, chairs, globes, and slow-moving fraas. I passed under a stone arch into the Scriptorium. The place smelled richly of ink. Maybe it was because an ancient fraa and his two fids were copying out books there. But I wondered how long it would take to stop smelling that way if no one ever used it at all; a lot of ink had been spent there, and the wet smell of it must be deep into everything.",
    ),
  ).toBe(112);
  expect(wordCount("a the on at of upon in as")).toBe(0);
});

test("Return 'like' text output for given number of names", () => {
  expect(likes([]).match("No one likes this"));
  expect(likes(["Peter"]).match("Peter likes this"));
  expect(likes(["Jacob", "Alex"]).match("Jacob and Alex like this"));
  expect(likes(["Max", "John", "Mark"]).match("Max, John and Mark like this"));
  expect(
    likes(["Alex", "Jacob", "Mark", "Max"]).match(
      "Alex, Jacob and 2 others like this",
    ),
  );
});

test("Returns a sentence with words over 5 characters reversed.", () => {
  expect(spinWords("Hey fellow warriors").match("Hey wollef sroirraw"));
  expect(spinWords("This is a test").match("This is a test"));
  expect(spinWords("This is another test").match("This is rehtona test"));
});

test("Returns a sentence with words over 5 characters reversed.", () => {
  expect(spinWordsWithMap("Hey fellow warriors").match("Hey wollef sroirraw"));
  expect(spinWordsWithMap("This is a test").match("This is a test"));
  expect(
    spinWordsWithMap("This is another test").match("This is rehtona test"),
  );
});
