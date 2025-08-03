import {describe, expect, test} from "@jest/globals"
import createShip from "./ship";


describe('Test the createShip function', () => {
   
    test("Test if the hit increases", () => {
        const ship = createShip(1)
        expect(ship.getHitCount()).toEqual(0)
        expect(ship.hit()).toBe(1)
        expect(ship.hit()).toBe(2)
        expect(ship.hit()).toBe(3)
        expect(ship.getHitCount()).toEqual(3)
       
    })

    test("Test the the isSunk function", () => {
        const ship = createShip(1)
        expect(ship.isSunk()).toBeFalsy()
        expect(ship.hit()).toBe(1)
        expect(ship.isSunk()).toBeTruthy()
        expect(ship.getSunk()).toBeTruthy()
    })
    
    
});
