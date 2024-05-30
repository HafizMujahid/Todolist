

const inputBox = document.getElementById("inputBox");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

let editTodo = null;

const addTodo = () => {
    const inputText = inputBox.value.trim();
    if (inputText.length <= 0) {
        alert("You must write something in your to do");
        return false;
    }

    // Creating li element
    const li = document.createElement("li");

    // Creating p element
    const p = document.createElement("p");
    p.innerHTML = inputText;
    li.appendChild(p);

    // Creating edit button
    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.classList.add("btn", "editBtn");
    li.appendChild(editBtn);

    // Creating delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Remove";
    deleteBtn.classList.add("btn", "deleteBtn");
    li.appendChild(deleteBtn);

    todoList.appendChild(li);
    inputBox.value = "";
};

const updateTodo = (e) => {
    if (e.target.innerHTML === "Remove") {
        todoList.removeChild(e.target.parentElement);
    } else if (e.target.innerHTML === "Edit") {
        inputBox.value = e.target.parentElement.querySelector("p").innerHTML;
        inputBox.focus();
        addBtn.value = "Edit";
        editTodo = e;
    }
};

addBtn.addEventListener("click", () => {
    if (addBtn.value === "Edit") {
        editTodo.target.parentElement.querySelector("p").innerHTML = inputBox.value;
        addBtn.value = "Add";
        inputBox.value = "";
        editTodo = null;
    } else {
        addTodo();
    }
});

todoList.addEventListener("click", updateTodo);
