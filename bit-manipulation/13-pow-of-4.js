const n = 64;

const isPowOf2 = n > 0 && (n & (n - 1)) == 0;

const fact = 0b01010101010101010101010101010101;

const checking = isPowOf2 && fact & (n > 0)

if (checking) {
	console.log("power of 4");
} else {
	console.log("not power of 4");
}
