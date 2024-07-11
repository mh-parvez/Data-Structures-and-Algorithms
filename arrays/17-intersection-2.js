
let arr1 = [4,9,5];
let arr2 = [9,4,9,8,4];

let interSection = [];

let i = 0,
	j = 0;

while (i < arr1.length && j < arr2.length) {
	if (arr1[i] < arr2[j]) {
		i++;
	} else if (arr1[i] > arr2[j]) {
		j++;
	} else {
		interSection.push(arr1[i]);
		i++;
		j++;
	}
}

console.log(interSection) 