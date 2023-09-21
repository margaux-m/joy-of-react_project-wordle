import React from 'react';

function Guess({id, value}) {
  const letters = value.split('');
  
  return (
    <p key={id} className="guess">
      {letters.map((letter, index) => (
        <span key={index} className="cell">
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
