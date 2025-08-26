import "./style.css"

const grids = document.querySelectorAll(".grid")

function populateGrid(grid){
    for(let i = 0; i<10;i++){
        for(let j = 0; j<10;j++){
            const squareDiv = document.createElement("div")
            squareDiv.classList.add("square")
            grid.appendChild(squareDiv)
        }
       
    }
}

grids.forEach(grid => populateGrid(grid))