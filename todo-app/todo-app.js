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
    rendertodo(todos, filters)
    text: e.target.elements.text.value = ""
})


//1.create a form with single input for todo text
//2.setup submit handler and cancel the default action
//3.add a new item to the todos array
//4.rerender the application
//5.clear the input value