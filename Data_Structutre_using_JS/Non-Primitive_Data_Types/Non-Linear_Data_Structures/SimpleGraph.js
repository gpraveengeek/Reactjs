class Graph{
    constructor(){
        this.listofVertices={}
    }
addVertex(vertex){
    if(this.listofVertices[vertex]==undefined){
        this.listofVertices[vertex]=[]
        console.log("vertex or node with name"+vertex+"created"+this.listofVertices[vertex])
    }else{
        console.log(vertex+", vertex or node present")
    }
}
addEdge(vertex1,vertex2){
    if(this.listofVertices[vertex1]==undefined || this.listofVertices[vertex2]==undefined){
        console.log("may be any of the vertex is not present or not created")
    }else{
        let result = this.listofVertices[vertex1].find(v=>v==vertex2)
        if(result == undefined){
            this.listofVertices[vertex1].push(vertex2)
            console.log(vertex1+" connected to "+vertex2)
        }
    }
}
printGraph(){
    for(let vertex in this.listofVertices){
        if(this.listofVertices[vertex].length===0){
            console.log(vertex+" --->not connected to any other vertex")
        }else{
            console.log(vertex+" --->"+this.listofVertices[vertex].join(","))
        }
    }
}
}
let graph = new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("D")
console.log("----------------")
graph.addEdge("A","E")
graph.addEdge("A","B")
graph.addEdge("A","C")
graph.addEdge("A","D")
graph.addEdge("B","C")
graph.addEdge("B","D")
graph.addEdge("B","A")
console.log("----------------------")
graph.printGraph();