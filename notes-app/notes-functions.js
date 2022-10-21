const uuid4 = require("../todo-app/uuid4")

console.log(uuid4())

const getSavedNotes = () => {

const notesJSON = localStorage.getItem("notes")
return notesJSON ? JSON.parse (notesJSON) : []


}

    const removeNote = (id) => {
        const noteIndex = notes.findIndex((note) => note.id === id)

        if (noteIndex > -1) {
            notes.splice(noteIndex, 1)
        }

    }

    const generateNoteDom =(note) => {
        const noteEl = document.createElement("div")
        const textEl = document.createElement("a")
        const button = document.createElement("button")
//setup the remove note button
        button.textContent = "x"
        noteEl.appendChild(button)
        button.addEventListener("click",(e) => {
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

const sortNotes =(notes, sortBy) => {
if (sortBy === "byEdited") {
return notes.sort( (a, b) => {
if (a.updatedAT > b.updatedAT){
return -1
}else if (a.updatedAT < b.updatedAT) {
    return 1
}else {
    return 0
}

     })
    }else if (sortBy === "byCreated") {
        return notes.sort ((a, b) => {
if (a.createdAt > b.createdAt) {
    return -1
}else if (a.createdAt < b.createdAt) {
    return 1
}else {
    return 0
}
        })
    }else if (sortBy === "alphabetical") {
        return notes.sort((a, b) => {
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
const renderNotes = (notes, filters) => {
    notes = sortNotes(notes, filters.sortBy)
    const filteredNotes = notes.filter((note) =>note.title.toLowerCase().includes(filters.searchText.toLowerCase()))
    
    document.querySelector("#notes").innerHTML = ""

    filteredNotes.forEach( (notes) => {
        const noteEl = generateNoteDom(note)
        document.querySelector("#notes").appendChild(noteEl)
    })
}

const generateLastEdited =(timestamp) => {
    return `last edited ${moment(timestamp).fromNow()}`
}


