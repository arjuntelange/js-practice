const Button = document.getElementById("btn");
const Heading = document.getElementById("heading");

Button.addEventListener("click", () => {
    Heading.textContent = "Welcome to JavaScript DOM";
});