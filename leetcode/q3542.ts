// FIXME: This question is unclear, but it seems like we're not allowed to include 0s
// within the subarray that we choose
function minOperations(nums: number[]): number {
	let nonZeroValues = nums.filter((num) => num > 0).length;
	let operations = 0;

	while (nonZeroValues > 0) {
		// find the minimum value and its first and last index
		let minValue = {
			value: Number.POSITIVE_INFINITY,
			indices: new Array<number>(),
		};
		for (let i = 0; i < nums.length; i++) {
			if (nums[i] < minValue.value && nums[i] !== 0) {
				minValue = { value: nums[i], indices: [i] };
			} else if (nums[i] === minValue.value) {
				minValue.indices.push(i);
			}
		}

		// once we have the minimum value, this means that we should
		// then update all those instances that we found
		for (const index of minValue.indices) {
			nums[index] = 0;
		}

		operations++;

		nonZeroValues = nums.filter((num) => num > 0).length;
	}

	return operations;
}

export { minOperations };
