import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuizzes } from "../../actions/quizActionCreator";

const QuizList = () => {
  const dispatch = useDispatch();
  const { quizzes, isLoading } = useSelector(state => ({
    quizzes: state.quizzes,
    isLoading: state.isLoading
  }));

  const [currentIndex, setCurrentIndex] = useState(0);
  const [numberOfCorrected, setNumberOfCorrect] = useState(0);

  const startFetchQuizzes = useCallback(() => {
    dispatch(fetchQuizzes());
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
      return <li key={index}>{answer}</li>;
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

  return (
    <div>
      {isLoading && startLoading()}
      {!isLoading && quizzes.length > 0 && displayQuiz(quizzes)}
    </div>
  );
};
export default QuizList;
