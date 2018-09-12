
var ulElement = document.getElementById("to-do-list");
var addButton = document.getElementById("add");
var inputToDo = document.getElementById("input-todo");
var toDoArray = JSON.parse(localStorage.getItem("toDo")) || [];

function addList() {
var objList = {
	name : "",
	done : false
};
	objList.name = inputToDo.value;
	toDoArray.push(objList);
	inputToDo.value = "";
	displayList(toDoArray);
	localStorage.setItem("toDo",JSON.stringify(toDoArray));
}


function displayList(todoList) {
  ulElement.innerHTML = todoList.map((toDo, i) => {
    return (
      `<li>
          <input type="checkbox" class="toggle" data-id=${i}>
          <span class="list-item" data-id=${i}>${toDo.name}</span>
        </li>`
    )
  }).join(''); 
}

function checkBox(e){
	console.log(e);
	var checkedBox = e.target.className;
	if(!checkedBox == "toggle") return;
	var id = e.target.dataset.id;
	toDoArray[id].done = !toDoArray[id].done;	
}


displayList(toDoArray);

addButton.addEventListener("click",addList );

ulElement.addEventListener("click", checkBox);

