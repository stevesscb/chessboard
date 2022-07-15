import React from 'react';

import Button from 'react-bootstrap/Button';

const RotateButton = (props) => {
  return (
    <div className='d-flex justify-content-center m-3'>
      <Button
        variant='light'
        type='submit'
        onClick={props.onClick}
        disabled={props.disable}
      >
        Rotate Board
      </Button>
    </div>
  );
};

export default RotateButton;
