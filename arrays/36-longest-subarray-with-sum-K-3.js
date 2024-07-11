let arr = [1, 2, 3, 1, 1, 1, 1, 4, 2, 3];
// let arr = [1, -1, 5, -2, 3];
let k = 3;

function longestSubArray(arr, k) {
	const map = new Map();
	let maxLength = 0;
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];

		if (sum == k) {
			maxLength = i + 1;
		} else if (map.has(sum - k)) {
			maxLength = Math.max(maxLength, i - map.get(sum - k));
        }
        
		if (!map.has(sum)) {
			map.set(sum, i);
		}
    }
    console.log(maxLength);
    return maxLength;
}

longestSubArray(arr, k);
