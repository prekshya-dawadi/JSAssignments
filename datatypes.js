// Primitive Datatypes 


// Datatype 1: Number 

let num1 = 12 // integer
let num2 = 12.33 //float
console.log(num1 + num2)
// coderunner: ctrl+alt+n
console.log(1/0) // infinity data-type
//max error: NaN not a number


//Datatype2: String

// no difference between single and double quote 
// Back-tick- string with some additional calculations involved can be easily taken in. 
console.log("sum1"+"sum2")
// Javascript strings immutable. immutable - cannot be changed
str1 = "Supriya"
str1[0] = "Y"
console.log(str1[0])
console.log(str1.toUpperCase())


//Datatype3: Boolean
let bool2 = 4>1
console.log(bool2)


//Datatype3: Null
let var1=null

//Datatype4: Undefined







// 

//Datatype1: Big Integer
let val = 1234n
console.log(typeof(val))

//Datatype2: 



//Datatype3: Objects
let obj1 = {
    name: "Supriya",
    surname: "Khadka"
}
console.log(typeof(obj1))



//Variables:
// difference between var and let. 
// 1. let is block scoped and var is function scoped
// 2. 'let' doesnot let you redefine a variable, var does.
if(true){
    let color1 = 'red'
    var color2 = 'blue'
}
console.log(color2) // only recognizes this

function showColor(){
    var color3  = "white"
}



// hoisting 
//initializing is hoisted by var
color = "green"
console.log(color)
var color;


