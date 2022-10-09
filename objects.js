let obj2 = {
    firstName: 'prekshya',
    surname: 'dawadi',
    age: 21,
    showName : function (){
        return obj2.firstName + obj2.surname;
    }
}

console.log(obj2.firstName) 
//or 
console.log(obj2["firstName"])

//deletes age prop from obj2
delete obj2.age
