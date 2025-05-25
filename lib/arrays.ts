export function sum<T>(items: T[], getNumber: (a: T) => number) {
	return items.reduce((acc, item) => acc + getNumber(item), 0);
}
