import "./Tetris.css";

import Board from "./Board";

import { useBoard } from "../hooks/useBoard";
import { usePlayer } from "../hooks/usePlayer";

const Tetris = ({ rows, columns, setGameOver }) => {
  const [player, setPlayer, resetPlayer] = usePlayer();
  const [board, setBoard] = useBoard({
    rows,
    columns,
    player,
    resetPlayer
  });

  return (
    <div className="Tetris">
      <Board board={board} />
    </div>
  );
};

export default Tetris;
