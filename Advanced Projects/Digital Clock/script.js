const clock = document.getElementById("clock");

setInterval(() => {

    const currentTime = new Date();

    const hours = String(currentTime.getHours()).padStart(2, "0");

    const minutes = String(currentTime.getMinutes()).padStart(2, "0");

    const seconds = String(currentTime.getSeconds()).padStart(2, "0");

    clock.textContent = `${hours} : ${minutes} : ${seconds}`;

}, 1000);