let num1 = [11,22,33,44,55,66,77,88]      //Literal style
let num2 = new Array(11,22,33,44,55,66,77,88)

console.log(num1)             //display elements in string format divided by ","
console.log(num2)

console.log(num1.join(":"))    // separated by ":"
console.log(num2.join("|"))     //separated by "|"

num1.push(100)                 // push---it add elements at LAST
num1.push(500)
num2.push(200)
num2.push(600)

num1.unshift(1000)           // push---it add elements at BEGINING
num1.unshift(1111)
num2.unshift(2000)
num2.unshift(2222)

console.log(num1)
console.log(num2)

num1.pop()
num1.shift()

num2.pop()
num2.shift()

console.log(num1)
console.log(num2)