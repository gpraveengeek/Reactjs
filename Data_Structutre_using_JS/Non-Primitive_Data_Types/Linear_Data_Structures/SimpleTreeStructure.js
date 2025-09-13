class TreeNode {
    constructor(praveen){
    this.praveen = praveen
    this.child = []
}}
class Tree {
    constructor(rootValue){
        this.root = new Tree (rootValue)
    }
}
let tree = new Tree(root);
console.log(tree.root)