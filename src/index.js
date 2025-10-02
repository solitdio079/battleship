import "./style.css"
import createPlayer from "./player.js"
import domActions from "./dom.js"
const grids = document.querySelector(".grids-container")
const gameoverOverlay = document.querySelector(".gameover")
const turnHelper = document.querySelector("#turnHelper")
const placeShipBtn = document.querySelector("#placeShipBtn")
const restartBtn = document.querySelector("#restartBtn")

let realPlayer = createPlayer()

let computerPlayer = createPlayer("computer")

let currentPlayer = computerPlayer

const DOMActions = domActions()

function preDeterminedBoard(player) {
    player.getPlayerGameboard().placeShipRandom(4)
    player.getPlayerGameboard().placeShipRandom(3)
    player.getPlayerGameboard().placeShipRandom(3)
    player.getPlayerGameboard().placeShipRandom(2)
    player.getPlayerGameboard().placeShipRandom(2)
    player.getPlayerGameboard().placeShipRandom(2)
    player.getPlayerGameboard().placeShipRandom(1)
    player.getPlayerGameboard().placeShipRandom(1)
    player.getPlayerGameboard().placeShipRandom(1)
    player.getPlayerGameboard().placeShipRandom(1)
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
    const allCoordinates = player.getPlayerGameboard().getGameboardCoordinates()
    const hitCoordinates = player.getPlayerGameboard().getHitCoordinates()
    const missedCoordinates = player.getPlayerGameboard().getMissedCoordinates()

    DOMActions.populateGrid(player.getPlayerType() ==="computer",
        grid,
        allCoordinates,
        hitCoordinates,
        missedCoordinates
    )
}
preDeterminedBoard(realPlayer)
preDeterminedBoard(computerPlayer)

function drawGameOver(winClass, gameoverText) {
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

    drawPlayerGrid(realPlayer)
    drawPlayerGrid(computerPlayer)
}

placeShipBtn.addEventListener("click", () => {
   
    realPlayer = createPlayer()

    computerPlayer = createPlayer("computer")
    currentPlayer = currentPlayer === realPlayer ? computerPlayer : realPlayer
    grids.innerHTML = ""
    preDeterminedBoard(realPlayer)
    preDeterminedBoard(computerPlayer)
    drawPlayerGrid(realPlayer)
    drawPlayerGrid(computerPlayer)
})


restartBtn.addEventListener("click", () => {
    realPlayer = createPlayer()

    computerPlayer = createPlayer("computer")
    currentPlayer = currentPlayer === realPlayer ? computerPlayer : realPlayer
    preDeterminedBoard(realPlayer)
    preDeterminedBoard(computerPlayer)
    resetBoards()

    gameoverOverlay.style.display = "none"
})

grids.addEventListener("click", (e) => {
    let targetCoordinate = e.target.getAttribute("data-coordinates")

    if (targetCoordinate) {
        // send the coordinates to the target player's receive attack function
        targetCoordinate = targetCoordinate.split(",").map((el) => parseInt(el))

        const targetPlayer =
            currentPlayer === realPlayer ? computerPlayer : realPlayer

        targetPlayer.getPlayerGameboard().receiveAttack(targetCoordinate)
        //console.log(targetPlayer.getPlayerGameboard().checkIfAllIsSunk())
        if (targetPlayer.getPlayerGameboard().checkIfAllIsSunk()) {
            drawGameOver("win", "Game Over! You win!")
        }
    }

    resetBoards()
    if (currentPlayer === computerPlayer) {
        let computerTarget = [
            Math.floor(Math.random() * 10),
            Math.floor(Math.random() * 10),
        ]
        while (
            JSON.stringify(
                realPlayer.getPlayerGameboard().getMissedCoordinates()
            ).includes(computerTarget) ||
            JSON.stringify(
                realPlayer.getPlayerGameboard().getHitCoordinates()
            ).includes(computerTarget)
        ) {
            computerTarget = [
                Math.floor(Math.random() * 10),
                Math.floor(Math.random() * 10),
            ]
        }

        realPlayer.getPlayerGameboard().receiveAttack(computerTarget)
        setTimeout(() => {
            resetBoards()
        }, 1000)
        if (realPlayer.getPlayerGameboard().checkIfAllIsSunk()) {
            drawGameOver("lose", "Game Over! Computer wins!")
        }
    }
})
