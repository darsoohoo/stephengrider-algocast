
// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let count = 0;
    const smallStr = str.toLowerCase()
    
    const checker = ['a','e','i','o','u']

    for(let i = 0; i < smallStr.length; i++) {
        if(checker.includes(smallStr[i])) {
            count++
        }
    }
    return count;
}

const str = "hI there!"
vowels(str)

module.exports = vowels;
