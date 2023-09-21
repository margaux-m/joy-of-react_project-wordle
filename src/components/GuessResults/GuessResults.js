import React from 'react';

import {NUM_OF_GUESSES_ALLOWED} from '../../constants';
import {range} from '../../utils';
import Guess from '../Guess';

function GuessResults({ guessResults }) {
  const numOfEmptyRows = NUM_OF_GUESSES_ALLOWED - guessResults.length;
  
  return (
    <div className="guess-results">
      {guessResults.map(({id, guess}) => (
        <Guess
          id={id}
          value={guess}
        />
      ))}
      {range(0, numOfEmptyRows).map((index) => (
        <Guess id={index} value="     " />
      ))}
    </div>
  );
}

export default GuessResults;
