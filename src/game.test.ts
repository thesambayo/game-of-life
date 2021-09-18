import Game from "./game";

/**
		coordinates => {
			0: [1, 2],
			2: [0, 1, 2],
			3: [0, 1]
		}

		// const previousState = [
    //   [ true, false, false ],
    //   [ false, false, false ],
    //   [ true, true, true ],
    //   [ true, true, false ],
    //   [ false, false, false ]
    // ];

		// const expectedState = [
    //   [ false, false, false ],
    //   [ true, false, false ],
    //   [ true, false, true ],
    //   [ true, false, true ],
    //   [ false, false, false ]
    // ];
 */

describe('game class initiation', () => {
	const noOfRows = 5;
	const noOfColumns = 3;
	const coordinates = {
		0: [0],
		2: [0, 1, 2],
		3: [0, 1]
	};
	const game = new Game(noOfRows, noOfColumns, coordinates);
	const emptyGame = new Game(noOfRows, noOfColumns);


	test('ascertain that no steps has been taken', () => {
		expect(game.steps).toBe(0);
	});

	test('ascertain that game board has desired number of cells', () => {
		const { board } = game;
		const noOfCellsInFirstRow = board[0].length;
		expect(board.length * noOfCellsInFirstRow).toEqual(noOfRows * noOfColumns);
	});

	test('acertain an empty game', () => {
		const empty = [
      [ false, false, false ],
      [ false, false, false ],
      [ false, false, false ],
      [ false, false, false ],
      [ false, false, false ]
    ];

		expect(emptyGame.board).toEqual(empty);
	});


	test('acertain a non empty game', () => {
		const expectedState = [
      [ true, false, false ],
      [ false, false, false ],
      [ true, true, true ],
      [ true, true, false ],
      [ false, false, false ]
    ];

		expect(game.board).toEqual(expectedState);
	});

});


describe('game board after first step', () => {
	const noOfRows = 5;
	const noOfColumns = 3;
	const coordinates = {
		0: [0],
		2: [0, 1, 2],
		3: [0, 1]
	};
	const game = new Game(noOfRows, noOfColumns, coordinates);

	beforeAll(() => {
		game.simulateClick();
		// const previousState = [
    //   [ true, false, false ],
    //   [ false, false, false ],
    //   [ true, true, true ],
    //   [ true, true, false ],
    //   [ false, false, false ]
    // ];

		// const expectedState = [
    //   [ false, false, false ],
    //   [ true, false, false ],
    //   [ true, false, true ],
    //   [ true, false, true ],
    //   [ false, false, false ]
    // ];
	});

	test('ascertain that steps has increased by one', () => {
		expect(game.steps).toBe(1);
	});

	test('overpopulated cell dies', () => {
		expect(game.board[2][1]).toEqual(false);
	});

	test('empty cell with 3 neighbors is populated', () => {
		expect(game.board[3][2]).toEqual(true);
	});

	test('cell in solitude dies', () => {
		expect(game.board[0][0]).toEqual(false);
	});

	test('cell with 2/3 neighbors survives', () => {
		expect(game.board[3][2]).toEqual(true);
	});

});

describe('game board after two step', () => {
	const noOfRows = 5;
	const noOfColumns = 3;
	const coordinates = {
		0: [0],
		2: [0, 1, 2],
		3: [0, 1]
	};
	const game = new Game(noOfRows, noOfColumns, coordinates);

	beforeAll(() => {
		game.simulateClick();
		game.simulateClick();
		// const previousState = [
    //   [ true, false, false ],
    //   [ false, false, false ],
    //   [ true, true, true ],
    //   [ true, true, false ],
    //   [ false, false, false ]
    // ];

		// const afterFirstState = [
    //   [ false, false, false ],
    //   [ true, false, false ],
    //   [ true, false, true ],
    //   [ true, false, true ],
    //   [ false, false, false ]
    // ];
		// const afterSecondState = [
    //   [ false, false, false ],
    //   [ false, true, false ],
    //   [ true, false, false ],
    //   [ false, false, false ],
    //   [ false, false, false ]
    // ];
	});

	test('ascertain that two steps have been taken', () => {
		expect(game.steps).toBe(2);
		expect(game.board[2][0]).toEqual(true);
		expect(game.board[2][1]).toEqual(false);
		expect(game.board[2][2]).toEqual(false);

		expect(game.board[3][0]).toEqual(false);
		expect(game.board[3][1]).toEqual(false);
		expect(game.board[3][2]).toEqual(false);
	});

});