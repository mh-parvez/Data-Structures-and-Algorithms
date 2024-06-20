function xorOfAllParis(arr) {
	let ans = 0;
	for (el of arr) {
		ans = ans ^ (2 * el);
	}
	return ans;
}

let arr = [1, 2, 3, 4];
const ans = xorOfAllParis(arr);
console.log(ans);