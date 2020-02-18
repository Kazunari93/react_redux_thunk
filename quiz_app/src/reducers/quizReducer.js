import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE
} from "../actions/quizActionCreator";

const initialState = {
  isLoading: false,
  quizzes: [],
  error: null
};

export const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        quizzes: action.quizzes,
        error: null
      };
    case FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    default:
      return state;
  }
};
