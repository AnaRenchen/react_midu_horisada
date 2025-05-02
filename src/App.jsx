import { useState } from "react";
import "./App.css";
import confetti from "canvas-confetti";

const TURNS = {
  X: "x",
  O: "o",
};

const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? "is-selected" : ""} `;

  const handleClick = () => {
    updateBoard(index);
  };
  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
};
function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null); //null es que no hay ganador y el false es un empate

  const checkWinner = (boardToCheck) => {
    // revisamos todas las combinaciones ganadoras
    // para ver si X u O ganó
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo;
      if (
        boardToCheck[a] && //acá veo si hay algo
        boardToCheck[a] === boardToCheck[b] && //acá y abajo veo si lo que hay es igual a b y a c (que son las posiciones)
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a];
      }
    }
    // si no hay ganador
    return null;
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
  };

  const checkEndGame = (newBoard) => {
    //revisamos si hay un empate, si no hay más espacios vacíos en el tablero
    return newBoard.every((square) => square !== null);
  };

  const updateBoard = (index) => {
    const newBoard = [...board]; //copia del board; tratar las props y los estados como imutables; se crea un nuevo array con el nuevo valor; se hace la copia para evitar modificar el original

    if (board[index] || winner) return; //si ya tiene algo entonces no se actualiza la posición

    //actualizar el tablero
    newBoard[index] = turn;
    setBoard(newBoard);

    //cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    //revisar si hay ganador
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner); //la actualización del estado en react es asíncrona
    } else if (checkEndGame(newBoard)) {
      setWinner(false); //revisar si se terminó el juego
    }
  };

  return (
    <main className="board">
      <h1 translate="no">Tic tac toe</h1>
      <button onClick={resetGame}>Reset del Juego</button>

      <section className="game">
        {board.map((square, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {square}
            </Square>
          );
        })}
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      {winner !== null && (
        <section className="winner">
          <div className="text">
            <h2>{winner == false ? "Empate" : "Ganó:"}</h2>
            <header className="win">
              {winner && <Square>{winner}</Square>}
            </header>
            <footer>
              <button onClick={resetGame}>Empezar de nuevo</button>
            </footer>
          </div>
        </section>
      )}
    </main>
  );
}

export default App;
