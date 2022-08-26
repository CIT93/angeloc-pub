const showOnPage = function (text) {
    let newParagrapgh = document.createElement("p")
    newParagrapgh.innerHTML = text
    let outputDiv = document.getElementById("output")
    outputDiv.append(newParagrapgh)
    }




    //usually wake up around 8 or 9am
    let currentTime = 9
    //work starts at 11 am til 7
    let workStartTime = 11
    //time before work is usually an hour or maybe two
    let availableTime = 2
    let timeBeforeWork = workStartTime - currentTime
    //time to drive my car
    let myTimeToDrive = true
    let TimeToEatBefore = false
    
    showOnPage("this output is based on the following global variable data")
    showOnPage("current Time --->" + currentTime)
    showOnPage("Work Time --->" + workStartTime)
    showOnPage("availableTime --->" + availableTime)
    showOnPage("my time to drive --->" + myTimeToDrive)
    showOnPage("time to eat before --->" + TimeToEatBefore)
    showOnPage("time before work --->" + timeBeforeWork)
    showOnPage("<--- End of global variable data --->")

    showOnPage("current Time" + currentTime)
    showOnPage("work Time" + workStartTime)
    showOnPage("available time before work" + availableTime)
    showOnPage("My time to drive" + myTimeToDrive)
    showOnPage("time to eat before" + TimeToEatBefore)
    showOnPage("time before work" + timeBeforeWork)

if (myTimeToDrive) {
    availableTime = timeBeforeWork - 0.25
}else {
    availableTime = timeBeforeWork - 0.10
}
    
    displayOnPage("Time before work today")

      if (currentTime === 9) {
        showOnPage("You have time for cereal")
      } else if(currentTime >= 11) {
        showOnPage("you dont have long but you can eat")
      } else if (currentTime <= 7) {
        showOnPage("go back to sleep")
      }
      
      if (TimeToEatBefore === true) {
        showOnPage("get some good breakfast")
      }else if(TimeToEatBefore === false) {
        showOnPage("you dont have time to eat")
      }

      let currentTimeam = function (time) {
        if (time >= 8) {
          showOnPage(`it is ${time} o clock great time to get up`)
          return true
        }else if (time <= 7) {
          showOnPage(`it is ${time} o clock, way too early go back to sleep`)
          return false
        }
      }
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

