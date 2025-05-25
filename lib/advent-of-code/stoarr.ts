export function toIntArray(s: string, delimiter = ""): number[] {
	return s.split(delimiter).map((part) => Number.parseInt(part));
}
