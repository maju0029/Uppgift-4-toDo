//javascript för todolista. För move item. "Bra att ha samma id som på variabeln".
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

function addTodo() {
    //Kod för att flytta ett objekt från input till en lista.
    infoTextElement.textContent ="";
    todoText = inputToDo.value;
    if (todoText === "") {
        infoTextElement.textContent = "Men snälla du, skriv in något!";
        return;
    }

    allTheTodos.push(todoText);
    const item = document.createElement('li');
    todoList.appendChild(item);
    const itemText = document.createElement('span');

    itemText.innerText = todoText;
        itemText.addEventListener("click", 
            function() {
                if (itemText.classList.contains("completed")) {
                    itemText.setAttribute("class", "");
                    completed--;
                    completedElement.textContent = "Du har " + completed + " slutförda uppgifter";
                } else {
                    itemText.setAttribute("class", "completed");
                    completed++;
                    completedElement.textContent = "Du har " + completed + " slutförda uppgifter";
                }
            }
        );
        item.appendChild(itemText);
        inputToDo.value = "";
    }