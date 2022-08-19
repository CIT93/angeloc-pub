const showOnPage = function(text) {
let newParagrapgh = document.createElement("p")
newParagrapgh.innerHTML = text
let outputDiv = document.getElementedById("output")
outputDiv.append(newParagrapgh)

}
//usually wake up around 8 or 9am
let currentTime = 9
//work starts at 11 am til 7
let workStartTime = 11
//time before work is usually an hour or maybe two
let availableTime = 1
let timeBeforeWork = workStartTime - currentTime
//time to drive my car
let myTimeToDrive = true
let TimeToEatBefore = true

showOnPage("this output is based on the following global variable data")
showOnPage("current Time --->" + currentTime)
showOnPage("Work Time --->" + workStartTime)
showOnPage("availableTime --->" + availableTime)
showOnPage("my time to drive --->" + myTimeToDrive)
showOnPage("time to eat before --->" + TimeToEatBefore)
showOnPage("<--- End of global variable data --->")


console.log("current Time" + currentTime)
console.log("work Time" + workStartTime)
console.log("available time before work" + availableTime)
console.log("My time to drive" + myTimeToDrive)
console.log("time to eat before" + TimeToEatBefore)

  displayOnPage("Time to drive today")
  