let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let union = [];

let i = 0,
	j = 0;

while (i < arr1.length && j < arr2.length) {
	if (arr1[i] < arr2[j]) {
		//if array 1 el is small
		union.push(arr1[i]);
		i++;
	} else if (arr1[i] > arr2[j]) {
		//if array 2 el is small
		union.push(arr2[j]);
		j++;
	} else {
		//if array 1 & array 2 is equal, pick one el & increment the pointer
		union.push(arr1[i]);
		i++;
		j++;
	}
}

while (i < arr1.length) {
	union.push(arr1[i]);
	i++;
}

while (j < arr2.length) {
	union.push(arr2[j]);
	j++;
}

console.log(union);
