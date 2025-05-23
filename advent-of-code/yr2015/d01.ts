import { Effect, Stream, Sink } from "effect";
import { readFileToString } from "@lib/advent-of-code";

const PATH_TO_FILE = `${import.meta.dir}/../data/yr2015/d01.in`;

type ParenthesisOutput = 1 | -1;

const mapParenthesisToNum = (parenthesis: string) =>
	parenthesis === "(" ? 1 : -1;

const stream = Stream.fromIterableEffect(
	readFileToString(PATH_TO_FILE).pipe(Effect.map((data) => data.split(""))),
);

const sum = Sink.sum.pipe(
	Sink.mapInput<string, ParenthesisOutput>((parenthesis) =>
		mapParenthesisToNum(parenthesis),
	),
);

interface TerminateOnBasementAccumulator {
	position: number;
	level: number;
}

const terminateOnBasement = Sink.fold<TerminateOnBasementAccumulator, string>(
	{ position: 0, level: 0 },
	({ level }) => level >= 0, // This is our cont function
	({ position, level }, parenthesis) => ({
		position: position + 1,
		level: parenthesis === "(" ? level + 1 : level - 1,
	}),
);

// Process both streams in parallel
Effect.runPromise(
	Effect.zipWith(
		Stream.run(stream, sum),
		Stream.run(stream, terminateOnBasement),
		(totalFloors, terminalPosition) => ({ totalFloors, terminalPosition }),
	),
).then(({ totalFloors, terminalPosition }) => {
	console.log(`Part 1: ${totalFloors}`);
	console.log(`Part 2: ${terminalPosition.position}`);
});
