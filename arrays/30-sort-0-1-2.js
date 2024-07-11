let arr = [0, 1, 2, 0, 1, 2, 1, 2, 0, 0, 0, 1];

//approach-01
// arr.sort();
// console.log(arr);

//appoach-02
let count0 = 0,
	count1 = 1,
	count2 = 2;

for (let i = 0; i < arr.length; i++) {
	if (arr[i] == 0) count0++;
	else if (arr[i] == 1) count1++;
	else count2++;
}

console.log(count0, count1, count2)

for (let i = 0; i < count0; i++) arr[i] = 0;
console.log(arr)

for (let i = count0; i < count0 + count1 - 1; i++) arr[i] = 1;
console.log(arr);

for (let i = count0 + count1 - 1; i < arr.length; i++) arr[i] = 2;
console.log(arr)
