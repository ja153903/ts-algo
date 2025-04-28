import type { GenericComparator } from "../types";

export class MaxStack<T> {
	private container: [T, T][];
	private comparator: GenericComparator<T>;

	constructor(comparator: GenericComparator<T>) {
		this.container = [];
		this.comparator = comparator;
	}

	push(item: T) {
		if (this.isEmpty) {
			this.container.push([item, item]);
			return;
		}

		const max = this.getMax();
		if (max) {
			const currentMax = this.comparator(max, item) < 0 ? max : item;
			this.container.push([item, currentMax]);
		}
	}

	pop(): T | undefined {
		const top = this.container.pop();
		if (top) {
			const [value, _max] = top;
			return value;
		}

		return undefined;
	}

	get top() {
		return this.container.at(-1);
	}

	get size() {
		return this.container.length;
	}

	get isEmpty() {
		return this.size === 0;
	}

	getMax(): T | undefined {
		const top = this.top;
		if (top) {
			const [_value, max] = top;
			return max;
		}

		return undefined;
	}

	static from<T>(items: T[], comparator: GenericComparator<T>) {
		const stack = new MaxStack<T>(comparator);

		for (const item of items) {
			stack.push(item);
		}

		return stack;
	}
}
