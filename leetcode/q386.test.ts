import { describe, it, expect } from "bun:test";
import { lexicalOrder } from "./q386";

describe("Q386", () => {
	it("should pass test cases", () => {
		expect(lexicalOrder(13)).toEqual([
			1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9,
		]);
		expect(lexicalOrder(2)).toEqual([1, 2]);
	});

	it("should pass more leetcode test cases", () => {
		expect(lexicalOrder(34)).toEqual([
			1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 2, 20, 21, 22, 23, 24, 25, 26,
			27, 28, 29, 3, 30, 31, 32, 33, 34, 4, 5, 6, 7, 8, 9,
		]);
	});
});
