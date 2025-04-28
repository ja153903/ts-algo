export class Stack<T> {
	private container: T[];

	constructor() {
		this.container = [];
	}

	push(item: T) {
		this.container.push(item);
	}

	pop(): T | undefined {
		return this.container.pop();
	}

	get size() {
		return this.container.length;
	}

	get isEmpty() {
		return this.size === 0;
	}

	static from<T>(items: T[]): Stack<T> {
		const stack = new Stack<T>();

		for (const item of items) {
			stack.push(item);
		}

		return stack;
	}
}
