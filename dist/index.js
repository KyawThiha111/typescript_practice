"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Direction;
(function (Direction) {
    Direction["UP"] = "UP";
    Direction["DOWN"] = "DOWN";
    Direction["FORWARD"] = "FORWARD";
})(Direction || (Direction = {}));
const directionChange = (direction) => {
    switch (direction) {
        case Direction.UP:
            console.log("UP");
            break;
        case Direction.DOWN:
            console.log("DOWN");
            break;
        default:
            console.log("Forward");
            break;
    }
};
directionChange(Direction.DOWN);
