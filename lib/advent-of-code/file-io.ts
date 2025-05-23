import { Effect, Stream } from "effect";

/**
 * Creates an Effect that reads a file and returns its contents as a string.
 * The Effect is created using Effect.promise to handle the asynchronous file reading operation.
 *
 * @param filename - The path to the file to read.
 * @returns A promise that resolves to the file contents as a string.
 */
export function readFileToString(filename: string) {
	return Effect.promise(() => {
		const file = Bun.file(filename);
		return file.text();
	});
}

export function readFileToStream(filename: string, delimiter = "") {
	return Stream.fromIterableEffect(
		readFileToString(filename).pipe(
			Effect.map((data) => data.split(delimiter)),
		),
	);
}
