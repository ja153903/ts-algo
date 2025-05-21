import { expect, test, describe } from "bun:test";
import { minOperations } from "./q3542";

describe("3542. Minimum Operations to convert all elements to zero", () => {
	test("should pass leetcode cases", () => {
		expect(minOperations([0, 2])).toBe(1);
		expect(minOperations([3, 1, 2, 1])).toBe(3);
		expect(minOperations([1, 2, 1, 2, 1, 2])).toBe(4);
	});
});
