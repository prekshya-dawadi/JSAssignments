let array1 = ['dogs', 'cats', 'rabbits', 'mice'];
let array2 = [];
array1.forEach(i=>{
    if(i.includes('a')){
        array2.push(i);
    }
})
console.log(array2);

//another method
console.log(array1.filter(array.includes('a')))