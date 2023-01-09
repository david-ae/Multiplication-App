const num1 = Math.floor(Math.random() * 10);
const num2 = Math.floor(Math.random() * 10);

const scoreEl = document.getElementById("score");
const questionEl = document.getElementById("question");
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const btnEl = document.querySelector(".btn");

let score = JSON.parse(localStorage.getItem("score"));
questionEl.innerText = `What is ${num1} multiply by ${num2}`;

const correctAnswer = num1 * num2;

if (!score) score = 0;

scoreEl.innerText = `score ${score}`;

formEl.addEventListener("submit", () => {
  const userAnswer = Number(inputEl.value);
  if (correctAnswer === userAnswer) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
});

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}
