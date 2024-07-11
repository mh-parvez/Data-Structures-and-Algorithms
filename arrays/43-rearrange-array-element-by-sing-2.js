let arr = [3, 1, -2, -5, 2, -4];

function rearrangeArray(arr) {
	let ans = [];
	let posIndex = 0,
		negIndex = 1;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < 0) {
			ans[negIndex] = arr[i];
			negIndex += 2;
		} else {
			ans[posIndex] = arr[i];
			posIndex += 2;
		}
	}
	console.log(ans);
	return ans;
}
rearrangeArray(arr);
