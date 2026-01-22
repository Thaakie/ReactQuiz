import { useState } from "react";
import Result from "./result.jsx";

function Quiz() {
  const questionsBank = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      answer: "Paris",
    },
    {
      question: "Which language is used for web development?",
      options: ["Python", "JavaScript", "Java", "C++"],
      answer: "JavaScript",
    },
    {
      question: "What language i used for creating this project?",
      options: ["Python", "JavaScript", "Java", "C++"],
      answer: "JavaScript",
    },
  ];

  const initialAnswers = [null, null, null];

  const [userAnswers, setUserAnswer] = useState(initialAnswers);
  const [currentQuestion, SetCurrentQuestion] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const selectedAnswer = userAnswers[currentQuestion];

  function handleSelectOption(option) {
    const newUserAnswer = [...userAnswers];
    newUserAnswer[currentQuestion] = option;
    setUserAnswer(newUserAnswer);
    console.log(newUserAnswer);
  }

  function handleNextQuestion() {
    if (currentQuestion === questionsBank.length - 1) {
      setIsQuizFinished(true);
    } else {
      SetCurrentQuestion(currentQuestion + 1);
    }
  }

  function handlePreviousQuestion() {
    SetCurrentQuestion(currentQuestion - 1);
  }

  function handleRestartQuiz() {
    setUserAnswer(initialAnswers);
    SetCurrentQuestion(0);
    setIsQuizFinished(false);
  }

  if (isQuizFinished) {
    return <Result userAnswers={userAnswers} questionsBank={questionsBank} restartquiz={handleRestartQuiz}></Result>;
  }

  return (
    <div>
      <h2>Question {currentQuestion + 1}</h2>
      <p className="question">{questionsBank[currentQuestion].question}</p>

      {questionsBank[currentQuestion].options.map((option, index) => (
        <button key={index} className={"option" + (selectedAnswer === option ? " selected" : "")} onClick={() => handleSelectOption(option)}>
          {option}
        </button>
      ))}

      <div className="nav-buttons">
        <button onClick={handlePreviousQuestion} disabled={currentQuestion === 0}>
          Previous
        </button>
        <button onClick={handleNextQuestion} disabled={!selectedAnswer}>
          {currentQuestion === questionsBank.length - 1 ? "Finish Quiz" : "Next"}
        </button>
      </div>
    </div>
  );
}

export default Quiz;
