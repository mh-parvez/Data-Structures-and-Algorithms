let arr = [1, 2, 3, 4, 5, 6, 7];

let d = 3;
let temp = new Array(d);

//step-1: copy form temp
for (let i = 0; i < d; i++) {
	temp[i] = arr[i];
}

//step-2: shifting in main array
for (let i = d; i < arr.length; i++) {
	arr[i - d] = arr[i];
}

//step-3: copy form temp to main arry
for (let i = arr.length - d; i < arr.length; i++) {
	arr[i] = temp[i - (arr.length - d)];
}

console.log(temp);
console.log(arr);
