"use client";
import{useState} from "react";


function Square ({value, onClick}){
return <button className="square" onClick={onClick}>
  {value}
  </button>
}

function Board(){
  const [squares, setSquares] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsNext] = useState(true);


  function onSquareClick(idx) {

    if (squares[idx] || calculateWinner(squares)) return;
    const newSquares = squares.slice();
    newSquares[idx] = xIsNext ? "X" : "O";
    setXIsNext(!xIsNext);
    setSquares(newSquares);
  }

  const winner = calculateWinner(squares);

  return ( <>
  <div className= "status">
    <h>Testing auto deployment</h>
   { winner ?(
     <p>Winner is: {winner}</p>
    ) :( <p>Next Player: {xIsNext ? "X" : "O"}</p>)}
      </div>
  <div className="board-row">
    <Square value={squares[1]} onClick={() => onSquareClick(1)} />
  <Square value={squares[2]} onClick={() => onSquareClick(2)} />
  <Square value={squares[3]} onClick={() => onSquareClick(3)} />
  </div>
  <div className="board-row">
    <Square value={squares[4]} onClick={() => onSquareClick(4)} />
  <Square value={squares[5]} onClick={() => onSquareClick(5)} />
  <Square value={squares[6]} onClick={() => onSquareClick(6)} />
  </div>
  <div className="board-row">
    <Square value={squares[7]} onClick={() => onSquareClick(7)} />
  <Square value={squares[8]} onClick={() => onSquareClick(8)} />
  <Square value={squares[9]} onClick={() => onSquareClick(9)} />
  </div>
  </>
);
}

function calculateWinner(squares) {
  const lines = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares [a] === squares[b] && squares[b] === squares[c] ){
      return squares[a];
    }
  }
  return null;
}

export default function Game() {
  const [history, setHistory] = useState ([Array(9).fill(null)]);
const [currentMove, setCurrentMove] = useState(0);

return (
  <div>
    <Board/>
  </div>
);

}