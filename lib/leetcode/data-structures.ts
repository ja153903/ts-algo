import { SinglyLinkedListNode } from "@lib/linked-lists";

export class ListNode extends SinglyLinkedListNode<number> {}

export class TreeNode {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;

	constructor(
		val = 0,
		left: TreeNode | null = null,
		right: TreeNode | null = null,
	) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}
