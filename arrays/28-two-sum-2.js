const arr = [2, 6, 5, 8, 11];
const target = 14;

//solution
const twoSum = (nums, target) => {
	const numMap = new Map();
	for (let i = 0; i < nums.length; i++) {
		const complement = target - nums[i];
		if (numMap.has(complement)) {
			return [numMap.get(complement), i];
		}
		numMap.set(nums[i], i);
	}
	return [];
};

console.log(twoSum(arr, target));
