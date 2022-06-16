export class Dice {

    constructor(
        private readonly sides: number
    ) {
        this.sides = sides;
    }

    public roll(): number {
        return Math.floor(Math.random() * this.sides) + 1;
    }

    public getNumberOfSides(): number {
        return this.sides;
    }
}
