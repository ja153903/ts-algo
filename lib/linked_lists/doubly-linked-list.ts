import type { Optional } from "@lib/types";
import { getUUID } from "@lib/uuid";

export class DoublyLinkedListNode<T> {
	val: T;
	id: string;
	next: Optional<DoublyLinkedListNode<T>>;
	prev: Optional<DoublyLinkedListNode<T>>;

	constructor(
		val: T,
		next: Optional<DoublyLinkedListNode<T>> = null,
		prev: Optional<DoublyLinkedListNode<T>> = null,
	) {
		this.val = val;
		this.next = next;
		this.prev = prev;
		this.id = getUUID();
	}
}

export class DoublyLinkedList<T> {
	head: Optional<DoublyLinkedListNode<T>>;
	tail: Optional<DoublyLinkedListNode<T>>;

	constructor(
		head: Optional<DoublyLinkedListNode<T>> = null,
		tail: Optional<DoublyLinkedListNode<T>> = null,
	) {
		this.head = head;
		this.tail = tail;
	}

	addToFront(value: T): void {
		const node = new DoublyLinkedListNode<T>(value);

		if (this.tail) {
			this.tail.next = node;
		}

		node.prev = this.tail;
		node.next = this.head;
		this.head = node;
	}

	addToBack(value: T): void {
		const node = new DoublyLinkedListNode<T>(value);

		if (this.tail) {
			this.tail.next = node;
		}

		node.prev = this.tail;
		node.next = this.head;
		this.tail = node;
	}

	removeFromFront(): Optional<DoublyLinkedListNode<T>> {
		if (!this.head) {
			return null;
		}

		const head = this.head;
		const newHead = head.next;

		if (this.tail) {
			this.tail.next = newHead;
		}

		if (newHead) {
			newHead.prev = this.tail;
		}

		this.head = this.head.next;

		return head;
	}

	removeFromBack(): Optional<DoublyLinkedListNode<T>> {
		if (!this.tail) {
			return null;
		}

		const tail = this.tail;
		const newTail = tail.prev;

		if (this.head) {
			this.head.prev = newTail;
		}

		if (newTail) {
			newTail.next = this.head;
		}

		this.tail = newTail;

		return tail;
	}

	find(value: T): Optional<DoublyLinkedListNode<T>> {
		const seenUUIDs = new Set<string>();

		let head = this.head;
		let tail = this.tail;

		while (head && tail) {
			if (head.val === value) {
				return head;
			}

			if (tail.val === value) {
				return tail;
			}

			seenUUIDs.add(head.id);
			seenUUIDs.add(tail.id);

			head = head.next;
			tail = tail.prev;
		}

		return null;
	}

	contains(value: T): boolean {
		return this.find(value) !== null;
	}

	isEmpty(): boolean {
		return !this.head && !this.tail;
	}
}
