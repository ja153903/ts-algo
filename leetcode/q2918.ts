import { sum } from "@lib/arrays";

/**
 * You are given two arrays a and b consisting of positive integers.
 * You have to replace all the 0's in both arrays with strictly positive integers
 * such that the sum of elements of both arrays becomes equal.
 *
 * Return the minimum equal sum you can obtain, or -1 if it is impossible.
 */
function minSum(a: number[], b: number[]): number {
	const ca = sum<number>(a, (item) => item);
	const cb = sum<number>(b, (item) => item);

	const numZerosA = a.filter((item) => item === 0).length;
	const numZerosB = b.filter((item) => item === 0).length;

	if (numZerosA === 0 && numZerosB === 0) {
		return ca === cb ? ca : -1;
	}

	if (numZerosA === 0) {
		if (cb + numZerosB <= ca) {
			return ca;
		}

		return -1;
	}

	if (numZerosB === 0) {
		if (ca + numZerosA <= cb) {
			return cb;
		}

		return -1;
	}

	return Math.max(ca + numZerosA, cb + numZerosB);
}

export { minSum };
