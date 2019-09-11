// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    // check if both strings are same length not including punctuations

    const checker = "abcdefghijklmnopqrstuvwxyz123456789"
    let aArray = []
    let bArray = []
    for(let i = 0; i < stringA.length; i++) {
        if (checker.includes(stringA[i])) {
            aArray.push(stringA[i])
        }
    }
   

    for(let i = 0; i < stringB.length; i++) {
        if (checker.includes(stringB[i])) {
            bArray.push(stringB[i])
        }
    }
    
    let newStringA = aArray.sort().join('')
    let newStringB = bArray.sort().join('')

    // check if each letter appears the same amount of times
    if (newStringA === newStringB) {
    
        return true;
    } else {
        return false;
    }

}

const strA = 'rail safety'
const strB = 'fairy tales'
anagrams(strA,strB)
module.exports = anagrams;
