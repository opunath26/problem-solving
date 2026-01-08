// Problem 1: Reverse a String
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

    console.log(reverseString("hello"));

//--------------------------------------------

// Problem 2: Count Vowels in a String
function countVowels(str) {
  let count = 0;
  let vowels = "aeiouAEIOU";

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}

    console.log(countVowels("programming"));

//--------------------------------------------

// Problem 3: Check for Palindrome
function isPalindrome(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return str === reversed;
}

    console.log(isPalindrome("madam"));

//--------------------------------------------

// Problem 4: Find the Maximum Number
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

    console.log(findMax([5, 1, 9, 3]));

//--------------------------------------------

// Problem 5: Remove Duplicates from an Array
function removeDuplicates(arr) {
  let uniqueArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArray.includes(arr[i])) {
      uniqueArray.push(arr[i]);
    }
  }
  return uniqueArray;
}

    console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));

//--------------------------------------------

// Problem 6: Sum of All Numbers in an Array
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

    console.log(sumArray([1, 2, 3, 4]));

//--------------------------------------------

// Problem 7: Find Even Numbers in an Array
function findEvenNumbers(arr) {
  let evenNumbers = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNumbers.push(arr[i]);
    }
  }
  return evenNumbers;
}

    console.log(findEvenNumbers([1, 2, 3, 4, 5, 6]));

//--------------------------------------------

// Problem 8: Capitalize First Letter of Each Word
function capitalizeWords(str) {
  let words = str.split(" ");
  let result = [];

  for (let i = 0; i < words.length; i++) {
    let word =
      words[i].charAt(0).toUpperCase() + words[i].slice(1);
    result.push(word);
  }
  return result.join(" ");
}

    console.log(capitalizeWords("hello world")); 

//--------------------------------------------

// Problem 9: Find the Factorial of a Number
function factorial(num) {
  let result = 1;

  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}

    console.log(factorial(5));

//--------------------------------------------

// Problem 10: PingPong Challenge
function pingPong() {
  let output = [];

  for (let i = 1; i <= 20; i++) {
    
    if (i % 3 === 0 && i % 5 === 0) {
      output.push("PingPong");
    } 
    else if (i % 3 === 0) {
      output.push("Ping");
    } 
    else if (i % 5 === 0) {
      output.push("Pong");
    } 
    else {
      output.push(i);
    }
  }
  return output;
}

    console.log(pingPong());

//--------------------------------------------
