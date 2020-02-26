import he from "he";
import _ from "lodash";

class Quiz {
  constructor({ question, correct_answer, incorrect_answers }) {
    this.question = question;
    this.correctAnswer = correct_answer;
    this.incorrectAnswers = incorrect_answers;
  }

  static createQuizzes(quizData) {
    return quizData.map(quiz => {
      const processedData = {
        question: he.decode(quiz.question),
        correct_answer: he.decode(quiz.correct_answer),
        incorrect_answers: quiz.incorrect_answers.map(answer =>
          he.decode(answer)
        )
      };
      return new Quiz(processedData);
    });
  }

  shuffleAnswers() {
    return _.shuffle([this.correctAnswer, ...this.incorrectAnswers]);
  }
}

export default Quiz;
