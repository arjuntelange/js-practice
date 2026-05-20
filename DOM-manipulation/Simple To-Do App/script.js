const input = document.getElementById("input");
const add_button = document.getElementById("add-btn");

add_button.addEventListener("click", () => {

    if (input.value.trim() === "") {
        return;
    }

    const ul = document.getElementById("items-list");
    const li = document.createElement("li");
    const delete_btn = document.createElement("button");

    ul.style.listStyleType = "square";

    li.textContent = input.value;
    li.style.marginBottom = "20px";

    delete_btn.textContent = "delete";
    delete_btn.style.marginLeft = "10px";
    delete_btn.addEventListener("click", () => {
        li.remove();
    });


    li.appendChild(delete_btn);
    ul.appendChild(li);

    input.value = "";
})