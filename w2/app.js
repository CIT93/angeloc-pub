const showOnPage = function(text) {
let newParagrapgh = document.createElement("p")
newParagrapgh.innerHTML = text
let outputDiv = document.getElementedById("output")
outputDiv.append(newParagrapgh)

}

let currentTime = 9
let workStartTime = 11
let availableTime = 1
let timeBeforeWork = workStartTime - currentTime
let myTimeToDrive = true
let TimeToEatBefore = true

showOnPage("<b>this output is based on the following global variable data:<b>")
showOnPage("current Time --->" + currentTime)
showOnPage("Work Time --->" + workStartTime)
showOnPage("availableTime --->" + availableTime)
showOnPage("my time to drive --->" + myTimeToDrive)
showOnPage("time to eat before --->" + TimeToEatBefore)
showOnPage("<--- End of global variable data --->")



