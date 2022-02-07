function addHighlight () {
    var el = document.querySelector("p");
    el.classList.add("highlight","underline","bold","styleWidth");
}
function removeHighlight(){
    var element = document.querySelector("p");
    element.classList.remove("highlight",'underline',"bold");
}
function toggleBtn() {
    var elements = document.querySelector("p");
    elements.classList.toggle("styleToggle")
}
