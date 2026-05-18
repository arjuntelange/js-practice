const input = document.getElementById("username");
const button = document.getElementById("btn");
const output = document.getElementById("output");

button.addEventListener("click", () => {
    output.textContent = input.value;
});