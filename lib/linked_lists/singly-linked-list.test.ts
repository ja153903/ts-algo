import { describe, expect, test } from "bun:test";
import { SinglyLinkedList } from "./singly-linked-list";

describe("SinglyLinkedList", () => {
	test("should create an empty list", () => {
		const list = new SinglyLinkedList();
		expect(list.isEmpty()).toBe(true);
		expect(list.size).toBe(0);
		expect(list.head).toBe(null);
	});

	describe("addToFront", () => {
		test("should add node to front of empty list", () => {
			const list = new SinglyLinkedList();
			list.addToFront(1);
			expect(list.head?.value).toBe(1);
			expect(list.size).toBe(1);
		});

		test("should add node to front of non-empty list", () => {
			const list = new SinglyLinkedList();
			list.addToFront(1);
			list.addToFront(2);
			expect(list.head?.value).toBe(2);
			expect(list.head?.next?.value).toBe(1);
			expect(list.size).toBe(2);
		});
	});

	describe("addToBack", () => {
		test("should add node to back of empty list", () => {
			const list = new SinglyLinkedList();
			list.addToBack(1);
			expect(list.head?.value).toBe(1);
			expect(list.size).toBe(1);
		});

		test("should add node to back of non-empty list", () => {
			const list = new SinglyLinkedList();
			list.addToBack(1);
			list.addToBack(2);
			expect(list.head?.value).toBe(1);
			expect(list.head?.next?.value).toBe(2);
			expect(list.size).toBe(2);
		});
	});

	describe("removeFromFront", () => {
		test("should return null when removing from empty list", () => {
			const list = new SinglyLinkedList();
			expect(list.removeFromFront()).toBe(null);
		});

		test("should remove and return front node", () => {
			const list = new SinglyLinkedList();
			list.addToFront(1);
			list.addToFront(2);
			const removed = list.removeFromFront();
			expect(removed?.value).toBe(2);
			expect(list.head?.value).toBe(1);
			expect(list.size).toBe(1);
		});
	});

	describe("removeFromBack", () => {
		test("should return null when removing from empty list", () => {
			const list = new SinglyLinkedList();
			expect(list.removeFromBack()).toBe(null);
		});

		test("should remove and return back node", () => {
			const list = new SinglyLinkedList();
			list.addToBack(1);
			list.addToBack(2);
			const removed = list.removeFromBack();
			expect(removed?.value).toBe(2);
			expect(list.head?.value).toBe(1);
			expect(list.size).toBe(1);
		});
	});

	describe("contains", () => {
		test("should return false for empty list", () => {
			const list = new SinglyLinkedList();
			expect(list.contains(1)).toBe(false);
		});

		test("should return true when value exists", () => {
			const list = new SinglyLinkedList();
			list.addToBack(1);
			list.addToBack(2);
			expect(list.contains(2)).toBe(true);
		});

		test("should return false when value does not exist", () => {
			const list = new SinglyLinkedList();
			list.addToBack(1);
			list.addToBack(2);
			expect(list.contains(3)).toBe(false);
		});
	});

	describe("toArray", () => {
		test("should return empty array for empty list", () => {
			const list = new SinglyLinkedList();
			expect(list.toArray()).toEqual([]);
		});

		test("should return array of values", () => {
			const list = new SinglyLinkedList();
			list.addToBack(1);
			list.addToBack(2);
			list.addToBack(3);
			expect(list.toArray()).toEqual([1, 2, 3]);
		});
	});

	describe("clear", () => {
		test("should clear the list", () => {
			const list = new SinglyLinkedList();
			list.addToBack(1);
			list.addToBack(2);
			list.clear();
			expect(list.isEmpty()).toBe(true);
			expect(list.size).toBe(0);
			expect(list.head).toBe(null);
		});
	});

	describe("iteration", () => {
		test("should iterate over nodes", () => {
			const list = new SinglyLinkedList();
			list.addToBack(1);
			list.addToBack(2);
			list.addToBack(3);

			const values = [];
			for (const node of list) {
				if (node) values.push(node.value);
			}
			expect(values).toEqual([1, 2, 3]);
		});
	});
});
