import { UnimplementedError } from "@lib/errors";

/**
 * Each queries[i] represents an action on nums
 * - decrement the valu at each index in the range by at most 1
 * - the amount by which the value is decremented can be chosen indepdendently for each index
 *
 * A zero array is an array with all its elements equal to 0
 *
 * Return the maximum number of elements that can be removed from queries such that nums can still be
 * converted to a zero array using the remaining queries
 *
 * We need a way to track if there are still remaining queries available because we want to make sure
 * that we have enough values to decrement
 *
 * @param nums
 * @param queries
 */
function maxRemoval(nums: number[], queries: number[][]): number {
	throw new UnimplementedError();
}

export { maxRemoval };
