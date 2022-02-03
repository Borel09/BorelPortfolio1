//console.log('Hello World');

//Selectors
const headerDate = document.getElementById("date");
const addButton = document.getElementById('add-item-btn');
const todoInput = document.querySelector('.todo-input');
const todoList = document.getElementById('allTodos');
const allTodos = document.getElementById('allTodos');
const clearStorage = document.getElementById('clearStorage');


//Event Listeners
window.addEventListener('load', dateMaker);
window.addEventListener('load', getTodos)
addButton.addEventListener('click', checkInput);
// addButton.addEventListener("click", addTodoInput);
allTodos.addEventListener('click', deleteTask)
todoInput.addEventListener("keyup", pressEnter);
clearStorage.addEventListener('click', clearTodos);




//Functions
function checkInput() {
    if (todoInput.value === "") {
        console.log('this is working');
        alert('Yo mutha fucka fill that shit out');
        return false;
    } else {
        addTodoInput();
    }
}

function addTodoInput(event) {
    //event.preventDefault();
    //checkInput();
    //MASTER CONTAINER FOR ALL TODOS
    const allTodos = document.createElement('div');
    allTodos.classList.add('all-todos');
    allTodos.id = 'all-todos';

    //create Div containing  <li>
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo')
    allTodos.appendChild(todoDiv);

    //create LI containg checkbox, p, btn
    const todoLi = document.createElement('li');
    todoLi.classList.add('item');
    todoDiv.appendChild(todoLi);

    //CHECKBOX
    const checkBox = document.createElement('input');
    checkBox.type = "checkbox";
    checkBox.classList.add('complete-btn');
    checkBox.id = "checkBox";
    todoLi.appendChild(checkBox);

    //create <p> for actual words
    const todoWords = document.createElement('p');
    todoWords.innerText = todoInput.value;
    todoWords.classList.add('todo-p');
    todoLi.appendChild(todoWords);

    //DELETE BUTTON
    const deleteTodo = document.createElement('button');
    deleteTodo.id = "trashCan"
    deleteTodo.classList.add('material-icons');
    deleteTodo.innerText = "delete";
    todoLi.appendChild(deleteTodo);


    //saving todo value (words) to local storage
    saveLocal(todoInput.value);

    /** put final product together 
     * <div class="allTodos">
     *  <div class="todoDiv">
     *      <li>btn, p, btn</li>
     *  </div>
     * </div>
     append master allTodos to the <UL>HTML tag*/
    allTodos.appendChild(todoDiv);
    todoList.appendChild(allTodos);

    //reset input field back to blank
    todoInput.value = "";
}


//ENTER BTN FUNCTIONALITY
function pressEnter(event) {
    if (event.keyCode === 13) {
        checkInput();
    }
}

//DELETE FUNCTION
function deleteTask(e) {
    const item = e.target;
    if (item.id === 'trashCan') {
        deleteLocal(item);
        const itemLi = item.parentElement;
        itemLi.remove();
    }
}

function clearTodos(e) {
    const item = e.target;
    if (item.id === 'clearStorage') {
        clearLocalStorage(item);
        document.getElementById("allTodos").innerHTML = "";

    }
}

function clearLocalStorage(item) {
    let localArr
    if (localStorage.getItem('localArr') === null) {
        localArr = [];
    } else {
        localArr = JSON.parse(localStorage.getItem('localArr'));
    }
    localStorage.clear();
    // localStorage.setItem('localArr', JSON.stringify(localArr));
}

/**
 * ----LOCAL STORAGE-----
 */

//ADD NEWLY MADE TODO'S TO LOCAL STORAGE
function saveLocal(todo) {
    let localArr
    if (localStorage.getItem('localArr') === null) {
        localArr = [];
    } else {
        localArr = JSON.parse(localStorage.getItem('localArr'));
    }
    localArr.push(todo);
    localStorage.setItem('localArr', JSON.stringify(localArr));
}

//DELETE ITEMS FROM LOCAL STORAGE
function deleteLocal(itemLi) {
    let localArr;
    if (localStorage.getItem('localArr') === null) {
        localArr = [];
    } else {
        localArr = JSON.parse(localStorage.getItem('localArr'));
    }
    let badDiv = itemLi.parentElement;
    let todoIndex = badDiv.children[1].innerText;
    localArr.splice(localArr.indexOf(todoIndex), 1);

    //have to send back data to local storage to be updated using setItem()
    localStorage.setItem('localArr', JSON.stringify(localArr))
}

//RETRIEVING DATA FROM LOCAL STORAGE AND DISPLAYING ON SCREEN
function getTodos() {
    let localArr;
    if (localStorage.getItem('localArr') === null) {
        localArr = [];
    } else {
        localArr = JSON.parse(localStorage.getItem('localArr'));
    }

    localArr.forEach(function(todo) {
        const allTodos = document.createElement('div');
        allTodos.classList.add('all-todos');
        allTodos.id = 'all-todos';

        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo')
        allTodos.appendChild(todoDiv);

        const todoLi = document.createElement('li');
        todoLi.classList.add('item');
        todoDiv.appendChild(todoLi);

        const checkBox = document.createElement('input');
        checkBox.type = "checkbox";
        checkBox.classList.add('complete-btn');
        checkBox.id = "checkBox";
        todoLi.appendChild(checkBox);

        const todoWords = document.createElement('p');
        todoWords.innerText = todo;
        todoWords.classList.add('todo-p');
        todoLi.appendChild(todoWords);

        const deleteTodo = document.createElement('button');
        deleteTodo.id = "trashCan"
        deleteTodo.classList.add('material-icons');
        deleteTodo.innerText = "delete";
        todoLi.appendChild(deleteTodo);

        allTodos.appendChild(todoDiv);
        todoList.appendChild(allTodos);
    })
}


/**--CLEAR LOCAL STORAGE--- */



//DATE FUNCTION THAT RUNS ON PAGE LOAD
function dateMaker() {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday"
    ];
    let months = ["Jan", "Feb", "March", "April", "May",
        "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"
    ];

    let newDate = new Date();
    let dayOfWeek = days[newDate.getDay()];
    let month = months[newDate.getMonth()];
    let day = newDate.getDate();

    let result = dayOfWeek + ", " + month + " " + day;

    headerDate.innerHTML = result;
}