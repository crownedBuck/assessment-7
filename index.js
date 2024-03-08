// Sum Zero


const sumZero = (numb) => {

    let result = false

    for (let loopingNumb = 0; loopingNumb < numb.length; loopingNumb++) {
        if (numb.includes((numb[loopingNumb] * -1)) && numb[loopingNumb] !== 0) {
            result = true
            return result
        }

    }

    return result

}

const array1 = [14, 2, 43, -14]
const array2 = [3, 6, 9]
const array3 = [2, 8, 9, -2, 34]

console.log(sumZero(array1))
console.log(sumZero(array2))
console.log(sumZero(array3))

// Unique Characters
console.log("-----")

const uniqueLetteredWord = (str) => {

    let uniqueLetters = ""

    for (let loopingNumb = 0; loopingNumb < str.length; loopingNumb++){
        if (uniqueLetters.includes(str[loopingNumb]) === true) {
            return false
        }
        uniqueLetters += str[loopingNumb]
    }

    return true
}

let string1 = "race"
let string2 = "toothpaste"
let string3 = "supercalifragilisticexpialidocious"

console.log(uniqueLetteredWord(string1))
console.log(uniqueLetteredWord(string2))
console.log(uniqueLetteredWord(string3))

// Pangram Sentence
console.log("-----")

let allLetters = "abcdefghijklmnopqrstuvwxyz"

const checkPangram = (str) => {

    str = str.toLowerCase()
    return [...allLetters].every(x => str.includes(x)) 
    
    // will return true if ALL of the letters within allLetters are found in the string

}

string1 = "The quick brown fox jumps over the lazy dog!"
string2 = "I like cats, but not mice."
string3 = "abcde fghijk lmnop qrstuv wxyz"

console.log(checkPangram(string1))
console.log(checkPangram(string2))
console.log(checkPangram(string3))

// Longest Word
console.log("-----")

const find_longest_word = (arr) => {
    let lengthOfWord = 0

    for (let loopingNumb = 0; loopingNumb < arr.length; loopingNumb++) {
        if (lengthOfWord < arr[loopingNumb].length) {
            lengthOfWord = arr[loopingNumb].length
        }
    }

    return lengthOfWord
}

const array4 = ["bobby", "fine", "comb", "racecar"]
const array5 = ["pickles", "fruitrollups", "lengths", "puppy"]
const array6 = ["puppy", "popers", "crab", "supercalifragilisticexpialidocious"]

console.log(find_longest_word(array4))
console.log(find_longest_word(array5))
console.log(find_longest_word(array6))