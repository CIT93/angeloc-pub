const notes = getSavedNotes()

    document.querySelector("#create-note").addEventListener("click", function (e) {
       notes.push ({
        id: uuidv4(),
        title: "",
        body: ""
       })
       saveNotes(notes)
       renderNotes(notes, filters)
    })




document.querySelector("#search-text").addEventListener("input", function (e) {
console.log(e.target.value)
})

const filters = {
    searchText: ""
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