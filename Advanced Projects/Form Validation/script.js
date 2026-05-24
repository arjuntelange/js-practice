const name = document.getElementById("input-name");
const email = document.getElementById("input-email");
const password = document.getElementById("input-pass");

const name_alert = document.getElementById("name-error");
const email_alert = document.getElementById("email-error");
const pass_alert = document.getElementById("pass-error");

const button = document.getElementById("btn");

button.addEventListener("click", (e) => {

    e.preventDefault();

    name_alert.textContent = "";
    email_alert.textContent = "";
    pass_alert.textContent = "";

    name.style.border = "";
    email.style.border = "";
    password.style.border = "";

    if (name.value === "") {
        name_alert.textContent = "Please enter name";
        name.style.border = "1px solid red";
    }
    else if (email.value === "") {
        email_alert.textContent = "Please enter email";
        email.style.border = "1px solid red";
    }
    else if (!email.value.includes("@")) {
        email_alert.textContent = "Enter valid Email";
        email.style.border = "1px solid red";
    }
    else if (password.value === "") {
        pass_alert.textContent = "Please enter password";
        password.style.border = "1px solid red";
    }
    else if (password.value.length < 6) {
        pass_alert.textContent = "Password must be at least 6 characters";
        password.style.border = "1px solid red";
    }
    else {
        alert("Login Successful!✅")
    }
})