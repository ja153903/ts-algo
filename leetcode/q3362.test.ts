import { describe, test, expect } from "bun:test";
import { maxRemoval } from "./q3362";

describe("3362. Zero Array Transformation III", () => {
	test("Should pass basic leetcode cases", () => {
		expect(
			maxRemoval(
				[1, 1, 1, 1],
				[
					[1, 3],
					[0, 2],
					[1, 3],
					[1, 2],
				],
			),
		).toBe(2);
		expect(
			maxRemoval(
				[2, 0, 2],
				[
					[0, 2],
					[0, 2],
					[1, 1],
				],
			),
		).toBe(1);
	});
});
