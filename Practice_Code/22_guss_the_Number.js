let guessNumber = Math.floor(Math.random() * 100);
let userEnterdNumber = 78;
let schoreOfThePlayers = 100;
do {
    schoreOfThePlayers--;
    if (guessNumber > userEnterdNumber) {
        console.log("Your number less than the guss number");
        userEnterdNumber = 78;
    } else {
        console.log("Your number is grater than the guss number");
        userEnterdNumber = 78;
    }

} while (guessNumber != userEnterdNumber)
console.log(guessNumber);