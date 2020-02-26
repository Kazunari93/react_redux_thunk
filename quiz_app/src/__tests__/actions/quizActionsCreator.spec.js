import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import axios from "axios";
import Quiz from "../../models/Quiz";
import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  fetchQuizzes
} from "../../actions/quizActionCreator";

jest.mock("axios");

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("test quizActionCreator.js", () => {
  it("On success, FETCH_SUCCESS and data are passed", async () => {
    const expectResult = [
      {
        question: "question1",
        correct_answer: "correct_answer1",
        incorrect_answers: ["answer1", "answer2", "answer3"]
      }
    ];

    axios.get.mockResolvedValue({
      data: {
        results: expectResult
      }
    });

    const store = mockStore();
    await store.dispatch(fetchQuizzes());

    expect(store.getActions()).toStrictEqual([
      {
        type: FETCH_REQUEST
      },
      {
        type: FETCH_SUCCESS,
        quizzes: Quiz.createQuizzes(expectResult)
      }
    ]);
  });

  it("On failure, FETCH_FAILURE and error are passed", async () => {
    const expectError = {
      message: "エラーです"
    };

    axios.get.mockRejectedValue(expectError);

    const store = mockStore();
    await store.dispatch(fetchQuizzes());

    expect(store.getActions()).toStrictEqual([
      {
        type: FETCH_REQUEST
      },
      {
        type: FETCH_FAILURE,
        error: expectError
      }
    ]);
  });
});
