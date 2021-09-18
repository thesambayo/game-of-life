# Testing John Conway's [Game of Life](https://playgameoflife.com/)

## Available Scripts

In the project directory, you can run:

### `npm install or yarn install`.
install the dependencies needed for the test application to run

### `npm run test`

Launches the test runner in the console.

## Nouns
- Depending on the initial conditions
- The Game.
- Cell: Boolean
- A few mathematical rules


## class Game
- initial conditions
- public Arrays[x,y]: Boolean
- implements a set of mathematicial rules
- it has an initiation function(x: Int, y: Int, Array[x: Int,y: Int], steps)

## Rules
#### For a space that is populated:
- Each cell with one or no neighbors dies, as if by solitude.

- Each cell with four or more neighbors dies, as if by overpopulation.

- Each cell with two or three neighbors survives.


#### For a space that is empty or unpopulated
- Each cell with three neighbors becomes populated.

## Triple A tests
// Arrange, Act, Assert

- Arrange: Prepare the System under test to a state you want
- Act: Operation you want to verify. Operation should change the system state
- Assert: Verify the new state is correct

## Create 5 tests
- That tests the game initialization
- 2-5 Tests each of the rules of the game
