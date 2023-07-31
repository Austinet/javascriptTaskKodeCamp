//Write a JavaScript function that takes an array of numbers and finds the second lowest 
//and second greatest numbers, respectively.

function secondGreatestLowest(arr) {
    let sorted = arr.sort()
    return([sorted[1], sorted[sorted.length - 2]])
}

let arrNum = [5, 0, 1, 2, 4, 6, 3]

let second = secondGreatestLowest(arrNum)
let secondGL = `The second lowest number is ${second[0]} and the second largest number is ${second[1]}`
console.log(secondGL);