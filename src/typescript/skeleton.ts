/**
 * Adds together two numbers
 * @param a - the first number to add
 * @param b - the second number to add
 * @returns the total
 */
export function sum(a: number, b: number): number {
  return a + b;
}

/**
 * Takes a string and counts the number of words, minus the exceptions given.
 * @param inputString - the provided string / sentence
 * @returns the word count
 */
export function wordCount(inputString: string): number {
  let count: number = 0;
  const exclusions = ["a", "the", "on", "at", "of", "upon", "in", "as"];
  let stringSplit = inputString
    .replace(/([^A-Za-z\s])/g, " ")
    .replace(/\s\s+/g, " ")
    .trim()
    .toLowerCase()
    .split(" ");
  for (let string of stringSplit) {
    if (!exclusions.includes(string.toLowerCase())) count++;
  }
  return count;
}

/**
 * Takes an array of names and outputs a 'like' sentence.
 * @param names: string[]  - the provided list of names
 * @returns a string, like 'X likes this' or 'X and Y like this'
 */
export function likes(names: string[]): string {
  if (names.length === 1) return `${names[0]} likes this`;
  if (names.length === 2) return `${names[0]} and ${names[1]} like this`;
  if (names.length === 3)
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  if (names.length > 3)
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  else return "No one likes this";
}

/**
 * Takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed
 * @param inputString: string - the provided string
 * @returns a string with words over 5 characters reversed
 */
export function spinWords(inputString: string): string {
  let outputWords = [];
  let splitWords = inputString.split(" ");
  for (let word of splitWords) {
    if (word.length >= 5) {
      outputWords.push(word.split("").reverse().join(""));
    } else {
      outputWords.push(word);
    }
  }
  return outputWords.join(" ").trim();
}

/**
 * Solution uses map. Takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed
 * @param inputString: string - the provided string
 * @returns a string with words over 5 characters reversed
 */
export function spinWordsWithMap(inputString: string): string {
  let outputWords: string[] = [];
  let splitWords: string[] = inputString.split(" ");
  splitWords.map((word: string) => {
    word.length >= 5
      ? outputWords.push(word.split("").reverse().join(""))
      : outputWords.push(word);
  });
  return outputWords.join(" ").trim();
}

/**
 * You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

/**
 * Takes an array of either odd or even integrers, EXCEPT one value - this method finds and return the outlier
 * @param array: number[] - given array of numbers (odd or even, except one value)
 * @returns answer: number the outlier value
 */
export function outlier(array: number[]): number {
  //declare variables
  let answer: number = 0,
    evenCount: number = 0,
    oddCount: number = 0;

  //determine whether the array has odds or evens, need to check 3 elements to be sure
  array[0] % 2 === 0 ? evenCount++ : oddCount++;
  array[1] % 2 === 0 ? evenCount++ : oddCount++;
  array[2] % 2 === 0 ? evenCount++ : oddCount++;

  //if the list is even then select the odd element and set it to answer
  if (evenCount > oddCount) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 !== 0) {
        answer = array[i];
      }
    }
  }
  //if the list is odd then select the even element and set it to answer
  else {
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
        answer = array[i];
      }
    }
  }
  return answer;
}

// Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

// Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

// Examples:

// // must return 2
// cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200});
// // must return 0
// cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});

// Write a test for the next bit of functionality you want to add.
// Write the functional code until the test passes.
// Refactor both new and old code to make it well structured.
