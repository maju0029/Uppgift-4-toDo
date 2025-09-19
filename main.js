//javascript för todolista. För move item. "Bra att ha samma id som på variabeln".
const completedElement = document.querySelector("#completedElement");
const inputToDo = document.querySelector("#inputToDo");
const addTodoBtn = document.querySelector("#addTodoBtn");
const infoTextElement = document.querySelector("small");
let todoText = "";
let completed = 0;


const todoList = document.querySelector("#todoList");
const secondList = document.querySelector("#secondList");
addTodoBtn.addEventListener("click", addTodo);

function addTodo() {
    //Kod för att flytta ett objekt från input till en lista.
    infoTextElement.textContent ="";
    todoText = inputToDo.value;
    if (todoText === "") {
        infoTextElement.textContent = "Men snälla du, skriv in något!";
        return;
    }
    const item = document.createElement('li');
    todoList.appendChild(item);
    const itemText = document.createElement('span');
    itemText.innerText = todoText;
    item.appendChild(itemText);

    inputToDo.value = "";
}
