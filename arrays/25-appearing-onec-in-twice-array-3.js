let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8];

const onceNumber = (arr) => {
	const map = new Map();

	for (let i = 0; i < arr.length; i++) {
		
		if (map.has(arr[i])) {
			map.set(arr[i], map.get(arr[i]) + 1);
		} else {
			map.set(arr[i], 1);
		}
	}

	for (let i = 1; i <= arr.length + 1; i++) {
		if (map.get(i) == 1) {
			return i;
		}
	}
};

console.log(onceNumber(arr));
