type VisitedState = 0 | 1 | 2;

function largestPathValue(colors: string, edges: number[][]): number {
	const graph = createGraph(colors, edges);

	let result = 0;

	const counts: number[][] = [];
	for (let i = 0; i < colors.length; i++) {
		counts.push(new Array(26).fill(0));
	}

	const visited = new Array<VisitedState>(colors.length).fill(0);

	for (let i = 0; i < colors.length; i++) {
		if (result === Number.POSITIVE_INFINITY) {
			break;
		}

		result = Math.max(result, dfs(graph, i, counts, visited));
	}

	return result === Number.POSITIVE_INFINITY ? -1 : result;
}

function dfs(
	graph: Graph,
	node: number,
	counts: number[][],
	visited: Array<VisitedState>,
): number {
	const graphNode = graph.get(node);
	if (!graphNode) {
		throw new Error("Something wrong happened");
	}

	// visited state is 0
	if (!visited[node]) {
		visited[node] = 1; // mark as currently visiting

		for (const neighbor of graphNode.neighbors) {
			if (
				dfs(graph, neighbor.value, counts, visited) === Number.POSITIVE_INFINITY
			) {
				return Number.POSITIVE_INFINITY;
			}

			for (let i = 0; i < 26; i++) {
				counts[node][i] = Math.max(counts[node][i], counts[neighbor.value][i]);
			}
		}

		counts[node][graphNode.color.charCodeAt(0) - 97]++;
		visited[node] = 2;
	}

	return visited[node] === 2
		? counts[node][graphNode.color.charCodeAt(0) - 97]
		: Number.POSITIVE_INFINITY;
}

interface GraphNode {
	color: string;
	value: number;
	neighbors: GraphNode[];
}

type Graph = Map<number, GraphNode>;

function createGraph(colors: string, edges: number[][]) {
	const graph = new Map<number, GraphNode>();

	for (let i = 0; i < colors.length; i++) {
		const color = colors[i];

		graph.set(i, { color, value: i, neighbors: [] });
	}

	// connect all the appropriate edges
	for (const [u, v] of edges) {
		const uNode = graph.get(u);
		const vNode = graph.get(v);

		if (uNode && vNode) {
			uNode.neighbors.push(vNode);
		}
	}

	return graph;
}

export { largestPathValue };
