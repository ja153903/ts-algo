export class Counter<T> extends Map<T, number> {
	constructor(items?: T[]) {
		super();

		if (items) {
			this.from(items);
		}
	}

	private from(items: T[]) {
		for (const item of items) {
			this.increment(item);
		}
	}

	increment(item: T, by = 1) {
		this.set(item, (this.get(item) ?? 0) + by);
	}

	decrement(item: T, by = 1) {
		this.set(item, (this.get(item) ?? 0) - by);
		if ((this.get(item) ?? 0) <= 0) {
			this.delete(item);
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

	override get(key: T) {
		const value = super.get(key);
		return value ?? 0;
	}
}
