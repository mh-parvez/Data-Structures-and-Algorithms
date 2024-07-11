const arr = [2, 6, 5, 8, 11];
const target = 14;

//solution
let ans = [];
for (let i = 0; i < arr.length; i++) {
	for (let j = i + 1; j < arr.length; j++) {
		if (arr[i] + arr[j] == target) {
			ans = [arr[i], arr[j]];
		}
	}
}

console.log(ans);
