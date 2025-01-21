let re = /\b[^aA\s]{6,}\b/g;

let str = "Happiness, Time, Task, Apple, Wonderful, Joyful"
let matches = str.match(re);

console.log(matches)