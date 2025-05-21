export function binarySearch<T>(
	arr: T[],
	target: T,
	comparator: (a: T, b: T) => number,
) {
	let left = 0;
	let right = arr.length - 1;

	while (left <= right) {
		const mid = Math.floor(left + (right - left) / 2);

		const comparison = comparator(arr[mid], target);

		if (comparison === 0) {
			return mid;
		}

		if (comparison < 0) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}

	return -1;
}

/**
 * An alternative method to implement binary search is based on an efficient way to
 * iterate through the elements of the array. The idea is to make jumps and slow
 * the speed when we get closer to the target element.
 *
 * The search goes through the array from left to right, and the initial jump length is
 * n / 2. At each step the jump length will be halved: first n / 4, then n/8, n/6, etc.
 * until finally the length is 1. After the jumps, either the target element has been found
 * or we know that it does not appear in the array.
 */
export function binarySearchFast<T>(
	arr: T[],
	target: T,
	comparator: (a: T, b: T) => number,
) {
	let k = 0;

	for (let b = Math.floor(arr.length / 2); b >= 1; b = Math.floor(b / 2)) {
		while (k + b < arr.length && comparator(arr[k + b], target) <= 0) {
			k += b;
		}
	}

	if (comparator(arr[k], target) === 0) {
		return k;
	}

	return -1;
}
