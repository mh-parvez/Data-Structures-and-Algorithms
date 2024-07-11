let arr = [1, 3, 4, 5, 6];

let missingNum = 0;

for (el of arr) {
	missingNum ^= el;
}

for (let i = 1; i <= arr[arr.length - 1]; i++) {
	missingNum ^= i;
}

console.log(missingNum);
