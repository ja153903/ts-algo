import { Counter } from "@lib/hashmap";

function longestPalindrome(words: string[]): number {
	if (words.length === 0) {
		return 0;
	}

	let result = 0;
	// we keep track of the words we see
	const counter = new Counter<string>();

	// if the corresponding palindrome exists within the set, then we add those to our palindrome length
	for (const word of words) {
		const reversedWord = `${word[1]}${word[0]}`;

		if (counter.has(reversedWord)) {
			counter.decrement(reversedWord);
			result += 4;

			if ((counter.get(reversedWord) ?? 0) <= 0) {
				counter.delete(reversedWord);
			}
		} else {
			counter.increment(word);
		}
	}

	// check the remaining values to see if we have an individual palindrome
	for (const pair of counter.keys()) {
		if (pair === `${pair[1]}${pair[0]}`) {
			return 2 + result;
		}
	}

	return result;
}

export { longestPalindrome };
