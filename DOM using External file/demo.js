var h1TagCount = document.getElementsByTagName("h2").length
alert(h1TagCount)
for (var i=0;i<h1TagCount;i++){
    var h1TagValue=document.getElementsByTagName("h2")[i].innerHTML;
    console.log(h1TagValue)
}