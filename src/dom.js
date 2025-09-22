

function domActions(){
    function populateGrid(grid,coordinates=[]){
        for(let i = 0; i<10;i++){
            for(let j = 0; j<10;j++){
                const squareDiv = document.createElement("div")
                squareDiv.classList.add("square")
                squareDiv.setAttribute("data-coordinates",`${i},${j}`)
                if(coordinates[i][j]) {
                    squareDiv.classList.add("active")
                }
                grid.appendChild(squareDiv)
            }
           
        }
       
    }

    return {populateGrid}

} 

export default domActions