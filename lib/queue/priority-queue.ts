import type { GenericComparator, Optional } from "@lib/types";

export class PriorityQueue<T> {
	private heap: T[];
	private comparator: GenericComparator<T>;

	constructor(comparator: GenericComparator<T>) {
		this.heap = [];
		this.comparator = comparator;
	}

	enqueue(item: T) {
		this.heap.push(item);

		let i = this.heap.length - 1;

		while (
			i > 0 &&
			this.comparator(this.heap[this.parent(i)], this.heap[i]) > 0
		) {
			const parent = this.parent(i);
			[this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];
			i = parent;
		}
	}

	dequeue(): Optional<T> {
		if (this.isEmpty()) {
			return null;
		}

		const result = this.peek();

		this.heap[0] = this.heap[this.length - 1];
		this.heap.pop();

		this.heapify(0);

		return result;
	}

	peek(): Optional<T> {
		return this.heap?.[0] ?? null;
	}

	isEmpty() {
		return this.length === 0;
	}

	get length() {
		return this.heap.length;
	}

	private heapify(i: number) {
		let smallest = i;
		const left = this.left(i);
		const right = this.right(i);

		if (
			left < this.length &&
			this.comparator(this.heap[smallest], this.heap[left]) > 0
		) {
			smallest = left;
		}

		if (
			right < this.length &&
			this.comparator(this.heap[smallest], this.heap[right]) > 0
		) {
			smallest = right;
		}

		if (smallest !== i) {
			[this.heap[smallest], this.heap[i]] = [this.heap[i], this.heap[smallest]];
			this.heapify(smallest);
		}
	}

	private parent(i: number) {
		return Math.floor((i - 1) / 2);
	}

	private left(i: number) {
		return 2 * i + 1;
	}

	private right(i: number) {
		return 2 * i + 2;
	}
}
