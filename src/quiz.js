class Quiz {
  // YOUR CODE HERE:
  //
  constructor(questions, timeLimit, timeRemaining) {
    (this.questions = questions),
      (this.timeLimit = timeLimit),
      (this.timeRemaining = timeRemaining),
      (this.correctAnswers = 0),
      (this.currentQuestionIndex = 0);
  }

  getQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  moveToNextQuestion() {
    this.currentQuestionIndex++;
  }

  shuffleQuestions() {
    for (let i = this.questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      let temp = this.questions[i];
      this.questions[i] = this.questions[j];
      this.questions[j] = temp;
    }
    return this.questions;
  }

  checkAnswer(answer) {
    // Good answer
    if (answer === this.questions[this.currentQuestionIndex].answer) {
      this.correctAnswers++;
    }
    // Bad answer ==> nothing happens
  }

  hasEnded() {
    if (this.currentQuestionIndex < this.questions.length) return false;
    if (this.currentQuestionIndex >= this.questions.length) return true;
  }

  filterQuestionsByDifficulty(difficulty) {
    if (typeof difficulty != Number || difficulty < 1 || difficulty > 3) return;
    const filteredQuestions = this.questions.filter((question) => {
      if (question.difficulty === difficulty) return question;
    });

    return filteredQuestions;
  }

  averageDifficulty() {
    const totalDifficulty = this.questions.reduce((acc, val) => {
      return acc + val.difficulty
    }, 0);
    return Math.round(totalDifficulty / this.questions.length*100)/100
  }
}

const testQuestions = [
  { text: "Question 1", choices: ["a", "b", "c"], answer: "a", difficulty: 1 },
  { text: "Question 2", choices: ["d", "e", "f"], answer: "e", difficulty: 2 },
  { text: "Question 3", choices: ["x", "y", "z"], answer: "z", difficulty: 2 },
];

const quiz1 = new Quiz(testQuestions, 60, 60);
console.log(quiz1.averageDifficulty());
