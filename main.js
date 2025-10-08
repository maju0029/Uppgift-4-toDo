const completedElement = document.querySelector("#completedElement");
const inputToDo = document.querySelector("#inputToDo");
const addTodoBtn = document.querySelector("#addTodoBtn");
const infoTextElement = document.querySelector("small");
let todoText = "";
let completed = 0;
const allTheTodos = [];

const todoList = document.querySelector("#todoList");
const secondList = document.querySelector("#secondList");
addTodoBtn.addEventListener("click", addTodo);

function changeStatus(todoText, completed) {

    let findIndex = allTheTodos.map(t => t.name).indexOf(todoText);
    allTheTodos[findIndex].completed = completed;
}

function addTodo() {

    infoTextElement.textContent = "";
    todoText = inputToDo.value;
    if (todoText === "") {
        infoTextElement.textContent = "Input must not be empty";
        infoTextElement.style.color = "red";
        infoTextElement.style.animation = "blink 0.5s 2";
        infoTextElement.style.animation = "none";
       
        requestAnimationFrame(function () {
        infoTextElement.style.animation = "blink 0.5s 2";
        });
        return;
    }


    const todoObject = { name: todoText, completed: false };
    allTheTodos.push(todoObject);

    const item = document.createElement('li');
    todoList.appendChild(item);

    const itemText = document.createElement('span');

    itemText.innerText = todoText;
    itemText.addEventListener("click",
        function () {
            if (itemText.classList.contains("completed")) {
                itemText.setAttribute("class", "");
                completed--;
                completedElement.textContent = completed + " completed";
                changeStatus(itemText.innerText, false);
            } else {
                itemText.setAttribute("class", "completed");
                completed++;
                completedElement.textContent = completed + " completed";
                changeStatus(itemText.innerText, true);
            }
        }
    );
    item.appendChild(itemText);

    const trashcan = document.createElement('span');
    trashcan.innerHTML = '🗑️';
    trashcan.classList.add("trashcan");
    item.appendChild(trashcan);
    trashcan.addEventListener("click", function () {
        item.remove();
        let removeText = itemText.firstChild.textContent;
        let indexToRemove = allTheTodos.map(t => t.name).indexOf(removeText);

        if (itemText.classList.contains("completed")) {
            completed--;
        }

        allTheTodos.splice(indexToRemove, 1);
        completedElement.textContent = completed + " completed";
        }
    )

    inputToDo.value = "";
}