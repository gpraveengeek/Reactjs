function display1(){
console.log("Display2 function part of secondFile.js or secondFile module")
}

function display2(){
console.log("Display1 function part of secondFile.js or secondFile module")
}

module.exports = {display2,display1}