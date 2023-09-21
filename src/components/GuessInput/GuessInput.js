import React from 'react';

function GuessInput() {
  const [guess, setGuess] = React.useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    const sanitizedGuess = guess.trim().toUpperCase();
    console.log({guess: sanitizedGuess});
    
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
        required
        id="guess-input"
        type="text"
        name="guess"
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="Please enter exactly 5 letters"
        value={guess}
        onChange={(event) => {
          setGuess(event.target.value)
        }}
      />
    </form>
  );
}

export default GuessInput;
