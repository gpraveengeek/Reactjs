// Normal style function
function greeting(fname,callback){
    return "Welcome to my home "+fname
}
// Expression style function
let maleinfo = function(fname){
    return "Mr. "+fname;
}
// Arrow style function
let femaleinfo = (fname)=>"Miss "+fname;
document.writeln("<hr/>")
document.writeln(greeting("Praveen",maleinfo));
document.writeln("<hr/>")
document.writeln(greeting("Neha",femaleinfo));
document.writeln("<hr/>")
document.writeln(greeting("Gunnala",function(fname){
        return "Mr. "+fname;
    }));
document.writeln("<hr/>")
document.writeln(greeting("Bharathi",(fname)=>"Miss "+fname));
document.writeln("<hr/>")