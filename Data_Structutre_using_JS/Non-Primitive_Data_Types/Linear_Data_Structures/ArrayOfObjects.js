let item1 = {id:100, name:"apple", price:125}
let item2 = {id:101, name:"banana", price:80}
let item3 = {id:102, name:"pineapple", price:85}
let item4 = {id:103, name:"orange", price:140}
let item5 = {id:104, name:"papaya", price:50}

let listOfItems = []
listOfItems.push(item1)
listOfItems.push(item2)
listOfItems.push(item3)
listOfItems.push(item4)
listOfItems.push(item5)

console.log(listOfItems)

console.log("Number of Items are "+listOfItems.length)

console.log("----------------------------------------")
let items=listOfItems[3]
console.log("ID is "+items.id)
console.log("Name is "+items.name)
console.log("Price is "+items.price)

console.log(items)

console.log("----------------------------------------")
let searchItemObject = listOfItems.find(it=>it.id==1007)
if (searchItemObject==undefined){
    console.log("Object not present")
}else{
    console.log(searchItemObject)
}

console.log("----------------------------------------")
let priceConditionItem = listOfItems.filter(it=>it.price>80)
console.log(priceConditionItem)

console.log("----------------------------------------")
let checkSomeCondition = listOfItems.some(it=>it.price>60)
console.log(checkSomeCondition)

console.log("----------------------------------------")
let updatePrice = listOfItems.map(it=>{
    it.price=it.price+it.price*0.10;
    return it;
})
console.log(updatePrice)