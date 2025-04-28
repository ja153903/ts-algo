import { expect, describe, test } from "bun:test";
import { MinStack } from "./index";

describe("MinStack<T>", () => {
	test("MinStack should return the minimum value", () => {
		const numberStack = new MinStack<number>((a: number, b: number) => a - b);
		numberStack.push(5);
		numberStack.push(4);
		numberStack.push(3);
		numberStack.push(2);
		numberStack.push(1);

		expect(numberStack.getMin()).toBe(1);
		numberStack.pop();
		expect(numberStack.getMin()).toBe(2);
	});
});
