
class Game {
	rows: number;
	columns: number;
	steps = 0;
	board: boolean[][];

	constructor(rows: number, columns: number, setUp: {} = {}) {
		this.rows = rows;
		this.columns = columns;
		this.board = this.createBoard(rows, columns, setUp);
	}

	public simulateClick() {
		this.steps += 1;
		this.processCells();
	}

	private processCells() {
		const newBoard = this.createBoard(this.rows, this.columns, {});
		for (const [rowIndex, row] of this.board.entries()) {
			for (const [columnIndex, column] of row.entries()) {
				newBoard[rowIndex][columnIndex] = column ?
				this.processTruthyCell(rowIndex, columnIndex) :
				this.processFalsyCell(rowIndex, columnIndex);
			}
		}

		// console.log(newBoard);
		this.board = newBoard;
	}

	private processFalsyCell(rowIndex: number, columnIndex: number) {
		// if and only 3 neighbors are true, cell is true
		const neighborsCells = this.fetchNeighbors(rowIndex, columnIndex);
		const truthyNeighbors = neighborsCells.filter(cell => !!cell);

		if (truthyNeighbors.length === 3) {
			return true;
		}
		return false;
	}

	private processTruthyCell(rowIndex: number, columnIndex: number) {
		const neighborsCells = this.fetchNeighbors(rowIndex, columnIndex);
		const truthyNeighbors = neighborsCells.filter(cell => !!cell);

		if (truthyNeighbors.length === 2 || truthyNeighbors.length === 3) {
			return true;
		}

		return false;
	}

	private fetchNeighbors(rowIndex: number, columnIndex: number): boolean[] {
		// get surrounding cells
		// a cell can have max of eight neighbors
		// a cell can have min of three neighbors
		const neighborsCells: boolean[] = [];

		// pure substractions
		if (rowIndex - 1 >= 0 && columnIndex - 1 >= 0) {
			neighborsCells.push(this.board[rowIndex - 1][columnIndex - 1]);
		}
		if (columnIndex - 1 >= 0) {
			neighborsCells.push(this.board[rowIndex][columnIndex - 1]);
		}
		if (rowIndex - 1 >= 0) {
			neighborsCells.push(this.board[rowIndex - 1][columnIndex]);
		}

		// mixed substraction and addition
		if (rowIndex - 1 >= 0 && columnIndex + 1 < this.columns) {
			neighborsCells.push(this.board[rowIndex - 1][columnIndex + 1]);
		}
		
		if (columnIndex - 1 >= 0 && rowIndex + 1 < this.rows) {
			neighborsCells.push(this.board[rowIndex + 1][columnIndex - 1]);
		}

		// pure addition
		if (rowIndex + 1 < this.rows && columnIndex + 1 < this.columns) {
			neighborsCells.push(this.board[rowIndex + 1][columnIndex + 1]);
		}

		if (rowIndex + 1 < this.rows) {
			neighborsCells.push(this.board[rowIndex + 1][columnIndex]);
		}

		if (columnIndex + 1 < this.columns) {
			neighborsCells.push(this.board[rowIndex][columnIndex + 1]);
		}

		return neighborsCells;
	}

	private createBoard(rows: number, columns: number, setUp: {}): boolean[][] {
		let boardArray: boolean[][] = [];
	
		for(var row = 0; row < rows; row++) {
			boardArray[row] = [];
			const isRowPresentInSetUp = !!setUp[row] && !!setUp[row].length;
			
			for(var col = 0; col < columns; col++) {
				if (isRowPresentInSetUp && setUp[row].includes(col)) {
					boardArray[row][col] = true;
				} else {
					boardArray[row][col] = false;
				}
			}
		}

		return boardArray;
	}
};

export default Game;


// [true, false, false, true]