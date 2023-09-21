import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState('');
  const [guessResults, setGuessResults] = React.useState([]);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    const nextGuess = {
      id: crypto.randomUUID(),
      guess
    }
    console.log(nextGuess);
    
    guessResults.push(nextGuess);
    setGuess('');
  }
  
  return (
    <>
      <GuessResults
        guessResults={guessResults}
      />
      <GuessInput
        guess={guess}
        setGuess={setGuess}
        handleSubmit={handleSubmit}
      />
    </>
  )
}

export default Game;
