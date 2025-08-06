import createShip from "./ship.js"

function createGameboard(){
   
    const coordinates =  Array.from({ length: 10 }, () => Array.from({ length: 10 }, () => null));
    const missedCoordinates = []
    const hitCoordinates = []
    const boordShips = [...multipleShips(1,4), ...multipleShips(2,3), ...multipleShips(3,2),...multipleShips(4,1)]
    //const yCoordinates = [0,1,2,3,4,5,6,7,8,9]

    // const [lengthOne,lengthOne2,lengthOne3,lengthOne4] = multipleShips(1,4)
    // const [lengthTwo,lengthTwo2,lengthTwo3] = multipleShips(2,3)
    // const [lengthThree,lengthThree2] = multipleShips(3,2)
    // const [lengthFour] = multipleShips(4,1)

    function placeShipSpecific(ship,startCoordinate,direction="x"){
        const shipLength = ship.getLength()
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
        hitCoordinates.push([x,y])
        return ship.getHitCount()
    }

    function placeShipRandom(ship){
        // create the ship
        const shipLength = ship.getLength()
        
        let placeCoordinates = getRandomCoordinate(shipLength)
       
       // console.log(randomCoordinates)
        
        // check if coordinates are good!
        while(true){
            //console.log(coordinatesAreGood === false)
            console.log(placeCoordinates)
            let reInitialized = false
            placeCoordinates.forEach(el => {
                //console.log(el)
                if (coordinates[el[0]][el[1]] !== null){
                    reInitialized = true
                }
            })
            console.log(reInitialized)
           
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



        return placeCoordinates
    }

    function getGameboardCoordinates(){
        return coordinates
    }
   

    function checkIfAllIsSunk(shipArray=boordShips){
        let check = true
        shipArray.forEach(ship => {
            ship.isSunk()
            if(!ship.getSunk()) check = false
        })
        return check
            
    }
   

    return {placeShipRandom, getGameboardCoordinates,placeShipSpecific, receiveAttack, checkIfAllIsSunk}
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



function multipleShips(length, amount=1){
    const ships = []
   for(let i = 0; i <amount;i++){
    ships.push(createShip(length))
   }
   return ships
}

export default createGameboard
