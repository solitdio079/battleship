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

    test("testing place specific ship on the board", ()=> {
        const gameboard = createGameboard()
        expect(gameboard.placeShipSpecific(2,[0,0],"x")).toEqual([[0,0],[0,1]])
        expect(gameboard.placeShipSpecific(2,[0,0],"y")).toEqual([[0,0],[1,0]])
        expect(gameboard.placeShipSpecific(1,[0,0],"y")).toEqual([[0,0]])
        expect(gameboard.placeShipSpecific(1,[0,0],"x")).toEqual([[0,0]])
        expect(gameboard.placeShipSpecific(4,[2,3],"x")).toEqual([[2,3],[2,4],[2,5],[2,6]])
        expect(gameboard.placeShipSpecific(4,[2,7],"x")).toEqual([[2,7],[2,8],[2,9],[2,6]])
        expect(gameboard.placeShipSpecific(4,[8,4],"y")).toEqual([[8,4],[9,4],[7,4],[6,4]])
    })

    test("testing receive attack", () => {
        const gameboard = createGameboard()
        expect(gameboard.receiveAttack([0,0])).toEqual([0,0])
        gameboard.placeShipSpecific(1,[0,0],"x")
        expect(gameboard.receiveAttack([0,0])).toBe(1)
    })
    
});
