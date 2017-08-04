//let selectRed = document.getElementById('redPalette');
//let selectBlue = document.getElementById('bluePalette');
let brushColor = "black";

generateGrid();
generatePalette();

function generateGrid(){
for (i = 0; i < 2001; i++){
    const newDiv = document.createElement("DIV");
    newDiv.className = 'gridsquare';
    let idNum = 'i' + i.toString();
    newDiv.id = idNum;
    newDiv.addEventListener("click", function(e){
    if (this.style.backgroundColor != brushColor) {
        this.style.backgroundColor = brushColor
    } else {
        this.style.backgroundColor = "white"
    }
}, false);
    document.querySelector('.container').appendChild(newDiv);
}    
}

function generatePalette(){
    const cssColorNames = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];
    //Thanks bobspace for typing this out! https://gist.github.com/bobspace/2712980
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
        label.id = 'label';
        label.innerText = 'Current Color:';
        document.querySelector('#paletteContainer').appendChild(label);
    let indicator = document.createElement("DIV");
        indicator.className = 'palette';
        indicator.id = 'indicator';    
        document.querySelector('#paletteContainer').appendChild(indicator);
}

function generateIndicator(brushColor){
    document.getElementById('indicator').style.backgroundColor = brushColor;
}