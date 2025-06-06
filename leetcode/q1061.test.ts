import { describe, it, expect } from "bun:test";
import { smallestEquivalentString } from "./q1061";

describe("smallestEquivalentString", () => {
	it("should return the smallest equivalent string", () => {
		expect(smallestEquivalentString("parker", "morris", "parser")).toBe(
			"makkek",
		);
		expect(smallestEquivalentString("hello", "world", "hold")).toBe("hdld");
		expect(smallestEquivalentString("leetcode", "programs", "sourcecode")).toBe(
			"aauaaaaada",
		);
	});
});
