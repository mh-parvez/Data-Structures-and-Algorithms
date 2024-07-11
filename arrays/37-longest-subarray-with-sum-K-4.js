let arr = [1, 2, 3, 1, 1, 1, 1, 4, 2, 3];
// let arr = [1, -1, 5, -2, 3]; // minus case its not working fine
let k = 3;

function longestSubArray(arr, k) {
	let left = 0,
        right = 0;
    maxLength = 0;
	let sum = arr[0];

    while (right < arr.length) {
        
		while (left <= right && sum > k) {
			sum -= arr[left];
			left++;
		}

		if (sum == k) {
			maxLength = Math.max(maxLength, right - left + 1);
		}

		right++;
		if (right < arr.length) {
			sum += arr[right];
		}
	}

	console.log(maxLength);
	return maxLength;
}

longestSubArray(arr, k);
