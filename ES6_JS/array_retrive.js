// let num=[10,20,30,40,50];
// document.writeln(num)
// document.writeln("<br/>")
// // retrieve using for loop
// for (let i=0;i<num.length;i++){
//     document.writeln("<br/> value is "+num[i]+" at index "+i)
// }
// document.writeln("<br/>")
// // retrieve using forIn loop
// for (let i in num){
//     document.writeln("<br/> value is "+num[i]+" at index "+i)
// }
// document.writeln("<br/>")
// // retrieve using forOf loop
// for (let n of num){
//     document.writeln("<br/> value is "+n)
// }



//retrieve using forEach loop with CALLBACK
// num.forEach(displayValue)

// function displayValue(value,index){
//     document.writeln("<br/> value is "+value+" index is "+index);
// }
// document.writeln("<br/>")
// document.writeln("<br/> Retrieve using forEach loop with callback with expression style <br/>")
// num.forEach(function(value,index,array){
//     document.writeln("<br/> Value is "+value+" idex is "+index+" array is "+array);
// })
// document.writeln("<br/>")
// document.writeln("<br/> Retrieve using forEach loop with callback with expression style <br/>")
// num.forEach((value,index)=>document.writeln("<br/> Value is "+value+"idex is "+index));


// ForOf Loop
let cars =["audi","tata","reno","suzuki"]
for (let n of cars){
    document.writeln("<br/> my car is "+n)
}

// For