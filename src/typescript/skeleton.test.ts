import {
  sum,
  wordCount,
  likes,
  spinWords,
  spinWordsWithMap,
  outlier,
  cakes,
  fixTheMeerkat,
} from "./skeleton";

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

test("Returns outlier from odd/even array input", () => {
  expect(outlier([1, 3, 5, 7, 9, 10])).toBe(10);
  expect(outlier([160, 3, 1719, 19, 11, 13, -21])).toBe(160);
  expect(outlier([2, 4, 0, 100, 4, 11, 2602, 36])).toBe(11);
});

test("Return 'like' text output for given number of names", () => {
  expect(likes([])).toBe("No one likes this");
  expect(likes(["Peter"])).toBe("Peter likes this");
  expect(likes(["Jacob", "Alex"])).toBe("Jacob and Alex like this");
  expect(likes(["Max", "John", "Mark"])).toBe("Max, John and Mark like this");
  expect(likes(["Alex", "Jacob", "Mark", "Max"])).toBe(
    "Alex, Jacob and 2 others like this",
  );
});

test("Returns a sentence with words over 5 characters reversed.", () => {
  expect(spinWords("Hey fellow warriors")).toBe("Hey wollef sroirraw");
  expect(spinWords("This is a test")).toBe("This is a test");
  expect(spinWords("This is another test")).toBe("This is rehtona test");
});

test("Returns a sentence with words over 5 characters reversed.", () => {
  expect(spinWordsWithMap("Hey fellow warriors")).toBe("Hey wollef sroirraw");
  expect(spinWordsWithMap("This is a test")).toBe("This is a test");
  expect(spinWordsWithMap("This is another test")).toBe("This is rehtona test");
});

test("something", () => {
  expect(
    cakes(
      { flour: 500, sugar: 200, eggs: 1 },
      { flour: 1200, sugar: 1200, eggs: 5, milk: 200 },
    ),
  ).toBe(2);
  expect(
    cakes(
      { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
      { sugar: 500, flour: 2000, milk: 2000 },
    ),
  ).toBe(0);
});

test("Animals wrong way round", () => {
  expect(fixTheMeerkat(["tail", "body", "head"])).toEqual([
    "head",
    "body",
    "tail",
  ]);
  expect(fixTheMeerkat(["tails", "body", "heads"])).toEqual([
    "heads",
    "body",
    "tails",
  ]);
  expect(fixTheMeerkat(["bottom", "middle", "top"])).toEqual([
    "top",
    "middle",
    "bottom",
  ]);
  expect(fixTheMeerkat(["ground", "rainbow", "sky"])).toEqual([
    "sky",
    "rainbow",
    "ground",
  ]);
  expect(fixTheMeerkat(["lower legs", "torso", "upper legs"])).toEqual([
    "upper legs",
    "torso",
    "lower legs",
  ]);
});
