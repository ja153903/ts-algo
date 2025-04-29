import { describe, test, expect } from "bun:test";
import { Queue } from "./queue";

describe("Queue", () => {
	test("should be able to add items to the queue", () => {
		const queue = new Queue<number>();
		queue.enqueue(1);
		queue.enqueue(2);
		queue.enqueue(3);

		expect(queue.size).toBe(3);
		expect(queue.poll()).toBe(1);
	});
});
