var modal = document.getElementById("myModal");
var btn = document.getElementById("modal_btn");
btn.onclick = function () {
    modal.style.display = "block";
}

windowey.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var boxmodal = document.getElementById("mymodal");
var btn1 = document.getElementById("mybtn");
btn1.onclick = function () {
    boxmodal.style.display = "block";
}

window.onclick = function (event) {
    if (event.target == boxmodal) {
       boxmodal.style.display = "none";
    }
}