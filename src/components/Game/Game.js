import React from 'react';

import {sample} from '../../utils';
import {WORDS} from '../../data';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import Banner from '../Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = React.useState([]);
  
  const handleSubmitGuess = (guess) => {
    setGuessResults([...guessResults, guess]);
  }
  
  const hasGuessed = guessResults.some((guess) => guess === answer);
  const isGameOver = (guessResults.length === 6) || hasGuessed;
  
  return (
    <>
      <GuessResults
        guessResults={guessResults}
        answer={answer}
      />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        disabled={isGameOver}
      />
      {isGameOver && (
        <Banner
          answer={answer}
          hasGuessed={hasGuessed}
          guessResults={guessResults}
        />
      )}
    </>
  )
}

export default Game;
