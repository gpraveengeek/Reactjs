class TreeNode{
    constructor(value){
        this.value=value
        this.children=[]
    }
addChild(childNode){
    this.children.push(childNode)
}}
class Tree{
    constructor(rootValue){
            this.root=new TreeNode(rootValue)
        }
    }
let tree = new Tree("root")
// console.log(tree.root)
let child1 = new Tree("child1")
let child2 = new Tree("child2")
let child3 = new Tree("child3")

let grandchild1 = new Tree("Grandchild1")
let grandchild2 = new Tree("Grandchild2")

let grandGrandchild1 = new Tree("Grandgrandchild1")
let grandGrandchild2 = new Tree("Grandgrandchild2")

tree.root.addChild(child1)
tree.root.addChild(child2)
tree.root.addChild(child3)

child1.root.addChild(grandchild1)
child2.root.addChild(grandchild2)

grandchild1.root.addChild(grandGrandchild1)
grandchild2.root.addChild(grandGrandchild2)

// console.log(tree.root)

console.log(child1.root)
// console.log(child2.root)
// console.log(child3.root)