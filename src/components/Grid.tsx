import { twMerge } from "tailwind-merge";
import { usePathfinding } from "../hooks/usePathfinding";
import { MAX_ROWS } from "../utils/constants";
import { Tile } from "./Tile";
import { useState, type MutableRefObject } from "react";
import { checkIfStartOrEnd } from "../utils/helpers";

export function Grid({ isVisualizationRunningRef }: { isVisualizationRunningRef: MutableRefObject<boolean>; }) {
  const {grid} = usePathfinding();
  const [isMouseDown, setIsMouseDown] = useState(false);

  const handleMouseDown = (row: number, col: number) => {
    if (isVisualizationRunningRef.current || checkIfStartOrEnd(row, col)) {
      return;
    }

    setIsMouseDown(true);
  }

  return (
    <div
      className={twMerge(
        // Base classes
        "flex items-center flex-col justify-center border-sky-300",
        // Control Grid Height
        `lg:min-h-[${MAX_ROWS * 17}px]  md:min-h-[${
          MAX_ROWS * 15
        }px]  xs:min-h-[${MAX_ROWS * 8}px]  min-h-[${MAX_ROWS * 7}px]`,
        // Controlling grid width
        `lg:w-[${MAX_ROWS * 17}px]  md:w-[${
          MAX_ROWS * 15
        }px]  xs:w-[${MAX_ROWS * 8}px]  w-[${MAX_ROWS * 7}px]`,
      )}
    >
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="flex">
          {row.map((tile, tileIndex) => {
            const {isEnd, isStart, isPath, isTraversed, isWall} = tile;
            return (
              <Tile 
                key={tileIndex}
                row={tile.row}
                col={tile.col}
                isEnd={isEnd}
                isStart={isStart}
                isPath={isPath}
                isTraversed={isTraversed}
                isWall={isWall}
              />
            )
})}
        </div>
      ))}
    </div>
  );
}
  