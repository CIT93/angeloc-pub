//fetch existing todos from localstorage
const getSavedToDo = function () {
    const todosJSON = localStorage.getItem("todos")

   if (todosJSON !== null) {
    return JSON.parse(todosJSON)
   }else {
    return[]
   }
}

//save todos to local storage
const saveTodos = function (todos) {
    localStorage.setItem("todos", JSON.stringify(todos))
}

debugger

//render applications todos based on filters
const rendertodo = function (todo, filters) {
    let filterTodos = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    filterTodos = filterTodos.filter(function (todo) {
        if(filters.hidecompleted) {
            return !todo.completed
        }else {
            return true
        }
    })

    //1.setup a root div
    //2.setup and append a checkbox 
    //3.setup and append a span
    //4.setup and append a button 


    const incompleteToDos = filterTodos.filter(function (todo) {
        return !todo.completed});

    document.querySelector("#todos").innerHTML= ""
    document.querySelector("#todos").appendChild(generateSummaryDom(incompleteToDos))
        
    filterTodos.forEach(function (todo) {
        document.querySelector("#todos").appendChild(generateTodoDom(todo))
    })

}

//get the dom elements for an individual note
const generateTodoDom = function (todo) {
    const todoEl = document.createElement("div")
    const checkbox = document.createElement("input")
    const todoText = document.createElement("span")
    const removeButton = document.createElement("button")

checkbox.setAttribute("type", "checkbox")
todoEl.appendChild(checkbox)

    todoText.textContent = todo.text
    todoEl.appendChild(todoText)

    removeButton.textContent = "x"
    todoEl.appendChild(removeButton)

    return todoEl
}

//get the dom elements for list summary
const generateSummaryDom = function (incompleteToDos) {
    const summary = document.createElement("h2")
    summary.textContent = `you have ${incompleteToDos.length} todos left`
    return summary
}
