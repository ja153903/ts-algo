function longestPalindrome(s: string): string {
	let result = "";

	for (let i = 0; i < s.length; i++) {
		const odd = extendPalindrome(s, i, i);
		const even = extendPalindrome(s, i, i + 1);

		if (odd.length > result.length) {
			result = odd;
		}

		if (even.length > result.length) {
			result = even;
		}
	}

	return result;
}

function extendPalindrome(s: string, _left: number, _right: number): string {
	let left = _left;
	let right = _right;

	while (left >= 0 && right < s.length && s[left] === s[right]) {
		left--;
		right++;
	}

	return s.substring(left + 1, right);
}

export { longestPalindrome };
