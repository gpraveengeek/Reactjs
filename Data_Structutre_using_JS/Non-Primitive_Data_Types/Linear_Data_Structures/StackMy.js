class Praveen{
    constructor(){
        this.cont=[]
    }
    size(){
        return this.cont.length;
    }
    isEmpty(){
        return this.cont.length==1
    }
    push(element){
        if(this.cont.length<4){
            this.cont.push(element)
            return "Element added in stack as "+element
        }else{
            return "stack is overflow"
        }
    }
    pop(){
        if(ss.isEmpty()){
            return "stack is empty, underflow"
        }else{
            let topElement=this.cont.pop()
        }
    }
}
let ss = new Praveen
console.log(ss.size())
console.log("Is Empty "+ss.isEmpty())
console.log("push operation "+ss.push(111))
console.log("push operation "+ss.push(222))
console.log("push operation "+ss.push(333))
console.log("push operation "+ss.push(444))
console.log("push operation "+ss.push(555))
console.log("push operation "+ss.push(666))
console.log(ss.pop())