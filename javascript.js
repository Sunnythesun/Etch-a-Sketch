//create flex container
const body = document.body;

const flexContainer = document.createElement("div");

flexContainer.setAttribute("id", "flex-container");
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

function random(number) {
    return Math.floor(Math.random() * number);
}

function colorChange() {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    return rndCol;
}

const container = document.getElementById("flex-container");

container.addEventListener('mouseover', event => event.target.style.backgroundColor = colorChange());
container.addEventListener('mouseout', event => event.target.style.backgroundColor = colorChange());








