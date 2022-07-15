import React, { useState } from 'react';

import './App.css';

import Container from 'react-bootstrap/Container';
import BoardSizeInput from './components/UI/BoardSizeInput';
import Board from './components/UI/Board';
import Cards from './components/UI/Cards';
import RotateButton from './components/UI/RotateButton';

function App() {
  const [showBoard, setShowBoard] = useState(false);
  const [board, setBoard] = useState([]);
  const [rotation, setRotation] = useState(0);
  const [disableRotation, setDisableRotation] = useState(null);

  // function to dynamically add animation class
  // to board transform board
  // 1 = 45deg, 2 = 90deg, 3 = 135deg...etc
  // during animation, disable rotate button
  const handleRotateBoard = () => {
    setRotation(rotation + 1);
    setDisableRotation(true);
    setTimeout(() => {
      setDisableRotation(false);
    }, 1000);
  };

  // receives size from input
  // use size to generate 2D array grid
  const handleBoardInputSubmit = (size) => {
    setShowBoard(true);
    setBoard(new Array(size).fill(new Array(size).fill(null)));
  };

  return (
    <Container>
      <h1 className='main-heading pt-3'>THE GRAYSCALE CHESS BOARD</h1>
      {showBoard ? (
        <>
          <Cards />
          <RotateButton onClick={handleRotateBoard} disable={disableRotation} />
          <Board board={board} rotation={rotation} />
        </>
      ) : (
        <BoardSizeInput onSubmit={handleBoardInputSubmit} />
      )}
    </Container>
  );
}

export default App;
