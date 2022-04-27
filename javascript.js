//create flex container
const body = document.body;
const flexContainer = document.createElement("div");

//to check if grid has been created, so start button can't be used more than once
let gridCreated = 0;

let gridSize = 0;

flexContainer.setAttribute("id", "flex-container");
body.append(flexContainer);


function createRow() {    //not really a row, size set later so it is
    for (let i = 0; i < gridSize; i++) {
        const div = document.createElement("div");
        div.setAttribute("class", "gridDiv");
        flexContainer.append(div);
    }
}

function createGrid() {
    for (let i = 0; i < gridSize; i++) {
        createRow();
    }
}

//for mouseover/out colour change using bubbling
function random(number) {
    return Math.floor(Math.random() * number);
}

function colorChange() {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    return rndCol;
}

function onMouse(event) {
    event.target.style.backgroundColor = colorChange();
}

//to reset all squares
function reset() {
    location.reload()
}

function start() {

    if (gridCreated === 0) {
        let width = 0;
        gridCreated = 1;

        let sizeChoice = prompt("Please enter number of rows/columns");

        if (sizeChoice >= 5 && sizeChoice <= 100) {
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
            alert("Please select number in between 5 and 100");
            location.reload()
        }
    }
}

document.getElementById("flex-container").onmouseover = onMouse;
document.getElementById("flex-container").onmouseout = onMouse;
document.getElementById("reset").onclick = reset;
document.getElementById("start").onclick = start;












