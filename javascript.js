//create flex container
const body = document.body;

const flexContainer = document.createElement("div");

flexContainer.setAttribute("class", "flex-container");
body.append(flexContainer);

function createRow() {
    let rowSize = 16;

    for (let i = 0; i < rowSize; i++) {
        const div = document.createElement("div");
        div.setAttribute("id", "gridDiv");
        flexContainer.append(div);
    }
}

function createGrid() {
    let gridSize = 16;

    for (let i = 0; i < gridSize; i++) {
        createRow();
    }
}

createGrid();


//for mouseover/out colour change
document.getElementById("gridDiv").addEventListener("mouseover", mouseOver);
document.getElementById("gridDiv").addEventListener("mouseout", mouseOut);

function mouseOver() {
    this.style.backgroundColor = "green";
    console.log("mouse OVER");
}

function mouseOut() {
    this.style.backgroundColor = "red";
    console.log("mouse OUT");
}





