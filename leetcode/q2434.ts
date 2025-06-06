function robotWithString(s: string): string {
	const counter = new Array(26).fill(0);

	for (const char of s) {
		counter[char.charCodeAt(0) - 97]++;
	}

	const stack: string[] = [];
	const result: string[] = [];

	for (const char of s) {
		stack.push(char);
		const currentCharIndex = char.charCodeAt(0) - 97;

		counter[currentCharIndex]--;

		// the idea here is that if the top of the stack is lexicographically smaller
		// than the current minimum (or if its the same)
		// then we should pop it from the stack
		while (stack.length && stack[stack.length - 1] <= getCurrentMin(counter)) {
			result.push(stack.pop() ?? "");
		}
	}

	while (stack.length) {
		result.push(stack.pop() ?? "");
	}

	return result.join("");
}

function getCurrentMin(counter: number[]) {
	for (let i = 0; i < 26; i++) {
		if (counter[i] > 0) {
			return String.fromCharCode(i + 97);
		}
	}

	return "a";
}

export { robotWithString };
