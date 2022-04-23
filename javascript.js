//create flex container
const body = document.body;
const flexContainer = document.createElement("div");

//let gridSize = 16;

//to check if grid has been created, so start button can't be used more than once
let gridCreated = 0;

flexContainer.setAttribute("id", "flex-container");
body.append(flexContainer);


function createRow() {
    for (let i = 0; i < gridSize; i++) {
        const div = document.createElement("div");
        div.setAttribute("id", "gridDiv");
        flexContainer.append(div);
    }
}

function createGrid() {
    for (let i = 0; i < gridSize; i++) {
        createRow();
    }
}

//createGrid();

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
    if (gridCreated == 0) {
        let sizeChoice = prompt("Please enter grid size");

        if (sizeChoice >= 5 && sizeChoice <= 100) {
            gridSize = parseInt(sizeChoice);
            console.log(gridSize);
            createGrid();
            gridCreated = 1;
        }
    }
}

document.getElementById("flex-container").onmouseover = onMouse;
document.getElementById("flex-container").onmouseout = onMouse;
document.getElementById("reset").onclick = reset;
document.getElementById("start").onclick = start;












