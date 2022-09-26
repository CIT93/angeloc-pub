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

   const filters = {
    searchText: "",
    hidecompleted: false
   }



document.querySelector("#add-todo").addEventListener("click", function (e) {
console.log("add new todo")
})


  

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

document.querySelector("#hide-completed").addEventListener("change", function (e) {
    filters.hidecompleted = e.target.checked
    rendertodo(todos, filters)
})





//1.create a checkbox and setup event listener -> "hide completed"
//2.create hide completed filter
//3.update hide completed
//4.setup rendertodos to remove completed todos
