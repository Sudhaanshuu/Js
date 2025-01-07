let list = ["S", "W", "G"]

let botChoose = Math.round(Math.random() * 4);
botChoose = list[botChoose - 1];
let youChoose = prompt("Enter S W G");

alert(botChoose);
alert(youChoose);