function displayDomData(){
    //console.log("event fired")
    // creating new tag like p,div,h1 etc.,
    var fname = document.getElementById("fname").value;
    var age = document.getElementById("age").value;
    if(fname.length==0 || age.length==0){
        alert("please enter name or age")
    }else{
        var pTag = document.createElement("p");            //<p></p>
    var pTagContent = document.createTextNode("Welcome")          //Welcome content is ready
    var pTagContent=document.createTextNode("My name is "+fname+" & my age is "+age)  //content ready
    pTag.appendChild(pTagContent)              //<p>content which is ready</p>
    if (age>=30){
        pTag.setAttribute("class","abc")
    }else{
        pTag.setAttribute("class","xyz")
    }
    document.getElementsByTagName("body")[0].appendChild(pTag)   //pTag is added to body tag
    document.getElementById("fname").value=" "
    document.getElementById("age").value=" "
    }
    
}