function lengthOfLongestSubstring(s: string): number {
	const seen = new Map<string, number>();

	let left = 0;
	let result = 0;

	for (let i = 0; i < s.length; i++) {
		if (seen.has(s[i])) {
			left = Math.max(left, (seen.get(s[i]) ?? 0) + 1);
		}

		seen.set(s[i], i);
		result = Math.max(result, i - left + 1);
	}

	return result;
}

export { lengthOfLongestSubstring };
