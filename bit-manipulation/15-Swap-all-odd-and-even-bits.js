let n = 50;

const oddMask = 0x55555555;
// console.log(oddMask.toString(2));
const evenMask = 0xAAAAAAAA;
// console.log(evenMask.toString(2));

let odd = (n & oddMask);
let even = (n & evenMask);

odd = odd << 1;
even = even >> 1;

console.log("Bef: " + n.toString(2));
n = odd | even;
console.log("Aft: " + n.toString(2));
