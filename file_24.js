// class -> Object

//     Instance Properties -> What They Have
//         - name
//         - description
//         - occupation
//     Instance Methods -> What They Do
//         - Play
//         - Run
//         - Stop
// classFile.js
exports.MyClass = class MyClass {
    constructor(name) {
      this.name = name;
    }
  
    greet() {
      console.log(`Hello, ${this.name}!`);
    }
  }

exports.Math = class Math{
    constructor(_x , _y , _z){
        console.log("My All Properties");
        this.x = _x;
        this.y = _y;
        this.z = _z;
    }
    coordinates() {
        return [this.x * this.x , this.y * this.y]
    }
}
// module.exports = {Math , MyClass};
if (require.main === module) {
    let firstCoordinate = new Math(3, 4, 0);
    console.log(firstCoordinate.coordinates());
}
