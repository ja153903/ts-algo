import { describe, test, expect } from "bun:test";
import { findNumbers } from "./q1295";

describe("1295. Find Numbers with Even Number of Digits", () => {
	test("Should solve sample case", () => {
		const nums = [555, 901, 482, 1771];
		expect(findNumbers(nums)).toBe(1);
	});
});
