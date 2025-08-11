import { PriorityQueue } from "@lib/queue";

interface Node {
	char: string;
	index: number;
}

function clearStars(s: string): string {
	const pq = new PriorityQueue<Node>((a, b) => {
		if (a.char === b.char) {
			return b.index - a.index;
		}

		return a.char.localeCompare(b.char);
	});

	for (let i = 0; i < s.length; i++) {
		const char = s[i];

		if (char !== "*") {
			pq.enqueue({ char, index: i });
		} else {
			// if we have a "*", now we have to find the
			const stack: Node[] = [];

			while (!pq.isEmpty() && (pq.peek()?.index ?? s.length) >= i) {
				const top = pq.dequeue();
				if (top) {
					stack.push(top);
				}
			}

			pq.dequeue();

			while (stack.length) {
				const top = stack.pop();
				if (top) {
					pq.enqueue(top);
				}
			}
		}
	}

	const result: Node[] = [];
	while (!pq.isEmpty()) {
		const value = pq.dequeue();
		if (value) {
			result.push(value);
		}
	}

	return result
		.sort((a, b) => a.index - b.index)
		.map((node) => node.char)
		.join("");
}

export { clearStars };
