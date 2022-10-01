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
    const p = document.createElement("p")
    p.textContent = todo.text
    return p
}

//get the dom elements for list summary
const generateSummaryDom = function (incompleteToDos) {
    const summary = document.createElement("h2")
    summary.textContent = `you have ${incompleteToDos.length} todos left`
    return summary
}
