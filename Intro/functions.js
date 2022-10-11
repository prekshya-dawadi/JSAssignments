let myName = "prekshya"

// Method 1
function showName1(myName){
    return myName
}

console.log(showName1(myName))

//Method 2
let showName2 = function(myName){
    return myName
}
console.log(showName2(myName))

//Method 3

showName3 = (myName) =>{
    return myName
}
console.log(showName3(myName))



// summing arrays using arrow function

let sumArray = (nums) => {
    let sum = 0
    for (let i = 0; i<nums.length; i++){
        sum += nums[i]
    }
    return sum
}
console.log(sumArray([1,2,3,4,5]))