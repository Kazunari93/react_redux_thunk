import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE
} from "../../actions/quizActionCreator";
import { quizReducer } from "../../reducers/quizReducer";

describe("test quizReducer.js", () => {
  it("action.type === FETCH_REQUEST", () => {
    const initialState = {
      isLoading: true,
      quizzes: [],
      error: null
    };
    const requestAction = {
      type: FETCH_REQUEST
    };
    const newState = quizReducer(undefined, requestAction);

    expect(newState).toStrictEqual(initialState);
  });

  it("action.type === FETCH_SUCCESS", () => {
    const state = {
      isLoading: false,
      quizzes: [],
      error: null
    };
    const quizData = [
      {
        question: "question1",
        correct_answer: "correct_answer1",
        incorrect_answers: ["answer1", "answer2", "answer3"]
      }
    ];
    const successAction = {
      type: FETCH_SUCCESS,
      quizzes: quizData
    };
    const newState = quizReducer(state, successAction);

    expect(newState).toStrictEqual({
      isLoading: false,
      quizzes: quizData,
      error: null
    });
  });

  it("action.type === FETCH_FILURE", () => {
    const state = {
      isLoading: false,
      quizzes: [],
      error: null
    };
    const failureAction = {
      type: FETCH_FAILURE,
      error: "ERROR"
    };
    const newState = quizReducer(state, failureAction);

    expect(newState).toStrictEqual({
      isLoading: false,
      quizzes: [],
      error: "ERROR"
    });
  });
});
