let notes = []

    document.querySelector("#create-note").addEventListener("click", function (e) {
       notes.push ({
        title: "",
        body: ""
       })
       localStorage.setItem("notes", JSON.stringify(notes))
       renderNotes(notes, filters)
    })

//check for existing save data
const notesJSON = localStorage.getItem("notes")

    if (notesJSON !== null) {

    }


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

        if (note.title.length > 0) {
            noteEl.textContent = note.title
        } else {
            noteEl.textContent = "unnamed note"
        }

       
        document.querySelector("#notes").appendChild(noteEl)
    })

}

    renderNotes(notes, filters)

    document.querySelector("#search-text").addEventListener("input", function (e) {
        filters.searchText = e.target.value
        renderNotes(notes, filters)
    })

    document.querySelector("#filter-by").addEventListener("change", function (e) {
        console.log(e.target.value)
    })

   
    //DOM - Document object model

//query and remove
//const p = document.querySelector("p")
//p.remove()