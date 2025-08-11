import { describe, it, expect } from "bun:test";
import { canMakeEqual } from "./q1";
import { countPermutations } from "./q2";
import {} from "./q3";
import {} from "./q4";

describe("Weekly Contest 453", () => {
	it("should pass question 1 test cases", () => {
		let nums = [1, -1, 1, -1, 1];
		let k = 3;

		expect(canMakeEqual(nums, k)).toBe(true);

		nums = [-1, -1, -1, 1, 1, 1];
		k = 5;

		expect(canMakeEqual(nums, k)).toBe(false);

		nums = [1, 1, -1, 1, 1, -1, -1, 1, 1, 1, -1, -1, -1, 1, 1, -1];
		k = 16;

		expect(canMakeEqual(nums, k)).toBe(false);
	});

	it("should pass question 2 test cases", () => {
		let complexity = [1, 2, 3];
		expect(countPermutations(complexity)).toBe(2);

		complexity = [3, 3, 3, 4, 4, 4];
		expect(countPermutations(complexity)).toBe(0);
	});

	it("should pass question 3 test cases", () => {});

	it("should pass question 4 test cases", () => {});
});
