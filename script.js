let brushColor = "Black";

generateGrid();
generatePalette();

function generateGrid(){
    let isDown = false;
    for (i = 0; i < 2001; i++){
        const newDiv = document.createElement("DIV");
        newDiv.className = 'gridsquare';
        let idNum = 'i' + i.toString();
        newDiv.id = idNum;
        newDiv.addEventListener("click", function(e){
        if (this.style.backgroundColor != brushColor) {
            this.style.backgroundColor = brushColor
        } else {
            this.style.backgroundColor = "black"
        }
    }, false);
    newDiv.addEventListener('mousedown', function(e){
        isDown = true;
    }, false);
    newDiv.addEventListener('mouseenter', function(e){
    if (isDown){
    if (this.style.backgroundColor != brushColor) {
        this.style.backgroundColor = brushColor
    } else {
        this.style.backgroundColor = "black"
    }}
    }, false);
    newDiv.addEventListener('mouseup',function(e){
        isDown = false;
    }, false);
    document.querySelector('.container').appendChild(newDiv);
    }    
}

function generatePalette(){
    const cssColorNames = ["Aqua","Aquamarine","LightGreen","Lime","LimeGreen","Green","Teal","Blue","MediumBlue","BlueViolet","DarkBlue","Purple","DeepPink","Fuchsia","HotPink","MediumVioletRed","Chocolate","Darkorange","Crimson","Red","DarkRed","Gold","Yellow", "Black", "DimGrey", "Silver", "Gainsboro", "Ivory"];
    for (let colorName of cssColorNames){
        let newDiv = document.createElement("DIV");
        newDiv.className = 'palette';
        document.querySelector('#paletteContainer').appendChild(newDiv);
        newDiv.id = colorName;
        newDiv.style.backgroundColor = colorName;
        newDiv.addEventListener("click", function(e){
            if (brushColor != newDiv.id){
                brushColor = newDiv.id;
                generateIndicator(brushColor);
            }
        }, false);
    };
    let label = document.createElement("DIV");
        label.className = 'label';
        label.innerText = 'Current Color:';
        document.querySelector('#paletteContainer').appendChild(label);
    let indicator = document.createElement("DIV");
        indicator.className = 'palette';
        indicator.id = 'indicator';    
        document.querySelector('#paletteContainer').appendChild(indicator);
    let changeColor = document.createElement("DIV");
        changeColor.className = 'label';
        changeColor.id = 'changeColor';
        changeColor.innerHTML = 'Or choose here:<input type="color">'
        document.addEventListener('DOMContentLoaded', function(){
            document.querySelector('#changeColor').onchange=changeEventHandler;
        }, false);
        document.querySelector('#paletteContainer').appendChild(changeColor);
    
}

function generateIndicator(brushColor){
    document.getElementById('indicator').style.backgroundColor = brushColor;
}

function changeEventHandler(event) {
    console.log(event.target.value);
    brushColor = event.target.value;
    generateIndicator(brushColor);
    }

/*set thing to .current, give current thing the css for white border/black border
give the div a "current" class - not adding "black/white" in JS - the styling sits in the CSS and the JS switches the element to that styling*/