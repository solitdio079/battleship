function createShip(length,hitCount=0, sunk=false){
   
    function hit(){
        return ++hitCount
    }
    function getHitCount(){
        return hitCount
    }
    function getLength(){
        return length
    }

    function isSunk(){
      sunk = hitCount>=length
      return sunk
    }

    function getSunk(){
        return sunk
    }

    return {getLength, getHitCount, getSunk, hit, isSunk}
}

export default createShip