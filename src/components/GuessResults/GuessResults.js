import React from 'react';

import {NUM_OF_GUESSES_ALLOWED} from '../../constants';
import {range} from '../../utils';

import Guess from '../Guess';

function GuessResults({ guessResults }) {
  console.log(guessResults)
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess
          key={num}
          value={guessResults[num]}
        />
      ))}
    </div>
  );
}

export default GuessResults;
