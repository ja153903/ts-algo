class UnionFind {
	private parent: Map<string, string>;

	constructor(s1: string, s2: string) {
		this.parent = new Map<string, string>();

		for (let i = 0; i < s1.length; i++) {
			this.parent.set(s1[i], s1[i]);
			this.parent.set(s2[i], s2[i]);
		}
	}

	find(x: string): string {
		if (!this.parent.has(x)) {
			this.parent.set(x, x);
		}

		if (this.parent.get(x) === x) {
			return x;
		}

		// Path compression: set parent directly to root
		const root = this.find(this.parent.get(x) ?? "");
		this.parent.set(x, root);
		return root;
	}

	union(x: string, y: string) {
		const rootX = this.find(x);
		const rootY = this.find(y);

		if (rootX === rootY) {
			return;
		}

		if (rootX < rootY) {
			this.parent.set(rootY, rootX);
		} else {
			this.parent.set(rootX, rootY);
		}
	}
}

function smallestEquivalentString(
	s1: string,
	s2: string,
	baseStr: string,
): string {
	const uf = new UnionFind(s1, s2);

	for (let i = 0; i < s1.length; i++) {
		uf.union(s1[i], s2[i]);
	}

	let result = "";

	for (let i = 0; i < baseStr.length; i++) {
		const char = baseStr[i];
		const root = uf.find(char);
		result += root;
	}

	return result;
}

export { smallestEquivalentString };
