function lexicalOrder__firstAttempt(n: number): number[] {
	const result: number[] = [];

	for (let i = 1; i <= 9 && i <= n; i++) {
		result.push(i);
		let factor = 10;
		let current = i * factor;

		while (current <= n) {
			for (let j = current; j < (i + 1) * factor && j <= n; j++) {
				result.push(j);
			}

			factor *= 10;
			current *= factor;
		}
	}

	return result;
}

// Every time, we extend the number further
// until we have to retract and then increment by 1
function lexicalOrder(n: number): number[] {
	const result: number[] = [];
	let current = 1;

	for (let i = 1; i <= n; i++) {
		result.push(current);
		if (current * 10 <= n) {
			current *= 10;
		} else {
			while (current % 10 === 9 || current + 1 > n) {
				current = Math.floor(current / 10);
			}

			current++;
		}
	}

	return result;
}

export { lexicalOrder };
