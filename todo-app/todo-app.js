const todos = [{
    text: "take out the trash",
    completed: true
}, {
        text: "make my bed",
        completed: false
    }, {
        text: "brush my teeth",
        completed: true
    }, {
        text: "feed my dogs",
        completed: false
    }, {
        text: "do laundry",
        completed: true
    }]

   



document.querySelector("#add-todo").addEventListener("click", function (e) {
console.log("add new todo")
})
document.querySelector("#todo-text").addEventListener("input", function (e) {
    console.log(e.target.value)
})

    const filters = {
        searchText: ""
    }

    const rendertodo = function (todo, filters) {
        const filterTodos = todos.filter(function (todo) {
            return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        })
        const incompleteToDos = filterTodos.filter(function (todo) {
            return !todo.completed});

        document.querySelector("#todos").innerHTML= ""

        const summary = document.createElement("h2")
        summary.textContent = `you have ${incompleteToDos.length} todos left`
        document.querySelector("#todos").appendChild(summary)
            
        filterTodos.forEach(function (todo) {
            const p = document.createElement("p")
            p.textContent = todo.text
            document.querySelector("#todos").appendChild(p)
        })

    }

document.querySelector("#search-Text").addEventListener("input", function (e) {
    filters.searchText = e.target.value
    rendertodo(todos, filters)
})

    rendertodo(todos, filters)


//1.setup a div contain for todos
//2.setup filters(search text)
//3.create rendertodo function