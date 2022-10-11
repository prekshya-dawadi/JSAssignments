let square = {
    length :2,
    breadth:2,
    area1 : area
}

let rectangle = {
    length :2,
    breadth:3,
    area2 : area
}

function area(){
    return this.length * this.breadth
}


console.log(`Area of square: ${square.area1()}`)
console.log(`Area of rectangle: ${rectangle.area2()}`)
 