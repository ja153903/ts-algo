import { describe, it, expect } from "bun:test";
import { binPow } from "./binary-exponentiation";

describe("binary exponentiation", () => {
	it("should pass test cases", () => {
		expect(binPow(3, 5)).toBe(243);
		expect(binPow(2, 10)).toBe(1024);
	});
});
