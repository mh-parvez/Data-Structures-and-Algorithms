let arr = [1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1];

let count = 0,
	maxi = 0;

for (el of arr) {
	if (el == 1) {
		count++;
		maxi = Math.max(maxi, count);
	} else {
		count = 0;
	}
}

console.log(maxi);
