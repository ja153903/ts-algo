import { describe, test, expect } from "bun:test";
import { permutations } from "./permutations";

describe("permutations", () => {
	test("should generate all permutations", () => {
		const result: number[][] = [];
		for (const permutation of permutations([1, 2, 3])) {
			result.push(permutation);
		}

		result.sort((a, b) => {
			if (a.length !== b.length) {
				return a.length - b.length;
			}

			for (let i = 0; i < a.length; i++) {
				if (a[i] !== b[i]) {
					return a[i] - b[i];
				}
			}

			return 0;
		});

		expect(result).toEqual([
			[1, 2, 3],
			[1, 3, 2],
			[2, 1, 3],
			[2, 3, 1],
			[3, 1, 2],
			[3, 2, 1],
		]);
	});
});
