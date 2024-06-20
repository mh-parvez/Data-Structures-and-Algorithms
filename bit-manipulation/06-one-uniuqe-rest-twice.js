const uniqueNumber = (arr) => {
	let unique = 0;
	for (el of arr) {
		unique ^= el;
	}
	return unique;
};

const arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6, 6, 9];
const unique = uniqueNumber(arr);
console.log(unique);
