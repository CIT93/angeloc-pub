const notes = [{
    title: "my next trip",
    body: "I would like to go back home"
    }, {
    title: "habbits to work on",
    body: "Exercise. running more."
    }, {
    title: "office modification",
    body: "get a new seat"
    }]

    document.querySelector("#create-note").addEventListener("click", function (e) {
       e.target.textContent = "button was clicked"
    })


document.querySelector("remove-all").addEventListener("click", function () {
    document.querySelectorAll(".note").forEach(function(note) {
        note.remove()
    })
})

document.querySelector("#search-text").addEventListener("input", function (e) {
console.log(e.target.value)
})

const filters = {
    searchText: ""
}

const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function () {
        return note.title.toLowerCase().includes(filter.searchText.toLowerCase())
    })
    
    document.querySelector("#notes").innerHTML = ""

    filteredNotes.forEach(function (notes) {
        const noteEl = document.createElement("p")
        noteEl.textContent = note.title
        document.querySelector("#notes").appendChild(noteEl)
    })

}

    renderNotes(notes, filters)

    document.querySelector("#search-text").addEventListener("input", function (e) {
        filters.searchText = e.target.value
        renderNotes(notes, filters)
    })



    //DOM - Document object model

//query and remove
//const p = document.querySelector("p")
//p.remove()