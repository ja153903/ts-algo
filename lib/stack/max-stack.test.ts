import { expect, describe, test } from "bun:test";
import { MaxStack } from "./index";

describe("MaxStack<T>", () => {
	test("MaxStack should return the maximum value", () => {
		const numberStack = new MaxStack<number>((a: number, b: number) => b - a);
		numberStack.push(5);
		numberStack.push(4);
		numberStack.push(3);
		numberStack.push(2);
		numberStack.push(1);

		expect(numberStack.getMax()).toBe(5);
	});
});
