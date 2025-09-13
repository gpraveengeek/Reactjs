class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
}
class LinkedList{               //linkedlist created class object created with head null
    constructor(){
        this.head=null //head is null
    }
append(data){
    let newNode = new Node(data)      //new node is crated with data =10
    // console.log(newNode)
    // here nodes are created 10,20,30 but the links are not connected i.e, next is null

    console.log(this.head)       //initially the head is null
    if (!this.head){             //perform this task when head proportey is not null
        this.head=newNode           //if head is not equal to zero, then newNode = new Node(data) i.e.10
        //here this.node is current node, head is reference of node class first time
        return;
    }

    let current = this.head        //this.head is our current node; at creating time current = null
    while(current.next){
        current= current.next
    }
    current.next= newNode
    // console.log(current.next)
}
}
let ll = new LinkedList() //after memory creation the head is null
// console.log(ll)
ll.append(10)            //we are adding data into head
ll.append(20)
ll.append(30)