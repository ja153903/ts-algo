export function* permutations(arr: number[]) {
	const result: number[] = [];
	const visited = new Set<number>();

	function* helper(index: number): Generator<number[]> {
		if (index === arr.length) {
			yield result.slice();
			return;
		}

		for (let i = 0; i < arr.length; i++) {
			if (visited.has(i)) {
				continue;
			}

			visited.add(i);
			result.push(arr[i]);
			yield* helper(index + 1);
			result.pop();
			visited.delete(i);
		}
	}

	yield* helper(0);
}
