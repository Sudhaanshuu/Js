let theGivenArraysList = [1, 4, 5, 2, 42, 46, 2354, 542];
let theGivenArraysListTwo = [10, 42, 55, 267, 422, 146, 24, 2];

console.log(theGivenArraysList);

//^ Delete
delete theGivenArraysList[0];
console.log(theGivenArraysList, theGivenArraysList.length);

//^ Concat
let temp = theGivenArraysList.concat(theGivenArraysListTwo);
console.log(temp);

//^ sort


const s = (a, b) => {
    return a - b;
}

theGivenArraysList.sort(s);
console.log(theGivenArraysList);

theGivenArraysList.reverse();
console.log(theGivenArraysList);

//^ splice and slice

theGivenArraysList.splice(3, 2, 54, 89);
console.log(theGivenArraysList);

//^ slice
let newArr = theGivenArraysList.slice(4);
console.log(newArr);
let newArr2 = theGivenArraysList.slice(2, 4);
console.log(newArr2);