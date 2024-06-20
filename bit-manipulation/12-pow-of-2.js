const n = 6;

const checking = n > 0 && (n & (n - 1)) == 0;

if (checking) {
	console.log("power of 2");
} else {
	console.log("not power of 2");
}
