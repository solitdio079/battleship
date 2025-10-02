import createShip from "./ship.js"

function createGameboard(){
   
    const coordinates =  Array.from({ length: 10 }, () => Array.from({ length: 10 }, () => null));
    const missedCoordinates = []
    const hitCoordinates = []
    const boardShips = []
    //const yCoordinates = [0,1,2,3,4,5,6,7,8,9]

    // const [lengthOne,lengthOne2,lengthOne3,lengthOne4] = multipleShips(1,4)
    // const [lengthTwo,lengthTwo2,lengthTwo3] = multipleShips(2,3)
    // const [lengthThree,lengthThree2] = multipleShips(3,2)
    // const [lengthFour] = multipleShips(4,1)

    function placeShipSpecific(shipLength,startCoordinate,direction="x"){
        const ship = createShip(shipLength)
       
        const allCoordinates = []
        for(let i = 0; i<shipLength;i++){
            let nextCoordinate
            if(direction === "x"){
                // calculate the next coordinate to be in the 0-9 range
                nextCoordinate = startCoordinate[1]+i<=9 ?startCoordinate[1]+i :((startCoordinate[1])-((startCoordinate[1]+i)-9))

                allCoordinates.push([startCoordinate[0],(nextCoordinate)])

                coordinates[startCoordinate[0]][nextCoordinate] = ship
            }else{
                 // calculate the next coordinate to be in the 0-9 range
                nextCoordinate = startCoordinate[0]+i<=9 ?startCoordinate[0]+i :((startCoordinate[0])-((startCoordinate[0]+i)-9))

                allCoordinates.push([nextCoordinate,startCoordinate[1]])
                coordinates[nextCoordinate][startCoordinate[1]] = ship
            }
            
        }
        boardShips.push(ship)
        return allCoordinates
    }

    function verifyCoordinate([x,y]){
        return Boolean(coordinates[x][y])
    }

    function receiveAttack([x,y]){
        const isOccupied = verifyCoordinate([x,y])
        if(!isOccupied){
            missedCoordinates.push([x,y])
            return [x,y]
        } 
        const ship = coordinates[x][y]
        if(JSON.stringify(hitCoordinates).includes(JSON.stringify([x,y]))) return ship.getHitCount()
        ship.hit()
        //console.log(ship.getHitCount())
        hitCoordinates.push([x,y])
        return ship.getHitCount()
    }

    function placeShipRandom(shipLength){
        // create the ship
        const ship = createShip(shipLength)
        
        let placeCoordinates = getRandomCoordinate(shipLength)
       
       // console.log(randomCoordinates)
        
        // check if coordinates are good!
        while(true){
            //console.log(coordinatesAreGood === false)
            //console.log(placeCoordinates)
            let reInitialized = false
            placeCoordinates.forEach(el => {
                const currentX = el[0]
                const currentY = el[1]
                let nextX = (currentX+1)<=9 ?currentX+1 :((currentX)-((currentX+1)-9))
                let nextX1 = (currentX-1)>=0 ?currentX-1 :((currentX+2))
                let nextY1 = (currentY-1)>=0 ?currentY-1 :((currentY+2))
                let nextY = (currentY+1)<=9 ?currentY+1 :((currentY)-((currentY+1)-9))
                //console.log("Just for testing ",el[0]+1)
                if (coordinates[el[0]][el[1]] !== null || coordinates[nextX][currentY] || coordinates[currentX][nextY] || coordinates[nextX][nextY] || coordinates[currentX][nextY1] || coordinates[nextX1][currentY] || coordinates[nextX1][nextY1]){
                    reInitialized = true
                }
            })
            //console.log(reInitialized)
           
            if(reInitialized){
                placeCoordinates = getRandomCoordinate(shipLength)
                continue
            }
            break;
          
            
        }

      
        // place ship in the coordinates
        placeCoordinates.forEach(el => {
            coordinates[el[0]][el[1]] = ship
        })

        //console.log(placeCoordinates)


        boardShips.push(ship)
        return placeCoordinates
    }

    function getGameboardCoordinates(){
        return coordinates
    }
   

    function checkIfAllIsSunk(shipArray=boardShips){
        let check = true
        shipArray.forEach(ship => {
            if(!ship.isSunk()){
                check = false
            }
        })
        return check
            
    }

    function getMissedCoordinates(){
        return missedCoordinates
    }

    function getHitCoordinates(){
        return hitCoordinates
    }
   

    return {placeShipRandom, getGameboardCoordinates,placeShipSpecific, receiveAttack, checkIfAllIsSunk, getMissedCoordinates, getHitCoordinates}
}

function getRandomCoordinate(size=1){
    if(size<=0 || isNaN(parseInt(size))) return
    const startX = Math.floor(Math.random()*10)
    const endX = Math.floor(Math.random()*10)
    const randomCoordinates = []
    const xOrY= Math.floor(Math.random()*2)>0
    for(let i = 0; i<size;i++){
       xOrY?randomCoordinates.push([startX,endX+i<=9?endX+i:((endX)-((endX+i)-9))]):randomCoordinates.push([startX+i<=9?startX+i:((startX)-((startX+i)-9)),endX])
    }
    return randomCoordinates
    
}



// function multipleShips(length, amount=1){
//     const ships = []
//    for(let i = 0; i <amount;i++){
//     ships.push(createShip(length))
//    }
//    return ships
// }

export default createGameboard
