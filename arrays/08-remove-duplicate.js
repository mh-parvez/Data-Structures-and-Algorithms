
let arr = [1, 2, 3, 1, 2, 3];

let setOfUniqueElement = new Set(...arr);

// for (el of arr) {
//     setOfUniqueElement.add(el)
// }

// console.log(setOfUniqueElement.size)

for (el of setOfUniqueElement) {
    console.log(el)
}
