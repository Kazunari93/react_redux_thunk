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

  const displayAnswer = () => {
    const quiz = quizzes[currentIndex];
    const answers = quiz.shuffleAnswers().map((answer, index) => {
      return <div key={index}>{answer}</div>;
    });
    return (
      <div>
        <h1>Quiz</h1>
        <h2>{answers.question}</h2>
        <ul>{answers}</ul>
        <Link to="/">
          <h2>Home</h2>
        </Link>
      </div>
    );
  };

  // const q = quizzes;
  // q.map(a => {
  //   return console.log(a.shuffleAnswers());
  // });
  // console.log(q)
  // console.log(q[9].shuffleAnswers());

  return (
    <div>
      {isLoading && (
        <div>
          <h1>Quiz</h1>
          <p>Now Loading...!</p>
          <Link to="/">
            <h2>Home</h2>
          </Link>
        </div>
      )}
      {!isLoading && <div>{displayAnswer(quizzes)}</div>}
    </div>
  );
};
export default QuizList;
