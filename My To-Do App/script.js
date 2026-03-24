let inputBox = document.getElementById("input-box")
let addBtn = document.getElementById("add")
let listContainer = document.getElementById("listcontainer")

let tasks = []

// Load from localStorage when page loads
let storedTasks = localStorage.getItem("tasks")

if (storedTasks) {
    tasks = JSON.parse(storedTasks)
    renderTasks()
}

// Add Task
function addTask() {
    let value = inputBox.value.trim()

    if (value === "") return

    tasks.push({
        text: value,
        completed: false
    })  

    saveTasks()
    renderTasks()

    inputBox.value = ""
}

// Save to localStorage
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks))
}

// Render Tasks (MOST IMPORTANT)
function renderTasks() {
    listContainer.innerHTML = ""

    tasks.forEach(function(task, index) {
        let li = document.createElement("li")

        // text span
        let span = document.createElement("span")
        span.innerText = task.text

        // apply completed class
        if (task.completed) {
            li.classList.add("completed")
        }

        // delete button
        let dltBtn = document.createElement("button")
        dltBtn.innerText = "❌"
        dltBtn.classList.add("deleteBtn")

        // delete event
        dltBtn.addEventListener("click", function(e) {
            e.stopPropagation()
            tasks.splice(index, 1)
            saveTasks()
            renderTasks()
        })

        // toggle complete
        li.addEventListener("click", function() {
            tasks[index].completed = !tasks[index].completed
            saveTasks()
            renderTasks()
        })

        li.appendChild(span)
        li.appendChild(dltBtn)

        listContainer.appendChild(li)
    })
}

// Events
addBtn.addEventListener("click", addTask)

inputBox.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        addTask()
    }
})