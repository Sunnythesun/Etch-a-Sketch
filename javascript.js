//create flex container
const body = document.body;
const flexContainer = document.createElement("div");    // container for grid only
const flexConContainer = document.createElement("div"); //container for both grid and UI containers
const uiContainer = document.createElement("div");  //container for UI only

//to check if grid has been created, so start button can't be used more than once
let gridCreated = 0;

let gridSize = 0;

let divClass;  //changes on mouseover to determine function action
let mode = "rainbow";

let r, g, b; //used for getRGB function

//setting up flexcontainer containing 2 flex containers, 1 for ui one for grid
flexConContainer.setAttribute("id", "flex-con-container");
flexContainer.setAttribute("id", "flex-container");
uiContainer.setAttribute("id", "uiContainer");
body.append(flexConContainer);
flexConContainer.append(flexContainer);
flexConContainer.append(uiContainer);

const ui = document.createElement("div");
ui.setAttribute("id", "ui");
uiContainer.append(ui);


//buttons in divs to start/reset/switch modes  (functions applied at bottom)
const startButtonDiv = document.createElement("div");
const startButton = document.createElement("button");
ui.append(startButtonDiv);
startButtonDiv.append(startButton);
startButton.setAttribute("id", "start");
startButton.innerText = "Start";

const resetButtonDiv = document.createElement("div");
const resetButton = document.createElement("button");
ui.append(resetButtonDiv);
resetButtonDiv.append(resetButton);
resetButton.setAttribute("id", "reset");
resetButton.innerText = "Reset";

const blackButtonDiv = document.createElement("div");
const blackButton = document.createElement("button");
ui.append(blackButtonDiv);
blackButtonDiv.append(blackButton);
blackButton.setAttribute("id", "black");
blackButton.innerText = "Black";

const rainbowButtonDiv = document.createElement("div");
const rainbowButton = document.createElement("button");
ui.append(rainbowButtonDiv);
rainbowButtonDiv.append(rainbowButton);
rainbowButton.setAttribute("id", "rainbow");
rainbowButton.innerText = "Rainbow";

const eraserButtonDiv = document.createElement("div");
const eraserButton = document.createElement("button");
ui.append(eraserButtonDiv);
eraserButtonDiv.append(eraserButton);
eraserButton.setAttribute("id", "eraser");
eraserButton.innerText = "Eraser";

const shadeButtonDiv = document.createElement("div");
const shadeButton = document.createElement("button");
ui.append(shadeButtonDiv);
shadeButtonDiv.append(shadeButton);
shadeButton.setAttribute("id", "shade");
shadeButton.innerText = "Shade";



function createRow() {    //not really a row, size set later so it is
    for (let i = 0; i < gridSize; i++) {
        const div = document.createElement("div");
        div.setAttribute("class", "gridDiv");
        flexContainer.append(div);
        div.style.backgroundColor = "rgb(255,255,255)";
    }
}

function createGrid() {
    for (let i = 0; i < gridSize; i++) {
        createRow();
    }
    document.getElementById("flex-container").style.border = "2px solid black";
}

//for mouseover/out colour change using bubbling
function random(number) {
    return Math.floor(Math.random() * number);
}

//change color or increase shading depending on class
function colorChange() {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    return rndCol;
}

function onMouse(event) {

    divClass = event.target.className;

    if (divClass === "gridDiv" && mode === "rainbow") {
        event.target.style.backgroundColor = colorChange();
    }
    else if (divClass === "gridDiv" && mode === "shade") {

        let color = event.target.style.backgroundColor;

        //to darken color every mouseOver
        let index1 = color.indexOf("(") + 1;
        let index2 = color.indexOf(",");
        let removeMe = color.substring(0, index2 + 2);

        let r = color.substring(index1, index2);   //r2 is not inclusive for some reason, but r1 is

        color = color.replace(removeMe, "");

        index1 = color.indexOf(",");
        let g = color.substring("0", index1);
        removeMe = color.substring(0, index1 + 2);
        color = color.replace(removeMe, "");

        let b = color.substring(0, color.length - 1);

        //darken each rgb value by 10% and set as new div color
        r = parseInt(r) - r / 20;
        g = parseInt(g) - g / 20;
        b = parseInt(b) - b / 20;

        let rgb = r + "," + g + "," + b;

        console.log(rgb);
        event.target.style.backgroundColor = "rgb" + "(" + rgb + ")";
    }
    else if (divClass === "gridDiv" && mode === "black") {
        event.target.style.backgroundColor = "rgb(0,0,0)";
    }
    else if (divClass === "gridDiv" && mode === "eraser") {
        event.target.style.backgroundColor = "rgb(255,255,255)";
    }
}

//to reset all squares
function reset() {
    location.reload()
}

function start() {

    if (gridCreated === 0) {
        let width = 0;
        gridCreated = 1;

        let sizeChoice = prompt("Please enter number of rows/columns in between 15-100");

        if (sizeChoice >= 15 && sizeChoice <= 100) {
            gridSize = parseInt(sizeChoice);
            width = 100 / sizeChoice;

            //create grid with css size then change it when start is pressed
            let allSquares = document.getElementsByClassName("gridDiv");
            createGrid();

            for (let i = 0; i < allSquares.length; i++) {
                allSquares[i].style.width = width + "%";
            }
        }
        else {
            alert("Please select number in between 15 and 100");
            location.reload()
        }
    }
}

function setRainbow() {
    mode = "rainbow"
}

function setShade() {
    mode = "shade"
}

function setBlack() {
    mode = "black"
}

function setEraser() {
    mode = "eraser"
}

//what happens when button clicked
document.getElementById("flex-container").onmouseover = onMouse;
document.getElementById("reset").onclick = reset;
document.getElementById("start").onclick = start;
document.getElementById("rainbow").onclick = setRainbow;
document.getElementById("shade").onclick = setShade;
document.getElementById("black").onclick = setBlack;
document.getElementById("eraser").onclick = setEraser;
















