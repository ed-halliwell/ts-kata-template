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
 * Takes an array of either odd or even integrers, EXCEPT one value - this method finds and return the outlier
 * @param array: number[] - given array of numbers (odd or even, except one value)
 * @returns answer: number the outlier value
 */
export function outlier(array: number[]): number {
  //declare variables
  let answer: number = 0;
  let evenCount: number = 0;
  let oddCount: number = 0;

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

/**
 * Takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes that can be baked (integer)
 * @param recipe: object - an object of ingredients
 * @returns the number of cakes that can be baked
 */
export function cakes(
  recipe: { [k: string]: number },
  ingredients: { [k: string]: number },
): number {
  let array = [];
  for (let item in recipe) {
    array.push(Math.floor(ingredients[item] / recipe[item]));
  }
  return array.includes(NaN) ? 0 : Math.min(...array);
}

export function fixTheMeerkat(arr: string[]): string[] {
  let temp = arr[2];
  arr[2] = arr[0];
  arr[0] = temp;
  return arr;
}

/**
 * Given an string where each word contains a number, sort the words in the order of the numbers (ascending)
 * @param words: string - each word in the string will contain a single number
 * @returns a string with the words sorted in order
 */
export function order(words: string): string {
  if (words.length === 0) return "";
  let resultString = [];
  let wordArray = words.split(" ");
  for (let i = 1; i < wordArray.length + 1; i++) {
    resultString.push(wordArray.find((word: string) => word.includes(`${i}`)));
  }
  return resultString.join(" ").trim();
}
