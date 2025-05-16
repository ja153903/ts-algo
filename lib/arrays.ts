export function sum<T>(items: T[], getNumber: (a: T) => number) {
	let result = 0;

	for (const item of items) {
		result += getNumber(item);
	}

	return result;
}
