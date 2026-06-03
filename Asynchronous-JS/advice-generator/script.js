const generatedAdvice = document.getElementById("advice");
const button = document.getElementById("generate-advice");

async function Advice() {
  generatedAdvice.textContent = "Loading...";
  button.disabled = true;

  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();

  generatedAdvice.textContent = data.slip.advice;

  button.disabled = false;
}

button.addEventListener("click", Advice);
