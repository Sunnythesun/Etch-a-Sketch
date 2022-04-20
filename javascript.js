//create flex container
const body = document.body;

const flexContainer = document.createElement("div");
flexContainer.setAttribute("class", "flex-container");
body.append(flexContainer);

function createRow() {
    let rowSize = 16;

    for (let i = 0; i < rowSize; i++) {
        const div = document.createElement("div");
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


