//Step-1: input a, b, define range
//Step-2: left shift in last range
//Step-3: mask - 1
//Step-4: left shift first range
//Step-5: mask & a
//Step-6: mask | b
//Step-7: print b

let a = 57,
	b = 43;

let right = 4,
	left = 2;

let mask = 1 << (right - left + 1);
mask--;
mask = mask << (left - 1);

mask = mask & a;
b = b | mask;

console.log(b.toString(2));
console.log(b);
