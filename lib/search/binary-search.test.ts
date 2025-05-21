import { describe, it, expect } from "bun:test";
import { binarySearch, binarySearchFast } from "./binary-search";

describe("binarySearch", () => {
	it("should return the index of the target in the array", () => {
		const arr = [1, 2, 3, 4, 5];
		const target = 3;
		const comparator = (a: number, b: number) => a - b;

		const result = binarySearch(arr, target, comparator);

		expect(result).toBe(2);
	});

	it("should return -1 if the target is not in the array", () => {
		const arr = [1, 2, 3, 4, 5];
		const target = 6;
		const comparator = (a: number, b: number) => a - b;

		const result = binarySearch(arr, target, comparator);

		expect(result).toBe(-1);
	});
});

describe("binarySearchFast", () => {
	it("should return the index of the target in the array", () => {
		const arr = [1, 2, 3, 4, 5];
		const target = 3;
		const comparator = (a: number, b: number) => a - b;

		const result = binarySearchFast(arr, target, comparator);

		expect(result).toBe(2);
	});

	it("should return -1 if the target is not in the array", () => {
		const arr = [1, 2, 3, 4, 5];
		const target = 6;
		const comparator = (a: number, b: number) => a - b;

		const result = binarySearchFast(arr, target, comparator);

		expect(result).toBe(-1);
	});
});
