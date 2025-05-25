class DefaultMap<K, V> extends Map<K, V> {
	constructor(private readonly defaultValue: () => V) {
		super();
	}

	get(key: K) {
		if (!this.has(key)) {
			this.set(key, this.defaultValue());
		}
		return super.get(key);
	}
}

export { DefaultMap };
