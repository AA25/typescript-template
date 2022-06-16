import {Player} from "./Player";
import {Snake} from "./movement/Snake";
import {Ladder} from "./movement/Ladder";

export interface IPositionInfo {
    players?: Player[],
    movement?: Snake | Ladder,
}
