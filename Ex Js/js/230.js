let radius = 9


// Perimeter: 31.42
// Area: 78.54

let per = (2 * Math.PI * radius).toFixed(2);
let are = (Math.PI * Math.pow(radius, 2)).toFixed(2);

console.log(`Perimeter: ${per}`)
console.log(`Area: ${are}`)