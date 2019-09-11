// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

const string = "apple"

function reverse(str) {
  let reversed = str.split('').reverse().join('')
  return reversed;

}

reverse(string)

module.exports = reverse;

/*

function reverse(str) {
    let reversed = "";
    for(let i = 0; i < str.length; i++){
        reversed = str[i] + reversed;
    }
    return reversed;

}

*/


/*
    let reversed = "";
    for(let char of str) {
        reversed = char + reversed
    }
    return reversed
    */