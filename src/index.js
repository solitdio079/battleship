import "./style.css"
import createPlayer from "./player.js"
import domActions from "./dom.js"
const grids = document.querySelector(".grids-container")
const gameoverOverlay = document.querySelector(".gameover")
const turnHelper = document.querySelector("#turnHelper")

const realPlayer = createPlayer()

const computerPlayer = createPlayer("computer")

let currentPlayer = computerPlayer

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
function drawPlayerGrid(player) {
    const grid = document.createElement("div")

    grid.classList.add("grid")
    if (player === currentPlayer) {
        const overlay = document.createElement("div")
        overlay.classList.add("overlay")
        grid.appendChild(overlay)
    }

    grids.appendChild(grid)


    // get the three types of gameboard coordinates
    const allCoordinates =  player.getPlayerGameboard().getGameboardCoordinates()
    const hitCoordinates = player.getPlayerGameboard().getHitCoordinates()
    const missedCoordinates = player.getPlayerGameboard().getMissedCoordinates()

    DOMActions.populateGrid(
        grid,
        allCoordinates, hitCoordinates,missedCoordinates
    )
}

function drawGameOver(winClass, gameoverText){
    const gameoverParagraph = document.createElement("p")
    gameoverParagraph.classList.add(winClass)
    gameoverParagraph.textContent = gameoverText

    gameoverOverlay.appendChild(gameoverParagraph)
    gameoverOverlay.style.display = "flex"

}

resetBoards()

function resetBoards() {
    currentPlayer = currentPlayer === realPlayer ? computerPlayer : realPlayer
    turnHelper.value = `${currentPlayer.getPlayerType()}'s turn ` 
    grids.innerHTML = ""
    preDeterminedBoard(realPlayer)
    preDeterminedBoard(computerPlayer)
}

grids.addEventListener("click", (e) => {
    let targetCoordinate = e.target.getAttribute("data-coordinates")

    if (targetCoordinate) {
        // send the coordinates to the target player's receive attack function
        targetCoordinate = targetCoordinate.split(",").map(el => parseInt(el))

        const targetPlayer =
            currentPlayer === realPlayer ? computerPlayer : realPlayer

        targetPlayer.getPlayerGameboard().receiveAttack(targetCoordinate)
        console.log(targetPlayer.getPlayerGameboard().checkIfAllIsSunk())
        if(targetPlayer.getPlayerGameboard().checkIfAllIsSunk()){
            drawGameOver("win", "Game Over! You win!")
        }
    }

    resetBoards()
    if(currentPlayer === computerPlayer){
       
        let computerTarget = [Math.floor(Math.random()*10),Math.floor(Math.random()*10)]
        while (JSON.stringify(realPlayer.getPlayerGameboard().getMissedCoordinates()).includes(computerTarget) 
            || JSON.stringify(realPlayer.getPlayerGameboard().getHitCoordinates()).includes(computerTarget)){
           computerTarget = [Math.floor(Math.random()*10),Math.floor(Math.random()*10)]
        }
        
        realPlayer.getPlayerGameboard().receiveAttack(computerTarget)
        setTimeout(()=>{resetBoards()}, 1000)
        if(realPlayer.getPlayerGameboard().checkIfAllIsSunk()){
            drawGameOver("lose", "Game Over! Computer wins!")
        }
    }
})
