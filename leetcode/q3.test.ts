import { describe, expect, test } from "bun:test";
import { lengthOfLongestSubstring } from "./q3";

describe("3. Longest substring without repeating characters", () => {
	test("should pass basic tests on leetcode", () => {
		expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
		expect(lengthOfLongestSubstring("bbbb")).toBe(1);
		expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
	});
});
