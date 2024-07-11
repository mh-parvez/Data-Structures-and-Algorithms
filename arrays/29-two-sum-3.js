const arr = [2, 6, 5, 8, 11];
const target = 14;

//solution
const twoSum = (nums, target) => {

	let left = 0,
		right = nums.length - 1;

	while (left < right) {
		let sum = nums[left] + nums[right];

		if (sum == target) {
			return 'yes'
		} else if (sum < target) left++
		else right--
	}

	return 'no';
};
 
console.log(twoSum(arr, target));
