import { describe, test, expect } from "bun:test";
import { DefaultMap } from "./default-map";

describe("DefaultMap<number>", () => {
	test("DefaultMap should return the default value if the key is not found", () => {
		const map = new DefaultMap<number, number>(() => 0);
		expect(map.get(1)).toBe(0);
	});
});

describe("DefaultMap<CustomObject>", () => {
	interface CustomObject {
		name: string;
		age: number;
	}

	test("DefaultMap should return the default value if the key is not found", () => {
		const map = new DefaultMap<string, CustomObject>(() => ({
			name: "John",
			age: 20,
		}));

		expect(map.get("John")).toEqual({
			name: "John",
			age: 20,
		});
	});
});
