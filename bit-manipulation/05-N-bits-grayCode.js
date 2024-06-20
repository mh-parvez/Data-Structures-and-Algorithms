function generateGrayCode(n) {
	if (n === 1) {
		return ["0", "1"];
	} else {
		const preGrayCode = generateGrayCode(n - 1);
		const result = [];
		for (let i = 0; i < preGrayCode.length; i++) {
			result[i] = `0${preGrayCode[i]}`;
			result[result.length] = `1${preGrayCode[preGrayCode.length - 1 - i]}`;
        }
        return result;
	}
}

const n = 4;
const grayCode = generateGrayCode(n);
console.log(grayCode);
