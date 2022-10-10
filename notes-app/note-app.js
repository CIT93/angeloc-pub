let notes = getSavedNotes()

    document.querySelector("#create-note").addEventListener("click", function (e) {
        const id =uuidv4()

       notes.push ({
        id: id,
        title: "",
        body: ""
       })
       saveNotes(notes)
       location.assign(`/edit.html#$(id)`)
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

   window.addEventListener("storage", function (e) {
    if (e.key === "notes") {
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
   })

//const now = new date()
const timestamp = now.getTime()


const myDate = new date(timestamp)
console.log(myDate.getFullYear())
//console.log(`year: ${now.getFullYear()}`)
//console.log(`month: ${now.getMonth()}`)
//console.log(`day of month: ${now.getDate()}`)
//console.log(`hour: ${now.getHours()}`)
//console.log(`minute: ${now.getMinutes()}`)
//console.log(`seconds: ${now.getSeconds()}`)

const dateOne = new date("october 10 2022 3:40:00")
const dateTwo = new date()
const dateOneTimestamp = dateOne.getTime()
const dateTwoTimestamp = dateTwo.getTime()

if (dateOneTimestamp < dateTwoTimestamp) {
    console.log(dateOne.toString())
}else if (dateTwoTimestamp < dateOneTimestamp) {
    console.log(dateTwo.toString())
}

//const now = moment()
//now.subtract(1, "week").subtract(20, "days")
//console.log(now.format("mmmm do, yyyy"))
//console.log(now.fromNow())
//const nowTimestamp = now.valueOf()

//console.log(moment(nowTimestamp).toString())

  const birthday = moment()  
birthday.year(2001).month(0).date(6)
console.log(birthday.format("mmm d, YYYY"))

