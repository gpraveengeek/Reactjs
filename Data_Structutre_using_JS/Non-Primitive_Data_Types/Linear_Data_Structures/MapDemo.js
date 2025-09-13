let mm = new Map();

mm.set(100,"praveen");
mm.set(104,"naveen");
mm.set(102,"raveen");
mm.set(106,"hraveen");

// console.log(mm)

// console.log("value "+mm.get(100))
// console.log("value "+mm.get(1000))


// console.log("remove info using key "+mm.delete(106))
// console.log("remove info using key "+mm.delete(1000))

// console.log(mm)

if (mm.has(100)){
    console.log("key is present")
}else{
    console.log("key is not present")
}