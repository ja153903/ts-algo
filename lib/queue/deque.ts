export class Deque<T> {
	private container: T[];

	constructor(items: T[] = []) {
		this.container = items;
	}

	pushFront(item: T) {
		this.container.unshift(item);
	}

	pushBack(item: T) {
		this.container.push(item);
	}

	popFront(): T | undefined {
		return this.container.shift();
	}

	popBack(): T | undefined {
		return this.container.pop();
	}

	peekFront(): T | undefined {
		return this.container.at(0);
	}

	peekBack(): T | undefined {
		return this.container.at(-1);
	}

	get isEmpty() {
		return this.size === 0;
	}

	get size() {
		return this.container.length;
	}
}
