const red = document.getElementById("red-light");
const yellow = document.getElementById("yellow-light");
const green = document.getElementById("green-light");
const button = document.getElementById("start-btn");

let isRunning = false;

function resetLights() {
    red.style.background = "white";
    yellow.style.background = "white";
    green.style.background = "white";
}

async function startTraffic() {
    if(isRunning) return;

    isRunning = true;

    while (true) {
        resetLights();
        red.style.background = "#FF0000";
        await new Promise((resolve) => setTimeout(resolve, 2000));

        resetLights();
        yellow.style.background = "#FFFF00";
        await new Promise((resolve) => setTimeout(resolve, 2000));

        resetLights();
        green.style.background = "#00FF00";
        await new Promise((resolve) => setTimeout(resolve, 2000));
    }
}

button.addEventListener("click", startTraffic);