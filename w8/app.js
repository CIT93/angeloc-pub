document.querySelector("button").addEventListener("click", function (e) {
    e.target.textContent = "Button pressed",
  document.querySelector("body").appendChild(); 
let eatBefore = TimeToEatBefore(timeBeforeWork);
document.getElementById("output").innerHTML = `The time is ${currentTime} and you have ${timeBeforeWork} to get some ${TimeToEatBefore} food.`
});


//updateDOM("", "hr");
//updateDOM("This is based on the variable data");
//updateDOM(`Current time ---> ${obj.currentTime}`, "li");
//updateDOM(`Time to drive right now ---> ${timetodrivetowork}`, "li");
//updateDOM(`Time before work ---> ${obj.timeBeforeWork}`, "li");
//updateDOM(`Work start time ---> ${obj.workStartTime}`, "li");
//updateDOM("Hows the weather today", "h1");
//updateDOM(decisionObj.dailytask, "h2");
//updateDOM(decisionObj.message, "h2");
function updateDOM(text, element) {
let newElement = document.createElement(element);
newElement.textContent = text;
output.append(newElement);
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

// displayOnPage("Time before work today")

//  if (currentTime === 9) {
//    showOnPage("You have time for cereal")
//  } else if(currentTime >= 11) {
//     showOnPage("you dont have long but you can eat")
//  } else if (currentTime <= 7) {
//    showOnPage("go back to sleep")
//   }
  
//  if (TimeToEatBefore === true) {
//     showOnPage("get some good breakfast")
//   }else if(TimeToEatBefore === false) {
//     showOnPage("you dont have time to eat")
//    }

//      const currentTimeam = function (time) {
//    if (time >= 8) {
//        showOnPage(`it is ${time} o clock great time to get up`)
//       return true
//     }else if (time <= 7) {
//      showOnPage(`it is ${time} o clock, way too early go back to sleep`)
//      return false
 //   }
//   }
// function 2
// mon-1 fri-5
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
    let filterStatusToday = statusToday.filter(function (statusToday)); {
        return statusToday.text.toLowerCase().includes(filters.searchText.toLowerCase())
    }

};


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