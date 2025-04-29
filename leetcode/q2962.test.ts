import { describe, expect, test } from "bun:test";
import { countSubarrays } from "./q2962";

describe("2962. Count Subarrays Where Max Element Appears At Least K Times", () => {
	test("Example 1", () => {
		expect(countSubarrays([1, 3, 2, 3, 3], 2)).toBe(6);
	});

	test("Example 2", () => {
		expect(countSubarrays([1, 4, 2, 1], 3)).toBe(0);
	});
});
