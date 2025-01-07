// console.log(console)

// console.error("Got the fuking error");
// console.info("Hi");
// console.assert(44 > 66);
// console.assert(44 < 66);
// console.warn("Love You");
// console.table(console);
// console.time("Sudhanshu")
// console.timeEnd("Sudhanshu")
// console.timeLog()

//! video 27

// alert("Hi sudhanshu is working");

// let suku = prompt("Enter a value", "789");
// suku = Number.parseInt(suku);
// document.write(suku);
// alert(typeof suku);
//^ new stuff
// let valTaking = confirm("Want to edit anything");
// if (valTaking) {
//     document.write(valTaking);
// } else {
//     alert("Say yes");
// }

//! video 28

// console.log(window)
// console.table(document.body)

// document.body.style.background = 'red';

//!video 29
//~ Q1

// const checkDrivingCondictions = (a) => {
//     return a >= 18 ? true : false;
// }

// let ageOfTheUser = prompt("Enter Your age", "0 to 99");
// ageOfTheUser = Number.parseInt(ageOfTheUser);

// if (checkDrivingCondictions(ageOfTheUser)) {
//     alert("You can Drive");
// } else {

//     alert("You cant drive");
// }

//~Q2


// const checkDrivingCondictions = (a) => {
//     return a >= 18 ? true : false;
// }
// let repetTheLoop = true;
// while (repetTheLoop) {
//     let ageOfTheUser = prompt("Enter Your age", "0 to 99");
//     ageOfTheUser = Number.parseInt(ageOfTheUser);

//     if (checkDrivingCondictions(ageOfTheUser)) {
//         alert("You can Drive");
//     } else {
//         alert("You cant drive");

//     }
//     repetTheLoop = confirm("You want to play again");
// }

//~ Q3
// const checkDrivingCondictions = (a) => {
//     return a >= 18 ? true : false;
// }
// let repetTheLoop = true;
// while (repetTheLoop) {
//     let ageOfTheUser = prompt("Enter Your age", "0 to 99");
//     ageOfTheUser = Number.parseInt(ageOfTheUser);

//     if (ageOfTheUser < 0) {
//         console.error("negative age not possible");
//         break;
//     }

//     if (checkDrivingCondictions(ageOfTheUser)) {
//         alert("You can Drive");
//     } else {
//         alert("You cant drive");

//     }
//     repetTheLoop = confirm("You want to play again");
// }

//~ Q4

// let numBuUser = prompt("Ente a number ", "0 to 10");
// numBuUser = Number.parseInt(numBuUser);
// if (numBuUser > 4) {
//     location.href = "https://google.com";
// }


//~ Q5

let colorByUser = prompt("Enter the color");

document.body.style.background = colorByUser;