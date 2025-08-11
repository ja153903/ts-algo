import { describe, it, expect } from "bun:test";
import { clearStars } from "./q3170";

describe("clearStars", () => {
	it("should clear stars", () => {
		expect(clearStars("aaba*")).toBe("aab");
		expect(clearStars("abc")).toBe("abc");
	});
});
