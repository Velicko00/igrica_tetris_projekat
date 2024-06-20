import { useState, useEffect } from "react";

import { buildBoard, nextBoard } from "../business/Board";

export const useBoard = ({
  rows,
  columns,
  player,
  resetPlayer
}) => {
  const [board, setBoard] = useState(buildBoard({ rows, columns }));

  useEffect(() => {
    setBoard((previousBoard) =>
      nextBoard({
        board: previousBoard,
        player,
        resetPlayer
      })
    );
  }, [player, resetPlayer]);

  return [board];
};
