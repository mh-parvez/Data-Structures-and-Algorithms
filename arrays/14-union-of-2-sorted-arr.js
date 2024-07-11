let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let union = new Set([...arr1, ...arr2]);

console.log(union);
