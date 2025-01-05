//^ Map

let givenArray = [1, 3, 4, 63, 1, 34];

console.log(givenArray);

let suku = givenArray.map((v, i, a) => {
    console.log(v, i, a);
    return v + 6;
})
console.log(suku);

//^ filter: 
let num = [1, 4, 5, 3, 4];

let newArr = num.filter((v) => {
    return v > 3;
})
console.log(newArr);

//^ reduce
console.log("New line\n\n");
let meWorking = [4, 6, 3, 2, 3, 2];

let ab = meWorking.reduce((a, b) => {
    return a + b;
})
console.log(ab);