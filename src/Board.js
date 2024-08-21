import React, { useState } from "react";
import Cell from "./Cell";
import "./Board.css";

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

function Board({ nrows = 5, ncols = 5, chanceLightStartsOn = .2 }) {
  const [board, setBoard] = useState(createBoard);
  const [hasWon, setHasWon] = useState(false);

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
  function createBoard() {
    return Array.from({ length: nrows }).map(
      () =>
        Array.from({ length: ncols }).map(
          () => Math.random() < chanceLightStartsOn
        )
    );
  }

  /** Check if the player has won (all lights ON) */
  function checkWinCondition(board) {
    return board.every(row => row.every(cell => cell)); // Check if all cells are `true` (lights on)
  }

  /** Flip cells around a given cell */
  function flipCellsAround(coord) {
    setBoard(oldBoard => {
      const [y, x] = coord.split("-").map(Number);

      const flipCell = (y, x, boardCopy) => {
        if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
          boardCopy[y][x] = !boardCopy[y][x];
        }
      };

      const boardCopy = oldBoard.map(row => [...row]);

      flipCell(y, x, boardCopy);
      flipCell(y, x - 1, boardCopy);
      flipCell(y, x + 1, boardCopy);
      flipCell(y - 1, x, boardCopy);
      flipCell(y + 1, x, boardCopy);

      // Check if the game is won after the board is updated
      setHasWon(checkWinCondition(boardCopy));
      return boardCopy;
    });
  }

  /** Restart the game */
  function restartGame() {
    setBoard(createBoard());
    setHasWon(false);
  }

  // Render the winning message and restart button if the game is won
  if (hasWon) {
    return (
      <div className="Board-container">
        <h1>Lights Out!</h1>
        <h2>You Win!</h2>
        <button onClick={restartGame}>Restart Game</button>
      </div>
    );
  }

  // Render the game board
  return (
    <div className="Board-container">
      <h1>Lights Out!</h1>
      <p>Clicking a square flips that square and each of its surrounding neighbors. Try to turn on all the lights in the board!</p>
      <table className="Board">
        <tbody>
          {board.map((row, y) => (
            <tr key={y}>
              {row.map((cell, x) => (
                <Cell
                  key={`${y}-${x}`}
                  isLit={cell}
                  flipCellsAroundMe={() => flipCellsAround(`${y}-${x}`)}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Board;
