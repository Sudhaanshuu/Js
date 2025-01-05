let myName = 'Sudhanshu';
console.log(myName.length);
let myName1 = "Sudhanshu'";
console.log(myName1.length);
let myName2 = "Sudhanshu\'\n";
console.log(myName2.length);
let myName3 = "sudhanshu";
console.log(myName3.toUpperCase());
console.log(myName3.toLowerCase());
//^ skicing
console.log(myName3.slice(2, 7))
console.log(myName3.slice(4))

//^ replace

console.log(myName3.replace("shu", "pra"));

console.log(myName3.concat(" is my ", myName2, "Okay").trim().length);

let myFinalName = "SudhanshuKumar";

console.log(myFinalName[0]);
console.log(myFinalName[1]);
console.log(myFinalName[2]);
console.log(myFinalName[3]);
console.log(myFinalName[4]);

for (let s = 0; s < myFinalName.length; s++) {
    console.log(myFinalName[s]);
}