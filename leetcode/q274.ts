function hIndex(citations: number[]): number {
	citations.sort((a, b) => a - b);

	let h = 0;

	for (let i = 0; i < citations.length; i++) {
		// if the current number of citations is greater than or equal to
		// the number of citations left to iterate over in the array
		// this means that we have at least h citations that appear h times
		// in this case, we then increment h
		if (citations[i] >= citations.length - i) {
			h++;
		}
	}

	return h;
}

export { hIndex };
