function countSubarrays(nums: number[], k: number) {
	let result = 0;
	let count = 0;
	let left = 0;
	let right = 0;

	const maxElement = Math.max(...nums);

	while (right < nums.length) {
		if (nums[right] === maxElement) {
			count++;
		}

		while (count === k) {
			result += nums.length - right;
			if (nums[left] === maxElement) {
				count--;
			}

			left++;
		}

		right++;
	}

	return result;
}

export { countSubarrays };
