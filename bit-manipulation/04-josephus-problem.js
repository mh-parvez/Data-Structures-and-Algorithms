//TODO: joshepus special case?
//l = find power of 2
//ans = 2l + 1

const powerOf2 = (n) => {
	let i = 1;
	while (i * 2 <= n) {
		i *= 2;
	}
	return i;
};
// console.log(powerOf2(9));

function joshepus() {
	const n = 6;
	const l = n - powerOf2(n);
	return 2 * l + 1;
}
console.log(joshepus())
