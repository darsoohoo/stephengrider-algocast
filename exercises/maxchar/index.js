// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

const string = "abcccccccd"


function maxChar(str) {
    // store characters in a map
    // interate through characters and push to object
    const filteredStr = str.split('').filter(elem => elem !== ' ')
    console.log("filterStr ", filteredStr)

    let map = {};
    let max = 0
    let mchar = ''
    for(let s of filteredStr) {
        if (map[s]) {
            map[s]++
        } else {
            map[s] = 1
        }
    }
    console.log(map)
 

    for(let key in map){
        if (map[key] > max){
            max = map[key]
            mchar = key; 
        }
    }
    return mchar;
    
}

console.log(maxChar(string))

module.exports = maxChar;


// function maxChar(str) {
//     // declare an object
//     // convert to array
//     // iterate through array
//     // store each character as a key in the object
//     // if key is already in object, increment by 1
//     // if key is not in object, set key value to 1
//     // After all characters are stored, iterate through the ojbect to find the largest value
//     const array = str.split("")
//     const noSpace = array.filter(arr => {
//         return arr != " "
//     })
//     let charMap = {};
//     for(let char of noSpace) {
//         if (charMap[char]) {
//             charMap[char]++;
//         } else {
//             charMap[char] = 1;
//         }
//     }
//     console.log(charMap)

//     let maxChar = ""
//     let max = 0;
//     for (let char in charMap) {
//         if( charMap[char] > max ) {
//             max = charMap[char]
//             maxChar = char;
//         }
//     }
//     return maxChar;
// }