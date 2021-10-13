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
  let count = 0;
  const exclusions = ["a", "the", "on", "at", "of", "upon", "in", "as"];
  let stringSplit = inputString.replace(/([^A-Za-z\s])/g, ' ').replace(/\s\s+/g, ' ').trim().toLowerCase().split(' ')
  for(let string of stringSplit) {
    if(!exclusions.includes(string.toLowerCase())) count++;
  }
  return count;
}

export function likes(names: string[]): string {
  if(names.length === 1) return `${names[0]} likes this`;
  if(names.length === 2) return `${names[0]} and ${names[1]} like this`;
  if(names.length === 3) return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  if(names.length > 3) return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  else return "No one likes this";
}



// Write a test for the next bit of functionality you want to add.
// Write the functional code until the test passes.
// Refactor both new and old code to make it well structured.