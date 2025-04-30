function findNumbers(nums: number[]): number {
	return nums.filter((num) => getNumDigits(num) % 2 === 0).length;
}

function getNumDigits(num: number): number {
	let result = 0;
	let curr = num;

	while (curr > 0) {
		curr = Math.floor(curr / 10);
		result++;
	}

	return result;
}

export { findNumbers };
