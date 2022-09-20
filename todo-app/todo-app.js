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

    const incompleteToDos = todos.filter(function (todo) {
        return !todo.completed
    })

const summary = document.createElement("h2")
summary.textContent = `you have ${incompleteToDos.length} todos left`
document.querySelector("body").appendChild(summary)
    
todos.forEach(function (todo) {
    const p = document.createElement("p")
    p.textContent = todo.text
    document.querySelector("body").appendChild(p)
})


//you have 2 todos left (p element)
//add a p for each todo above
