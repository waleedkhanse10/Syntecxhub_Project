const inputTask = document.querySelector("#taskInput")
const submitButton = document.querySelector("#submitButton")

submitButton.addEventListener('click', () => {
    title = inputTask.value

    if (title.trim() === "") return;
    addToTask(title)
})

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

getTasks();

