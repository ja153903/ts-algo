export class Counter<T> extends Map<T, number> {
	constructor(items?: Iterable<T>) {
		super();

		if (items) {
			this.from(items);
		}
	}

	private from(items: Iterable<T>) {
		for (const item of items) {
			this.increment(item);
		}
	}

	increment(item: T, by = 1) {
		this.set(item, this.get(item) + by);
	}

	decrement(item: T, by = 1) {
		this.set(item, this.get(item) - by);
	}

	clean() {
		for (const [key, count] of this.entries()) {
			if (count <= 0) {
				this.delete(key);
			}
		}
	}

	update(other: Counter<T>) {
		for (const [key, count] of other.entries()) {
			this.increment(key, count);
		}
	}

	getMostCommon(k = 1) {
		return Array.from(this.entries())
			.toSorted((a, b) => b[1] - a[1])
			.slice(0, k);
	}

	/**
	 * We override the `get` method to return `0` if the key is not found
	 * @param key
	 * @returns
	 */
	override get(key: T) {
		const value = super.get(key);
		return value ?? 0;
	}
}
