let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8];

const onceNumber = (arr) => {
	for (el of arr) {
		let count = 0;
		for (let i = 0; i < arr.length; i++) {
			if (el == arr[i]) count++;
		}

		if (count == 1) return el;
	}
};

console.log(onceNumber(arr));
