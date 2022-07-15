import React from 'react';

import classes from './Board.module.css';

//When rotation is 0, return null
// to prevent triggering rotate0 animation
const matchRotationClass = (rotation) => {
  if (rotation === 0) return '';

  switch (rotation % 4) {
    case 1:
      return classes.rotate45;
    case 2:
      return classes.rotate90;
    case 3:
      return classes.rotate135;
    case 4:
      return classes.rotate180;
    case 5:
      return classes.rotate225;
    case 6:
      return classes.rotate270;
    case 7:
      return classes.rotate315;
    default:
      return classes.rotate0;
  }
};

const Board = (props) => {
  return (
    <div className={classes.chessboardContainer}>
      <div
        className={`${classes.chessboard} ${matchRotationClass(
          props.rotation
        )}`}
      >
        {props.board.map((row, rowIndex) => {
          return (
            <div className={classes.row} key={rowIndex}>
              {row.map((column, columnIndex) => {
                const dark =
                  rowIndex % 2 === 0
                    ? columnIndex % 2 === 0
                    : columnIndex % 2 !== 0;
                const cellClass = `${classes.column} ${
                  dark ? classes.dark : classes.white
                }`;

                return <div className={cellClass} key={columnIndex} />;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Board;
