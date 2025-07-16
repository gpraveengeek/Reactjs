// custom promise example 1
// let obj = new Promise((resolve,rejected)=> {
//     //resolve("Hello, this is a custom promise example!"),
//     rejected("This is an error message from the custom promise example! Error generated intentionally.");
// })


// obj.then(data=>console.log("then called "+data)).catch(error=>console.log("error called "+error));

// console.log("hello");
// console.log("hi");
// console.log("how r you");


// example 2
let obj = new Promise((resolve,reject)=>{
    let num = 11;
    if(num %2===0) resolve("number is even");
    else reject("number is odd");
});
obj.then((msg)=>console.log(msg)).catch((error)=>console.log(error));