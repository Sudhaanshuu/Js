//Arrays methords

let theGivenArray = [1, 34, 63, 23, 56];
let temp = theGivenArray.toString();
console.log(temp);

let c = theGivenArray.join("_");
console.log(c);

let temp2 = theGivenArray.pop();
console.log(temp2, theGivenArray);
theGivenArray.push(67);
console.log(theGivenArray);

let su = theGivenArray.shift();
console.log(su, theGivenArray);
theGivenArray.unshift(54);
console.log(theGivenArray);