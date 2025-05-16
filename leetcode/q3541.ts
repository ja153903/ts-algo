import { Counter } from "@lib/hashmap";
import { isVowel } from "@lib/strings";

function maxFreqSum(s: string): number {
	const vowels = new Counter<string>();
	const consonants = new Counter<string>();

	for (const char of s) {
		if (isVowel(char)) {
			vowels.increment(char);
		} else {
			consonants.increment(char);
		}
	}

	let vowelCount = 0;
	let consonantCount = 0;

	const mostCommonVowel = vowels.getMostCommon();
	if (mostCommonVowel?.length > 0) {
		vowelCount = mostCommonVowel[0][1];
	}

	const mostCommonConsonant = consonants.getMostCommon();
	if (mostCommonConsonant?.length > 0) {
		consonantCount = mostCommonConsonant[0][1];
	}

	return vowelCount + consonantCount;
}

export { maxFreqSum };
