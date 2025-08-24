import createGameboard from "./gameboard";

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