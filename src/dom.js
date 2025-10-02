

function domActions(){
    function populateGrid(isComputer=true,grid,coordinates=[],hitCoordinates = [], missedCoordinates=[]){
        for(let i = 0; i<10;i++){
            for(let j = 0; j<10;j++){
                const squareDiv = document.createElement("div")
                squareDiv.classList.add("square")

                // check if square is hit
                const checkIfHit = JSON.stringify(hitCoordinates).includes(`[${i},${j}]`)
                const checkIfMissed = JSON.stringify(missedCoordinates).includes(`[${i},${j}]`)
                

                checkIfHit ? squareDiv.classList.add("hit"):checkIfMissed ? squareDiv.classList.add("miss"):""
                

                squareDiv.setAttribute("data-coordinates",`${i},${j}`)
                if(coordinates[i][j] && !isComputer) {
                    squareDiv.classList.add("active")
                }
                grid.appendChild(squareDiv)
            }
            
        }
       
    }

    return {populateGrid}

} 

export default domActions