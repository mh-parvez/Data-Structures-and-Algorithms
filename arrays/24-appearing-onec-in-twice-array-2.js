let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8];

const onceNumber = (arr) => {
	let maxNum = Math.max(...arr);
	const hash = new Array(maxNum + 1).fill(0);

	for (el of arr) {
		hash[el]++;
	}

	for (let i = 0; i < hash.length; i++) {
		if (hash[i] == 1) {
			return i;
		}
	}
};

console.log(onceNumber(arr));
