export function isVowel(ch: string) {
	if (ch.length !== 1) {
		return false;
	}

	return "aeiou".includes(ch);
}

export function isConsonant(ch: string) {
	if (ch.length !== 1) {
		return false;
	}

	return !isVowel(ch) && ch.match(/[a-z]/i);
}
