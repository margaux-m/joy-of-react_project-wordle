import React from 'react';

import {sample} from '../../utils';
import {WORDS} from '../../data';
import {NUM_OF_GUESSES_ALLOWED} from '../../constants';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import Banner from '../Banner';
import LostBanner from '../LostBanner';
import WonBanner from '../WonBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [gameStatus, setGameStatus] = React.useState('running');
  const [guessResults, setGuessResults] = React.useState([]);
  
  const handleSubmitGuess = (guess) => {
    const nextGuessResults = [...guessResults, guess];
    setGuessResults(nextGuessResults);
    
    if (guess === answer) {
      setGameStatus('won');
    } else if (nextGuessResults.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  }
  
  return (
    <>
      <GuessResults
        guessResults={guessResults}
        answer={answer}
      />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        disabled={gameStatus !== 'running'}
      />
      {gameStatus === 'won' && <WonBanner numOfGuesses={guessResults.length} />}
      {gameStatus === 'lost' && <LostBanner answer={answer} />}
    </>
  )
}

export default Game;
