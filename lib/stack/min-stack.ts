import type { GenericComparator } from "../types";

export class MinStack<T> {
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

		const min = this.getMin();
		if (min) {
			const currentMin = this.comparator(min, item) < 0 ? min : item;
			this.container.push([item, currentMin]);
		}
	}

	pop(): T | undefined {
		const top = this.container.pop();
		if (top) {
			const [value, _min] = top;
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

	getMin(): T | undefined {
		const top = this.top;
		if (top) {
			const [_value, min] = top;
			return min;
		}

		return undefined;
	}

	static from<T>(items: T[], comparator: GenericComparator<T>) {
		const stack = new MinStack<T>(comparator);

		for (const item of items) {
			stack.push(item);
		}

		return stack;
	}
}
