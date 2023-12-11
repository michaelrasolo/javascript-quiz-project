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
    // Shuffle questions
    // this.shuffleQuestions()
    // Good answer
    console.log(answer);
    console.log(this.questions[this.currentQuestionIndex].answer);
    
    if (answer === this.questions[this.currentQuestionIndex].answer) {
      this.correctAnswers++;
    }
    // Bad answer ==> nothing happens
  }
  
    hasEnded(){
        if (this.currentQuestionIndex < this.questions.length) return false
        if (this.currentQuestionIndex >= this.questions.length) return true
    }
}



const testQuestions = [
    { text: "Question 1", choices: ["a", "b", "c"], answer: "a" },
    { text: "Question 2", choices: ["d", "e", "f"], answer: "e" },
    { text: "Question 3", choices: ["x", "y", "z"], answer: "z" },
  ];

const quiz1 = new Quiz(testQuestions, 60, 60)
quiz1.checkAnswer("a")