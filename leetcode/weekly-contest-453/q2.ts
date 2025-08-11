function countPermutations(complexity: number[]): number {
	const MOD = 1000000007;
	const n = complexity.length;

	if (n <= 1) return 1;

	// Check if it's possible to unlock all computers
	// Computer 0 can always be unlocked first (no prerequisite)
	// For computer i (i > 0), there must exist at least one computer j where j < i and complexity[j] < complexity[i]

	for (let i = 1; i < n; i++) {
		let canUnlock = false;
		for (let j = 0; j < i; j++) {
			if (complexity[j] < complexity[i]) {
				canUnlock = true;
				break;
			}
		}
		if (!canUnlock) {
			return 0;
		}
	}

	// Use DP with bitmask to count valid sequences
	// dp[mask] = number of ways to reach this state (where mask represents which computers are unlocked)
	const dp = new Array(1 << n).fill(0);
	dp[1] = 1; // Start with computer 0 unlocked

	for (let mask = 1; mask < 1 << n; mask++) {
		if (dp[mask] === 0) continue;

		// Try to unlock each remaining computer
		for (let i = 1; i < n; i++) {
			if (mask & (1 << i)) continue; // Already unlocked

			// Check if we can unlock computer i
			let canUnlock = false;
			for (let j = 0; j < n; j++) {
				if (mask & (1 << j) && complexity[j] < complexity[i]) {
					canUnlock = true;
					break;
				}
			}

			if (canUnlock) {
				const newMask = mask | (1 << i);
				dp[newMask] = (dp[newMask] + dp[mask]) % MOD;
			}
		}
	}

	return dp[(1 << n) - 1];
}

export { countPermutations };
