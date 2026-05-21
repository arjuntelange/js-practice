const color_name = document.getElementById("color-name");
const button = document.getElementById("change-bg");

const colors = ["red", "blue", "green", "yellow", "pink", "orange", "purple"];

button.addEventListener( "click", () => {

    const color = colors[Math.floor(Math.random() * colors.length)];

    document.body.style.backgroundColor = color;

    color_name.textContent = color;
});