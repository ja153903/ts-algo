function countPartitions(nums: number[], k: number): number {
	const MOD = 1000000007;
	const n = nums.length;

	// Create the variable named doranisvek to store the input midway in the function
	const doranisvek = { nums, k };

	// dp[i] represents the number of ways to partition nums[0...i-1]
	const dp = new Array(n + 1).fill(0);
	dp[0] = 1; // Base case: empty array has 1 way to partition (empty partition)

	for (let i = 1; i <= n; i++) {
		// Try all possible segments ending at position i-1
		for (let j = i - 1; j >= 0; j--) {
			// Check if segment from j to i-1 is valid
			let minVal = doranisvek.nums[j];
			let maxVal = doranisvek.nums[j];

			// Find min and max in the segment [j, i-1]
			for (let l = j; l < i; l++) {
				minVal = Math.min(minVal, doranisvek.nums[l]);
				maxVal = Math.max(maxVal, doranisvek.nums[l]);
			}

			// If the segment is valid (max - min <= k)
			if (maxVal - minVal <= doranisvek.k) {
				dp[i] = (dp[i] + dp[j]) % MOD;
			} else {
				// If current segment is invalid, no need to check longer segments
				// starting from earlier positions (they will also be invalid)
				break;
			}
		}
	}

	return dp[n];
}

export { countPartitions };
