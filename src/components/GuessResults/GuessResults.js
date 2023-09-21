import React from 'react';

function GuessResults({ guessResults }) {
  return (
    <div className="guess-results">
      {guessResults.map(({id, guess}) => (
        <p
          className="guess"
          key={id}
        >
          {guess}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
