//create grid container
const body = document.body;

const gridContainer = document.createElement("div");
gridContainer.setAttribute("class", "grid-container");

body.append(gridContainer);

function createGrid() {
    let gridsize = 5;
    let cssGridSize = "grid-template-columns: ";

    for (i = 0; i < gridsize; i++) {
        const div = document.createElement("div");
        gridContainer.append(div);
        cssGridSize += "auto ";
    }
    console.log("i am hewrer")
}

createGrid();


