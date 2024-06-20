
// 7n / 8  = 8n - n / 8 = ((n >> 3) - n) >> 3

const n = 10;
const result = ((n << 3) - n) >> 3;
console.log(result);
