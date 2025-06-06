// NOTE: This is a template for union find with path compression and union by rank
// More often than not, you'll want to use this as a template and not directly given
// that most problems will require a variation of union find where the parent may not be
// a number.
export class UnionFind {
	private parents: number[];
	private ranks: number[];

	constructor(n: number) {
		this.parents = Array.from({ length: n }, (_, i) => i);
		this.ranks = Array.from({ length: n }, () => 0);
	}

	find(x: number): number {
		if (this.parents[x] !== x) {
			this.parents[x] = this.find(this.parents[x]);
		}
		return this.parents[x];
	}

	union(x: number, y: number) {
		const rootX = this.find(x);
		const rootY = this.find(y);

		if (rootX === rootY) {
			return;
		}

		if (this.ranks[rootX] < this.ranks[rootY]) {
			this.parents[rootX] = rootY;
		} else if (this.ranks[rootX] > this.ranks[rootY]) {
			this.parents[rootY] = rootX;
		} else {
			this.parents[rootY] = rootX;
			this.ranks[rootX]++;
		}
	}
}
