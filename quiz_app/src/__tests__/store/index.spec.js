import store from "../../store/index";

describe("test store/index.js", () => {
  it("Check the initial value of the store ", () => {
    expect(store.getState()).toStrictEqual({
      isLoading: false,
      quizzes: [],
      error: null
    });
  });
});
