import Quiz from "../../models/Quiz";

const dummyData = {
  question: "test",
  correct_answer: "test1",
  incorrect_answers: ["test2", "test3", "test4"]
};

const createDummy = () => {
  const dummy = [];
  for (let i = 0; i < 3; i++) {
    const dummyData = {
      question: "test question",
      correct_answer: "test correct answer",
      incorrect_answers: ["test", "test1", "test2"]
    };
    dummy.push(dummyData);
  }
  return dummy;
};

describe("test models/Quiz.js", () => {
  it("Quiz class has three properties", () => {
    const quiz = new Quiz(dummyData);

    expect(quiz.question).toStrictEqual(dummyData.question);
    expect(quiz.correctAnswer).toStrictEqual(dummyData.correct_answer);
    expect(quiz.incorrectAnswers).toStrictEqual(dummyData.incorrect_answers);
  });

  it("createQuizzes method returns Quiz instance", () => {
    const quizzes = Quiz.createQuizzes(createDummy());

    expect(Array.isArray(quizzes)).toStrictEqual(true);
    quizzes.forEach(quiz => {
      expect(quiz instanceof Quiz).toStrictEqual(true);
    });
  });

  it("shuffleAnswers method", () => {
    const quiz = new Quiz(dummyData);

    const firstShuffledAnswers = quiz.shuffleAnswers();
    const secoundShuffledAnswers = quiz.shuffleAnswers();
    expect(firstShuffledAnswers).not.toStrictEqual(secoundShuffledAnswers);
  });
});
