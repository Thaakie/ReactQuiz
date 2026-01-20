function Result({ userAnswers, questionsBank, restartquiz }) {
  function finalScore() {
    let finalScore = 0;

    userAnswers.forEach((answer, index) => {
      if (answer === questionsBank[index].answer) {
        finalScore++;
      }
    });

    return finalScore;
  }
  const score = finalScore();

  return (
    <div>
      <h2>Completed</h2>
      <p>
        Your Score: {score}/{questionsBank.length}
      </p>

      <button className="restart-button" onClick={restartquiz}>
        Restart Quiz
      </button>
    </div>
  );
}

export default Result;
