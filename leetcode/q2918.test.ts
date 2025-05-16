import { describe, test, expect } from "bun:test";
import { minSum } from "./q2918";

describe("2918", () => {
	test("should pass basic leetcode tests", () => {
		expect(minSum([3, 2, 0, 1, 0], [6, 5, 0])).toBe(12);
		expect(minSum([2, 0, 2, 0], [1, 4])).toBe(-1);
	});

	test("should pass more thorough tests", () => {
		expect(minSum([0, 0, 0], [0, 0, 0])).toBe(3);
		expect(minSum([1, 2, 3], [4, 5, 6])).toBe(-1);
		expect(minSum([1, 0, 0], [0, 1, 0])).toBe(3);
		expect(minSum([5, 0, 3], [0, 0, 0])).toBe(9);
		expect(minSum([0, 0, 0], [5, 3, 1])).toBe(9);
		expect(minSum([10, 20], [0, 0, 0, 0])).toBe(30);
		expect(minSum([0, 0, 0, 0], [10, 20])).toBe(30);
		expect(minSum([5, 5], [5, 5])).toBe(10);
	});

	test("more cases from leetcode", () => {
		expect(minSum([17, 1, 13, 12, 3, 13], [2, 25])).toBe(-1);
	});
});
