
const a = 57; 
const b = 42;

let flip = a ^ b;
let count = 0;

while (flip) {
    const rsb = flip & -flip;
    flip = flip - rsb;
    count++;
}

console.log(count);

