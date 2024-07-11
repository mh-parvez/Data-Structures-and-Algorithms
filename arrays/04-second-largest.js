//step-01. sort the arry;
//step-02. init largest = arr[arr.length - 1] and secondLargest = 0;
//step-03. start loop (i = arr.length - 2)
//step-04. inside the loop check if (arr[i] != largest)
//step-05. if it is true, then store secondLargest = arr[i] and break the loop
//step-06. print the secondLargest element

let arr = [57, 47, 84, 3, 99, 99, 99, 30];

arr.sort();

let largest = arr[arr.length - 1];
let secondLargest = 0;

for (let i = arr.length - 2; i >= 0; i--) {
	if (arr[i] != largest) {
		secondLargest = arr[i];
		break;
	}
}

console.log("largest: ", largest);
console.log("secondLargest: ", secondLargest);
