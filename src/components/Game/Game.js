import React from 'react';

import {sample} from '../../utils';
import {WORDS} from '../../data';
import {checkGuess} from '../../game-helpers';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = React.useState([]);
  
  const handleSubmitGuess = (guess) => {
    const nextGuessResult = checkGuess(guess, answer);
    setGuessResults([...guessResults, nextGuessResult]);
  }
  
  return (
    <>
      <GuessResults
        guessResults={guessResults}
      />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
      />
    </>
  )
}

export default Game;
