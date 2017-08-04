let selectSquare0 = document.getElementById('square0');
let selectSquare1 = document.getElementById('square1');
let selectSquare2 = document.getElementById('square2');
let selectSquare3 = document.getElementById('square3');
let selectRed = document.getElementById('redPalette');
let selectBlue = document.getElementById('bluePalette');
let brushColor = "red";

selectRed.addEventListener("click", function(e){
    if (brushColor != "red"){
        brushColor = "red"
    }
}, false);

selectBlue.addEventListener("click", function(e){
    if (brushColor != "blue"){
        brushColor = "blue"
    }
}, false);

selectSquare0.addEventListener("click", function makeRed(e){
    if (this.style.backgroundColor != brushColor) {
        this.style.backgroundColor = brushColor
    } else {
        this.style.backgroundColor = "white"
    }
}, false);

selectSquare1.addEventListener("click", function makeRed(e){
    if (this.style.backgroundColor != brushColor) {
        this.style.backgroundColor = brushColor
    } else {
        this.style.backgroundColor = "white"
    }
}, false);

selectSquare2.addEventListener("click", function makeRed(e){
    if (this.style.backgroundColor != brushColor) {
        this.style.backgroundColor = brushColor
    } else {
        this.style.backgroundColor = "white"
    }
}, false);

selectSquare3.addEventListener("click", function makeRed(e){
    if (this.style.backgroundColor != brushColor) {
        this.style.backgroundColor = brushColor
    } else {
        this.style.backgroundColor = "white"
    }
}, false);
