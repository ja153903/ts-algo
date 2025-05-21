/**
 * Closed form formula for calculating the Fibonacci numbers
 * @param n - The index of the Fibonacci number to calculate
 * @returns The Fibonacci number at index `n`
 */
export function binet(n: number) {
	const sqrt5 = Math.sqrt(5);
	const twoRaisedToN = 2 ** n;

	const firstTerm = (1 + sqrt5) ** n;
	const secondTerm = (1 - sqrt5) ** n;

	return (firstTerm - secondTerm) / (twoRaisedToN * sqrt5);
}
