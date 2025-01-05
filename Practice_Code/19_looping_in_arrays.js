let num = [1, 4, 2, 46, 34];

for (let i = 0; i < num.length; i++) {
    console.log(num[i]);

}

num.forEach((e) => {
    console.log(e * e)
})


let myName = "Sudhanshu";

let newArray = Array.from(myName);
console.log(newArray);

//^ for of
for (let i of newArray) {
    console.log(i);
}
//^ for in
for (let i in newArray) {
    console.log(newArray[i]);
}