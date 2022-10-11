const pi = 3.14
let cylinder = {
    radius : 5,
    height : 5,
    area : function(){
        return pi * (this.radius**2) * this.height
    } 
}

console.log(cylinder.area())