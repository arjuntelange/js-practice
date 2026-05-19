const counter = document.getElementById("counter");
const increase = document.getElementById("inc");
const decrease = document.getElementById("dec");
const reset = document.getElementById("reset");

let count = 0;

increase.addEventListener("click", () => {
    count++;
    counter.textContent = count;
});

decrease.addEventListener("click", () => {
    count--;
    counter.textContent = count;
});

reset.addEventListener("click", () => {
    count = 0;
    counter.textContent = count;
});