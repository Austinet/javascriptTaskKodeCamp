//Write a function to check if a number is prime or not

function checkPrime(num) {
    let isPrime = true;
    
    isPrime = num <= 0 ?  false : true
    
    for (let i = 2; i < num; i++) {
        if (num % i === 0)
        {
            isPrime = false;
         }
    }
    
    message = isPrime ? `${num} is a prime number` : `${num} is not a prime number`
    return message
}

let num = Number(prompt("Enter a number to check if it's a prime number or not"))
alert(checkPrime(num));