function canMakeEqual(nums: number[], k: number): boolean {
	const n = nums.length;

	// Try to make all elements equal to 1
	if (canMakeAllEqual(nums, 1, k)) {
		return true;
	}

	// Try to make all elements equal to -1
	if (canMakeAllEqual(nums, -1, k)) {
		return true;
	}

	return false;
}

function canMakeAllEqual(nums: number[], target: number, k: number): boolean {
	const n = nums.length;
	const arr = [...nums]; // Create a copy
	let operations = 0;

	// Greedy approach: scan from left to right
	for (let i = 0; i < n - 1; i++) {
		if (arr[i] !== target) {
			// We need to flip arr[i] and arr[i+1]
			arr[i] = -arr[i];
			arr[i + 1] = -arr[i + 1];
			operations++;

			if (operations > k) {
				return false;
			}
		}
	}

	// Check if the last element is also equal to target
	return arr[n - 1] === target;
}

export { canMakeEqual };
