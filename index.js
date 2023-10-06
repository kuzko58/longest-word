/**
 * 
Given a sentence with multiple lowercase words separated by spaces, write a Javascript function that finds and returns the 
longest word in the sentence. If there are multiple words of the same length, choose one that has the highest number of vowels. 
Ignore any character in the sentence that is not an English letter or a space. Find the most efficient way to achieve this.

Sample input:

“Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers” (Socrates)

Sample output:

“experience”

Explanation: 

Longest words are “everything” and “experience”, but the second has the most vowels

Notes:

The time limit should be 5-10 minutes
The final code (one file only, pure JS) should be uploaded on a public GitHub repository
Along with the code, you will also record a video where you will share your screen and verbally explain how you 
would test your code for relevant scenarios against a set of inputs. You don’t need to explain the code itself, 
just the test scenarios. The video should not be longer than 1 minute.
You will be evaluated for both correctness, proper requirement understanding and presentation abilities.
 */

const isEnglishLetter = (char) => {
  const charCode = char.charCodeAt(0);
  return (
    (charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)
  );
};

const isSpace = (char) => {
  return char.charCodeAt(0) === 32;
};

const isVowel = (char) => {
  const vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
    A: true,
    E: true,
    I: true,
    O: true,
    U: true,
  };

  return vowels[char];
};

const findLongestWord = (sentence) => {
  let longestWord = "";
  let longestWordCount = 0;
  let longestWordVowelCount = 0;
  let currentWord = "";
  let currentWordCount = 0;
  let currentWordVowelCount = 0;

  for (let i = 0; i <= sentence.length; i += 1) {
    let char = sentence[i];

    // Checks for end of word or end of string
    if (!char || isSpace(char)) {
      if (
        currentWordCount > longestWordCount ||
        (currentWordCount === longestWordCount &&
          currentWordVowelCount > longestWordVowelCount)
      ) {
        longestWord = currentWord;
        longestWordCount = currentWordCount;
        longestWordVowelCount = currentWordVowelCount;
      }

      currentWord = "";
      currentWordCount = 0;
      currentWordVowelCount = 0;
    } else if (isEnglishLetter(char)) {
      currentWord += char;
      currentWordCount += 1;
      if (isVowel(char)) {
        currentWordVowelCount += 1;
      }
    }
  }
  return longestWord;
};

console.log(
  findLongestWord(
    "Smart people learn from everything and everyone, average people from their experience, stupid people already have all the answers"
  )
); // Output: "experience"
console.log(findLongestWord("The quick brown fox jumps over the lazy dog")); // Output: "quick"
console.log(findLongestWord("He$llo world")); // Output: "Hello"
console.log(findLongestWord("")); // Output: ""
console.log(findLongestWord("12345 abcde")); // Output: "abcde"
