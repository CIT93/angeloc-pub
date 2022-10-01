const getSavedNotes = function () {

const notesJSON = localStorage.getItem("notes")

if (notesJSON !== null) {
    return JSON.parse(notesJSON)
}else {
    return []
    }
}

    const generateNoteDom = function (note) {
        const noteEl = document.createElement("p")

        if (note.title.length > 0) {
            noteEl.textContent = note.title
        } else {
            noteEl.textContent = "unnamed note"
        }

        return noteEl
    }

    //save the notes to local
const savedNotes = function (notes) {
    localStorage.setItem("notes", JSON.stringify(notes))
}



//render application notes
const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function () {
        return note.title.toLowerCase().includes(filter.searchText.toLowerCase())
    })
    
    document.querySelector("#notes").innerHTML = ""

    filteredNotes.forEach(function (notes) {
        const noteEl = generateNoteDom(note)
        document.querySelector("#notes").appendChild(noteEl)
    })
}