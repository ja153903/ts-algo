import { describe, test, expect } from "bun:test";
import { Deque } from "./deque";

describe("Deque", () => {
	test("we should be able to add items in front and back", () => {
		const deque = new Deque<number>();
		deque.pushFront(1);
		deque.pushBack(2);
		deque.pushFront(3);

		expect(deque.size).toBe(3);
	});
});
