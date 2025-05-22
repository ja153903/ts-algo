import { describe, test, expect } from "bun:test";
import { PriorityQueue } from "./priority-queue";

describe("PriorityQueue", () => {
	test("should create a priority queue", () => {
		const priorityQueue = new PriorityQueue<number>((a, b) => a - b);
		expect(priorityQueue).toBeDefined();
	});

	test("should enqueue and dequeue items", () => {
		const priorityQueue = new PriorityQueue<number>((a, b) => a - b);
		priorityQueue.enqueue(1);
		priorityQueue.enqueue(2);
		priorityQueue.enqueue(3);

		expect(priorityQueue.dequeue()).toBe(1);
		expect(priorityQueue.dequeue()).toBe(2);
		expect(priorityQueue.dequeue()).toBe(3);
	});

	test("should return the correct size", () => {
		const priorityQueue = new PriorityQueue<number>((a, b) => a - b);
		priorityQueue.enqueue(1);
		priorityQueue.enqueue(2);
		priorityQueue.enqueue(3);
		expect(priorityQueue.length).toBe(3);
	});

	test("should return as max queue", () => {
		const priorityQueue = new PriorityQueue<number>((a, b) => b - a);
		priorityQueue.enqueue(1);
		priorityQueue.enqueue(2);
		priorityQueue.enqueue(3);
		expect(priorityQueue.dequeue()).toBe(3);
		expect(priorityQueue.dequeue()).toBe(2);
		expect(priorityQueue.dequeue()).toBe(1);
	});
});
