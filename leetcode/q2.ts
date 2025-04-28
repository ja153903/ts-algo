import { ListNode } from "@lib/leetcode";

function addTwoNumbers(
	l1: ListNode | null,
	l2: ListNode | null,
): ListNode | null {
	let carry = 0;

	const dummy = new ListNode(0);
	let current = dummy;

	let a = l1;
	let b = l2;

	while (a !== null || b !== null) {
		let currentSum = carry;

		if (a !== null) {
			currentSum += a.val;
			a = a.next;
		}

		if (b !== null) {
			currentSum += b.val;
			b = b.next;
		}

		current.next = new ListNode(currentSum % 10);
		carry = Math.floor(currentSum / 10);

		current = current.next;
	}

	if (carry > 0) {
		current.next = new ListNode(carry);
	}

	return dummy.next;
}

export { addTwoNumbers };
