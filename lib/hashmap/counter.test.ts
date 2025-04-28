import { describe, test, expect } from "bun:test";
import { Counter } from "./counter";

describe("Counter<number>", () => {
	test("Counter should count occurrences of numbers", () => {
		const counter = new Counter<number>([1, 2, 2, 3, 3, 3]);
		expect(counter.get(3)).toBe(3);
		expect(counter.get(2)).toBe(2);
		expect(counter.get(1)).toBe(1);

		counter.increment(3);
		expect(counter.get(3)).toBe(4);

		counter.increment(1, 10);
		expect(counter.get(1)).toBe(11);
	});

	test("Counter should test merge", () => {
		const a = new Counter<number>([1, 2, 2, 3, 3, 3]);
		const b = new Counter<number>([1, 2, 2, 3, 3, 3]);

		a.update(b);

		expect(a.get(3)).toBe(6);
		expect(a.get(2)).toBe(4);
		expect(a.get(1)).toBe(2);
	});
});
