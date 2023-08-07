//accepts a string and Write a JavaScript function that
//accepts a string as a parameter and
// converts the first letter of each word into upper case.


let capitalize = (str) => {
    let strArray = str.split(" ")

    capString = strArray.map(element => {
        let first = element.slice(0,1)
        let others = element.slice(1)
        return (first.toUpperCase() + others)
    })
    return capString.join(" ")
}

let str = prompt("Enter a string to capitalize")
console.log(capitalize(str))