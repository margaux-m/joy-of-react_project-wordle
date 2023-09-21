import React from 'react';

function GuessInput({handleSubmitGuess, disabled}) {
  const [guess, setGuess] = React.useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    handleSubmitGuess(guess);
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
        disabled={disabled}
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
          const nextGuess = event.target.value.toUpperCase();
          setGuess(nextGuess)
        }}
      />
    </form>
  );
}

export default GuessInput;
