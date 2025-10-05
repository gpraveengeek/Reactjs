let first = require("./firstfile")
let second = require("./secondFile")
let Person = require("./Person")


first.display1();
first.display2();

second.display2();
second.display1();

let per1 = new Person("praveen",28,"karimnagar")
per1.displayPersonInfo();