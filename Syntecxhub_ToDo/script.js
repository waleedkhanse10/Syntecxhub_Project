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
        completed: false,
    }

    Tasks.push(newTask)
    setTask();
}

function createTask(task) {
    const li = document.createElement('li')
    li.setAttribute('data-id', task.id)
    const title = document.createElement('p')
    const deleteButton = document.createElement("button")
    const completeButton = document.createElement("button")
    const div = document.createElement("div")

    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>'
    completeButton.innerHTML = '<i class="fa-solid fa-check"></i>'

    title.textContent = task.title
    title.classList.toggle('completed', task.completed)

    div.append(deleteButton, completeButton)

    li.append(title, div)

    li.classList.add('entering')
    tasksList.appendChild(li);

    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            li.classList.add('enter-active')
        })
    })

    deleteButton.addEventListener('click', () => {
        deleteTask(task);
    })

    completeButton.addEventListener("click", () => {
        task.completed = !task.completed
        title.classList.toggle('completed', task.completed)
        setTask();
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
    const li = tasksList.querySelector(`[data-id="${task.id}"]`)
    if (li) {
        li.classList.remove('entering', 'enter-active')
        li.classList.add('removing')
        setTimeout(() => {
            const index = Tasks.findIndex((t) => t.id === task.id)
            Tasks.splice(index, 1)

            setTask();
            showTasks()
        }, 300)
    } else {
        const index = Tasks.findIndex((t) => t.id === task.id)
        Tasks.splice(index, 1)
        setTask();
        showTasks()
    }
}

function addTask() {
    const title = inputTask.value

    if (title.trim() === "") return;
    addToTask(title)

    inputTask.value = ""
    showTasks();
}

submitButton.addEventListener('click', () => {
    addTask()
})

inputTask.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addTask()
    }
})

getTasks();
showTasks();
