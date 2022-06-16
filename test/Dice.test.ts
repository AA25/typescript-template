import {Dice} from "../src/Dice";

describe('Dice', function () {

    let dice: Dice;
    let sides: number = 6;

    beforeEach(() => {
       dice = new Dice(sides);
    })

    it(`should have ${sides} sides`, function () {
        const returnedValue = dice.getNumberOfSides();

        expect(returnedValue).toBe(sides);
    });

    describe('roll', function () {
        it('should return a number', function () {
            const returnedValue = typeof dice.roll();

            expect(returnedValue).toBe('number')
        })
    })
})

// describe('Example Test', function () {
//     it('1 + 1 should always equal 2', () => {
//         const expected: number = 2;
//         const result: number = 1 + 1;
//         expect(result).toEqual(expected);
//     });
// });
