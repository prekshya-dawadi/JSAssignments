//Find the largest number in an array using arrow functions

let largestNum = (array) => {
    let largest
    for (let i = 0; i<array.length; i++){
        if(array[i] < array[i+1]){
            largest = array[i+1]
        }
    }

    return largest
}

console.log(largestNum([0,1,2,3,4]))