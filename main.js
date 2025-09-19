//javascript för todolista. För move item. "Bra att ha samma id som på variabeln".
const completedElement = document.querySelector("#completedElement");
const inputToDo = document.querySelector("#inputToDo");
const addTodoBtn = document.querySelector("#addTodoBtn");
const infoTextElement = document.querySelector("small");

const TodoList = document.querySelector("#todoList");
const secondList = document.querySelector("#secondList");
addTodoBtn.addEventListener("click", addTodo);

function addTodo() {
    //Kod för att flytta ett objekt från input till en lista.
    
    const firstElement = firstList.firstElementChild
    secondList.appendChild(firstElement);
}
