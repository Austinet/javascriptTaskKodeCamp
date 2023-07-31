//Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.

let longest = (str) => {
    let strArray = str.split(" ");
    let max = 0;
    let longest = ""
    strArray.forEach((element, index) => {
        if (element.length > max){
            max = element.length
            longest = element
        }
    })
    return longest
}

let str = prompt("Enter a string to determine the longest word")
let longestWord =`The longest word is "${longest(str)}"  with ${longest(str).length} characters `
alert(longestWord);