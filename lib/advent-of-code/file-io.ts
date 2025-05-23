import { Effect } from "effect";

export function readFileToString(filename: string) {
	return Effect.promise(() => {
		const file = Bun.file(filename);
		return file.text();
	});
}
