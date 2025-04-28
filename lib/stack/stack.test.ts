import { expect, describe, test } from "bun:test";
import { Stack } from "./index";

describe("Stack<T>", () => {
	test("Stack.from should initialize data", () => {
		const numberStack = Stack.from([5, 4, 3, 2, 1]);
		expect(numberStack.size).toBe(5);
		expect(numberStack.pop()).toBe(1);
		expect(numberStack.pop()).toBe(2);
		expect(numberStack.pop()).toBe(3);
		expect(numberStack.pop()).toBe(4);
		expect(numberStack.pop()).toBe(5);
		expect(numberStack.isEmpty).toBeTrue();
	});
});
