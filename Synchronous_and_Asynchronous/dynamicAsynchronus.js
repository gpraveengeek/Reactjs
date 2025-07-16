function loadImage(){
    setTimeout(()=>{
        document.getElementById("image").style.display="block";
    },2000);
}
var obj;

function startTask() {
   // alert("Hello ")
obj = setInterval(startTaskAsync,1000)
}
let i=0;
function startTaskAsync() {
        document.getElementById("output").innerHTML = "Task is running " + i;
        document.getElementById("clock").innerHTML= new Date().toLocaleTimeString();
        if(i%2==0){
        document.getElementsByTagName("body")[0].style.backgroundColor = "yellow";
        document.getElementsByTagName("h2")[0].style.color = "red";
        document.getElementById("image").src = "pic_1.png"
        }else {
        document.getElementsByTagName("body")[0].style.backgroundColor = "lightgreen";
        document.getElementsByTagName("h2")[0].style.color = "blue";
        document.getElementById("image").src = "logo.png"
        }
        i++;
}
function stopTask() {
    clearInterval(obj);
}