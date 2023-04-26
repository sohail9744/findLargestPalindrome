//  Part second-------------------------------------------------------------------------------->
// Define a function that checks if a given string is a palindrome
function isPalindrome(newstr) {
  // Reverse the string using the split, reverse, and join methods
  const reversedStr = newstr.split("").reverse().join("");
  // Compare the original string to the reversed string
  return newstr === reversedStr;
}

//  Part first-------------------------------------------------------------------------------->
// Define a string to check for palindromes
const str = "Hello Mam, how are you. Madam, do you know racecar?";
// Initialize a variable to hold the largest palindrome found so far
let largestPalindrome = "";

// Loop over all possible substrings of the input string
for (let i = 0; i < str.length; i++) {
  for (let j = i + 1; j < str.length + 1; j++) {
    // Get the current substring
    const subStr = str.slice(i, j);
    // If the substring is a palindrome and longer than the current largest palindrome,
    // update the largest palindrome
    if (isPalindrome(subStr) && subStr.length > largestPalindrome.length) {
      largestPalindrome = subStr;
      // Print the largest palindrome found so far
      console.log(largestPalindrome);
    }
  }
}
