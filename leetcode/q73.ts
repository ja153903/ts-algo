/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
	// In this solution, we required O(m + n) space
	const rows = matrix.length;
	const cols = matrix[0].length;

	const rowsToZero = new Set<number>();
	const colsToZero = new Set<number>();

	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			if (matrix[i][j] === 0) {
				rowsToZero.add(i);
				colsToZero.add(j);
			}
		}
	}

	for (const row of rowsToZero) {
		for (let i = 0; i < cols; i++) {
			matrix[row][i] = 0;
		}
	}

	for (const col of colsToZero) {
		for (let i = 0; i < rows; i++) {
			matrix[i][col] = 0;
		}
	}
}

export { setZeroes };
