const paragraphs = document.querySelectorAll("p")

paragraphs.forEach(function(paragraphs) {
if (paragraph.textContent.includes("the")) {
    paragraph.remove()
}
})