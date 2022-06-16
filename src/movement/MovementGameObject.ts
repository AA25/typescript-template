// abstract class MovementGameObject {
//     constructor(private position: number, private movePosition: number) {}
//
//     abstract getPosition(): number;
//
//     abstract getMovePosition(): number;
// }

interface MovementGameObject {
    // All interface properties have to be public :O
    // position: number,
    // movedPosition: number,
    getPosition(): number,
    getMovedPosition(): number
}
