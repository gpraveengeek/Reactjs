//sorting in asc and desc with one digit number
// let num1 = [9,5,1,6,4,7,3,9,5,3]
// console.log(num1)
// for(let n of num1){
//     console.log(n)
// }
// num1.sort()
// console.log("after sort ascending")
// for(let n of num1){
//     console.log(n)
// }
// num1.reverse()
// console.log("after sort dscending")
// for(let n of num1){
//     console.log(n)
// }

//sorting in asc and desc with more than one digit number
let num1 = [9,5,1,60,4,700,3,9,5,3000]
// console.log(num1)
// for(let n of num1){
//     console.log(n)
// }
// num1.sort((a,b)=>a-b)
// console.log("after sort ascending")
// for(let n of num1){
//     console.log(n)
// }
// num1.sort((a,b)=>b-a)
// console.log("after sort dscending")
// for(let n of num1){
//     console.log(n)
// }

//showing how (a,b) works
num1.sort((a,b)=>{
    console.log("a= "+a+" b= "+b)
    return a-b;
})