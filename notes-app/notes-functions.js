const uuid4 = require("../todo-app/uuid4")

console.log(uuid4())

const getSavedNotes = function () {

const notesJSON = localStorage.getItem("notes")

if (notesJSON !== null) {
    return JSON.parse(notesJSON)
}else {
    return []
    }
}

    const removeNote = function (id) {
        const noteIndex = notes.findIndex(function (note) {
            return note.id === id
        })

        if (noteIndex > -1) {
            notes.splice(noteIndex, 1)
        }

    }

    const generateNoteDom = function (note) {
        const noteEl = document.createElement("div")
        const textEl = document.createElement("a")
        const button = document.createElement("button")
//setup the remove note button
        button.textContent = "x"
        noteEl.appendChild(button)
        button.addEventListener("click", function (e) {
           removeNote(note.id)
           saveNotes(notes)
            renderNotes(notes, filters)
        })

//setup the note title text
        if (note.title.length > 0) {
            noteEl.textContent = note.title
        } else {
            noteEl.textContent = "unnamed note"
        }
        textEl.setAttribute("href", `/edit.html#$(notes.id)`)
         noteEl.appendChild(textEl)

        return noteEl
    }

    //save the notes to local
const savedNotes = function (notes) {
    localStorage.setItem("notes", JSON.stringify(notes))
}

const sortNotes = function (notes, sortBy) {
if (sortBy === "byEdited") {
return notes.sort(function (a, b) {
if (a.updatedAT > b.updatedAT){
return -1
}else if (a.updatedAT < b.updatedAT) {
    return 1
}else {
    return 0
}

     })
    }else if (sortBy === "byCreated") {
        return notes.sort (function (a, b) {
if (a.createdAt > b.createdAt) {
    return -1
}else if (a.createdAt < b.createdAt) {
    return 1
}else {
    return 0
}
        })
    }else if (sortBy === "alphabetical") {
        return notes.sort(function (a, b) {
if (a.title.toLowerCase() < b.title.toLowerCase()) {
    return -1
}else if (a.title.toLowerCase() > b.title.toLowerCase()) {
    return 1
}else {
    return 0
}
        })
    } else {
        return notes
    }
}




//render application notes
const renderNotes = function (notes, filters) {
    notes = sortNotes(notes, filters.sortBy)
    const filteredNotes = notes.filter(function () {
        return note.title.toLowerCase().includes(filter.searchText.toLowerCase())
    })
    
    document.querySelector("#notes").innerHTML = ""

    filteredNotes.forEach(function (notes) {
        const noteEl = generateNoteDom(note)
        document.querySelector("#notes").appendChild(noteEl)
    })
}

const generateLastEdited = function (timestamp) {
    return `last edited ${moment(timestamp).fromNow()}`
}


