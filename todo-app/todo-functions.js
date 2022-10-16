//1.add even handler to checkbox
//2.modify the correct objects
//3.save and rerender


//fetch existing todos from localstorage
const getSavedToDo = () => {
    const todosJSON = localStorage.getItem("todos")
    return todosJSON ? JSON.parse(todosJSON) : []

}

//save todos to local storage
const saveTodos =(todos) => {
    localStorage.setItem("todos", JSON.stringify(todos))
}

    const removeTodo = (id) => {
        const todoIndex = todos.findIndex((todo) => {
            return todo.id === id
        })
      
        if   (todoIndex > -1) {
            todos.splice(todoIndex, 1)
        }

    }

    const toggleTodo =(id) => {
        const todo = todos.find((todo) => todo.id === id) 
        if (todo) {
            todo.completed = !todo.completed
        }
    }


debugger

//render applications todos based on filters
const rendertodo = (todo, filters) => {
    let filterTodos = todos.filter((todo) => {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    filterTodos = filterTodos.filter((todo) => !todo.completed)

    //1.setup a root div
    //2.setup and append a checkbox 
    //3.setup and append a span
    //4.setup and append a button 


    const incompleteToDos = filterTodos.filter((todo) => !todo.completed);

    document.querySelector("#todos").innerHTML= ""
    document.querySelector("#todos").appendChild(generateSummaryDom(incompleteToDos))
        
    filterTodos.forEach((todo) => {
        document.querySelector("#todos").appendChild(generateTodoDom(todo))
    })

}

//get the dom elements for an individual note
const generateTodoDom = (todo) => {
    const todoEl = document.createElement("div")
    const checkbox = document.createElement("input")
    const todoText = document.createElement("span")
    const removeButton = document.createElement("button")

checkbox.setAttribute("type", "checkbox")
checkbox.checked = todo.completed
todoEl.appendChild(checkbox)
checkbox.addEventListener("change", function () {
    toggleTodo(todo.id)
    saveTodos(todos)
    rendertodos(todos, filters)
})

    todoText.textContent = todo.text
    todoEl.appendChild(todoText)

    removeButton.textContent = "x"
    todoEl.appendChild(removeButton)
    removeButton.addEventListener("click", function () {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    return todoEl
}

//get the dom elements for list summary
const generateSummaryDom = function (incompleteToDos) {
    const summary = document.createElement("h2")
    summary.textContent = `you have ${incompleteToDos.length} todos left`
    return summary
}
