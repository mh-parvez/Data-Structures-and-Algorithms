//TODO: Kernighan's Algorithm _ Count Set Bits in an Integer.
//step-1: find  = rsb of number
//step-2: subtract = number to rsb (number - rsb)
//step-3: count the rsb

let num = 41,
	count = 0;

while (num) {
	rsb = num & -num;
	num = num - rsb;
	count++;
}

console.log(count);
