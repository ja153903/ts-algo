import { describe, expect, test } from "bun:test";
import { maxFreqSum } from "./q3541";

describe("3541. Find Most Frequent Vowel and Consonant", () => {
	test("should pass cases from LeetCode", () => {
		expect(maxFreqSum("successes")).toBe(6);
		expect(maxFreqSum("aeiaeia")).toBe(3);
	});
});
