// class Product {
//     pid = 100;
//     pname = "TV";
//     price = 56000;

//     displayProduct() {
//     document.writeln("Product Details:<br>");
//     document.writeln("Product ID: " + this.pid + "<br>");
//     document.writeln("Product Name: " + this.pname + "<br>");
//     document.writeln("Product Price: " + this.price + "<br>");
//     }
// }


// let product1 = new Product();
// product1.displayProduct();


// class Product {

//     constructor(pid,pname,price){
//         this.pid = pid;
//         this.pname = pname;
//         this.price = price;
//     }
//     displayProduct() {
//     document.writeln("Product Details:<br>");
//     document.writeln("Product ID: " + this.pid + "<br>");
//     document.writeln("Product Name: " + this.pname + "<br>");
//     document.writeln("Product Price: " + this.price + "<br>");
//     }
// }


// let product1 = new Product(100,"TV",56000);
// let product2 = new Product(101,"Refrigerator",30000);
// product1.displayProduct();
// product2.displayProduct();




// Create a Class method named "age", that returns the Car age:
// class Car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;

//   }
//   age() {
//     const date = new Date();
//     return date.getFullYear() - this.year;
//   }
// }

// const myCar = new Car("Ford", 1997);
// document.writeln("My car is " + myCar.age() + " years old.");



// You can send parameters to Class methods:
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age(x) {
    return x - this.year;
  }
}

let date = new Date();
let year = date.getFullYear();

let myCar = new Car("Ford", 1997);
document.writeln("My car is " + myCar.age(year) + " years old.");