let age = 45;

function isAge(a) {
    if (a > 18) {
        console.log("You can drive ", a);
        return true;
    } else {
        console.log("You can drive ", a);
        return false;
    }
}
isAge(age);

console.log("you can ", age > 18 ? "drive" : "not drive")