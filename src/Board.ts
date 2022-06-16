import {Player} from "./Player";
import {Snake} from "./movement/Snake";
import {Ladder} from "./movement/Ladder";
import {IPositionInfo} from "./PositionInfo";

export class Board {
    private static startingPosition: number = 1;
    private positionInfo: IPositionInfo[] = [];

    private size: number;
    private players: Player[];
    private snakes: Snake[];
    private ladders: Ladder[];

    constructor(size: number, players: Player[], snakes: Snake[], ladders: Ladder[]) {
        this.size = size;
        this.players = players;
        this.snakes = snakes;
        this.ladders = ladders;
        this.initialiseBoard()

    }

    private initialiseBoard(): void {
        // setPlayers()
        // setSnakes()
        // setLadders()
    }

    static getStartingPosition(): number {
        return Board.startingPosition;
    }

}
