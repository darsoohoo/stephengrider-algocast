/*
Take two positive numbers as strings, and return the sum of them. E.g. "3.14" + "0.9" => "4.04".
 
Test cases:
 
 "3.14" + "0.9" => "4.04"
 "3.14" + "1.9" => "5.04"
 "3.14" + "1.09" => "4.23"
 "9" +  "3.14"  => "12.14"
 "3.14" + "90" => "93.14"
 "3" + "9" => "12"
 "100000000000000000000000000000001" + "100000000000000000000000000000002" => "200000000000000000000000000000003"
*/



/*
function sum(n1, n2) {
    let sum = parseFloat(n1) + parseFloat(n2)
    return sum;
}

const one = "3.14"
const two = "1.9"

console.log(sum(one, two)

*/

const string = "Who wants hot watermelon?"

function firstDistinct(str) {
    const charMap = {};
    let maxChar = ''
    let indexOfFirstDistinct = 0

    for ( let char of str) {
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }
    var size = 0, key;
    for(let key in charMap) {
        if (charMap.hasOwnProperty(key)) size++;
        
    }

}

firstDistinct(string)