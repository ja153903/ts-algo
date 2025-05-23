export function* generateSubsets(arr: number[]) {
	const result: number[] = [];

	function* helper(index: number): Generator<number[]> {
		yield result.slice();

		for (let i = index; i < arr.length; i++) {
			result.push(arr[i]);
			yield* helper(i + 1);
			result.pop();
		}
	}

	yield* helper(0);
}
