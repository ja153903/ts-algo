// Upper bound of the length of s is going to be 10^5
// Upper bound of the number of transformations is going to be 10^5
// O(n^2) unfortunately may not be fast enough
// TODO: Figure out what the appropriate algorithm for this will be
function lengthAfterTransformations(s: string, t: number): number {
	const results = s.split("");

	for (let round = 1; round <= t; round++) {
		const size = results.length;

		for (let i = 0; i < size; i++) {
			const front = results.shift();
			if (!front) {
				throw new Error("Something went wrong");
			}

			const ascii = front.charCodeAt(0);
			const nextAscii = ascii + 1;

			if (nextAscii > 122) {
				results.push("a");
				results.push("b");
			} else {
				results.push(String.fromCharCode(nextAscii));
			}
		}
	}

	return results.length;
}

export { lengthAfterTransformations };
