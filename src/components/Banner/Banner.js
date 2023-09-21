import React from 'react';

function HappyMessage({numOfGuesses}) {
  return (
    <p>
      <strong>Congratulations!</strong> Got it in <strong>{numOfGuesses} guesses</strong>.
    </p>
  );
}

function SadMessage({answer}) {
  return (
    <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
  );
}

function Banner({hasGuessed, guessResults, answer}) {
  const className = `${hasGuessed ? 'happy' : 'sad'} banner`;
  const numOfGuesses = guessResults.length;
  
  return (
    <div className={className}>
      {hasGuessed
        ? <HappyMessage numOfGuesses={numOfGuesses}/>
        : <SadMessage answer={answer}/>}
    </div>
  );
}

export default Banner;
