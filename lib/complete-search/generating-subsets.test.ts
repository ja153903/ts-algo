import { describe, test, expect } from "bun:test";
import { generateSubsets } from "./generating-subsets";

describe("generateSubsets", () => {
	test("should generate all subsets", () => {
		const subsets = generateSubsets([1, 2, 3]);
		const result: number[][] = [];
		for (const subset of subsets) {
			result.push(subset);
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
			[],
			[1],
			[2],
			[3],
			[1, 2],
			[1, 3],
			[2, 3],
			[1, 2, 3],
		]);
	});
});
