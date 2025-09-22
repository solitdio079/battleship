import "./style.css"
import createPlayer from "./player.js"
import domActions from "./dom.js"
const grids = document.querySelector(".grids-container")

const realPlayer = createPlayer()

const computerPlayer = createPlayer("computer")

const DOMActions = domActions()

function preDeterminedBoard(player) {
    player.getPlayerGameboard().placeShipSpecific(4, [1, 1], "y")
    player.getPlayerGameboard().placeShipSpecific(3, [0, 3], "x")
    player.getPlayerGameboard().placeShipSpecific(3, [1, 7], "x")
    player.getPlayerGameboard().placeShipSpecific(2, [5, 7], "y")
    player.getPlayerGameboard().placeShipSpecific(2, [7, 3], "x")
    player.getPlayerGameboard().placeShipSpecific(2, [9, 4], "x")
    player.getPlayerGameboard().placeShipSpecific(1, [9, 0], "x")
    player.getPlayerGameboard().placeShipSpecific(1, [3, 3], "x")
    player.getPlayerGameboard().placeShipSpecific(1, [3, 9], "x")
    player.getPlayerGameboard().placeShipSpecific(1, [8, 8], "x")

    drawPlayerGrid(player)

}
function drawPlayerGrid(player){
    const grid = document.createElement("div")
    grid.classList.add("grid") 
    grids.appendChild(grid)

    DOMActions.populateGrid(grid, player.getPlayerGameboard().getGameboardCoordinates())

}

preDeterminedBoard(realPlayer)
preDeterminedBoard(computerPlayer)

grids.addEventListener("click",(e)=>{
    console.log(e.target.getAttribute("data-coordinates"))
})




