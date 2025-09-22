import createGameboard from "./gameboard.js";

function createPlayer(type="real"){
    const gameboard = createGameboard()

    function getPlayerGameboard(){
        return gameboard
    }
    function getPlayerType(){
        return type
    }

    return {getPlayerGameboard, getPlayerType}
}

export default createPlayer