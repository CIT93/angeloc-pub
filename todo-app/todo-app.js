//delete dummy data
//read and parse the data when the app starts
//stringify and write the data when new data is added

let todos = getSavedToDo()

   const filters = {
    searchText: "",
    hidecompleted: false
   }

   


document.querySelector("#add-todo").addEventListener("click", function (e) {
console.log("add new todo")
})


  


    rendertodo(todos, filters)

document.querySelector("#search-Text").addEventListener("input", function (e) {
    filters.searchText = e.target.value
    rendertodo(todos, filters)
})

document.querySelector("#new-todo").addEventListener("submit", function () {
    e.preventDefault()
    todo.push({
        text: e.target.elements.text.value,
        completed: false
    })
    saveTodos(todos)
    rendertodo(todos, filters)
    e.target.elements.text.value = ""
})

document.querySelector("#hide-completed").addEventListener("change", function (e) {
    filters.hidecompleted = e.target.checked
    rendertodo(todos, filters)
})
