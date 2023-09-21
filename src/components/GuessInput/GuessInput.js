import React from 'react';

function GuessInput() {
  const [guess, setGuess] = React.useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    const sanitizedGuess = guess.trim().toUpperCase();
    console.log({ guess: sanitizedGuess });
    
    setGuess('');
  }
  
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={handleSubmit}
    >
      <label htmlFor="guess-input">
        Enter guess:
      </label>
      <input
        id="guess-input"
        type="text"
        name="guess"
        pattern="\w{5,5}"
        value={guess}
        onChange={(event) => setGuess(event.target.value)}
      />
    </form>
  );
}

export default GuessInput;
