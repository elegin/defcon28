function hoverover(id){
    var ab=document.getElementById(id);
    ab.style.fill ="green";
    ab.style.cursor = "pointer";
    getInfo(ab)

}
function hoverout(id){
    var ab=document.getElementById(id);
    ab.style.fill="#f8961d";
}
function click(link){
    window.location.href = link
}
function getInfo(ab){
    console.log(ab)
    console.log(ab.getAttribute("village"))

}
