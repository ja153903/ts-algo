import { Effect, Sink, Stream } from "effect";
import { readFileToStream } from "@lib/advent-of-code";
import { toIntArray } from "@lib/advent-of-code/stoarr";

const PATH_TO_FILE = `${import.meta.dir}/../data/yr2015/d02.in`;

const stream = readFileToStream(PATH_TO_FILE, "\n");

interface Prism {
	readonly length: number;
	readonly width: number;
	readonly height: number;
}

function createPrismFromString(line: string): Effect.Effect<Prism, Error> {
	if (!line) {
		return Effect.fail(new Error("Empty line was found"));
	}

	const [length, width, height] = toIntArray(line, "x");

	if (Number.isNaN(length) || Number.isNaN(width) || Number.isNaN(height)) {
		return Effect.fail(new Error(`Line parsed is invalid: ${line}`));
	}

	return Effect.succeed({
		length,
		width,
		height,
	});
}

function getSurfaceArea({ length, width, height }: Prism) {
	return 2 * length * width + 2 * length * height + 2 * width * height;
}

function getSmallestArea({ length, width, height }: Prism) {
	return Math.min(length * width, length * height, width * height);
}

function getVolume({ length, width, height }: Prism) {
	return length * width * height;
}

function getSmallestPerimeter({ length, width, height }: Prism) {
	return Math.min(
		2 * length + 2 * width,
		2 * length + 2 * height,
		2 * width + 2 * height,
	);
}

const catchAllIntEffect = Effect.catchAll((error) => {
	console.warn(error);
	return Effect.succeed(0);
});

const getTotalSquareFeetOfWrappingPaper = Sink.sum.pipe(
	Sink.mapInputEffect((line: string) =>
		createPrismFromString(line).pipe(
			Effect.map((prism) => getSurfaceArea(prism) + getSmallestArea(prism)),
			catchAllIntEffect,
		),
	),
);

const getTotalFeetOfRibbon = Sink.sum.pipe(
	Sink.mapInputEffect((line: string) =>
		createPrismFromString(line).pipe(
			Effect.map((prism) => getVolume(prism) + getSmallestPerimeter(prism)),
			catchAllIntEffect,
		),
	),
);

Effect.runPromise(
	Effect.zipWith(
		Stream.run(stream, getTotalSquareFeetOfWrappingPaper),
		Stream.run(stream, getTotalFeetOfRibbon),
		(part1, part2) => ({ part1, part2 }),
	),
).then(({ part1, part2 }) => {
	console.log(`Part 1: ${part1}`);
	console.log(`Part 2: ${part2}`);
});
