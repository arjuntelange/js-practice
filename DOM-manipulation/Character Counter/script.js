const input = document.getElementById("input");
const count = document.getElementById("display");

input.addEventListener("input", () => {
    let length = (input.value).length;

    count.textContent = length;
});