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







    //DOM - Document object model

//query and remove
//const p = document.querySelector("p")
//p.remove()