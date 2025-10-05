class Person{
    constructor(name,age,city){
        this.name=name
        this.age=age
        this.city=city
    }
displayPersonInfo(){
    console.log("My name is "+this.name+" & i am "+this.age+" years of age "+"from "+this.city)
}
}
module.exports = Person;