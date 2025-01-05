let theMarksOfStudent = [1, 4, 31, 23, 34, 56, 29, 9, null, "not given"];

console.log(theMarksOfStudent);
console.log(theMarksOfStudent[9]);
console.log(theMarksOfStudent[10]);

console.log(theMarksOfStudent.length);
theMarksOfStudent[10] = 86;
console.log(theMarksOfStudent[10]);

for (let a in theMarksOfStudent) {
    console.log("My student " + a + " is ", theMarksOfStudent[a]);
}

console.log(typeof(theMarksOfStudent));

for (let i = 0; i < theMarksOfStudent.length; i++) {
    console.log(theMarksOfStudent[i]);
}