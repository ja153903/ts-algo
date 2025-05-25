function findWordsContaining(words: string[], x: string): number[] {
	const indices: number[] = [];

	for (let i = 0; i < words.length; i++) {
		if (words[i].includes(x)) {
			indices.push(i);
		}
	}

	return indices;
}

export { findWordsContaining };
