import "./Tetris.css";
import GameStats from "./GameStats";
import Board from "./Board";

import { useBoard } from "../hooks/useBoard";
import { usePlayer } from "../hooks/usePlayer";
import { useGameStats } from "../hooks/useGameStats";

const Tetris = ({ rows, columns, setGameOver }) => {
  const [gameStats, addLinesCleared] = useGameStats();
  const [player, setPlayer, resetPlayer] = usePlayer();
  const [board, setBoard] = useBoard({
    rows,
    columns,
    player,
    resetPlayer,
    addLinesCleared
  });

  return (
    <div className="Tetris">
      <Board board={board} />
      <GameStats gameStats={gameStats} />
    </div>
  );
};

export default Tetris;
