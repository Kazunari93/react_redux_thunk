import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuizzes } from "../../actions/quizActionCreator";
import Button from "../Button/Button";

const QuizList = () => {
  const dispatch = useDispatch();
  const { quizzes, isLoading } = useSelector(state => ({
    quizzes: state.quizzes,
    isLoading: state.isLoading
  }));

  const [currentIndex, setCurrentIndex] = useState(0);
  const [numberOfCorrect, setNumberOfCorrect] = useState(0);

  const startFetchQuizzes = useCallback(() => {
    dispatch(fetchQuizzes());
    setNumberOfCorrect(0);
    setCurrentIndex(0);
  }, [dispatch]);

  useEffect(() => {
    startFetchQuizzes();
  }, [dispatch, startFetchQuizzes]);

  const startLoading = () => {
    return (
      <div>
        <h1>Quiz</h1>
        <p>Now Loading...!</p>
        <Link to="/">
          <h2>Home</h2>
        </Link>
      </div>
    );
  };

  const displayQuiz = () => {
    const quiz = quizzes[currentIndex];
    const answers = quiz.shuffleAnswers().map((answer, index) => {
      return (
        <li key={index}>
          <Button clickButton={() => judgeAnswer(quiz, answer)}>
            {answer}
          </Button>
        </li>
      );
    });
    return (
      <div>
        <h1>Quiz</h1>
        <h3>Quiz : {quiz.question}</h3>
        <ul>{answers}</ul>
        <Link to="/">
          <h2>Home</h2>
        </Link>
      </div>
    );
  };

  const showResults = () => {
    return (
      <div>
        <h1>Quiz</h1>
        <h2>Your score</h2>
        <p>
          {numberOfCorrect}/{quizzes.length}
        </p>
        <Button clickButton={() => startFetchQuizzes()}>Restart</Button>
        <Link to="/">
          <h2>Home</h2>
        </Link>
      </div>
    );
  };
  console.log(currentIndex, numberOfCorrect);
  const judgeAnswer = (quiz, answer) => {
    if (quiz.correctAnswer === answer) {
      setNumberOfCorrect(numberOfCorrect + 1);
      alert("Correct answer!");
    } else {
      alert(`Incorrect answer... Correct answer is ${quiz.correctAnswer}`);
    }
    setCurrentIndex(currentIndex + 1);
    displayQuiz();
  };

  return (
    <div>
      {isLoading && startLoading()}
      {!isLoading && quizzes.length > currentIndex && displayQuiz()}
      {currentIndex === 10 && showResults()}
    </div>
  );
};
export default QuizList;
