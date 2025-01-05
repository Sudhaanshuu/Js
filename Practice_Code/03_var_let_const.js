console.log("Hi Js pratise");

var suku = "Hi Sudhanshu";

console.log(suku);
var suku = "Byee";
console.log(suku);

//^ Not Possible 
let su = "hi";
// let su="Byee";


//!issues with var: 

var s = "hi"; {
    var s = "byee";
    console.log(s);
}
console.log("\n values" + s);



//! No Issues with let
console.log("\n new code\n")
let k = "sukdahnsu"; {
    let k = "Kumar";
    console.log(k);
}
console.log(k);


const name = "sudhanshu";


//* Null and undefined
console.log("Undefine and nulls\n");

let sp = null;
let kp = undefined;

console.log(sp);
console.log(kp);