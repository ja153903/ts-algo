/**
 * Sum of the first `n` natural numbers
 * @param n - The number of natural numbers to sum
 * @returns The sum of the first `n` natural numbers
 */
export function snn(n: number) {
	return (n * (n + 1)) / 2;
}

/**
 * Sum of the squares of the first `n` natural numbers
 * @param n - The number of natural numbers to sum
 * @returns The sum of the squares of the first `n` natural numbers
 */
export function ssnn(n: number) {
	return (n * (n + 1) * (2 * n + 1)) / 6;
}
