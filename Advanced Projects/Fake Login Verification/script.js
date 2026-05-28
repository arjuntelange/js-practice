const verifyStatus = document.getElementById("status");
const username = document.getElementById("username");
const password = document.getElementById("password");
const button = document.getElementById("verify-btn");

async function verifyLogin(e) {

    e.preventDefault();

    let loginPromise = new Promise((resolve, reject) => {

        if (username.value === "arju_na_21" && password.value === "Arjun21pro") {
            resolve("Access Granted ✅");
        } 
        else {
            reject("Access Denied ❌");
        }

    });

    try {
        let result = await loginPromise;
        verifyStatus.textContent = result;
    } 
    catch(error) {
        verifyStatus.textContent = error;
    }
}

button.addEventListener("click", verifyLogin);