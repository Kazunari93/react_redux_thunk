import Quiz from "../models/Quiz";
import axios from "axios";

const API_URL = "https://opentdb.com/api.php?amount=10&type=multiple";

export const FETCH_REQUEST = "FETCH_REQUEST";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const fetchQuizzes = () => {
  return async dispatch => {
    dispatch(fetchQuizzesRequest());
    try {
      const response = await axios.get(API_URL);
      const data = response.data.results;
      const quizzes = Quiz.createQuizzes(data);
      dispatch(fetchQuizzesSuccess(quizzes));
    } catch (error) {
      dispatch(fetchQuizzesFailure(error));
    }
  };
};

const fetchQuizzesRequest = () => {
  return {
    type: FETCH_REQUEST
  };
};

const fetchQuizzesSuccess = quizzes => {
  return {
    type: FETCH_SUCCESS,
    quizzes
  };
};

const fetchQuizzesFailure = error => {
  return {
    type: FETCH_FAILURE,
    error
  };
};
