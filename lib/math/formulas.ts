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

/**
 * Euclidean algorithm
 * @param a - The first number
 * @param b - The second number
 * @returns The GCD of `a` and `b`
 */
export function gcd(a: number, b: number): number {
	if (b === 0) return a;
	return gcd(b, a % b);
}

/**
 * Extended Euclidean algorithm
 * @param a - The first number
 * @param b - The second number
 * @returns The GCD of `a` and `b`, and the coefficients `x` and `y` such that `ax + by = gcd(a, b)`
 */
export function gcdExtended(a: number, b: number): [number, number, number] {
	if (b === 0) return [a, 1, 0];
	const [gcd, x, y] = gcdExtended(b, a % b);
	return [gcd, y, x - Math.floor(a / b) * y];
}

/**
 * Least common multiple
 * @param a - The first number
 * @param b - The second number
 * @returns The LCM of `a` and `b`
 */
export function lcm(a: number, b: number): number {
	return (a * b) / gcd(a, b);
}
