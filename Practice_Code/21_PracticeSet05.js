//! Q1

// let suku = [1, 453, 223, 567]
// let ku = [1, 453, 223, 567]

// let userEnterNumber = 67;
// suku.push(userEnterNumber);
// console.log(suku);

// ku.unshift(67);
// console.log(ku);

//! Q2
// let suku = [1, 453, 223, 567]

// let userEnterNumber;
// do {
//     userEnterNumber = prompt("A number");
//     suku.push(userEnterNumber);
// } while (userEnterNumber != 0)
// console.log(suku);

//! Q3

// let suku = [1, 30, 50, 78, 3]

// let k = suku.filter((a) => {
//     return a % 10 == 0
// })

// console.log(suku)
// console.log(k)

//! Q4
// let givenArray = [2, 46, 2, 4, 8]

// let suku = givenArray.map((s) => {
//     return s * s;
// })
// console.log(suku);

//! Q5 
const fact = (a) => {
    let fact = 1;
    for (let i = 1; i <= a; i++) {
        fact *= i;
    }
    console.log(fact);
}
let givenArray = [2, 3, 4, 5, 6]

let suku = givenArray.reduce((a, b) => {
    return (a * b)
})
console.log(suku);