const input = document.getElementById("input");
const button = document.getElementById("btn");

button.addEventListener("click", () => {

    if (input.type === "password") {

        input.type = "text";
        button.textContent = "Hide 🙈";

    } else {

        input.type = "password";
        button.textContent = "Show 👀";

    }

});