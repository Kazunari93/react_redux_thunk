import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuizzes } from "../../actions/quizActionCreator";
import Click from "../Click/Click";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";

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
      <Box>
        <Box p={4}>
          <Typography variant="h4">Quiz</Typography>
        </Box>
        <LinearProgress variant="query" />
        <Box p={4}>
          <Link to="/">
            <Typography variant="h5">Home</Typography>
          </Link>
        </Box>
      </Box>
    );
  };

  const displayQuiz = () => {
    const quiz = quizzes[currentIndex];
    const answers = quiz.shuffleAnswers().map((answer, index) => {
      return (
        <ListItem key={index}>
          <Click clickButton={() => judgeAnswer(quiz, answer)}>
            <Button>{answer}</Button>
          </Click>
        </ListItem>
      );
    });
    return (
      <Box>
        <Grid container direction="column" alignItems="center">
          <Box m={3}>
            <Typography variant="h5">Quiz : {quiz.question}</Typography>
          </Box>
          <Grid item>
            <List>{answers}</List>
          </Grid>
          <Box p={2}>
            <Link to="/">
              <Typography variant="h5">Home</Typography>
            </Link>
          </Box>
        </Grid>
      </Box>
    );
  };

  const showResults = () => {
    return (
      <Box>
        <Box>
          <Typography variant="h5">Your score</Typography>
          <Box m={3}>
            <Typography variant="h1">
              {numberOfCorrect}/{quizzes.length}
            </Typography>
          </Box>
        </Box>
        <Box p={2}>
          <Click clickButton={() => startFetchQuizzes()}>
            <Button variant="contained">Restart</Button>
          </Click>
        </Box>
        <Box p={2}>
          <Link to="/">
            <Typography variant="h5">Home</Typography>
          </Link>
        </Box>
      </Box>
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
