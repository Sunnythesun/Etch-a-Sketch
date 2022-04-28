//create flex container
const body = document.body;
const flexContainer = document.createElement("div");

//to check if grid has been created, so start button can't be used more than once
let gridCreated = 0;

let gridSize = 0;

let divClass;  //changes on mouseover to determine function action

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

//change color or increase shading depending on class
function colorChange() {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    return rndCol;
}

function onMouse(event) {

    divClass = event.target.className;

    if (divClass === "gridDiv") {
        event.target.style.backgroundColor = colorChange();
        event.target.setAttribute("class", "coloredDiv"); //change class for shading functionality
    }
    else if (divClass === "coloredDiv") {
        let color = event.target.style.backgroundColor;

        //to darken color every mouseOver
        //use string functions to get each rgb value, and convert to int
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
        r = parseInt(r) - r / 10;
        g = parseInt(g) - g / 10;
        b = parseInt(b) - b / 10;

        let rgb = r + "," + g + "," + b;

        console.log(rgb);
        event.target.style.backgroundColor = "rgb" + "(" + rgb + ")";

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
//document.getElementById("flex-container").onmouseout = onMouse;
document.getElementById("reset").onclick = reset;
document.getElementById("start").onclick = start;












