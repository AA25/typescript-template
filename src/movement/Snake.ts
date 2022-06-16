export class Snake implements MovementGameObject {
    private readonly position: number;
    private readonly movedPosition: number;

    constructor(position: number, movedPosition: number) {
        this.position = position;
        this.movedPosition = movedPosition;
    }

    public getPosition(): number {
        return this.position;
    }

    public getMovedPosition(): number {
        return this.movedPosition;
    }
}
