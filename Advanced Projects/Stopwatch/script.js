const timer = document.getElementById("timer");
const start_btn = document.getElementById("start");
const stop_btn = document.getElementById("stop");
const reset_btn = document.getElementById("reset");

let seconds = 0;
let minutes = 0;
let hours = 0;

let interval = null;

start_btn.addEventListener("click", () => {

    if (interval !== null) return;

    interval = setInterval(() => {

        seconds++;

        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }

        if (minutes === 60) {
            minutes = 0;
            hours++;
        }

        const formattedHours = String(hours).padStart(2, "0");
        const formattedMinutes = String(minutes).padStart(2, "0");
        const formattedSeconds = String(seconds).padStart(2, "0");

        timer.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

    }, 1000);
});

stop_btn.addEventListener("click", () => {
    clearInterval(interval);
    interval = null;
});

reset_btn.addEventListener("click", () => {
    clearInterval(interval);

    interval = null;
    seconds = 0;
    minutes = 0;
    hours = 0;

    timer.textContent = "00:00:00";
});