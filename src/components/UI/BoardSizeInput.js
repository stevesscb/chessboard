import React, { useState } from 'react';

import classes from './BoardSizeInput.module.css';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const BoardSizeInput = (props) => {
  const [size, setSize] = useState(0);
  const [error, setError] = useState('');

  const validateSize = (rawSize) => {
    let newError = '';

    if (!rawSize || rawSize < 4 || rawSize > 12) {
      newError = 'Please enter a value between 4 and 12';
    }

    setError(newError);
    return !newError;
  };

  // Extract value from event and update 'size' value.
  const handleChange = (event) => {
    setSize(Number(event.target.value));
  };

  // check value with validateSize function
  // if validation passed, lift 'size' state to parent.
  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateSize(size)) {
      props.onSubmit(size);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className='mb-3 pt-3'>
        <Form.Label>Board size:</Form.Label>
        <div className={classes.helpText}>
          <Form.Control
            type='number'
            id='size'
            className={error ? classes.hasError : ''}
            placeholder='Enter value between 4 - 12'
            onChange={handleChange}
          />
        </div>
        {error && <div className={classes.errorText}>{error}</div>}
      </Form.Group>
      <Button variant='light' type='submit'>
        Enter
      </Button>
    </Form>
  );
};

export default BoardSizeInput;
