const para = document.getElementById("paragraph");
const button = document.getElementById("btn");

button.addEventListener("click", () => {
    if (para.style.visibility === "hidden") {
        para.style.visibility = "visible";
    }
    else {
        para.style.visibility = "hidden";
    }
});