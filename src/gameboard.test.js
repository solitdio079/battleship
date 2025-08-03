import {describe,expect,test} from "@jest/globals"
//import { jest } from "@jest/globals";
import createGameboard from "./gameboard.js";
const coordinates =  Array.from({ length: 10 }, () => Array.from({ length: 10 }, () => null));
describe('Test gameboard function', () => {
    test('should if coordinates array is full of null', () => { 

        for(let i =0;i<10;i++){
            expect(coordinates[i]).toEqual(new Array(10).fill(null))
        }
       
    })

    test.skip("should test placeship", ()=>{
        //jest.mock(getRandomCoordinate)
        
        const gameboard = createGameboard()
        const placeLength4 = gameboard.placeShip(4)
        expect(Array.isArray(gameboard.placeShip())).toBeTruthy()
      
        expect((gameboard.placeShip(4).length)).toBe(4)
        expect(placeLength4[0]).toBeDefined()
        expect(placeLength4[0]).toBeTruthy()
        expect(placeLength4[0].length).toBe(2)
        expect(placeLength4[0][0]).toBeDefined()
        expect(coordinates[placeLength4[0][0]][placeLength4[0][1]]).toBeTruthy()
      
        // placeLength4.forEach(el => {
          
        //     expect(coordinates[el[0]][el[1]]).toBeDefined()
        // })
    })
    
});
