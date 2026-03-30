let input = document.getElementById("favchap");
let button = document.querySelector("button");
let list = document.getElementById("list");

const li = document.createElement("li");
const deleteButton = document.createElement("button");
deleteButton.textContent = "❌";

button.addEventListener("click", () => {
    if (!input.value.trim()) {
        input.focus();
        return
    }
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";

    li.textContent = input.value;
    li.append(deleteButton);
    list.append(li);
    input.value = "";
    input.focus();

    deleteButton.addEventListener("click", () => {
    list.removeChild(li);
    input.focus();
    })
})