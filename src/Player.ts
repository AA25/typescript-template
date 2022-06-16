import {Dice} from "./Dice";

export class Player {
    private position: number;

    constructor() {
        this.position = 1;
    }

    public rollDie(die: Dice[]): number {
        let rolledTotal:number = 0;

        die.forEach((dice: Dice) => {
            rolledTotal+=dice.roll()
        })

        return rolledTotal;
    }

    public setPosition(position: number): void {
        this.position = position;
    }

    public getPosition(): number {
        return this.position;
    }
}
