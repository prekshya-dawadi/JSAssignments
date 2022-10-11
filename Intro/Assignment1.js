// A function to check if the number is positive.
let num1 = -1; 

function checkPositive(num1){
    if(num1 > 0){
        return "positive"
    } else{
        return "negative"
    }
}

console.log(`The given number is ${checkPositive(num1)}`)

//Method2 
let num2 = -1; 

function checkPositive(num2){
    let output;
   output =  (num2 > 0)?"positive":"negative"
    return output
}

console.log(`The given number is ${checkPositive(num2)}`)
