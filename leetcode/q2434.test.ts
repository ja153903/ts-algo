import { describe, it, expect } from "bun:test";
import { robotWithString } from "./q2434";

describe("robotWithString", () => {
	it("should return the lexicographically smallest string that can be obtained from s", () => {
		expect(robotWithString("zza")).toBe("azz");
		expect(robotWithString("bac")).toBe("abc");
		expect(robotWithString("bdda")).toBe("addb");
		expect(robotWithString("bydizfve")).toBe("bdevfziy");
	});
});
