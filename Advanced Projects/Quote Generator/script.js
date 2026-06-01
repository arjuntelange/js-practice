const quotes = [
  "Success starts with consistency.",
  "Small progress is still progress.",
  "Discipline beats motivation.",
  "Code. Debug. Learn. Repeat.",
  "Every expert was once a beginner.",
];

const display = document.getElementById("quote-display");
const button = document.getElementById("generate-btn");

async function Generate() {
  button.disabled = true;

  await new Promise((resolve) => {
    display.textContent = "Loading..."

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const randomQuote = quotes[randomIndex];
      
      display.textContent = randomQuote;
      resolve();
    }, 2000);
  });

  button.disabled = false;
}

button.addEventListener("click", Generate);
