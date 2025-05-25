import { describe, expect, test } from "bun:test";
import { longestPalindrome } from "./q2131";

describe("2131. Longest Palindrome by Concatenating Two Letter Words", () => {
	test("should pass basic leetcode cases", () => {
		expect(longestPalindrome(["lc", "cl", "gg"])).toBe(6);
		expect(longestPalindrome(["ab", "ty", "yt", "lc", "cl", "ab"])).toBe(8);
		expect(longestPalindrome(["cc", "ll", "xx"])).toBe(2);
	});

	test("harder test case", () => {
		expect(
			longestPalindrome([
				"qo",
				"fo",
				"fq",
				"qf",
				"fo",
				"ff",
				"qq",
				"qf",
				"of",
				"of",
				"oo",
				"of",
				"of",
				"qf",
				"qf",
				"of",
			]),
		).toBe(14);
	});
});
