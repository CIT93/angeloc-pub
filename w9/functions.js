document.querySelector("button").addEventListener("click", function (e) {
    e.target.textContent = "Button pressed",
  document.querySelector("body").appendChild(); 
let statusToday = statusToday(timeBeforeWork);
document.getElementById("output").innerHTML = `The time is ${currentTime} and you have ${timeBeforeWork} to get some ${TimeToEatBefore} food.`
});

function updateDOM(text, element) {
let newElement = document.createElement(element);
newElement.textContent = text;
output.append(newElement);
}

    const getSavedStatusDay = function () {
        const statusTodayJSON = localStorage.getItem("statusToday")
        if (statusTodayJSON !== null) {
            return JSON.parse(statusTodayJSON)
        }else{
            return []
        }
    }


const savestatusToday = function (statusToday) {
localStorage.setItem("statusToday", JSON.stringify(statusToday))
}

const ps = document.querySelectorAll("p")
ps.forEach(function (p) {
p.textContent = ""
});
const newParagraph = document.createElement("p")
newParagraph.textContent = "Daily Task"
document.querySelector("body").appendChild(newParagraph);


//usually wake up around 8 or 9am
let currentTime = 9
//work starts at 11 am til 7
const workStartTime = 11
//time before work is usually an hour or maybe two
let availableTime = 2
let timeBeforeWork = workStartTime - currentTime
//time to drive my car
let myTimeToDrive = true
let TimeToEatBefore = false


if (myTimeToDrive) {
availableTime = timeBeforeWork - 0.25
}else {
availableTime = timeBeforeWork - 0.10
}


  let currentTimeofam = 6
  let timetodrivetowork = false
  let TimeToEat = false 
  if (currentTimeofam = 5) {
    showOnPage("way too early")
  }else if (currentTimeofam >= 7) {
    showOnPage("get up foo")
  }

const myDay = {
currentDay: "mon",
currentTime: "10am",
workStartTime: "11"
}
console.log(`It is ${currentTime} and i have to be at work by ${workStartTime}`)

const statusToday = {
typeOfDay: {
notSoGoodDay: "maybe stay inside",
okayToday: "maybe just a quick walk",
veryGoodDay: "do whatever you want great day today",
stormyDay: "just forget it"
},
statusToday: function (statusToday) {
this.okayToday = statusToday
}
}

morningTime.TimeToEatBefore(false, false)
morningTime.timetodrivetowork(false)
//time before work is displayed as 1 hour and 3 hours
morningTime.timeBeforeWork(1, 3)
//new array
const dailytask = ["take out the trash", "eat some breakfast", "go to work", "Do any assignments due today", "feed my dog"]

console.log(`you have ${dailytask.length} to do today.`)
console.log(`Dailytask: ${dailytask[1]}`)
console.log(`Dailytask: ${dailytask[dailytask.length - 2]}`)

dailytask.forEach(function (dailytask, index) {
const num = index + 1
console.log(`${num}. ${dailytask}`)
})
for (let count = 0; count < dailytask.length; count++) {
    const num = count + 1
    const dailytask = dailytask[count]
    console.log(`${num}. ${dailytask}`)
}


myDay.forEach(function (daily) {
const p = document.createElement("p")
p.textContent =  dailytask.text
document.querySelector("body").appendChild(p)
})
//render
const renderStatusToday = function (statusToday, filters) {
  //I know this is saying incorrect but I placed the comma and even the correct () but still saying incorrect
    let filterStatusToday = statusToday.filter(function (statusToday) {
        return statusToday.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

}

function rendermyDay(myDay, filters) {
    let filtermyDay = myDay.filter(function (myDay) {
    });

}


rendermyDay(myDay, filters)
let filter = {
    searchText: "",
    daytaskcompleted: false
   }


renderStatusToday(statusToday, filters)
const filters = {
    searchText: "",
    daytaskcompleted: false
   }

document.querySelector("#new-statustodo").addEventListener("submit", function () {
  e.preventDefault()
  statusToday.push({
    text: e.target.elements.text.value,
    completed: false
  })


})
