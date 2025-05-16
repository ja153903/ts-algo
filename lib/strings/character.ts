export function isVowel(ch: string) {
	if (ch.length !== 1) {
		return false;
	}

	return "aeiou".includes(ch);
}
