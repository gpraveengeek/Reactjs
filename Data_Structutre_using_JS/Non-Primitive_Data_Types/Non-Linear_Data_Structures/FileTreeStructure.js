class FileTree{
    constructor(name,type){
        this.name = name
        this.type = type
        this.children = []
    }
addchild(child){
    if(this.name=="file"){
        console.log("can't add this file")
    return;
    }
    this.children.push(child)
}
display(indent=0){
console.log(" ".repeat(indent)+""+this.name+" as a folder")
for(let child of this.children){
    if(child.type=="Folder"){
    child.display(indent+2)
    }else{
        console.log("".repeat(indent+2)+""+child.name+" as a File")
    }
}
}
}

let root = new FileTree("C Drive","Folder")
let Document = new FileTree("Document","Folder")
let Downloads = new FileTree("Downloads","Folder")
let Music = new FileTree("Music","Folder")
let ProgramFiles = new FileTree("ProgramFiles","Folder")

let Resume = new FileTree("resume.doc","File")
let photo = new FileTree("praveen.jpg","File")
let Nodejs = new FileTree("node.exe","File")
let Textfile = new FileTree("name.txt","File")
let song = new FileTree("hi.mp3","File")

let Pdffile = new FileTree("text.pdf","File")

root.addchild(Document)
root.addchild(Downloads)
root.addchild(Music)
root.addchild(ProgramFiles)

Document.addchild(Resume)
Document.addchild(Textfile)
Downloads.addchild(photo)
Music.addchild(song)
ProgramFiles.addchild(Nodejs)

Textfile.addchild(Pdffile)

console.log("---------------")
root.display()



