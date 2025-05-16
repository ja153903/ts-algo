import { describe, test, expect } from "bun:test";
import { lengthAfterTransformations } from "./q3335";

describe("3335. Total Characters in String After Transformations I", () => {
	test("should pass basic tests", () => {
		expect(lengthAfterTransformations("abcyy", 2)).toBe(7);
		expect(lengthAfterTransformations("azbk", 1)).toBe(5);
	});
});
