class Question {
  constructor(text, choices, answer, difficulty) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
    this.difficulty = difficulty;
  }

  shuffleChoices() {
    // console.log(this.choices);
    for (let i = this.choices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      let temp = this.choices[i];
      this.choices[i] = this.choices[j];
      this.choices[j] = temp;
    }
    // console.log(this.choices);
    return this.choices;
  }
}

const question1 = new Question(
  "text",
  ["choice1", "choice2", "choice3"],
  "answer",
  5
);

question1.shuffleChoices();
