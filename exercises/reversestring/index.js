// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

const string = "apple"

function reverse(str) {

    // let string =  str.split('').reverse().join('');
    // return string;
    debugger;
    let reversed = '';
    for(let s of str){
        reversed = s + reversed;
    }
    return reversed;
}

reverse(string)

module.exports = reverse;


