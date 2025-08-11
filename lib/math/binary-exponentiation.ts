export const MOD = 10 ** 9 + 7;

export function binPow(base: number, exp: number, mod = MOD): number {
	let result = 1;
	let currentBase = base;
	let currentExp = exp;

	while (currentExp > 0) {
		// If the value is odd, then we need to multiply the result by the current base
		if (currentExp & 1) {
			result = (result * currentBase) % mod;
		}

		// We can square the current base because we are using the binary representation of the exponent
		// This is the same as multiplying the current base by itself
		currentBase = (currentBase * currentBase) % mod;

		// We can shift the exponent to the right by 1 because we are using the binary representation of the exponent
		// This is the same as dividing the current exponent by 2
		currentExp >>>= 1;
	}

	return result;
}
