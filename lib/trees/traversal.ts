import type { TreeNode } from "@lib/leetcode/data-structures";

export function preorderTraversal(
	root: TreeNode | null,
	callbackFn: (node: TreeNode) => void,
) {
	function traverse(node: TreeNode | null) {
		if (node === null) return;

		callbackFn(node);
		traverse(node.left);
		traverse(node.right);
	}

	traverse(root);
}

export function inorderTraversal(
	root: TreeNode | null,
	callbackFn: (node: TreeNode) => void,
) {
	function traverse(node: TreeNode | null) {
		if (node === null) return;

		traverse(node.left);
		callbackFn(node);
		traverse(node.right);
	}

	traverse(root);
}

export function postorderTraversal(
	root: TreeNode | null,
	callbackFn: (node: TreeNode) => void,
) {
	function traverse(node: TreeNode | null) {
		if (node === null) return;

		traverse(node.left);
		traverse(node.right);
		callbackFn(node);
	}

	traverse(root);
}

// TODO: Implement level order traversal
