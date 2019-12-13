// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    // check if negative number

    let reversed;
    if(n > -1){
    // if its not negative convert it to a string, convert to array, reverse the array, convert it to a string, then to a number
    reversed = parseInt(n.toString().split('').reverse().join(''));

    } else {
    // if its negative, multiply by one to make it positive,convert it to a string, convert to array, reverse the array, convert it to a string, then to a number, multiply it by negative
    reversed = parseInt(Math.abs(n).toString().split('').reverse().join('')) * -1;
    }
    return reversed;
   
}
console.log(reverseInt(0))
module.exports = reverseInt;
