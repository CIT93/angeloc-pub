//const age =21
//const message = myAge >= 18 ? "you can vote!" : "you cannot vote."
//console.log(message)

const myAge = 27
const showPage = () => {
return "showing the page"
}

const showErrorPage = () => {
return "showing the page"
}

const message = myAge >= 21 ? showPage() : showErrorPage()
console.log(message)

const team = ["tyler", "perry"]
console.log(team.length <= 4 ? `team size: ${team.length}` : "too many people on your team")
