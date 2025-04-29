export class Queue<T> {
	private container: T[];

	constructor(items: T[] = []) {
		this.container = items;
	}

	enqueue(item: T) {
		this.container.unshift(item);
	}

	poll(): T | undefined {
		return this.container.pop();
	}

	get isEmpty() {
		return this.size === 0;
	}

	get size() {
		return this.container.length;
	}
}
