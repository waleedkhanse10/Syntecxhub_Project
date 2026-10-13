const inputTask = document.querySelector("#taskInput")
const submitButton = document.querySelector("#submitButton")
const tasksList = document.querySelector("#taskList")
const emptyStateContainer = document.querySelector(".empty-state")

const Tasks = []

function getTasks() {
    const savedTasks = JSON.parse(localStorage.getItem('Tasks')) || []

    Tasks.push(...savedTasks)
}

function setTask() {
    localStorage.setItem('Tasks', JSON.stringify(Tasks))
}

function addToTask(title) {
    const newTask = {
        id: crypto.randomUUID(),
        title: title,
    }

    Tasks.push(newTask)
    setTask();
}

function createTask(task) {
    const li = document.createElement('li')
    const title = document.createElement('p')
    const deleteButton = document.createElement("button")
    const completeButton = document.createElement("button")
    const div = document.createElement("div")

    deleteButton.textContent = "Delete"
    completeButton.textContent = "Complete"
    title.textContent = task.title

    div.append(deleteButton, completeButton)

    li.append(title, div)
    
    tasksList.appendChild(li);

    deleteButton.addEventListener('click', () => {
        deleteTask(task);
    })
    
    completeButton.addEventListener("click", () => {
        title.classList.toggle('completed')
    })
}

function showTasks() {
    if (Tasks.length !== 0) {
        emptyStateContainer.classList.add("hide")
    } else {
        emptyStateContainer.classList.remove("hide")
    }

    tasksList.textContent = "";

    Tasks.map((task) => {
        createTask(task)
    })
}

function deleteTask(task) {
    const index = Tasks.findIndex((t) => t.id === task.id)
    Tasks.splice(index,1)

    setTask();
    showTasks()
}

submitButton.addEventListener('click', () => {
    title = inputTask.value

    if (title.trim() === "") return;
    addToTask(title)

    inputTask.value = ""
    showTasks();
})

getTasks();
showTasks();
