let a = 2
let b = 3
let c = 4

let C = (a + b + c).toFixed(2);
let p = (a + b + c) / 2;
let S = Math.sqrt(p * (p - a) * (p - b) * (p - c)).toFixed(2);


console.log(`C = ${C}`);
console.log(`S = ${S}`);
