

const bin = (n) => n.toString(2);

const num = 20;
const rsb = num & -num;

console.log(`${num} = ${bin(rsb)}`);
